import React,{useContext} from 'react';
import {BrowserRouter as Router ,Switch , Route , Redirect} from 'react-router-dom'
import './App.css';
import { UserContext } from './context/UserProvider';
import CheckOut from './Pages/CheckoutPage/CheckOut';
import GalleryPage from './Pages/GalleryPage/GalleryPage';
import HomePage from './Pages/HomePage/HomePage';
import SignInPage from './Pages/SignInPage/Sign-in-page';

function App() {

  const {user} = useContext(UserContext)

  return (
    <div className="App">
   
      <Router>
        <Switch>

          <Route exact path="/">
          { !user?.email ? <SignInPage/> : <Redirect to="/home"/> }
          </Route>

          <Route exact path="/home">
          <HomePage/>
          </Route>

          <Route exact path="/gallery">
         <GalleryPage/> 
          </Route>

          <Route exact path="/checkout">
           <CheckOut/> 
          </Route>

        </Switch>
      </Router> 
  
      
    </div>
  );
}

export default App;
