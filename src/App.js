import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import ContainPage from "./pages/CartPage/ContainPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import BestSellersPage from "./pages/BestsellersPage/BestSellersPage";
import NewProductPage from "./pages/NewProductPage/NewProductPage";
import AboutPage from "./pages/AboutPage/About";

function App() {
  return (
  <Routes>
      <Route path={'/'} element={<HomePage/>}/>
      <Route path={'/products'} element={<ProductPage/>}/>
      <Route path={'/about'} element={<AboutPage/>}/>
      <Route path={'/contain'} element={<ContainPage/>}/>
      <Route path={'/favorites'} element={<FavoritesPage/>}/>
      <Route path={'/bestsellers'} element={<BestSellersPage/>}/>
      <Route path={'/new-products'} element={<NewProductPage/>}/>
  </Routes>
  );
}

export default App;
