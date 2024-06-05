import React, { useState, useEffect } from "react";
import { Wrapper, Content } from "./sidenav.style";
import { API_BASE_URL } from "../../utils/API.Config";
import axios from "axios";
function SideNav({ show, headerLinks }) {
  const [isLoading, setIsLoading] = useState(true);
  const [headers, setHeaders] = useState([]);
  const [error, setError] = useState(null);
  const [productDetails, setProductDetails] = useState([]);

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
    <Wrapper show={show.toString()}>
      <Content>
        {headerLinks?.length > 0 &&
          headerLinks.map((product) => {
            return product.attributes.URL_Route ? (
              <a href={product.attributes.URL_Route} key={product.id}>
                <li style={{ color: "rgb(0, 0, 0)" }}>
                  {product.attributes.Title}
                </li>
              </a>
            ) : null;
          })}
        {headers.slice(0, 10).map((header) =>
          header.attributes.URL ? (
            <a href={header.attributes.URL} key={header.id}>
              <li style={{ color: "rgb(0, 0, 0)" }}>
                {header.attributes.Title}
              </li>
            </a>
          ) : null
        )}
      </Content>
    </Wrapper>
  );
}

export default SideNav;
