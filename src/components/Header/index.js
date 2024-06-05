import React, { useState, useEffect } from "react";
import { Wrapper, Content, Content1 } from "./header.style";
import Link from "next/link";
import SideNav from "../SideNav/index";
import CloseIcon from "@mui/icons-material/Close";
import { API_BASE_URL } from "../../utils/API.Config";
import axios from "axios";
import Skeleton from "@mui/material/Skeleton";

const Header = ({ navbarColor, headerLinks }) => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [headers, setHeaders] = useState([]);
  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1150);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const headersResponse = await axios.get(
          `${API_BASE_URL}header-options`
        );
        setHeaders(headersResponse.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Wrapper
          style={{ background: navbarColor, opacity: ".8", zIndex: "999" }}
          show={open.toString()}
        >
          <Skeleton variant="rectangular" width={"100%"} height={55} />
        </Wrapper>
      ) : (
        <Wrapper
          style={{ background: navbarColor, opacity: ".8", zIndex: "999" }}
          show={open.toString()}
        >
          <div className="logo">
            <Link href="/">
              <img src="/images/M3D_Logo_dark.png" alt="logo" />
            </Link>
          </div>
          {!isMobile && (
            <Content>
              {headerLinks?.length > 0 &&
                headerLinks.map((product) => {
                  return product.URL ? (
                    <Link
                      style={{ color: "#fff" }}
                      href={productURL}
                      key={product.id}
                    >
                      {product.attributes.Title}
                    </Link>
                  ) : null;
                })}

              {headers.slice(0, 10).map((header) =>
                header.attributes.URL ? (
                  <Link
                    style={{ color: "#fff" }}
                    key={header.id}
                    href={header.attributes.URL}
                  >
                    {header.attributes.Title}
                  </Link>
                ) : null
              )}
            </Content>
          )}
          <Content1>
            {isMobile && (
              <a style={{ color: "#fff" }} onClick={() => setOpen(true)}>
                Menu
              </a>
            )}
          </Content1>
          {open && (
            <div className="top">
              <div className="close" onClick={() => setOpen(false)}>
                <CloseIcon />
              </div>
            </div>
          )}
          <SideNav show={open} />
        </Wrapper>
      )}
    </>
  );
};

export default Header;
