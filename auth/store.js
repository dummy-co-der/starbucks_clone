import { legacy_createStore as createStore } from 'redux';
import { combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userlogin, userregistration} from './reducer/user';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    USERLOGIN : userlogin,
    USERREGISTER : userregistration,
});

const userintial = localStorage.getItem('userInfo', 'Email') ? JSON.parse(localStorage.getItem("userInfo")):null;
const intialState = {
    userlogin: { userInfo: userintial},
};

const middleware = [thunk];

const store =  createStore(reducer, intialState, composeWithDevTools(applyMiddleware(...middleware)) );

export default store; 