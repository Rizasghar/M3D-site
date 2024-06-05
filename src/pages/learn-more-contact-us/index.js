import React, { useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Wrapper } from "../../styles/home.style";
import Button from "@mui/material/Button";
import Header from "../../components/Header";
import Chatbot from "../../components/chatbot/Chatbot";
import Footer from "../../components/Footer";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_BASE_URL_EMAIL } from "../../utils/API.Config";
import Head from "next/head";

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(8),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
}));

const LearnMoreContactUs = () => {
  const [navbarColor, setNavbarColor] = useState("rgba(74, 74, 74, 0.9)");
  const contentRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(
        `${API_BASE_URL_EMAIL}send-email`,
        formData
      );
      if (response.status === 200) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: false, email: false, message: false };
    if (!formData.name.trim()) {
      newErrors.name = true;
      valid = false;
    }
    if (!formData.email.trim() || !isValidEmail(formData.email)) {
      newErrors.email = true;
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = true;
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <Head>
        <title>M3D Website | Learn More Contact Us</title>
      </Head>
      <Header navbarColor={navbarColor} />
      <Wrapper ref={contentRef}>
        <div className="maincontactus">
          <Grid
            container
            justifyContent="center"
            spacing={2}
            style={{ marginTop: "20px" }}
          >
            <Grid style={{ paddingLeft: "0px" }} item xs={12} sm={4} md={3}>
              <div className="left-contact-section">
                <h1 style={{ marginBottom: "5px", fontSize: "50px" }}>
                  Learn More
                </h1>
                <div className="freetrail-para">
                  <p style={{ color: "#000" }}>
                    Contact us to learn more about our cameras and technology
                  </p>
                </div>
                <button className="chatnowbtn">Chat Now</button>

                <div
                  style={{
                    verticalAlign: "top",
                    paddingTop: "20px",
                  }}
                >
                  <div style={{ color: "#676767", display: "flex" }}>
                    <svg
                      viewBox="0 0 24 24"
                      style={{ width: "24px", height: "24px" }}
                    >
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
                    </svg>
                    <a
                      href="tel:+1-800-585-3304"
                      style={{
                        color: "#0075a6",
                        paddingLeft: "5px",
                        fontSize: "20px",
                      }}
                    >
                      +1-800-585-3304
                    </a>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={7}>
              <Box sx={{ maxWidth: "600px", marginX: "auto" }}>
                <form onSubmit={handleSubmit}>
                  <TextField
                    label="Name *"
                    variant="standard"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    helperText={errors.name && "Please enter a name"}
                    error={errors.name}
                  />
                  <TextField
                    label="Email *"
                    variant="standard"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    helperText={errors.email && "Please enter a valid email"}
                    error={errors.email}
                  />
                  <TextField
                    label="Message *"
                    variant="standard"
                    name="message"
                    multiline
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    helperText={errors.message && "Please enter a message"}
                    error={errors.message}
                  />

                  <div style={{ textAlign: "center" }}>
                    <Button
                      className="submitbtn"
                      sx={{
                        fontFamily: "Gotham",
                        width: "70%",
                        marginTop: "20px",
                        color: "white",
                        borderRadius: "20px",
                        backgroundColor: "#0075a6",
                      }}
                      color="primary"
                      type="submit"
                      disabled={loading}
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Footer />
      </Wrapper>
      <Chatbot />
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default LearnMoreContactUs;
