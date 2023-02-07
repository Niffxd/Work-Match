/** @format */

import axios from "axios";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux"
import { useAuth0 } from "@auth0/auth0-react";
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
import EditJobOffer from "./pages/EditJobOffer/EditJobOffer";
import AlertMessage from "./components/AlertMessage/AlertMessage";
import DashboardAdmin from "./components/DashboardAdmin/DashboardAdmin";
import DashboardEditAdmin from "./components/DashboardAdmin/DashboardAdminForm/DashboardEditAdmin";
import TermsYCopyright from "./pages/TermsYCopyright/TermsYCopyright";
import LoaderPage from "./components/LoaderPage/LoaderPage"
// import ProtectedRoute from "./components/protected-route"

axios.defaults.baseURL = "http://localhost:3001";

function App() {
  const { user } = useSelector(state => state.user)
  const { isLoading } = useAuth0();

  if (isLoading) return <Loading />;

  return (
    <BrowserRouter>
      <AlertMessage />
      <Navigation />
      <Switch>
        <Route exact path='/redirect' component={LoaderPage} />
        <Route exact path="/" component={Home} />
        <Route exact path="/home">
          <Redirect to="/" />
        </Route>
        <Route exact path='/job-offer/:id' component={JobOfferDetail} />
        <Route exact path='/about-us' component={AboutUs} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/register/complete' component={PostUser} />

        {/* Protected Routes */}
        <Route exact path='/create-job-offer'>
          {!Object.keys(user).length ? <Redirect to="/redirect" /> : <CreateJobOffer />}
        </Route>
        <Route exact path='/edit-job-offer'>
          {!Object.keys(user).length ? <Redirect to="/redirect" /> : <EditJobOffer />}
        </Route>
        <Route exact path='/my-profile'>
          {!Object.keys(user).length ? <Redirect to="/redirect" /> : <DashboardUser />}
        </Route>
        <Route exact path='/my-profile/employee/:type'>
          {!Object.keys(user).length ? <Redirect to="/redirect" /> : <EmployeeProfile />}
        </Route>
        <Route exact path='/my-profile/employer/:type'>
          {!Object.keys(user).length ? <Redirect to="/redirect" /> : <EmployerProfile />}
        </Route>
        {/* Protected Routes */}

        {/* <ProtectedRoute exact path='/create-job-offer' component={CreateJobOffer} />
        <ProtectedRoute exact path='/edit-job-offer' component={EditJobOffer} />
        <ProtectedRoute exact path='/my-profile' component={DashboardUser} />
        <Route exact path='/my-profile/admin' component={DashboardAdmin} />
        <Route exact path='/my-profile/admin/:id' component={DashboardEditAdmin} />
        <ProtectedRoute
          exact
          path="/my-profile/employee/:type"
          component={EmployeeProfile}
        />
        <ProtectedRoute
          exact
          path="/my-profile/employer/:type"
          component={EmployerProfile}
        /> */}

        <Route exact path="/terms-and-copyright" component={TermsYCopyright} />
        <Route path="*" component={Error404} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
