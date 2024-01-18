import React, { useState, useEffect } from "react";
import { BiStar, BiSolidStar } from "react-icons/bi";

interface Review {
  user_id: string;
  item_id: string;
  shop_id: string;
  review: string;
  rating: number;
  images_id: string[];
}

function ReviewCard({ review }: Review) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${review.user_id}`, {
          method: "GET",
          headers: JSON.parse(process.env.NEXT_PUBLIC_HEADER),
        });
        if (!response.ok) {
          console.error("Error fetching item:", response.status, response.statusText);
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching item or shop:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="font-bold">{user?.name}</h1>
      <div className="flex text-[#991E23]">
        {[...Array(review?.rating)].map((_, index) => (
          <BiSolidStar key={index} />
        ))}
        {[...Array(5 - review?.rating)].map((_, index) => (
          <BiStar key={index} />
        ))}
      </div>
      <p>{review?.review}</p>
    </div>
  );
}

export default ReviewCard;
