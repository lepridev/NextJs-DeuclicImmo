import React from "react";
import { Typograpy } from "../typography/Typography";
import Container from "../container/Container";
import { Button } from "../buttons/Button";

type Props = {};

const CallToAction = (props: Props) => {
  return (
    <div className="bg-[#FFA50D]">
      <Container className="flex flex-row items-center justify-around py-6">
        <div className="space-y-2 text-center">
          <Typograpy theme="white" weight="bold">
            Vous voulez devenir agent immobilier ?
          </Typograpy>
          <Typograpy variant="body-sm" theme="white" weight="medium">
            Nous vous aiderons à développer votre carrière et votre croissance.
          </Typograpy>
        </div>
        <div>
          <Button variant="primary" size="large">
            Inscrivez vous Maintenant
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default CallToAction;
