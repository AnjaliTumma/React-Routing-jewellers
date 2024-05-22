import {BrowserRouter, Route,Routes} from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Forgot from './Pages/Forgot';
import Dashboard from './Pages/Dashboard';
import Home  from './Pages/Childrens/Home';
import About from './Pages/Childrens/About';
import Category from './Pages/Childrens/Category';
import Product from './Pages/Childrens/Product';
import Why from './Pages/Childrens/Whys';
import Contact from './Pages/Childrens/Contact';
import Notfound from './Pages/Notfound';

function App() {
  
  return (
     <BrowserRouter>
        <Routes>
          <Route path='/' Component={Login}></Route>
          <Route path='/Login' Component={Login}></Route>
          <Route path='/Signup' Component={Signup}></Route>
          <Route path='/Forgot' Component={Forgot}></Route>
          <Route path='*' Component={Notfound}></Route>
          <Route path='/Dashboard' Component={Dashboard}></Route>
          <Route path='/Dashboard/Home' Component={Home}></Route>
          <Route path='/Dashboard/About' Component={About}></Route>
          <Route path='/Dashboard/Category' Component={Category}></Route>
          <Route path='/Dashboard/Product' Component={Product}></Route>
          <Route path='/Dashboard/Why' Component={Why}></Route>
          <Route path='/Dashboard/Contact' Component={Contact}></Route>
        </Routes>
        </BrowserRouter>
  );
}

export default App;
