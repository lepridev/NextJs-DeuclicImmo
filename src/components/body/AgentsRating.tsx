import AgentBox from "@/ui/box/AgentBox";
import Container from "@/ui/container/Container";
import { Titleline } from "@/ui/titleLine/titleline";

import React from "react";

const AgentsRating = () => {
  return (
    <div className="bg-red-50">
      <Container>
        <Titleline
          title="Les meilleurs agents selon les Utilisateurs"
          description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
        />
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <AgentBox
            name="Howel Constant"
            description="Un agent immobilier tres courtoir, il donne plusieur option afin de simplifer les choses"
          />
          <AgentBox
            name="Armand Lepri"
            description="Agent correct qui a des offres ciblées"
          />
          <AgentBox
            name="Mme Yapo epse Howel"
            description="Dormez tranquilement elle s'en charge et vous trouve de belles propositions"
          />
        </div>
      </Container>
    </div>
  );
};

export default AgentsRating;
