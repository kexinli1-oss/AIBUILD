import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import watchFetchCategories from './sagas';

import { rootReducer} from "./reducers/categoriesReducers";
//const store = createStore(rootReducer);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchFetchCategories);


export default store;
