/** @format */

import axios from "axios";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navigation from "./layout/Navigation/Navigation";
import Footer from "./layout/Footer/Footer";
import Home from "./pages/Home/Home";
import JobOfferDetail from "./pages/JobOffer/JobOffer";
import AboutUs from "./pages/AboutUs/About";
import Register from "./pages/Register/Register";
import PostUser from "./pages/Register/PostUser";
import Login from "./pages/Login/Login";
import CreateJobOffer from "./pages/CreateJobOffer/CreateJobOffer";
import EmployeeProfile from "./pages/UserProfile/EmployeeProfile/EmployeeProfile";
import EmployerProfile from "./pages/UserProfile/EmployerProfile/EmployerProfile";
import DashboardUser from "./pages/UserProfile/UserProfile";
import Error404 from "./pages/Error404/Error404";
import Loading from "./components/Register/Loading";
import { useAuth0 } from "@auth0/auth0-react";
import EditJobOffer from "./pages/EditJobOffer/EditJobOffer";
import AlertMessage from "./components/AlertMessage/AlertMessage";

axios.defaults.baseURL = "http://localhost:3001";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <Loading />;

  return (
    <BrowserRouter>
      <AlertMessage />
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/home'>
          <Redirect to='/' />
        </Route>
        <Route exact path='/job-offer/:id' component={JobOfferDetail} />
        <Route exact path='/about-us' component={AboutUs} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/register/complete' component={PostUser} />
        <Route exact path='/create-job-offer' component={CreateJobOffer} />
        <Route exact path='/edit-job-offer' component={EditJobOffer} />
        <Route exact path='/my-profile' component={DashboardUser} />
        <Route exact path='/my-profile/employee' component={EmployeeProfile} />
        <Route exact path='/my-profile/employer' component={EmployerProfile} />
        <Route path='*' component={Error404} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
