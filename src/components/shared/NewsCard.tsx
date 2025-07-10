import { NewsItemProps } from "@/types/news";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const NewsCard = ({ item }: NewsItemProps) => {
  const {
    _id,
    title,
    description,
    snippet,
    url,
    imageUrl,
    language,
    published_at,
    source,
    categories,

    relevance_score,
  } = item;
  return (
    <div className="border rounded-lg p-4 bg-white shadow-md">
      <Link href={`news/${_id}`}>
        <Image
          src={imageUrl}
          width={500}
          height={500}
          alt="News Image"
          className="rounded-lg mb-4"
        />

        <h1 className="text-lg font-bold mb-2">{title.substring(0, 40)}....</h1>

        <p className="mb-4">{description.substring(0, 70)}...</p>
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
