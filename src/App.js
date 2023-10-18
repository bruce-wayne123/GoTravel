import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from './places/pages/UpdatePlace';
import Login from './user/pages/Login';
function App() {
  return (
    <>
      <Router>
        <div>
          <MainNavigation />
          <main>
            <Routes>
              <Route path='/' element={<Users />} />
              <Route path='/user/login' element={<Login />} />
              <Route path="/:userId/places" element={<UserPlaces />} exact="true" />
              <Route path='/places/new' element={<NewPlace />} exact="true" />
              <Route path='/places/:placeId' element={<UpdatePlace />} />
              <Route path='*' element={<Users />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
