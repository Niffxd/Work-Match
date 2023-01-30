import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from './layout/Navigation/Navigation'
import Footer from './layout/Footer/Footer'
import Home from "./pages/Home/Home";
import AboutUs from './pages/AboutUs/About'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about-us' component={AboutUs} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
