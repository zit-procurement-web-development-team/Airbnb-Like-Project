import React from 'react';
import { motion } from 'framer-motion';
import { useSteps, steps } from '../../context/StepsContext';
import { FaCheck } from 'react-icons/fa';

export default function StepsProgress() {
    const { currentStep, completedSteps } = useSteps();

    return (
        <div className="w-full max-w-3xl mx-auto mb-8">
            <div className="flex justify-between items-center relative">
                {/* Progress Line */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200">
                    <motion.div
                        className="h-full bg-indigo-600"
                        initial={{ width: "0%" }}
                        animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>

                {/* Steps */}
                {steps.map((step) => (
                    <div key={step.id} className="relative z-10">
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ 
                                scale: currentStep >= step.id ? 1 : 0.8,
                                backgroundColor: completedSteps.includes(step.id) 
                                    ? '#4F46E5' 
                                    : currentStep === step.id 
                                    ? '#818CF8' 
                                    : '#E5E7EB'
                            }}
                            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold"
                        >
                            {completedSteps.includes(step.id) ? (
                                <FaCheck className="w-5 h-5" />
                            ) : (
                                step.id
                            )}
                        </motion.div>
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ 
                                    opacity: currentStep >= step.id ? 1 : 0.5,
                                }}
                                className={`text-sm font-medium ${
                                    currentStep >= step.id ? 'text-gray-900' : 'text-gray-500'
                                }`}
                            >
                                {step.title}
                            </motion.p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
