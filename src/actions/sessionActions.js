import firebase from 'utils/firebase';
export const SESSION_LOGIN = 'SESSION_LOGIN';
export const SESSION_LOGOUT = 'SESSION_LOGOUT';

export const login = (params) => {
  return function (dispatch) {
    console.log(params);
    let email = params.email;
    let password = params.password;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log(user);
        firebase.auth().currentUser.getIdToken(true).then(function (idToken) {
          const refUser = firebase.firestore().collection('users').doc(user.uid);
          refUser.get().then(res => {
            const username = res.data().name;
            const email = res.data().email;
            const phone = res.data().phone;

            localStorage.setItem('username', username);
            localStorage.setItem('email', email);
            localStorage.setItem('phone', phone);
            user.role= res.data().role;
            user.id = res.data().uid;
            user.username = username;
            

            if(user.role==="" || user.role=== undefined){
              dispatch({
                type: SESSION_LOGOUT
              });
            }else{
              dispatch({
                type: SESSION_LOGIN,
                user: user
              });
            }
          }).catch(err => {
            console.log(err)
          })
          localStorage.setItem('token', idToken);
          localStorage.setItem('userId', user.uid);
       
        }).catch(function (error) {
          // Handle error
        });
      } else {
        // No user is signed in.
        dispatch({
          type: SESSION_LOGOUT
        });
      }
    });
  }
}

export const logout = () => {
  return function (dispatch) {
    firebase.auth().signOut();
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    dispatch({
      type: SESSION_LOGOUT
    });
  }
}
/*
  export const logout = () => dispatch =>
localStorage.removeItem('token');
localStorage.removeItem('userId');
  dispatch({
    type: SESSION_LOGOUT
  });
*/