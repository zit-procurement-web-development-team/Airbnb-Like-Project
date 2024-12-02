import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { propertiesApi, wishlistApi } from '../services/api';

const PropertyContext = createContext();

const initialState = {
  properties: [],
  featuredProperties: [],
  hotTubProperties: [],
  wishlist: [],
  selectedProperty: null,
  loading: false,
  error: null,
};

const propertyReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    case 'SET_PROPERTIES':
      return { ...state, properties: action.payload, loading: false };
    case 'SET_FEATURED_PROPERTIES':
      return { ...state, featuredProperties: action.payload, loading: false };
    case 'SET_HOT_TUB_PROPERTIES':
      return { ...state, hotTubProperties: action.payload, loading: false };
    case 'SET_WISHLIST':
      return { ...state, wishlist: action.payload };
    case 'SET_SELECTED_PROPERTY':
      return { ...state, selectedProperty: action.payload };
    default:
      return state;
  }
};

export const PropertyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(propertyReducer, initialState);

  // Fetch initial data
  useEffect(() => {
    fetchFeaturedProperties();
    fetchHotTubProperties();
    fetchWishlist();
  }, []);

  const fetchProperties = async (filters = {}) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const response = await propertiesApi.getAll(filters);
      dispatch({ type: 'SET_PROPERTIES', payload: response.data });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    }
  };

  const fetchFeaturedProperties = async () => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const response = await propertiesApi.getFeatured();
      dispatch({ type: 'SET_FEATURED_PROPERTIES', payload: response.data });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    }
  };

  const fetchHotTubProperties = async () => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const response = await propertiesApi.getHotTub();
      dispatch({ type: 'SET_HOT_TUB_PROPERTIES', payload: response.data });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    }
  };

  const fetchWishlist = async () => {
    try {
      const response = await wishlistApi.getAll();
      dispatch({ type: 'SET_WISHLIST', payload: response.data });
    } catch (error) {
      console.error('Error fetching wishlist:', error);
    }
  };

  const toggleWishlist = async (propertyId) => {
    try {
      const isInWishlist = state.wishlist.includes(propertyId);
      if (isInWishlist) {
        await wishlistApi.remove(propertyId);
      } else {
        await wishlistApi.add(propertyId);
      }
      fetchWishlist(); // Refresh wishlist
    } catch (error) {
      console.error('Error updating wishlist:', error);
    }
  };

  const setSelectedProperty = (property) => {
    dispatch({ type: 'SET_SELECTED_PROPERTY', payload: property });
  };

  const value = {
    state,
    fetchProperties,
    fetchFeaturedProperties,
    fetchHotTubProperties,
    toggleWishlist,
    setSelectedProperty,
  };

  return (
    <PropertyContext.Provider value={value}>
      {children}
    </PropertyContext.Provider>
  );
};

export const useProperty = () => {
  const context = useContext(PropertyContext);
  if (!context) {
    throw new Error('useProperty must be used within a PropertyProvider');
  }
  return context;
};
