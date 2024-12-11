import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaApple, FaArrowLeft } from 'react-icons/fa';
import { RiFacebookBoxFill } from "react-icons/ri";
import { IoLogoGoogle } from "react-icons/io5";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    rememberMe: false
  });
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    submit: ''
  });
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const errors = [];
    if (password.length < 8) {
      errors.push('Password must be at least 8 characters long');
    }
    if (!/[A-Z]/.test(password)) {
      errors.push('Password must contain at least one uppercase letter');
    }
    if (!/[a-z]/.test(password)) {
      errors.push('Password must contain at least one lowercase letter');
    }
    if (!/[0-9]/.test(password)) {
      errors.push('Password must contain at least one number');
    }
    if (!/[!@#$%^&*]/.test(password)) {
      errors.push('Password must contain at least one special character (!@#$%^&*)');
    }
    return errors;
  };

  const validateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    
    return age >= 18;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setFormErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = {
      email: !validateEmail(formData.email) ? 'Please enter a valid email address' : '',
      password: validatePassword(formData.password).join('. '),
      firstName: !formData.firstName ? 'First name is required' : '',
      lastName: !formData.lastName ? 'Last name is required' : '',
      birthDate: !formData.birthDate ? 'Birth date is required' : 
                !validateAge(formData.birthDate) ? 'You must be at least 18 years old' : ''
    };

    if (Object.values(errors).some(error => error)) {
      setFormErrors(errors);
      return;
    }

    setIsLoading(true);
    try {
      // Add your signup logic here
      console.log('Signup form submitted:', formData);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      navigate('/');
    } catch (error) {
      setFormErrors({
        ...formErrors,
        submit: 'An error occurred during signup. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          aria-label="Go back"
        >
          <FaArrowLeft className="text-gray-600" />
        </button>
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className={`appearance-none relative block w-full px-3 py-2 border ${
                    formErrors.firstName ? 'border-red-500' : 'border-gray-300'
                  } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#FF385C] focus:border-[#FF385C] focus:z-10 sm:text-sm`}
                />
                <label className="absolute text-gray-500 text-sm duration-150 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:px-2 peer-focus:px-2">
                  First name
                </label>
                {formErrors.firstName && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.firstName}</p>
                )}
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className={`appearance-none relative block w-full px-3 py-2 border ${
                    formErrors.lastName ? 'border-red-500' : 'border-gray-300'
                  } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#FF385C] focus:border-[#FF385C] focus:z-10 sm:text-sm`}
                />
                <label className="absolute text-gray-500 text-sm duration-150 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:px-2 peer-focus:px-2">
                  Last name
                </label>
                {formErrors.lastName && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.lastName}</p>
                )}
              </div>
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder=" "
                className={`appearance-none relative block w-full px-3 py-2 border ${
                  formErrors.email ? 'border-red-500' : 'border-gray-300'
                } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#FF385C] focus:border-[#FF385C] focus:z-10 sm:text-sm`}
              />
              <label className="absolute text-gray-500 text-sm duration-150 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:px-2 peer-focus:px-2">
                Email address
              </label>
              {formErrors.email && (
                <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
              )}
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder=" "
                className={`appearance-none relative block w-full px-3 py-2 border ${
                  formErrors.password ? 'border-red-500' : 'border-gray-300'
                } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#FF385C] focus:border-[#FF385C] focus:z-10 sm:text-sm`}
              />
              <label className="absolute text-gray-500 text-sm duration-150 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:px-2 peer-focus:px-2">
                Password
              </label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {formErrors.password && (
                <p className="mt-1 text-sm text-red-500">{formErrors.password}</p>
              )}
            </div>

            <div className="relative">
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                required
                className={`appearance-none relative block w-full px-3 py-2 border ${
                  formErrors.birthDate ? 'border-red-500' : 'border-gray-300'
                } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#FF385C] focus:border-[#FF385C] focus:z-10 sm:text-sm`}
              />
              <label className="absolute text-gray-500 text-sm duration-150 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:px-2 peer-focus:px-2">
                Birth date
              </label>
              {formErrors.birthDate && (
                <p className="mt-1 text-sm text-red-500">{formErrors.birthDate}</p>
              )}
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="h-4 w-4 text-[#FF385C] focus:ring-[#FF385C] border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#FF385C] hover:bg-[#D70466] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF385C] ${
                isLoading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing up...
                </span>
              ) : (
                'Sign up'
              )}
            </button>
          </div>

          {formErrors.submit && (
            <p className="mt-2 text-center text-sm text-red-500">{formErrors.submit}</p>
          )}

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3">
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <RiFacebookBoxFill className="mr-2 text-[#1877F2] text-xl" /> Continue with Facebook
              </button>

              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <IoLogoGoogle className="mr-2 text-[#DB4437] text-xl" /> Continue with Google
              </button>

              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <FaApple className="mr-2 text-black text-xl" /> Continue with Apple
              </button>
            </div>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <button
            onClick={() => navigate('/login')}
            className="font-medium text-[#FF385C] hover:text-[#D70466]"
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
