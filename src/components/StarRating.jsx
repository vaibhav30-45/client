import { Star } from "lucide-react";

export default function StarRating({ value }) {
  return (
    <div className="flex justify-center gap-1 my-3">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={18}
          className={
            i < value
              ? "fill-primary text-primary"
              : "text-gray-300"
          }
        />
      ))}
    </div>
  );
}
