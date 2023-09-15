import React from "react";
import { Typograpy } from "../typography/Typography";

const DescriptionBox = () => {
  return (
    <div className="bg-white p-4 m-4 space-y-2 rounded-md">
      <div className="bg-gray-100 w-full h-6 flex items-center justify-start px-3 rounded-md">
        <Typograpy variant="body-sm" weight="semibold">
          Description
        </Typograpy>
      </div>

      <div className="w-full">
        <Typograpy variant="body-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quos cumque quo quisquam amet, neque laudantium facilis placeat unde
          pariatur sequi nulla laborum, nobis maxime voluptates officia error
          fugiat similique. Architecto voluptatibus exercitationem explicabo
          ipsum id officia blanditiis deleniti numquam fuga voluptates, commodi
          porro magnam. Id consequuntur quae illo vero, iure molestias iste
          voluptate vitae sapiente eligendi culpa laborum laudantium.
          Accusantium aspernatur dolores odio minima quibusdam inventore qui aut
          rerum, aliquid error quae nulla fugit iste, earum sed recusandae enim
          veritatis. Consequatur quasi excepturi deleniti omnis sint est impedit
          amet. Tempore soluta, vitae magni, quibusdam harum dolor ad quisquam,
          beatae temporibus aperiam saepe aut. Enim officiis reiciendis dolore
          ex repellendus, nihil, iste pariatur rerum in, repellat iusto commodi!
          Quo, obcaecati. Sit mollitia rerum consequatur recusandae
          exercitationem autem ipsam voluptate ipsum aspernatur eaque nobis
          animi et at quod nihil cum neque veniam sint iusto praesentium
          veritatis alias voluptatibus, necessitatibus amet. Repellendus!
        </Typograpy>
      </div>
    </div>
  );
};

export default DescriptionBox;
