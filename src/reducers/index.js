import { combineReducers } from 'redux';
import loggerReducer from './loggerReducer';
import pianoReducer from "./pianoReducer";

export default combineReducers({
    logger: loggerReducer,
    piano: pianoReducer
});