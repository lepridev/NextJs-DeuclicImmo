import RecentOfforts from "@/components/body/RecentOfforts";
import OffertDescription from "@/components/offertDetails/OffertDescription";
import OffertDetail from "@/components/offertDetails/OffertDetail";
import OffertGaleries from "@/components/offertDetails/OffertGaleries";
import OffertLocation from "@/components/offertDetails/OffertLocation";
import OffertRecap from "@/components/offertDetails/OffertRecap";
import OffertReviews from "@/components/offertDetails/OffertReviews";
import CallToAction from "@/ui/CTA/CallToAction";
import CarouselBox from "@/ui/carousel/CarouselBox";
import OffertAgentBox from "@/ui/container/OffertAgentBox";
import ShareBox from "@/ui/container/ShareBox";
import Footer from "@/ui/footer/Footer";
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
      <div id="carousel" className=" w-full">
        <div className=" overflow-y-hidden z-20">
          <CarouselBox />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-center px-1 md:p-10 w-full gap-7 ">
        <div className="w-full md:w-2/3 space-y-3 md:space-y-5">
          <OffertRecap />
          <OffertDetail />
          <OffertDescription />
          <OffertLocation />
          <OffertGaleries />
          <OffertReviews />
        </div>
        <div className="w-full md:w-1/3 space-y-3 md:space-y-5">
          <ShareBox />
          <OffertAgentBox />
        </div>
      </div>
      <RecentOfforts />
      <CallToAction />

      <Footer />
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
