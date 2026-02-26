// import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/mainlayout";
import OnboardingScreen from "./pages/onboarding";
import ExplorePage from "./pages/explore";
import MyOrders from "./pages/my-orders";
import CheckoutPage from "./pages/checkout";
import DeliveryPage from "./pages/delivery";
import FoodDetails from "./pages/food-details";
// import Footer from "./component/footer"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<OnboardingScreen />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/delivery" element={<DeliveryPage />} />
          <Route path="/details" element={<FoodDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
