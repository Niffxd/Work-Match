import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import JobOfferDetail from "./pages/JobOffer/JobOffer";

axios.defaults.baseURL = "https://work-match-api.up.railway.app";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/job-offer/:id' component={JobOfferDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
