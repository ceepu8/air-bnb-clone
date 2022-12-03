import formReducer from '@/features/Room/redux/formReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formReducer: formReducer,
});

export default rootReducer;
