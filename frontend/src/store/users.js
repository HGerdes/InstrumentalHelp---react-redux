import { csrfFetch } from './csrf';

const LOAD_ALL_USERS = "user/LOAD_ALL_USERS";
const LOAD_SINGLE_USER = "user/LOAD_SINGLE_USER"

const loadUsers = (getAllUsers, id) => ({
    type: LOAD_ALL_USERS,
    payload: getAllUsers, id
})

const loadOneUser = getSingleUser => ({
    type: LOAD_SINGLE_USER,
    getSingleUser
})

export const getUsers = () => async dispatch => {
    const response = await csrfFetch("/api/users");
    if (response.ok) {
        const users = await response.json();
        dispatch(loadUsers(users));
        return users;
    }
}

export const getUser = (id) => async dispatch => {
    const response = await csrfFetch(`/api/users/${id}`);

    if (response.ok) {
        const user = await response.json();
        dispatch(loadOneUser(user));
        return user;
    }
}

const initialState = {reviewers: null};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ALL_USERS: {
            // newState = Object.assign({}, state)
            // newState.getAllUsers = action.getAllUsers;
            // return newState;
            const users = {};
            const reviewUsers = Object.values(action.payload);
            reviewUsers.forEach(user => {
                users[user.id] = user;
            });
            return {
                ...state,
                reviewers: {...users}
            }
        }

        case LOAD_SINGLE_USER: {
            return {
                ...state,
                getSingleUser: action.getSingleUser
            }
        }
        default:
            return state;
    }
}

export default userReducer;
