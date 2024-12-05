import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence, Reorder } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useProperty } from '../../context/PropertyContext';
import NavigationFooter from '../shared/NavigationFooter';
import DashboardHeader from '../shared/DashboardHeader';
import { FaCamera, FaImage, FaStar, FaTrash, FaUpload, FaInfoCircle } from 'react-icons/fa';
import { useDropzone } from 'react-dropzone';

export default function PropertyPhotos() {
    const navigate = useNavigate();
    const { propertyData, updatePropertyData } = useProperty();
    const [photos, setPhotos] = useState(propertyData.photos || []);
    const [coverPhotoIndex, setCoverPhotoIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const [error, setError] = useState('');

    const onDrop = useCallback((acceptedFiles) => {
        setError('');
        const newPhotos = acceptedFiles.map(file => ({
            file,
            preview: URL.createObjectURL(file),
            id: Math.random().toString(36).substring(7)
        }));

        if (photos.length + newPhotos.length > 50) {
            setError('Maximum 50 photos allowed');
            return;
        }

        setPhotos(prevPhotos => [...prevPhotos, ...newPhotos]);
    }, [photos.length]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/*': ['.jpeg', '.jpg', '.png', '.webp']
        },
        maxSize: 20 * 1024 * 1024, // 20MB
        onDropRejected: (rejectedFiles) => {
            if (rejectedFiles[0]?.errors[0]?.code === 'file-too-large') {
                setError('File is too large. Maximum size is 20MB');
            } else {
                setError('Please upload only image files (JPG, PNG, WEBP)');
            }
        }
    });

    const removePhoto = (indexToRemove) => {
        setPhotos(prevPhotos => {
            const newPhotos = prevPhotos.filter((_, index) => index !== indexToRemove);
            if (coverPhotoIndex === indexToRemove) {
                setCoverPhotoIndex(0);
            } else if (coverPhotoIndex > indexToRemove) {
                setCoverPhotoIndex(coverPhotoIndex - 1);
            }
            return newPhotos;
        });
    };

    const setCoverPhoto = (index) => {
        setCoverPhotoIndex(index);
    };

    const handleNext = () => {
        updatePropertyData({
            ...propertyData,
            photos: photos,
            coverPhotoIndex: coverPhotoIndex
        });
        navigate('/title');
    };

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <DashboardHeader />
            
            <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                >
                    <div className="flex items-start justify-between">
                        <div className="space-y-4">
                            <h1 className="text-3xl font-bold text-gray-900">
                                Add some photos of your place
                            </h1>
                            <p className="text-gray-600">
                                You'll need 5 photos to get started. You can add more or make changes later.
                            </p>
                        </div>
                        <div className="relative">
                            <button
                                onMouseEnter={() => setShowTooltip(true)}
                                onMouseLeave={() => setShowTooltip(false)}
                                className="p-3 rounded-lg border border-gray-300 hover:bg-gray-50"
                            >
                                <FaInfoCircle className="h-5 w-5 text-gray-400" />
                            </button>
                            <AnimatePresence>
                                {showTooltip && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 5 }}
                                        className="absolute right-0 top-full mt-2 p-3 bg-gray-900 text-white text-sm rounded-lg w-64 z-50"
                                    >
                                        Photos help guests imagine staying in your place. Add photos of all the spaces they can access.
                                        <div className="absolute -top-1 right-4 w-2 h-2 bg-gray-900 transform rotate-45" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {error && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg"
                        >
                            {error}
                        </motion.div>
                    )}

                    <div
                        {...getRootProps()}
                        className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors duration-200 ${
                            isDragActive ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-gray-400'
                        }`}
                    >
                        <input {...getInputProps()} />
                        <div className="space-y-4">
                            <div className="mx-auto w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                                <FaUpload className="h-8 w-8 text-gray-400" />
                            </div>
                            <div>
                                <p className="text-lg font-medium text-gray-900">
                                    {isDragActive ? 'Drop your photos here' : 'Drag and drop your photos'}
                                </p>
                                <p className="text-sm text-gray-500 mt-1">
                                    or click to browse from your device
                                </p>
                            </div>
                            <div className="text-xs text-gray-500">
                                Up to 50 photos · Max 20MB each · JPG, PNG, WEBP
                            </div>
                        </div>
                    </div>

                    {photos.length > 0 && (
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-semibold text-gray-900">
                                    Your photos ({photos.length})
                                </h2>
                                <p className="text-sm text-gray-500">
                                    Drag to reorder · Click star to set cover
                                </p>
                            </div>
                            <Reorder.Group
                                axis="y"
                                values={photos}
                                onReorder={setPhotos}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                            >
                                {photos.map((photo, index) => (
                                    <Reorder.Item
                                        key={photo.id}
                                        value={photo}
                                        className="relative aspect-[4/3] group"
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            className="w-full h-full rounded-lg overflow-hidden"
                                        >
                                            <img
                                                src={photo.preview}
                                                alt={`Property photo ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-200" />
                                            <div className="absolute top-2 right-2 flex space-x-2">
                                                <button
                                                    onClick={() => setCoverPhoto(index)}
                                                    className={`p-2 rounded-full ${
                                                        coverPhotoIndex === index
                                                            ? 'bg-yellow-500 text-white'
                                                            : 'bg-white text-gray-700 opacity-0 group-hover:opacity-100'
                                                    } transition-all duration-200 hover:scale-110`}
                                                >
                                                    <FaStar className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => removePhoto(index)}
                                                    className="p-2 rounded-full bg-white text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:scale-110"
                                                >
                                                    <FaTrash className="w-4 h-4" />
                                                </button>
                                            </div>
                                            {coverPhotoIndex === index && (
                                                <div className="absolute bottom-2 left-2 px-2 py-1 bg-yellow-500 text-white text-xs rounded-full">
                                                    Cover Photo
                                                </div>
                                            )}
                                        </motion.div>
                                    </Reorder.Item>
                                ))}
                            </Reorder.Group>
                        </div>
                    )}

                    {photos.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-8"
                        >
                            <FaImage className="mx-auto h-12 w-12 text-gray-400" />
                            <h3 className="mt-2 text-sm font-medium text-gray-900">No photos yet</h3>
                            <p className="mt-1 text-sm text-gray-500">
                                Get started by adding some photos of your place
                            </p>
                        </motion.div>
                    )}
                </motion.div>
            </main>

            <NavigationFooter 
                onNext={handleNext}
                onBack={handleBack}
                disableNext={photos.length < 5}
                nextButtonText={photos.length < 5 ? `Add ${5 - photos.length} more photo${5 - photos.length === 1 ? '' : 's'}` : 'Next'}
            />
        </div>
    );
}
