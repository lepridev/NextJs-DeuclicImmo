import OffertDescription from "@/components/offertDetails/OffertDescription";
import OffertDetail from "@/components/offertDetails/OffertDetail";
import OffertGaleries from "@/components/offertDetails/OffertGaleries";
import OffertLocation from "@/components/offertDetails/OffertLocation";
import OffertRecap from "@/components/offertDetails/OffertRecap";
import OffertReviews from "@/components/offertDetails/OffertReviews";
import Container from "@/ui/container/Container";
import OffertAgentBox from "@/ui/container/OffertAgentBox";
import ShareBox from "@/ui/container/ShareBox";
import axios from "axios";
import Image from "next/image";

type Props = {};

const OffertDetails = async ({ params }: any) => {
  // const id = params.id;

  // const data = await getOffertById(id);

  // console.log("frontID", id);
  // console.log("data", data.data.getOffertById);

  // const OffertData = data.data.getOffertById;

  return (
    <div className="flex flex-col items-center justify-center gap-7 w-full bg-slate-200 ">
      <div className="h-[20%] flex flex-row w-full overflow-hidden ">
        <Image
          src={"/assets/images/p-1.jpg"}
          alt="Appartement"
          width={500}
          height={500}
          className="object-cover hover:scale-125 animate"
        />
        <Image
          src={"/assets/images/p-3.jpg"}
          alt="Appartement"
          width={500}
          height={500}
          className="object-cover hover:scale-125 animate"
        />
        <Image
          src={"/assets/images/p-2.jpg"}
          alt="Appartement"
          width={500}
          height={500}
          className="object-cover hover:scale-125 animate"
        />
      </div>

      <div className="flex flex-row items-start justify-center p-10 w-full gap-7 ">
        <div className="w-2/3 space-y-5">
          <OffertRecap />
          <OffertDetail />
          <OffertDescription />
          <OffertLocation />
          <OffertGaleries />
          <OffertReviews />
        </div>
        <div className="w-1/3 space-y-5">
          <ShareBox />
          <OffertAgentBox />
        </div>
      </div>
    </div>
  );
};

export default OffertDetails;

export const getOffertById = async (id: any) => {
  const res = await axios.post("http://localhost:3000/api/properties/offert", {
    id,
  });

  return res;
};
