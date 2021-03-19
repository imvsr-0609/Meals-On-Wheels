import React from 'react';
import {BrowserRouter as Router ,Switch , Route} from 'react-router-dom'
import './App.css';
import UserProvider from './context/UserProvider';
import GalleryPage from './Pages/GalleryPage/GalleryPage';
import HomePage from './Pages/HomePage/HomePage';
import SignInPage from './Pages/SignInPage/Sign-in-page';

function App() {
  return (
    <div className="App">
    <UserProvider>
      <Router>
        <Switch>

          <Route exact path="/">
            <SignInPage/>
          </Route>

          <Route exact path="/home">
            <HomePage/>
          </Route>

          <Route exact path="/gallery">
            <GalleryPage/>
          </Route>

        </Switch>
      </Router> 
    </UserProvider>
      
    </div>
  );
}

export default App;
