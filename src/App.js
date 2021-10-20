import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import HomeMain from './Components/Home/HomeMain';
import Login from './Components/Login/Login';
import NotFond from './Components/NotFound/NotFond';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Registration from './Components/Registerd/Registration';
import DetailedService from './Components/Services/DetailedService';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route path="/home" > <HomeMain /> </Route>
            <Route path="/login" > <Login /> </Route>
            <PrivateRoute path="/Service/:serviceId">
              <DetailedService></DetailedService>
            </PrivateRoute>

            <Route path='/register' > <Registration /></Route>
            <Route exact path="/" > <HomeMain /> </Route>
            <Route path="*" > <NotFond /> </Route>

          </Switch>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
