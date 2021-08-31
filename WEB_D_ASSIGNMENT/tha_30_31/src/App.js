import "./App.css";
import Navbar from "./components/Navbar";

import Container from "./components/Container";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./components/Details";
import CartDrawer from "./components/CartDrawer";
import Wishlist from "./components/WishList";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <CartDrawer />
        <Switch>
          <Route exact path="/" component={Container} />

          <Route exact path="/product/:id/" component={Details} />

          <Route path="/wishlist" component={Wishlist} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
