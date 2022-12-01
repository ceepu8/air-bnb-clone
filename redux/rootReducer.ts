import formReducer from '@/features/Room/redux/formReducer';
import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';

const rootReducer = combineReducers({
  formReducer: formReducer,
});

export default rootReducer;
