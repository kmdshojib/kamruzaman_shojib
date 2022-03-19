import React, { Component,lazy, Suspense } from 'react'
import { Switch,Route } from 'react-router-dom'
//geting Functions From the Functions file For The clean Code
import {getCurrencySymbol} from './Functions/AppFunction'


//F
const ShopPage = lazy(() => import  ('./pages/shop-page.component'))
const ProductPage = lazy(() => import  ( './pages/product/product.page'))
const Header = lazy(() => import  ( './components/Header/header.component'))
const ShoppingCart = lazy(() => import  ( './components/cartPage/cart-page.component'))

class App extends Component {
  state = { 
    category: 'all',
    shoppingCart: [], 
    currencyIndex: 0,  
    overlay: false,
    attributes: [] 
   } 


   overlayChange = (state) => {
    this.setState({
        overlay: state
    })
}

switchCategory = (category) => {
    this.setState({
        category
    });
}

ADD_TO_CART = (product) => {
  //Check if its in cart
  const isItemInCart = this.state.shoppingCart.some(item => item.id === product.id);
  
  //Incrementing The Cart Quantity If It Exists
  if (isItemInCart) {
      let index = this.state.shoppingCart.findIndex(item => item.id === product.id);
      if (index === -1) {
          console.log("Error, Product Not Found")
      }
      else {
          this.setState({
              shoppingCart: [
              ...this.state.shoppingCart.slice(0,index),
              Object.assign(
                  {}, 
                  this.state.shoppingCart[index], 
                  {...product, qty: this.state.shoppingCart[index].qty + 1}
                  ),
              ...this.state.shoppingCart.slice(index+1)
              ]
          });
      }
  }

  else if (isItemInCart === false) {
      this.setState({
          ...this.state,
          shoppingCart: [
              ...this.state.shoppingCart,
              {...product, qty: 1, attributes: product.attributes}
          ]
      });
  }

}

REMOVE_FROM_CART = (product) => {
//Check if its in cart
const isItemInCart = this.state.shoppingCart.some(item => item.id === product.id);

//Incrementing The Cart Quantity If It Exists
if (isItemInCart) {
    let index = this.state.shoppingCart.filter(item => item.id !== product.id);
    this.setState({
        shoppingCart: [ ...index ]
    });
}
}

INCREMENT_CART = (product) => {
//Check if its in cart
const isItemInCart = this.state.shoppingCart.some(item => item.id === product.id);

//Incrementing The Cart Quantity If It Exists
if (isItemInCart) {
  let index = this.state.shoppingCart.findIndex(item => item.id === product.id);
    this.setState({
      shoppingCart: [
         ...this.state.shoppingCart.slice(0,index),
         Object.assign(
             {}, 
             this.state.shoppingCart[index], 
             {...product, qty: this.state.shoppingCart[index].qty + 1}
          ),
         ...this.state.shoppingCart.slice(index+1)
      ]
  });
}
}

DECREMENT_CART = (product) => {
//Check if its in cart
const isItemInCart = this.state.shoppingCart.some(item => item.id === product.id);


if (isItemInCart) {
  let index = this.state.shoppingCart.findIndex(item => item.id === product.id);

  if (product.qty > 1) {
      this.setState({
          shoppingCart: [
             ...this.state.shoppingCart.slice(0,index),
             Object.assign(
                 {}, 
                 this.state.shoppingCart[index], 
                 {...product, qty: this.state.shoppingCart[index].qty - 1}
              ),
             ...this.state.shoppingCart.slice(index+1)
          ]
      });
  }
}
}

addAttribute = (productName, attributesArray, attributeType, activeIndex) => {
  let result = this.state.attributes.find((product) => product.productName === productName && product.attributeType === attributeType );

  if (result === undefined) {
      this.setState({
          attributes: [
              ...this.state.attributes,
              { 
                  productName: productName, 
                  attributeType: attributeType, 
                  attributes: attributesArray, 
                  activeIndex: activeIndex
              }
          ]
      })
  }

  else {
      //Check if its in cart
      const isItemInCart = this.state.attributes.some(product => product.productName === productName && product.attributeType === attributeType );
      let result = this.state.attributes.find((product) => product.productName === productName && product.attributeType === attributeType );
      
      //Decrementing The Cart Quantity If It Exists
      if (isItemInCart) {
          let index = this.state.attributes.findIndex(product => product.productName === productName && product.attributeType === attributeType );

          this.setState({
              attributes: [
              ...this.state.attributes.slice(0,index),
              Object.assign(
                  {}, 
                  this.state.attributes[index], 
                  {...result, activeIndex: activeIndex}
                  ),
              ...this.state.attributes.slice(index+1)
              ]
          });
      }
  }
}

returnAttributes = (productName, items, attributeType) => {
  if (attributeType === "Size") {
      let result = this.state.attributes.find((product) => product.productName === productName && product.attributeType === attributeType);

      return items.map((attr, index) => (
          <button
              onClick={
                  () => this.addAttribute(productName, items, attributeType, index)
              }

              className={
                  (result) ? (
                      result.activeIndex === index
                      ? "attributeActive"
                      : ""
                  ) : ("")
              }

              key={index}
          >{attr.value}</button>
      ));
  }

  else if (attributeType === "Capacity") {
      let result = this.state.attributes.find((product) => product.productName === productName && product.attributeType === attributeType);

      return items.map((attr, index) => (
          <button
              onClick={
                  () => this.addAttribute(productName, items, attributeType, index)
              }

              className={
                  (result) ? (
                      result.activeIndex === index
                      ? "attributeActive"
                      : ""
                  ) : ("")
              }

              key={index}
          >{attr.value}</button>
      ));
  }

  else if (attributeType === "Color") {
      let result = this.state.attributes.find((product) => product.productName === productName && product.attributeType === attributeType);

      return items.map((attr, index) => (
          <button 
              style={{
                  background: attr.value,
                  color: attr.value === "#000000" ? ("White") : ("Black")
              }}

              onClick={
                  () => this.addAttribute(productName, items, attributeType, index)
              }

              className={
                  (result) ? (
                      result.activeIndex === index
                      ? "attributeActiveColor"
                      : ""
                  ) : ("")
              }

              key={index}
          >
          </button>
      ));
  }

  else if (attributeType.length > 14) {
      let result = this.state.attributes.find((product) => product.productName === productName && product.attributeType === attributeType);

      return (
          <div className="miscAttribute">
              <p>{attributeType}</p>

              <div className="miscAttributeButton">
                  {
                      items.map((attr, index) => (
                          <button
                              onClick={
                                  () => this.addAttribute(productName, items, attributeType, index)
                              }
      
                              className={
                                  (result) ? (
                                      result.activeIndex === index
                                      ? "attributeActive"
                                      : ""
                                  ) : ("")
                              }
      
                              key={index}
                          >{attr.value}</button>
                      ))
                  }
              </div>
          </div>
      )
  }
}

selectCurrency = (currency) => {
  if (currency === "USD") {
      this.setState({
          currencyIndex: 0
      });
  } 

  else if (currency === "GBP") {
      this.setState({
          currencyIndex: 1
      });
  }

      else if (currency === "AUD") {
          this.setState({
              currencyIndex: 2
          });
      }

      else if (currency === "JPY") {
          this.setState({
              currencyIndex: 3
          });
      }

      else if (currency === "RUB") {
          this.setState({
              currencyIndex: 4
          });
      }
  }

//this bit of code will save files to localstroage 

UNSAFE_componentWillMount(){
    localStorage.getItem('shoppingCart') && this.setState({
        shoppingCart: JSON.parse(localStorage.getItem('shoppingCart'))
    });

    localStorage.getItem('attributes') && this.setState({
        attributes: JSON.parse(localStorage.getItem('attributes'))
    });

    localStorage.getItem('currencyIndex') && this.setState({
        currencyIndex: JSON.parse(localStorage.getItem('currencyIndex'))
    });
}


UNSAFE_componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('shoppingCart', JSON.stringify(nextState.shoppingCart));
    localStorage.setItem('attributes', JSON.stringify(nextState.attributes));
    localStorage.setItem('currencyIndex', JSON.stringify(nextState.currencyIndex));
}


  render() { 
    //For getting Currency Symbol
    getCurrencySymbol()

  const {switchCategory,selectCurrency,ADD_TO_CART,REMOVE_FROM_CART,INCREMENT_CART,DECREMENT_CART,overlayChange,returnAttributes} =this
  const {category,shoppingCart,currencyIndex,overlay} =this.state

  return (
   <Suspense fallback={<div>Loading...</div>}>
        <div className="App">
      <Header 
        switchCategory={switchCategory}
        category={category}
        shoppingCart={shoppingCart}
        selectCurrency={selectCurrency}
        getCurrencySymbol={getCurrencySymbol}
        currencyIndex={currencyIndex}
        ADD_TO_CART={ADD_TO_CART}
        REMOVE_FROM_CART={REMOVE_FROM_CART}
        INCREMENT_CART={INCREMENT_CART}
        DECREMENT_CART={DECREMENT_CART}
        overlayChange={overlayChange}
        overlay={overlay}
        returnAttributes={returnAttributes}
      />
      <Switch>
        <Route exact path="/">
          <ShopPage 
            category={category}
            currencyIndex={currencyIndex}
            getCurrencySymbol={getCurrencySymbol}
            ADD_TO_CART={ADD_TO_CART}
            REMOVE_FROM_CART={REMOVE_FROM_CART}
            INCREMENT_CART={INCREMENT_CART}
            DECREMENT_CART={DECREMENT_CART}
            overlay={overlay}
            overlayChange={overlayChange}
            returnAttributes={returnAttributes}
          />
        </Route>

        <Route exact path="/shopping-cart">
          <ShoppingCart 
            getCurrencySymbol={getCurrencySymbol}
            currencyIndex={currencyIndex}
            ADD_TO_CART={ADD_TO_CART}
            REMOVE_FROM_CART={REMOVE_FROM_CART}
            INCREMENT_CART={INCREMENT_CART}
            DECREMENT_CART={DECREMENT_CART}
            returnAttributes={returnAttributes}
            shoppingCart={shoppingCart}
          />
        </Route>

        <Route 
            exact path="/product/:id" 
            render={(props) => 
                <ProductPage 
                    {...props}
                    getCurrencySymbol={getCurrencySymbol}
                    currencyIndex={currencyIndex}
                    ADD_TO_CART={ADD_TO_CART}
                    REMOVE_FROM_CART={REMOVE_FROM_CART}
                    INCREMENT_CART={INCREMENT_CART}
                    DECREMENT_CART={DECREMENT_CART}
                    returnAttributes={returnAttributes}
                />
            } 
          />
      </Switch>


    </div>
   </Suspense>
  );
  }
}
 
export default App;

