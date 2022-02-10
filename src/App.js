import './App.css';

import {Switch,Route} from 'react-router-dom'

import Header from './comopnent/header/header.component'
import ShopPage from './comopnent/shop/shop.component'

import Catagory from './page/headerPage/catagory.component'



function App() {
  return (
    <div className="App">
        <Header />
      <Switch>
        <Route exact path="/" component={ShopPage }/>
        <Route path="/women" component={Catagory}/>
        <Route path="/men" component={Catagory}/>
        <Route path="/kids" component={Catagory}/>
      </Switch>
    </div>
  );
}

export default App;
