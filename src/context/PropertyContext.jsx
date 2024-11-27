import React, { createContext, useContext, useReducer } from 'react';

const PropertyContext = createContext();

const initialState = {
  filters: {
    priceRange: [50, 1000],
    guests: { adults: 1, children: 0, infants: 0 },
    bedrooms: 1,
    bathrooms: 1,
    propertyType: 'all'
  },
  wishlist: [],
  selectedProperty: null,
  searchResults: [],
  loading: false,
  error: null
};

const propertyReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FILTERS':
      return {
        ...state,
        filters: { ...state.filters, ...action.payload }
      };
    case 'TOGGLE_WISHLIST':
      const propertyId = action.payload;
      const isWishlisted = state.wishlist.includes(propertyId);
      return {
        ...state,
        wishlist: isWishlisted
          ? state.wishlist.filter(id => id !== propertyId)
          : [...state.wishlist, propertyId]
      };
    case 'SET_SELECTED_PROPERTY':
      return {
        ...state,
        selectedProperty: action.payload
      };
    case 'SET_SEARCH_RESULTS':
      return {
        ...state,
        searchResults: action.payload,
        loading: false,
        error: null
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export const PropertyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(propertyReducer, initialState);

  const value = {
    state,
    setFilters: (filters) => dispatch({ type: 'SET_FILTERS', payload: filters }),
    toggleWishlist: (propertyId) => dispatch({ type: 'TOGGLE_WISHLIST', payload: propertyId }),
    setSelectedProperty: (property) => dispatch({ type: 'SET_SELECTED_PROPERTY', payload: property }),
    setSearchResults: (results) => dispatch({ type: 'SET_SEARCH_RESULTS', payload: results }),
    setLoading: (loading) => dispatch({ type: 'SET_LOADING', payload: loading }),
    setError: (error) => dispatch({ type: 'SET_ERROR', payload: error })
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

export default PropertyContext;
