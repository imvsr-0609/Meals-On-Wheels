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
          { user?.email ? <HomePage/> : <Redirect to="/"/> }
          </Route>

          <Route exact path="/gallery">
          { user?.email ? <GalleryPage/> : <Redirect to="/"/> }
          </Route>

          <Route exact path="/checkout">
          { user?.email ? <CheckOut/> : <Redirect to="/"/> }
          </Route>

        </Switch>
      </Router> 
  
      
    </div>
  );
}

export default App;
