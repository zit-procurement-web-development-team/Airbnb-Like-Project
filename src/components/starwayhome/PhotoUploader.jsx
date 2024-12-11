import React, { useState, useCallback, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUpload, FiX, FiImage, FiStar } from 'react-icons/fi';
import NavigationFooter from '../shared/NavigationFooter';
import DashboardHeader from '../shared/DashboardHeader';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { PropertyContext } from '../../context/PropertyContext';
import { useNavigate } from 'react-router-dom';

const MAX_FILES = 15;
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export default function PhotoUploader() {
    const navigate = useNavigate();
    const handleNext = () => {
       
        navigate('/become-a-host/title');
      };
    
      const handleBack = () => {
        navigate(-1);
      };
      
    const { propertyData, updatePropertyData } = useContext(PropertyContext);
    const [photos, setPhotos] = useState(propertyData.photos || []);
    const [uploading, setUploading] = useState({});
    const [error, setError] = useState('');

    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
        // Handle rejected files
        if (rejectedFiles.length > 0) {
            const errors = rejectedFiles.map(file => {
                if (file.size > MAX_FILE_SIZE) return 'File too large (max 5MB)';
                return 'Invalid file type (JPG, PNG only)';
            });
            setError(errors[0]);
            setTimeout(() => setError(''), 3000);
            return;
        }

        // Check total files limit
        if (photos.length + acceptedFiles.length > MAX_FILES) {
            setError(`Maximum ${MAX_FILES} photos allowed`);
            setTimeout(() => setError(''), 3000);
            return;
        }

        const newPhotos = acceptedFiles.map(file => ({
            id: Math.random().toString(36).substr(2, 9),
            file,
            preview: URL.createObjectURL(file),
            progress: 0,
            featured: photos.length === 0 // First photo is featured
        }));

        setPhotos(prevPhotos => {
            const updatedPhotos = [...prevPhotos, ...newPhotos];
            updatePropertyData('photos', updatedPhotos);
            return updatedPhotos;
        });

        // Simulate upload progress for each file
        newPhotos.forEach(photo => {
            simulateUpload(photo.id);
        });
    }, [photos, updatePropertyData]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/*': ['.jpeg', '.jpg', '.png']
        },
        maxSize: MAX_FILE_SIZE,
        multiple: true
    });

    const simulateUpload = (photoId) => {
        setUploading(prev => ({ ...prev, [photoId]: true }));
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 30;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                setUploading(prev => ({ ...prev, [photoId]: false }));
            }
            setPhotos(prevPhotos =>
                prevPhotos.map(photo =>
                    photo.id === photoId ? { ...photo, progress } : photo
                )
            );
        }, 500);
    };

    const removePhoto = (photoId) => {
        setPhotos(prevPhotos => {
            const updatedPhotos = prevPhotos.filter(photo => photo.id !== photoId);
            // If we removed the featured photo, make the first remaining photo featured
            if (prevPhotos.find(p => p.id === photoId)?.featured && updatedPhotos.length > 0) {
                updatedPhotos[0].featured = true;
            }
            updatePropertyData('photos', updatedPhotos);
            return updatedPhotos;
        });
    };

    const toggleFeatured = (photoId) => {
        setPhotos(prevPhotos => {
            const updatedPhotos = prevPhotos.map(photo => ({
                ...photo,
                featured: photo.id === photoId
            }));
            updatePropertyData('photos', updatedPhotos);
            return updatedPhotos;
        });
    };

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(photos);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setPhotos(items);
        updatePropertyData('photos', items);
    };


    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col">
            <DashboardHeader />
            
            <main className="flex-grow pt-8 px-4 sm:px-6 lg:px-8 pb-24">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 mb-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-8"
                        >
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                Add photos of your place
                            </h1>
                            <p className="text-lg text-gray-600">
                                Start with your best photos. You can add more or make changes later.
                            </p>
                        </motion.div>

                        {/* Error Message */}
                        <AnimatePresence>
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-center"
                                >
                                    {error}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Upload Area */}
                        <div
                            {...getRootProps()}
                            className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all duration-200
                                ${isDragActive 
                                    ? 'border-indigo-500 bg-indigo-50' 
                                    : 'border-gray-300 hover:border-gray-400'}`}
                        >
                            <input {...getInputProps()} />
                            <FiUpload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                            <p className="text-lg font-medium text-gray-700 mb-2">
                                {isDragActive
                                    ? "Drop your photos here"
                                    : "Drag and drop your photos here"}
                            </p>
                            <p className="text-sm text-gray-500">
                                or click to select files
                            </p>
                            <p className="text-xs text-gray-400 mt-2">
                                Maximum: {MAX_FILES} photos, 5MB each (JPG, PNG)
                            </p>
                        </div>

                        {/* Photo Gallery */}
                        {photos.length > 0 && (
                            <DragDropContext onDragEnd={onDragEnd}>
                                <Droppable droppableId="photos" direction="horizontal">
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8"
                                        >
                                            <AnimatePresence>
                                                {photos.map((photo, index) => (
                                                    <Draggable
                                                        key={photo.id}
                                                        draggableId={photo.id}
                                                        index={index}
                                                    >
                                                        {(provided) => (
                                                            <motion.div
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                                initial={{ opacity: 0, scale: 0.8 }}
                                                                animate={{ opacity: 1, scale: 1 }}
                                                                exit={{ opacity: 0, scale: 0.8 }}
                                                                className="relative aspect-square rounded-lg overflow-hidden group"
                                                            >
                                                                <img
                                                                    src={photo.preview}
                                                                    alt="Preview"
                                                                    className="w-full h-full object-cover"
                                                                />
                                                                
                                                                {/* Progress Overlay */}
                                                                {uploading[photo.id] && (
                                                                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                                                        <div className="w-3/4 bg-white rounded-full h-2">
                                                                            <motion.div
                                                                                className="h-full bg-indigo-500 rounded-full"
                                                                                initial={{ width: 0 }}
                                                                                animate={{ width: `${photo.progress}%` }}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                )}

                                                                {/* Featured Badge */}
                                                                {photo.featured && (
                                                                    <div className="absolute top-2 left-2 px-2 py-1 bg-indigo-500 text-white text-xs rounded-full flex items-center">
                                                                        <FiStar className="w-3 h-3 mr-1" />
                                                                        Cover Photo
                                                                    </div>
                                                                )}

                                                                {/* Control Buttons */}
                                                                <div className="absolute top-2 right-2 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                                    {!photo.featured && (
                                                                        <button
                                                                            onClick={() => toggleFeatured(photo.id)}
                                                                            className="p-1.5 bg-white rounded-full shadow-lg hover:bg-gray-100"
                                                                        >
                                                                            <FiStar className="w-4 h-4 text-gray-600" />
                                                                        </button>
                                                                    )}
                                                                    <button
                                                                        onClick={() => removePhoto(photo.id)}
                                                                        className="p-1.5 bg-white rounded-full shadow-lg hover:bg-gray-100"
                                                                    >
                                                                        <FiX className="w-4 h-4 text-gray-600" />
                                                                    </button>
                                                                </div>

                                                                {/* Drag Handle */}
                                                                <div className="absolute bottom-2 right-2 p-1.5 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                                    <FiImage className="w-4 h-4 text-gray-600" />
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </Draggable>
                                                ))}
                                            </AnimatePresence>
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            </DragDropContext>
                        )}
                    </div>
                </div>
            </main>
            {/* <footer className="fixed bottom-0 left-0 right-0 bg-white border-t p-6">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <button
            onClick={handleBack}
            className="text-sm font-semibold underline"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            className="px-6 py-3 rounded-lg text-white bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600"
          >
            Next
          </button>
        </div>
      </footer> */}
            <NavigationFooter 
                // nextPath="/become-a-host/title"
                // prevPath="/photos"
                onNext={handleNext}
                onBack={handleBack}
                disableNext={photos.length === 0}
            />
        </div>
    );
}
