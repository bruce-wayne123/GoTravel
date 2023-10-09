import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from "./places/pages/UserPlaces";
function App() {
  return (
    <>
      <Router>
        <div>
          <MainNavigation />
          <main>
            <Routes>
              <Route path='/' element={<Users />} />
              <Route path="/:userId/places" element={<UserPlaces />} exact />
              <Route path='/places/new' element={<NewPlace />} />
              <Route path='*' element={<Users />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
