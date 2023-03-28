import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer';
import OneEmployee from './pages/OneEmployee';
import Home from './pages/Home';
import AllEmployees from './pages/AllEmployees';
import AddEmployee from './pages/AddEmployee';
import UpdateEmployee from './pages/UpdateEmployee';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import { createContext,useEffect, useState } from 'react';
import {getCurrentUserDetails} from './services/helper-service';
import User from './pages/User';

const AppState = createContext();

function App() {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    if (getCurrentUserDetails()) {
      setLogin(true);
    }
  }, []);

  return (
    <AppState.Provider value={{ login, setLogin }}>
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />

          {/* Private User Routes */}
          <Route path="/user" element={<User />}>
            <Route path="add-employee" element={<AddEmployee />} />
            <Route path="all-employee" element={<AllEmployees />} />
            <Route path="all-employee/:id" element={<OneEmployee />} />
            <Route path="update-employee/:id" element={<UpdateEmployee />} />
            <Route path="get-employee" element={<OneEmployee />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppState.Provider>
  );
}

export default App;
export {AppState};
