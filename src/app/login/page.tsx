import LoginBox from "@/components/users/LoginBox";
import CallToAction from "@/ui/CTA/CallToAction";
import Container from "@/ui/container/Container";
import Footer from "@/ui/footer/Footer";
import React from "react";

const Login = () => {
  return (
    <>
      <Container>
        <LoginBox />
      </Container>
      <CallToAction />
      <Footer />
    </>
  );
};

export default Login;
