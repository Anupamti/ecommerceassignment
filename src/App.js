import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from './components/home/home';
import Login from './components/login/login';
import Navbar from './components/navbar/navbar';
import ProductPage from './components/productPage/productPage';
import SellProducts from './components/sellProducts/sellProducts';
import Signup from './components/signup/signup';
function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    console.log("this is the token", user?.token)
  }, [user?.token])


  useEffect(() => {

    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [])

  return (
    <>
      <Router>
        <Switch>
          {
            user ? (
              <>
                <Navbar />
                <Redirect to={{ pathname: '/home' }} />
                <Route path="/home" exact component={Home} />
                <Route path='/sellproducts' exact component={SellProducts} />
                <Route path="/productpage" exact component={ProductPage} />
              </>
            ) : (<>
              <Redirect to={{ pathname: '/login' }} />
              <Route path="/login" exact component={Login} />
              <Route path="/signup" exact component={Signup} />
            </>)
          }
        </Switch>
      </Router>
    </>
  );
}

export default App;
