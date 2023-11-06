import WorkingStep from "@/ui/steps/WorkingStep";
import { Titleline } from "@/ui/titleLine/titleline";

import { MdKeyboardArrowRight } from "react-icons/md";
import { PiNewspaperClippingDuotone } from "react-icons/pi";
import { HiUsers } from "react-icons/hi";
import { GiBuyCard } from "react-icons/gi";
import Container from "@/ui/container/Container";

const HowItWorks = () => {
  return (
    <Container>
      <Titleline
        title="Comment ça marche"
        description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
      />
      <div className="flex flex-col  md:flex-row items-center justify-center md:space-x-4 gap-5">
        <WorkingStep
          label="Evaluer une proprieté"
          description="There are many variations of passages of Lorem Ipsum available, but the majority have Ipsum available."
          icon={{ icon: PiNewspaperClippingDuotone }}
          color="#29cf8d"
          borderColor="#29cf8d"
          bgColor="#35d09231"
          className="border-2 border-[#29cf8d] bg-[#29cf8d51]"
        />
        <WorkingStep
          label="Rencontrer l'agent immobilier"
          description="There are many variations of passages of Lorem Ipsum available, but the majority have Ipsum available."
          icon={{ icon: HiUsers }}
          color="#ff8f00"
          borderColor="#d09535"
          bgColor="#d0953531"
          className="border-2 border-[#ff8f00] bg-[#ff910048]"
        />
        <WorkingStep
          label="Finaliser et recuperer les clées"
          description="There are many variations of passages of Lorem Ipsum available, but the majority have Ipsum available."
          icon={{ icon: GiBuyCard }}
          color="#1d96ff"
          borderColor="#d09535"
          bgColor="#d0953531"
          className="border-2 border-[#1d96ff] bg-[#1d96ff4f]"
        />
      </div>
    </Container>
  );
};

export default HowItWorks;
