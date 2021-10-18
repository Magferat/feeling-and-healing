import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import HomeMain from './Components/Home/HomeMain';
import Login from './Components/Login/Login';
import NotFond from './Components/NotFound/NotFond';
import Registration from './Components/Registerd/Registration';

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
