import { NewsItemProps } from "@/types/news";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const NewsCard = ({ item }: NewsItemProps) => {
  const { _id, title, description, imageUrl } = item;
  return (
    <div className="border p-4 rounded-md shadow-md">
      <Link href={`news/${_id}`}>
        <Image
          src={imageUrl}
          width={500}
          height={500}
          alt="News Image"
          className="rounded-lg mb-4"
        />

        <h2 className="text-xl font-semibold my-3">
          {item?.title.substring(0, 65)}..
        </h2>

        <p className="mb-4">{item?.description.substring(0, 85)}...</p>
      </Link>
      <Link href={`news/${_id}`}>
        <Button className="mt-2" variant="default">
          Read More
        </Button>
      </Link>
    </div>
  );
};

export default NewsCard;
