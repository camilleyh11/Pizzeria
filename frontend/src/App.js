import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import AdminRoute from './components/AdminRoute';
import PrivateRoute from './components/PrivateRoute';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import { faMap, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              PizzaLand
            </Link>
          </div>
          <div>
            <Link to="/cart">
              Panier
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.pseudo} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/profile">Profil</Link>
                  </li>
                  <li>
                    <Link to="/orderhistory">Historique</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Déconnection
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Se connecter</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/productlist">Produits</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Commandes</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Utilisateurs</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen} exact></Route>
          <Route
            path="/product/:id/edit"
            component={ProductEditScreen}
            exact
          ></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
          <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
          <AdminRoute
            path="/productlist"
            component={ProductListScreen}
          ></AdminRoute>
          <AdminRoute
            path="/orderlist"
            component={OrderListScreen}
          ></AdminRoute>
          <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
          <AdminRoute
            path="/user/:id/edit"
            component={UserEditScreen}
          ></AdminRoute>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer class="footer">
        
        <div class="footer-left">

          <f3>PizzaLand<span>Info</span></f3>

          <p class="footer-links">
                      "Pour votre santé, mangez au moins 5 fruits et légumes par jour."
            <a href="https://www.mangerbouger.fr/" target="_blank">manger-bouger.fr</a>
          </p>

          <p class="footer-company-name">Elsa Ruelle & Camille Krusi &copy; 2020</p>
        </div>

        <div class="footer-center">

          <div>
            
            <i class="center-icons"> <FontAwesomeIcon icon={faMap} /> </i>
            <p><span>Centre Bonlieu, 1 Rue Jean Jaurès</span> Annecy, France</p>
          </div>

          <div>
            <i class="center-icons"> <FontAwesomeIcon icon={faPhone} /> </i>
            <p>04 91 81 28 67</p>
          </div>

          <div>
            <i class="center-icons"> <FontAwesomeIcon icon={faEnvelope} /> </i>
            <p><a >ruellekrusi@gmail.com</a></p>
          </div>

        </div>

        <div class="footer-right">

          <p class="footer-company-about">
            <span>Qui sommes nous ?</span>
            Deux étudiantes en Informatique et Données d'Usages, très fortes en JavaScript et en Full Stack &amp; CEOs, PizzaLand.
          </p>
                  
          <div class="footer-icons">

            <a class="facebook" href="https://fr-fr.facebook.com/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
            <a class="twitter" href="https://twitter.com/HarrESgirl1D/status/1338947880103632897" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
            <a class="github" href="https://github.com/Elsa-R/Pizzeria" target="_blank"><FontAwesomeIcon icon={faGithub} /></a> 
            <a class="linkedin" href="https://www.linkedin.com/in/elsa-ruelle-53549b1ba/" href="https://www.linkedin.com/in/camille-kr%C3%BCsi-267969193/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>

          </div>

        </div>

      </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
