import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../utils/API.Config";
import { Box, useMediaQuery, ThemeProvider, Link } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme();

const Footer = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [Footer, setFooter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${API_BASE_URL}footers`)
      .then((response) => {
        const sortedData = response.data.data.sort((a, b) => {
          return (
            parseInt(a.attributes.Footer_ID) - parseInt(b.attributes.Footer_ID)
          );
        });
        setFooter(sortedData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "rgba(23, 26, 32, 1)",
          color: "white",
          padding: "10px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Box>
            {Footer.map((blog) => (
              <Link
                key={blog.id}
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
                href={blog.attributes.URL}
              >
                <div style={{ color: "#d0d1d2" }}>M3D © 2024</div>
                {blog.attributes.Title}
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
