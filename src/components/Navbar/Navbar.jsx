import React, { useContext } from "react";
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Navbar = () => {

    const {setCurrency} = useContext(CoinContext)
    const currencyHandler = (event)=>{
        switch (event.target.value) {
            case "usd": {
                setCurrency({ name: "usd", symbol: "$" });
                break;
            }
            case "eur": {
                setCurrency({ name: "eur", symbol: "€" });
                break;
            }
            case "inr": {
                setCurrency({ name: "inr", symbol: "₹" });
                break;
            }
            case "btc": {
                setCurrency({ name: "btc", symbol: "₿" });
                break;
            }
            case "eth": {
                setCurrency({ name: "eth", symbol: "Ξ" });
                break;
            }
            case "ltc": {
                setCurrency({ name: "ltc", symbol: "Ł" });
                break;
            }
            case "bch": {
                setCurrency({ name: "bch", symbol: "₿" }); // BCH also uses Bitcoin symbol
                break;
            }
            case "bnb": {
                setCurrency({ name: "bnb", symbol: "BNB" }); // Binance Coin does not have a unique symbol
                break;
            }
            case "eos": {
                setCurrency({ name: "eos", symbol: "EOS" }); // EOS does not have a unique symbol
                break;
            }
            case "xrp": {
                setCurrency({ name: "xrp", symbol: "XRP" }); // XRP does not have a unique symbol
                break;
            }
            case "xlm": {
                setCurrency({ name: "xlm", symbol: "XLM" }); // XLM does not have a unique symbol
                break;
            }
            case "link": {
                setCurrency({ name: "link", symbol: "LINK" }); // LINK does not have a unique symbol
                break;
            }
            case "dot": {
                setCurrency({ name: "dot", symbol: "DOT" }); // DOT does not have a unique symbol
                break;
            }
            case "yfi": {
                setCurrency({ name: "yfi", symbol: "YFI" }); // YFI does not have a unique symbol
                break;
            }
            case "aed": {
                setCurrency({ name: "aed", symbol: "د.إ" }); // UAE Dirham
                break;
            }
            case "ars": {
                setCurrency({ name: "ars", symbol: "$" }); // Argentine Peso
                break;
            }
            default: {
                setCurrency({ name: "inr", symbol: "₹" });
                break;
            }
        }
    }
  return (
    <div className="navbar">
        <Link to={'/'}>
            <img src={logo} alt="" className="logo" />
        </Link>
        
        <ul>
            <Link to={'/'}><li>Home</li></Link>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className="nav-right">
            <select onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
                <option value="btc">BTC</option>
                <option value="eth">ETH</option>
                <option value="ltc">LTC</option>
                <option value="bch">BCH</option>
                <option value="bnb">BNB</option>
                <option value="eos">EOS</option>
                <option value="xrp">XRP</option>
                <option value="xlm">XLM</option>
                <option value="link">LINK</option>
                <option value="dot">DOT</option>
                <option value="yfi">YFI</option>
                <option value="aed">AED</option>
                <option value="ars">ARS</option>
            </select>
            <button>Sign up <img src={arrow_icon} alt="" /></button>
        </div>
    </div>
  )
}

export default Navbar;