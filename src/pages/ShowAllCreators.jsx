import ProfileCard from "../components/ProfileCard.jsx";
import { useState, useEffect } from "react";
import getData from "../components/getData.js";
import "./ShowAllCreators.css";
import { BsThreads } from "react-icons/bs";
import { HiVariable } from "react-icons/hi";
export default function ShowCreator() {
  const [data, setData] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await getData();
      setData(response);
    }

    fetchData();
  }, []);

  return (
    <div className="viewAcc">
      {data ? (
        data.map((item) => (
          <ProfileCard
            key={item.name}
            name={item.name}
            imgUrl={item.imgURL}
            instaLink={item.instagramURL}
            ytLink={item.youtubeURL}
            description={item.description}
          />
        ))
      ) : (
        <div>NO ONE HAS BEEN ADDED YET</div>
      )}
    </div>
  );
}
