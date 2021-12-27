import React from 'react';
import {connect} from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.components';
import Header from './components/header/header.component';
import { firestore, auth , createUserProfileDocument } from './firebase/firebase.utils';
import {doc,onSnapshot } from "firebase/firestore";
import {setCurrentUser} from './redux/user/user.actions';


class App extends React.Component{
  unsubscribeFromAuth =null;
  componentDidMount(){
    //abstracted setCurrentUser from the props
    const {setCurrentUser}=this.props;

  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
    if(userAuth){
      await createUserProfileDocument(userAuth);
  
      await onSnapshot(doc(firestore,"users",userAuth.uid),doc=>{
        //calls a redux action to set user data into firestore when we get snapshot from firebase
        setCurrentUser({
            id:doc.id,
            ...doc.data()
        });      
      });
      
  }
    //sets the value of current firestore object as State for frontend
    setCurrentUser(userAuth)
    });
  };

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render(){
  return ( <div>
    <Header />
    <Routes>
    <Route path = '/' element={<HomePage/>}/>
    <Route path='/shop' element={<ShopPage/>}/>
    <Route path = '/signIn' element={<SignInAndSignUpPage/>}/>
    </Routes>
  </div>
  ) }
};

//this is helping us push value of current user to setCurrentUser
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
