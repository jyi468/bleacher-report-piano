import { combineReducers } from 'redux';
import loggerReducer from './loggerReducer';
import pianoReducer from "./pianoReducer";
import mouseReducer from './mouseReducer';

export default combineReducers({
    logger: loggerReducer,
    piano: pianoReducer,
    mouse: mouseReducer
});