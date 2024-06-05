import React from "react";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "next/link";
import Header from "../components/Header";

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(8),
  textAlign: "center",
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '80vh',
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  textAlign: 'center',
  maxWidth: 600,
  width: '100%',
}));

const StyledTitle = styled('h1')(({ theme }) => ({
  fontSize: '3rem',
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main,
}));

const StyledText = styled('p')(({ theme }) => ({
  fontSize: '1.25rem',
  marginBottom: theme.spacing(4),
  color: theme.palette.text.secondary,
}));

const Custom404 = () => {
  return (
    <>
      <Header navbarColor="rgba(74, 74, 74, 0.9)" />
      <StyledContainer>
        <Box elevation={3}>
          <StyledTitle>404 - Page Not Found</StyledTitle>
          <StyledText>The page you are looking for does not exist.</StyledText>
          <Link href="/" passHref>
            <Button variant="contained" color="primary">
              Go Back Home
            </Button>
          </Link>
        </Box>
      </StyledContainer>
    </>
  );
};

export default Custom404;
