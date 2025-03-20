import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
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
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/holdings" element={<Holdings />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/trading" element={<Trading />} />
        <Route path="/buyshares" element={<BuyShares />} />
        <Route path="/sellshares" element={<SellShares />} />
      </Routes>
      <Footer />
    </Provider>
  );
}

export default App;
