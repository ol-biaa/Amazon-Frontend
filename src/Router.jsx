import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import Home from "./Pages/Landing/Landing";
import Cart from "./Pages/Cart/Cart";
import Result from "./Pages/Result/Result";
import Auth from "./Pages/Auth/Auth";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import {Elements} from '@stripe/react-stripe-js'
import { loadStripe } from "@stripe/stripe-js";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

function Router() {
  const stripePromise = loadStripe(
    "pk_test_51PKhBJP9OwkLf3Uq4Y0t0ibU9YN3C9nxbkGSmHNXP829spHdssUJtkUpfKP8QfA4a1BuB2Ke5P5WFqdyccawa9eZ00U21Cc7t1"
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:categoryName" element={<Result />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route
          path="/payment"
          element={
            <ProtectedRoute
            msg={"You need to be signed in to pay"}
            redirect={"/auth"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute
            msg={"You must be logged in to access your orders"}
            redirect={"/auth"}
            >
              <Orders />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;