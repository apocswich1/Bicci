import firebase from 'utils/firebase';
export const SESSION_LOGIN = 'SESSION_LOGIN';
export const SESSION_LOGOUT = 'SESSION_LOGOUT';

export const login = (params) => {
  return function (dispatch) {
    let email = params.email;
    let password = params.password;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("error");
    });

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {

        firebase.auth().currentUser.getIdToken(true).then(async function (idToken) {
          //const refUser = firebase.firestore().collection('users').doc(user.uid);
          // modificacion
          const rest = await firebase.firestore().collection('restaurants')
          .where('starredBy','==',user.uid).get();
          const control = await rest.docs.map(item => {return item.data()})[0];
          let restaurantID = "";
          
          if(control){
            restaurantID = control.id;
          }else{
            restaurantID = "";
          }

          const referencia = await firebase.firestore().collection('users').doc(user.uid).get();
          const res = referencia.data();
          
          const username = res.name;
          const email = res.email;
          const phone = res.phone;
          localStorage.setItem('username', username);
          localStorage.setItem('email', email);
          localStorage.setItem('phone', phone);
          // user.role = res.data().role;
          // user.id = res.data().uid;
          user.role = res.role;
          user.id = res.uid;
          user.restaurantID = restaurantID;
          user.username = username;

          if (user.role === "" || user.role === undefined) {
            dispatch({
              type: SESSION_LOGOUT
            });
          } else {
            dispatch({
              type: SESSION_LOGIN,
              user: user
            });
          }
          // fin modificacion
          // refUser.get().then(res => {
          //   const username = res.data().name;
          //   const email = res.data().email;
          //   const phone = res.data().phone;

          //   localStorage.setItem('username', username);
          //   localStorage.setItem('email', email);
          //   localStorage.setItem('phone', phone);
          //   user.role= res.data().role;
          //   user.id = res.data().uid;
          //   user.username = username;

          //   if(user.role==="" || user.role=== undefined){
          //     dispatch({
          //       type: SESSION_LOGOUT
          //     });
          //   }else{
          //     dispatch({
          //       type: SESSION_LOGIN,
          //       user: user
          //     });
          //   }
          // }).catch(err => {
          //   console.log(err)
          // })
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