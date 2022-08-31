import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

import classes from "./Navbar.module.css";

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [headerShadow, setHeaderShadow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        setHeaderShadow(true);
      } else {
        setHeaderShadow(false);
      }
    });
  }, []);

  // hide mobile menu on url changes
  const hideMobileMenu = () => {
    setOpenMobileMenu(false);
  };

  // close mobile menu when resize window to re enable scroll

  const handleResize = () => {
    if (window.innerWidth >= 992) {
      setOpenMobileMenu(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`${classes.header} ${headerShadow ? classes.shadow : ""} `}
    >
      <div className="container">
        <nav className={classes.navbar}>
          <div className={classes.logo}>
            <Link href="/">
              <a>
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={183}
                  height={108}
                  layout="responsive"
                  priority
                />
              </a>
            </Link>
          </div>
          <div
            className={`${classes.navbar_links} ${
              openMobileMenu ? classes.open : ""
            }`}
          >
            <div className={classes.page_links}>
              <ul>
                <li>
                  <Link href="/">
                    <a onClick={hideMobileMenu}>home</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a onClick={hideMobileMenu}>career</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a onClick={hideMobileMenu}>blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a onClick={hideMobileMenu}>about Us</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={classes.auth_links}>
              <div className={classes.login}>
                <Link href="#">
                  <a onClick={hideMobileMenu}>Login</a>
                </Link>
              </div>
              <div className={classes.signup}>
                <Link href="#">
                  <a onClick={hideMobileMenu}>Sign Up</a>
                </Link>
              </div>
            </div>
          </div>
          <div className={classes.mobile_button}>
            <i
              onClick={() => {
                setOpenMobileMenu(!openMobileMenu);
              }}
            >
              {openMobileMenu ? <IoCloseOutline /> : <IoIosMenu />}
            </i>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
