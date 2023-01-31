/** @format */

import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./layout/Navigation/Navigation";
import Footer from "./layout/Footer/Footer";
import Home from "./pages/Home/Home";
import JobOfferDetail from "./pages/JobOffer/JobOffer";
import AboutUs from "./pages/AboutUs/About";
import Register from "./pages/Register/Register";
import PostUser from "./pages/Register/PostUser";
import Login from "./pages/Login/Login";

axios.defaults.baseURL = "https://work-match-api.up.railway.app";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/job-offer/:id" component={JobOfferDetail} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/register/complete" component={PostUser} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
