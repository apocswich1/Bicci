import * as actionTypes from 'actions';

const initialState = {
  loggedIn: false,
  user: {
    first_name: 'Shen',
    last_name: 'Zhi',
    email: 'demo@devias.io',
    avatar: '/images/avatars/avatar_11.png',
    bio: 'Brain Director',
    role: 'ADMIN' // ['GUEST', 'USER', 'ADMIN']
  },
  roles: ['ADMIN', 'USER', 'GUEST', 'SUPERADMIN', 'Administrator']
};
/*loggedIn: "",
  user: {
    role: 'ADMIN'
  },
  roles: ['ADMIN','USER','GUEST']
};*/

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SESSION_LOGIN: {
      return {
        // ...initialState
        ...state,
        loggedIn: true,
        user: {
          first_name: action.user.displayName ? action.user.displayName : action.user.username.split(' ')[0],
          last_name: action.user.displayName ? "" : action.user.username.split(' ')[1],
          email: action.user.email,
          //avatar: '/images/perfil2.png',
          avatar: action.user.avatar ? action.user.avatar : '/images/perfil2.png',
          bio: action.user.displayName,
          role: action.user.role ? action.user.role : "Administrator",
          id: action.user.uid,
          restaurantID: action.user.restaurantID,
          username: action.user.username // ['GUEST', 'USER', 'ADMIN']
          //  role: 'GUEST'
        }
      };
    }

    case actionTypes.SESSION_LOGOUT: {
      return {
        ...state,
        loggedIn: false,
        user: {
          role: 'NONE'
        }
      };
    }

    default: {
      return state;
    }
  }
};

export default sessionReducer;
