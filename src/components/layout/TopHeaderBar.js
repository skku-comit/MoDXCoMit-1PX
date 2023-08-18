// imports
import { Link, useLocation } from "react-router-dom";

// css
import classes from './TopHeaderBar.module.css';

//img
import logo from '../../assets/images/logo.svg';

const TopHeaderBar = () => {
  const location = useLocation();

  const isIframe1Page = location.pathname === "/iframe1";
  const isIframe2Page = location.pathname === "/iframe2";
  const isIframe3Page = location.pathname === "/iframe3";
  const isIframe4Page = location.pathname === "/iframe4";
  const isIframe5Page = location.pathname === "/iframe5";
  const isIframe6Page = location.pathname === "/iframe6";
  const isIframe7Page = location.pathname === "/iframe7";

  const headerStyle = {
    backgroundColor: isIframe1Page ? "red" : // Change this to your desired style for the iframe1 page
                      isIframe2Page ? "#D0EAE0" : // Change this to your desired style for the iframe2 page
                      isIframe3Page ? "green" : // Change this to your desired style for the iframe3 page
                      isIframe4Page ? "yellow" : // Change this to your desired style for the iframe4 page
                      isIframe5Page ? "#F8791D" : // Change this to your desired style for the iframe5 page
                      isIframe6Page ? "#FCBEEA" : // Change this to your desired style for the iframe6 page
                      isIframe7Page ? "#94E8EB" : "white"
                  };

  return (
    <div className={classes["header"]} style={headerStyle}>
      <Link to={"/"} className={classes["link-decoration"]}>
      <img src={logo} alt="logo" className={classes['logo-container']}/>
      </Link>
      <Link to={'./about'} className={classes['link-decoration']}>
        <div className={classes['header-container']}>ABOUT</div>
      </Link>
      <Link to={'./guest-book'} className={classes['link-decoration']}>
        <div className={classes['header-container']}>GUESTBOOK</div>
      </Link>
    </div>
  );
};

export default TopHeaderBar;
