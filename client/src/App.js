import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from './layout/Navigation/Navigation'
import Footer from './layout/Footer/Footer'
import Home from "./pages/Home/Home";
import AboutUs from './pages/AboutUs/About'
import Register from './pages/Register/Register'
import PostUser from './pages/Register/PostUser'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about-us' component={AboutUs} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/register/complete' component={PostUser} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
