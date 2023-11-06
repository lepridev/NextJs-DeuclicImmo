import ArticleBox from "@/ui/box/ArticleBox";
import Container from "@/ui/container/Container";
import { Titleline } from "@/ui/titleLine/titleline";
import React from "react";

const Articles = () => {
  return (
    <div className="bg-slate-50">
      <Container>
        <Titleline
          title="Nouveautés su Deuclic Immobilier"
          description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
        />
        <div className="flex flex-col md:flex-row items-center justify-center gap-5">
          <ArticleBox />
          <ArticleBox />
          <ArticleBox />
        </div>
      </Container>
    </div>
  );
};

export default Articles;
