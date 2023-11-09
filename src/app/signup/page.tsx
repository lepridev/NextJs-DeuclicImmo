import LoginBox from "@/components/users/LoginBox";
import SignupBox from "@/components/users/SignupBox";
import CallToAction from "@/ui/CTA/CallToAction";
import Container from "@/ui/container/Container";
import Footer from "@/ui/footer/Footer";

import React from "react";

const SignUp = () => {
  return (
    <>
      <Container>
        <SignupBox />
      </Container>
      <CallToAction />
      <Footer />
    </>
  );
};

export default SignUp;
