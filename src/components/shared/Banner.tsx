import bannerImg from "@/assets/banner.jpg";
import Image from "next/image";
import { Button } from "../ui/button";
const Banner = () => {
  return (
    <div className="container mx-auto bg-gray-100 ">
      <div className="lg:flex lg:p-8 gap-8 justify-center items-center">
        {/* image */}
        <div className="w-full ">
          <Image
            src={bannerImg}
            alt="banner"
            className="rounded"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
        {/* content */}
        <div className="w-full md:w-1/2 px-4 py-6">
          <p className="text-sm text-gray-500">Technology</p>
          <h1 className="text-xl md:text-2xl font-bold mt-1">
            OpenAI Is Growing Fast and Burning Through Piles of Money
          </h1>
          <p className="text-gray-700 mt-2 text-sm md:text-base">
            OpenAI monthly revenue hit US$300 million in August, up 1,700% since
            the beginning of 2023, and the company expects about $3.7 billion in
            annual sales this year, according to financial documents reviewed by
            The New York Times.
          </p>
          <p className="text-gray-700 mt-2 text-sm md:text-base">
            OpenAI estimates that its revenue will balloon to $1.6 billion next
            year. OpenAI revenue in August more than tripled from a year earlier
            according to the documents, and about 350 million people — up from
            around 100 million in March — used its services each month as of
            June.
          </p>

          <Button
            className="mt-4 px-6 py-2 text-sm md:text-base"
            variant="default"
          >
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
