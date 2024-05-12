import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice';
import roleReducer from '../slices/rolesSlice';
import freelancerInfoReducer from '../slices/freelancerInfoSlice';



const store = configureStore({
  reducer: {
    authSlice: authReducer,
    roleSlice: roleReducer,
    freelancerInfoSLice: freelancerInfoReducer,
  },
});

export default store;
