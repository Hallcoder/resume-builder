import {legacy_createStore as createStore} from 'redux'
import {persistStore,persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage'
import reducer from './reducer';
const persistConfig = {
    key: 'root',
    storage,
    stateReconciler:autoMergeLevel2,
  }
const persistedReducer = persistReducer<any,any>(persistConfig, reducer);

export let store = createStore(persistedReducer);
export let persistor = persistStore(store);
   