import './App.css';

import {Switch,Route} from 'react-router-dom'

import Header from './comopnent/header/header.component'
import ShopPage from './comopnent/shop/shop.component'

import WomensCatagory from './page/women/women.component'

function App() {
  return (
    <div className="App">
        <Header />
      <Switch>
        <Route exact path="/" component={ShopPage }/>
        <Route path="/women" component={WomensCatagory}/>
        <Route path="/men" component={WomensCatagory }/>
      </Switch>
    </div>
  );
}

export default App;
