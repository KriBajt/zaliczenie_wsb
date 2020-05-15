// import { combineReducers } from "redux";
// import listsReducer from "./listsReducer";

// export default combineReducers({
//     lists: listsReducer,

// });

import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    alert
});

export default rootReducer;
