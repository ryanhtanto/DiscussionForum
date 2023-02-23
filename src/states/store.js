import { configureStore } from '@reduxjs/toolkit';
// import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
// import talkDetailReducer from './talkDetail/reducer';
import threadsReducer from './threads/reducer';
import usersReducer from './register/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    threads: threadsReducer,
//     talkDetail: talkDetailReducer,
//     loadingBar: loadingBarReducer,
  },
});

export default store;
