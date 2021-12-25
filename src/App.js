import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.components';
import Header from './components/header/header.component';
import { firestore, auth , createUserProfileDocument } from './firebase/firebase.utils';
import {doc,onSnapshot } from "firebase/firestore";

class App extends React.Component{
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }
  unsubscribeFromAuth =null;

  componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
    if(userAuth){
      await createUserProfileDocument(userAuth);
  
      await onSnapshot(doc(firestore,"users",userAuth.uid),doc=>{
        this.setState({
          currentUser:{
            id:doc.id,
            ...doc.data()
          }
        });      
      });
      
  }
    this.setState({currentUser:userAuth})
    });
  };

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render(){
  return ( <div>
    <Header currentUser={this.state.currentUser}/>
    <Routes>
    <Route path = '/' element={<HomePage/>}/>
    <Route path='/shop' element={<ShopPage/>}/>
    <Route path = '/signIn' element={<SignInAndSignUpPage/>}/>
    </Routes>
  </div>
  ) }
}

export default App;
