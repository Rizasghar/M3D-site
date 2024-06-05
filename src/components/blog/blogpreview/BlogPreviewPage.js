import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CircularProgress } from "@mui/material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import Axios from "axios";
import { API_BASE_URL } from "../../../utils/API.Config";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ToastContainer, toast } from "react-toastify";
import { API_BASE_URL_EMAIL } from "../../../utils/API.Config";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import styles from "./BlogPreviewPage.module.css";

function formatDate(dateString) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dateObject = new Date(dateString);
  const monthIndex = dateObject.getMonth();
  const day = dateObject.getDate();
  const year = dateObject.getFullYear();

  const formattedDate = `${months[monthIndex]} ${day}, ${year}`;
  return formattedDate;
}

const desktopBoxStyle = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "nowrap",
  gap: { xs: 5, md: 10 },
};

const mobileBoxStyle = {
  display: "flex",
  gap: { xs: 5, md: 10 },
  flexDirection: "column",
};

const FeaturedDesktopBoxStyle = {
  marginBottom: 2,
  width: { xs: "70%", md: "50%" },
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const FeaturedMobileBoxStyle = {
  marginBottom: 2,
  width: { xs: "70%", md: "50%" },
  display: "flex",
  flexDirection: "column",
  alignItems: "space-start",
};

function BlogPreviewPage() {
  const theme = useTheme();

  const router = useRouter();
  const { id } = router.query;

  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const issMobile = useMediaQuery(theme.breakpoints.down("sm"));
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    Axios.get(`${API_BASE_URL}blogs?populate=%2A`)
      .then((response) => {
        const allBlogs = response.data.data;
        setBlogs(allBlogs);
        if (id) {
          const filteredBlogs = allBlogs.filter(
            (blogItem) => parseInt(blogItem.id) !== parseInt(id)
          );
          setBlogs(filteredBlogs);
          Axios.get(`${API_BASE_URL}blogs/${id}?populate=%2A`)
            .then((response) => {
              const blogData = response.data.data;
              setBlog(blogData);
            })
            .catch((error) => {
              console.error(error);
            })
            .finally(() => {
              setIsLoading(false);
            });
        } else {
          setIsLoading(true);
        }
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100%",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 9999,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          }}
        >
          <CircularProgress style={{ margin: "20px" }} />
        </Box>
      ) : (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
              height: "auto",
              width: { md: "90%", xs: "90%" },
              margin: "5rem 5px",
              gap: 2,
            }}
          >
            <Typography sx={{ width: { xs: "100%", md: "67%" } }}>
              <Typography
                sx={{
                  color: "#3b4351",
                  marginBottom: 2,
                  fontSize: { xs: "28px", md: "36px" },
                  fontWeight: 700,
                  letterSpacing: "-1.5px",
                  lineHeight: "45px",
                  fontFamily: "Gotham !important",
                }}
                variant="h2"
                component="h1"
              >
                {blog?.attributes?.Title}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box
                  sx={{
                    ...(isMobile
                      ? FeaturedMobileBoxStyle
                      : FeaturedDesktopBoxStyle),
                  }}
                >
                  <Avatar
                    alt="User Picture"
                    src={
                      blog?.attributes?.Avatar_Img?.data?.attributes?.url
                        ? blog.attributes.Avatar_Img.data.attributes.url
                        : "/images/M3D_Logo_dark.png"
                    }
                    sx={{ marginRight: "5px", boxShadow: "0px 0px 10px #000" }}
                  />
                  <Typography
                    sx={{
                      fontSize: { xs: "15px", md: "15px" },
                      color: "#4a4f66",
                      fontWeight: "700",
                      fontFamily: "Gotham !important",
                    }}
                    variant="h6"
                    component="span"
                  >
                    {blog?.attributes?.Author_Name
                      ? blog.attributes.Author_Name
                      : "Anonymous"}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#4a4f66",
                      fontSize: { xs: "15px", md: "15px" },
                      color: "#4a4f66",
                      fontWeight: "700",
                      fontFamily: "Gotham !important",
                    }}
                    variant="h6"
                    component="span"
                  >
                    {blog && formatDate(blog.attributes.publishedAt)}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "15px", md: "15px" },
                      color: "#4a4f66",
                      fontWeight: "700",
                      fontFamily: "Gotham !important",
                    }}
                    variant="h6"
                    component="span"
                  >
                    {blog?.attributes?.Read_time}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/company/m3dimaging/"
                    style={{ textDecoration: "none" }}
                  >
                    <LinkedInIcon
                      sx={{
                        borderRadius: "20px",
                        "&:hover": {
                          color: "#4783ff",
                          cursor: "pointer",
                        },
                      }}
                    />
                  </Link>
                </Box>
              </Box>
              <CardMedia
                component="img"
                sx={{
                  width: "100%",
                  height: "50vh",
                  marginBottom: 2,
                  borderRadius: "20px",
                }}
                image={blog?.attributes?.images?.data[0]?.attributes?.url}
                alt="Live from space album cover"
              />

              <Typography
                sx={{
                  color: "#4a4f66",
                  fontSize: "17px",
                  lineHeight: "26px",
                }}
                variant="body1"
                component="p"
              >
                <div
                  className={styles["blog-description-img"]}
                  dangerouslySetInnerHTML={{
                    __html: blog?.attributes?.Description,
                  }}
                />
              </Typography>
            </Typography>
            <div
              style={{
                position: "relative ",
                padding: "2rem",
              }}
            >
              <form
                onSubmit={handleSubmit}
                style={{
                  width: { xs: "100%", md: "30%" },
                  position: "sticky",
                  top: "5rem",
                  bottom: "5rem",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#3b4351",
                    lineHeight: "40px",
                    fontFamily: "Gotham !important",
                  }}
                  variant="h3"
                  component="h3"
                >
                  Contact Us
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 2,
                    marginBottom: 2,
                  }}
                >
                  <TextField
                    sx={{
                      fontFamily: "Gotham !important",
                    }}
                    id="outlined-basic"
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
                    sx={{
                      fontFamily: "Gotham !important",
                    }}
                    id="outlined-basic"
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
                </Box>
                <TextField
                  sx={{
                    marginBottom: 2,
                    width: { xs: "100%" },
                    fontFamily: "Gotham !important",
                  }}
                  id="outlined-basic"
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
                <Typography
                  sx={{
                    fontSize: "13px",
                    fontWeight: "400",
                    color: "#3b4351",
                    fontFamily: "Gotham !important",
                    marginBottom: 2,
                  }}
                  variant="body1"
                  component="p"
                >
                  Have a question, want more information or to collaborate?
                </Typography>

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
                    {loading ? "Sending..." : "Send"}
                  </Button>
                </div>
              </form>
            </div>
          </Box>

          {/* Related Blogs */}

          <Box sx={{ margin: "50px", width: "90%" }}>
            <Typography
              sx={{
                marginBottom: 2,
                fontWeight: "600",
                fontSize: { xs: "20px", md: "30px" },
                color: "#10173a",
                fontFamily: "Gotham !important",
              }}
              variant="h5"
              component="h5"
            >
              Related stories
            </Typography>
            {/* Yaha pe map laga lijye ga */}
            <div style={{ width: "100%" }}>
              <Box
                sx={{ ...(isMobile ? mobileBoxStyle : desktopBoxStyle) }}
                variant="div"
                component="div"
              >
                {blogs
                  .filter((item) => {
                    if (!blog || !blog.attributes || !blog.attributes.Keywords)
                      return false;
                    const currentBlogKeywords = blog.attributes.Keywords.split(
                      ","
                    ).map((keyword) => keyword.trim());
                    if (!item.attributes.Keywords) return false;
                    const blogKeywords = item.attributes.Keywords.split(
                      ","
                    ).map((keyword) => keyword.trim());
                    return blogKeywords.some((keyword) =>
                      currentBlogKeywords.includes(keyword)
                    );
                  })
                  .slice(0, 3)
                  .map((blog) => {
                    const { Description, images } = blog.attributes;
                    const imageUrl = images?.data[0]?.attributes?.url || "";
                    return (
                      <Card
                        key={blog.id}
                        sx={{
                          borderRadius: "20px",
                          width: { xs: "100%", sm: "300px", md: "400px" },
                          height: { xs: "330px", md: "400px" },

                          borderRadius: "16px",
                          boxShadow: "rgba(0,0,0,.1) 0px 0px 20px 1px",
                          transitionDuration: ".5s",
                          transition: "transform",
                          "&:hover": {
                            transition: "transform",
                            transitionDuration: ".5s",
                            boxShadow: "rgba(0, 0, 0, .1) 0px 0px 28px 19px",
                            cursor: "pointer",
                          },
                        }}
                      >
                        <CardMedia
                          sx={{ height: "235px" }}
                          image={imageUrl}
                          title="green iguana"
                        />
                        <CardContent>
                          <Typography
                            sx={{
                              fontWeight: "bold",
                              "&:hover": {
                                color: "#4783ff !important",
                                border: "none",
                                textDecoration: "none",
                                cursor: "pointer",
                              },
                            }}
                            gutterBottom
                            variant="h5"
                            component="div"
                          >
                            <Link
                              style={{
                                textDecoration: "none",
                              }}
                              href={`/blog/${blog.id}`}
                            >
                              <Typography
                                sx={{
                                  color: "#10173a",
                                  fontSize: { xs: "20px", md: "22px" },
                                  fontWeight: "700",
                                  fontFamily: "Gotham !important",

                                  "&:hover": {
                                    color: "#4783ff !important",
                                    cursor: "pointer",
                                  },
                                }}
                              >
                                {showMore
                                  ? { Description }
                                  : `${blog?.attributes?.Title?.slice(
                                      0,
                                      50
                                    )}...`}
                              </Typography>
                            </Link>
                          </Typography>
                          {!issMobile && (
                            <Typography variant="body2" color="text.secondary">
                              {showMore
                                ? { Description }
                                : `${Description?.slice(0, 120)}...`}
                            </Typography>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
              </Box>
            </div>
          </Box>
        </Box>
      )}
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default BlogPreviewPage;
