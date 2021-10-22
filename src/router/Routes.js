import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "../components/nav-bar/NavBar";
import CartContainer from "../layouts/cart-container/CartContainer";
import ItemDetailContainer from "../layouts/item-detail-container/ItemDetailContainer";
import ItemListContainer from "../layouts/item-list-container/ItemListContainer";
import NotFound from "../layouts/not-found/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer />
        </Route>
        <Route exact path="/category/:categoryId">
          <ItemListContainer />
        </Route>
        <Route path="/item/:itemId">
          <ItemDetailContainer />
        </Route>
        <Route path="/cart">
          <CartContainer />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
