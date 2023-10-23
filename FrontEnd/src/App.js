import './App.css';
import React, { useCallback, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from './places/pages/UpdatePlace';
import Login from './user/pages/Login';
import { AuthContext } from './shared/Context/auth-context';
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Routes>
        <Route path="/" exact element={<Users />} />
        <Route path="/:userId/places" exact element={<UserPlaces />} />
        <Route path="/places/new" exact element={<NewPlace />} />
        <Route path="/places/:placeId" element={<UpdatePlace />} />
        <Route path='*' element={<Login />} />
      </Routes >
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" exact element={<Users />} />
        <Route path="/:userId/places" exact element={<UserPlaces />} />
        <Route path="/user/login" element={<Login />} />
        <Route path='*' element={<Login />} />
      </Routes>
    );
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>
      <Router>
        <div>
          <MainNavigation />
          <main>
            <main>{routes}</main>
          </main>
        </div>
      </Router>
    </AuthContext.Provider >
  );
}

export default App;
