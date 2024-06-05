import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import InputAdornment from "@mui/material/InputAdornment";
import CardMedia from "@mui/material/CardMedia";
import { CardContent } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRouter } from "next/router";
import { Search } from "@mui/icons-material";
import { API_BASE_URL } from "../../../utils/API.Config";
import HorizontalSplitIcon from "@mui/icons-material/HorizontalSplit";

const desktopBoxStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: { xs: 5, md: 10 },
  margin: { md: "1rem 4rem" },
  width: { xs: "90%", md: "83%" },
  justifyContent: "center",
  marginBottom: { xs: "1rem", md: "1rem" },
};

const mobileBoxStyle = {
  display: "flex",
  gap: { xs: 5, md: 10 },
  flexDirection: "column",
  width: { xs: "90%", md: "90%" },
  marginBottom: { xs: "1rem", md: "1rem" },
};

const BlogGrid = () => {
  const theme = useTheme();
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const [FeaturedData, setFeaturedData] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [filterTags, setFilterTags] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const { id } = router.query;

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}tags`)
      .then((response) => {
        const sortedTags = response.data.data[0].attributes.Tags.sort(
          (a, b) => a.id - b.id
        );
        setFilterTags(sortedTags);
      })
      .catch((error) => {
        console.error("Error fetching filter tags:", error);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${API_BASE_URL}blogs?populate=%2A`)
      .then((response) => {
        const sortedBlogs = response.data.data.sort(
          (a, b) =>
            new Date(b.attributes.publishedAt) -
            new Date(a.attributes.publishedAt)
        );
        setBlogs(sortedBlogs);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (blogs) {
      const featuredData = blogs.filter(
        (item) => item.attributes.Featured === true
      );
      setFeaturedData(featuredData);
      const nonFeaturedBlogs = blogs.filter(
        (item) => item.attributes.Featured !== true
      );
      setFilteredBlogs(nonFeaturedBlogs);
    }
  }, [blogs]);

  const handleTagClick = (tag) => {
    setIsLoading(true);

    if (tag === "All") {
      setFilteredBlogs(blogs.filter((blog) => !blog.attributes.Featured));
      setIsLoading(false);
      return;
    }

    const keywords = tag.split(" , ");
    const filtered = blogs.filter((blog) =>
      keywords.some((keyword) =>
        blog.attributes.Keywords.toLowerCase().includes(keyword.toLowerCase())
      )
    );

    // Filter out the featured blogs from the filtered list
    const filteredWithoutFeatured = filtered.filter(
      (blog) => !blog.attributes.Featured
    );

    setFilteredBlogs(filteredWithoutFeatured);
    setIsLoading(false);
  };

  useEffect(() => {
    const searchResults = blogs.filter(
      (blog) =>
        blog.attributes.Title.toLowerCase().includes(
          searchQuery.toLowerCase()
        ) && !blog.attributes.Featured
    );
    setFilteredBlogs(searchResults);
  }, [searchQuery, blogs]);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100%",
          }}
        >
          <CircularProgress style={{ margin: "20px" }} />
        </Box>
      ) : (
        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            margin: { xs: "5rem auto", md: "7rem 11rem" },
            height: { md: "70vh" },
            width: { xs: "90%", md: "80%" },
            borderRadius: "16px",
            boxShadow: "rgba(0,0,0,.1) 0px 0px 20px 1px",
          }}
        >
          {FeaturedData?.map((blog) => {
            const { Description } = blog.attributes;

            return (
              <React.Fragment key={blog.id}>
                <CardMedia
                  component="img"
                  sx={{
                    width: { xs: "100%", md: "50%" },
                    height: { md: "100%" },
                  }}
                  image={blog.attributes.images.data[0].attributes.url}
                  alt="Live from space album cover"
                />

                <Box
                  sx={{
                    display: "flex",
                    width: { xs: "100%", lg: "50%", md: "84%" },
                    flexDirection: "column",
                    padding: "2.5rem",
                  }}
                >
                  <Link
                    to={`/blog/${blog.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <CardContent
                      sx={{
                        flex: "1 0 auto",
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        height: { md: "59vh" },
                        justifyContent: "space-evenly",
                      }}
                    >
                      <Typography
                        component="span"
                        sx={{
                          textDecoration: "none",
                          color: "#4783ff",
                          fontSize: "18px",
                          fontWeight: "600",
                          height: "21px",
                          lineHeight: "21px",
                          marginBottom: "20px",
                          fontFamily: "Gotham !important",
                        }}
                        variant="h5"
                      >
                        Featured Article
                      </Typography>
                      <Link
                        href={`/blog/${blog.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <a>
                          <Typography
                            variant="h3"
                            sx={{
                              color: "#10173a",
                              fontSize: "34px",
                              fontWeight: "bold",
                              lineHeight: "40px",
                              fontFamily: "Gotham !important",
                              "&:hover": {
                                color: "#4783ff",
                                cursor: "pointer",
                              },
                            }}
                            component="h1"
                          >
                            {blog.attributes.Title}
                          </Typography>
                        </a>
                      </Link>
                      <Typography
                        sx={{
                          margin: "10px 0",
                          fontSize: "17px",
                          lineHeight: "26px",
                          color: "#4a4f66",
                        }}
                        variant="body1"
                        component="p"
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `${Description.slice(0, 350)}...`,
                          }}
                        />
                      </Typography>
                      <Box
                        sx={{
                          width: { md: "10rem", xs: "100%" },
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Avatar
                          alt="User Picture"
                          src={
                            blog?.attributes?.Avatar_Img.data?.attributes?.url
                          }
                          sx={{ width: 56, height: 56 }}
                        />
                        <Typography
                          sx={{
                            color: "#10173a",
                            position: "absolute",
                            marginLeft: "4rem",
                            fontWeight: "700",
                            fontFamily: "Gotham !important",
                          }}
                          variant="h6"
                          component="span"
                        >
                          {blog?.attributes?.Author_Name}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Link>
                </Box>
              </React.Fragment>
            );
          })}
        </Card>
      )}

      <Box
        sx={{
          width: { xs: "100%", md: "80%" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: { md: "space-between", xs: "space-around" },
          margin: { xs: "60px auto" },
          marginTop: { lg: "-30px", md: "-30px", xs: "-30px" },
          fontFamily: "Gotham !important",
        }}
      >
        <List
          sx={{
            width: { xs: isOpen ? "100%" : "auto", md: "100%" },
            display: { xs: isOpen ? "flex" : "none", md: "flex" },
            justifyContent: "space-between",
            flexDirection: { xs: isOpen ? "column" : "row", md: "row" },
            flex: 1,
            paddingRight: { md: 2 },
            marginBottom: { xs: 2, md: 0 },
            fontFamily: "Gotham !important",
          }}
        >
          {filterTags?.slice(0, 10).map((tag) => {
            return (
              <ListItem
                key={tag.id}
                onClick={() => handleTagClick(tag.name)}
                sx={{
                  fontFamily: "Gotham !important",
                  textAlign: { xs: "center", md: "" },
                  cursor: "pointer",
                  display: { xs: "flex", md: "" },
                  justifyContent: { xs: "center", md: "" },
                }}
              >
                <Box
                  primary={tag.name}
                  sx={{ fontFamily: "Gotham !important" }}
                >
                  {tag.name}
                </Box>
              </ListItem>
            );
          })}
        </List>
        <TextField
          placeholder="Search..."
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ display: { xs: isOpen ? "none" : "flex", md: "flex" } }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <IconButton
          onClick={toggleNavbar}
          sx={{ display: { xs: "flex", md: "none" }, marginTop: "2rem" }}
        >
          {isOpen ? <HorizontalSplitIcon /> : <HorizontalSplitIcon />}
        </IconButton>
      </Box>

      <Box
        sx={{ ...(isMobile ? mobileBoxStyle : desktopBoxStyle) }}
        variant="div"
        component="div"
      >
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => {
            const { Description, images } = blog.attributes;
            const imageUrl = images?.data[0]?.attributes?.url || "";

            return (
              <React.Fragment key={blog.id}>
                <Card
                  key={blog.id}
                  className="blog-card"
                  sx={{
                    borderRadius: "16px",
                    boxShadow: "rgba(0,0,0,.1) 0px 0px 20px 1px",
                    transitionDuration: "5s",
                    transition: "transform",
                    transform: "scale(1)",
                    "&:hover": {
                      boxShadow: "rgba(0, 0, 0, .1) 0px 0px 28px 19px",
                      cursor: "pointer",
                    },
                    width: { xs: "100%", sm: "90%", md: "44%", lg: "28%" },
                  }}
                >
                  <Link
                    href={`/blog/${blog.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <CardMedia
                      sx={{
                        height: "237px",
                      }}
                      image={imageUrl}
                    />
                    <CardContent>
                      <Typography
                        sx={{
                          color: "#10173A",
                          fontWeight: "bold",
                          fontFamily: "Gotham !important",
                          "&:hover": { color: "#4783ff", cursor: "pointer" },
                        }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        {blog.attributes.Title}
                      </Typography>
                      {!isMobile && (
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            margin: "0",
                            fontSize: "17px",
                            lineHeight: "25px",
                            fontWeight: "400",
                            color: "#3b4351",
                          }}
                        >
                          <div
                            dangerouslySetInnerHTML={{
                              __html: `${blog?.attributes?.Description.slice(
                                0,
                                110
                              )}...`,
                            }}
                          />
                        </Typography>
                      )}
                    </CardContent>
                  </Link>
                </Card>
              </React.Fragment>
            );
          })
        ) : (
          <Typography
            sx={{
              color: "#10173A",
              fontWeight: "bold",
              height: "50vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Gotham !important",
            }}
          >
            No blogs available
          </Typography>
        )}
      </Box>
    </div>
  );
};

export default BlogGrid;
