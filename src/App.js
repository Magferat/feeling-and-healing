import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import HomeMain from './Home/HomeMain';
import Login from './Login/Login';
import NotFond from './NotFound/NotFond';
import Registration from './Registerd/Registration';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/home" > <HomeMain /> </Route>
          <Route path="/login" > <Login /> </Route>
          <Route path='/register' > <Registration /></Route>
          <Route path="/" > <HomeMain /> </Route>
          <Route exact path="*" > <NotFond /> </Route>
        </Switch>


      </BrowserRouter>
    </div>
  );
}

export default App;
