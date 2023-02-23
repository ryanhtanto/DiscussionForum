import api from '../../utils/api';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveRegisterActionCreator } from '../register/action';

function asyncPopulateUsersAndThreads() {
        return async (dispatch) => {
                try {
                        const users = await api.getAllUsers();
                        const threads = await api.getAllThreads();

                        dispatch(receiveRegisterActionCreator(users));
                        dispatch(receiveThreadsActionCreator(threads));
                } catch (error) {
                        alert(error.message);
                }
        };
}

export { asyncPopulateUsersAndThreads };
