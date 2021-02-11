import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import loginReducer from '../store/loginStore/login-reducer';
import ordersReducer from '../store/orderStore/order-reducer';
import dateReducer from '../store/dateStore/date-reducer';
let composeEnhacers = compose;
if (__DEV__) {
  composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const rootReducer = combineReducers({loginReducer, ordersReducer, dateReducer});
export const store = createStore(
  rootReducer,
  composeEnhacers(applyMiddleware(thunk)),
);
