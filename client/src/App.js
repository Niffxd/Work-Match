import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import JobOfferDetail from "./pages/JobOffer/JobOffer";
import EmployeeProfile from "./pages/UserProfile/EmployeeProfile/EmployeeProfile";
import EmployerProfile from "./pages/UserProfile/EmployerProfile/EmployerProfile";
import DashboardUser from "./pages/UserProfile/UserProfile";

axios.defaults.baseURL = "https://work-match-api.up.railway.app";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/job-offer/:id' component={JobOfferDetail} />
        <Route exact path='/my-profile' component={DashboardUser} />
        <Route
          exact
          path='/my-profile/employee/applications'
          component={EmployeeProfile}
        />
        <Route
          exact
          path='/my-profile/employee/matches'
          component={EmployeeProfile}
        />
        <Route
          exact
          path='/my-profile/employer/matches'
          component={EmployerProfile}
        />
        <Route
          exact
          path='/my-profile/employer/postulates'
          component={EmployerProfile}
        />
        <Route
          exact
          path='/my-profile/employer/publications'
          component={EmployerProfile}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
