import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AddAdmin from './Components/Dashboard/Addadmin/AddAdmin';
import AddService from './Components/Dashboard/AddService/AddService';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import ServiceList from './Components/Dashboard/Dashboard/ServiceList/ServiceList';
import ServiceListAdmin from './Components/Dashboard/Dashboard/ServiceListAdmin/ServiceListAdmin';
import Order from './Components/Dashboard/Order/Order';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route> 

          {/* Dashborad part */}
           
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>

          {/* Admin part */}

          <Route path="/addService">
            <AddService></AddService>
          </Route>

          <Route path="/addAdmin">
            <AddAdmin></AddAdmin>
          </Route>

          <Route path="/serviceListAdmin">
            <ServiceListAdmin></ServiceListAdmin>
          </Route>

          {/* Client part */}

          <PrivateRoute path="/serviceRegister/:serviceId">
            <Order></Order>
          </PrivateRoute>

          <Route path="/serviceList">
            <ServiceList></ServiceList>
          </Route>


          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
