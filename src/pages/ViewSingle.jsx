import { useParams, useNavigate, Link } from "react-router-dom";
import { supabase } from "../client";
import { useEffect, useState } from "react";
import "./ViewSingle.css";
import ViewSingleCard from "../components/ViewSingle";
// import { CCloseButton }
// import "../App.css";
function ViewSingle() {
  let { name } = useParams();
  let navigate = useNavigate();

  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const getCreatorData = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select()
        .eq("name", name);

      setUserData(data[0]);
      console.log({ error });
    };

    getCreatorData();
  }, []);

  const handleCloseBtn = () => {
    navigate("/");
  };
  return (
    userData && (
      <div className="form-wrapper">
        <button
          className="close-button"
          aria-label="Close alert"
          type="button"
          onClick={handleCloseBtn}
        ></button>
        <ViewSingleCard
          key={userData.name}
          name={userData.name}
          imgUrl={userData.imgURL}
          instaLink={userData.instagramURL}
          ytLink={userData.youtubeURL}
          description={userData.description}
        />
      </div>
    )
  );
}

export default ViewSingle;
