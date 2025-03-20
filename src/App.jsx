import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
// import Services from "./pages/Portfolio";
import NetBanking from "./pages/NetBanking";
import ContactUs from "./pages/ContactUs";
import Register from "./pages/Register";
import Welcome from "./pages/UserPages/Welcome";
import BalanceEnquiry from "./pages/UserPages/BalanceEnquiry";
import BankTransfer from "./pages/UserPages/BankTransfer";
import MiniStatement from "./pages/UserPages/MiniStatement";
import store from "./reduxContainer/store";
import { Provider } from "react-redux";
import Watchlist from "./pages/Watchlist";
import Portfolio from "./pages/Portfolio";
import Holdings from "./pages/Holdings";
import Balance from "./pages/Balance";
import Trading from "./pages/Trading";
import BuyShares from "./pages/BuyShares";
import SellShares from "./pages/SellShares";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/net-banking" element={<NetBanking />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/holdings" element={<Holdings />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/trading" element={<Trading />} />
        <Route path="/buyshares" element={<BuyShares />} />
        <Route path="/sellshares" element={<SellShares />} />


        <Route path="/user" element={<Welcome />} />
        <Route path="/user/balance-enquiry" element={<BalanceEnquiry />} />
        <Route path="/user/mini-statement" element={<MiniStatement />} />
        <Route path="/user/bank-transfer" element={<BankTransfer />} />
      </Routes>
      <Footer />
    </Provider>
  );
}

export default App;
