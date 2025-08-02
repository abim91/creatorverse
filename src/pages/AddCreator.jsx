import "./AddCreator.css";
import { supabase } from "../client.js";
import { useState } from "react";
// import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function AddCreator() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: "",
    description: "",
    instagramURL: "",
    youtubeURL: "",
    imgURL: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("adding something");
    const { error } = await supabase.from("creators").insert({
      name: userInfo.name,
      description: userInfo.description,
      instagramURL: userInfo.instagramURL,
      youtubeURL: userInfo.youtubeURL,
      imgURL: userInfo.imgURL,
    });

    console.log("error: ", error);
    navigate("/");
  };
  const handleChange = async (e) => {
    let varName = e.target.name;
    let value = e.target.value;
    console.log(value);
    setUserInfo((prevInfo) => ({ ...prevInfo, [varName]: value }));
  };
  const handleCloseBtn = () => {
    navigate("/");
  };
  return (
    <div className="form-wrapper">
      <form className="creator-form" onSubmit={handleSubmit}>
        <button
          className="close-button"
          aria-label="Close alert"
          type="button"
          onClick={handleCloseBtn}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <label>
          Name
          <input
            name="name"
            type="text"
            // value={userInfo.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Description
          <textarea
            name="description"
            rows={4}
            // value={userInfo.description}
            onChange={handleChange}
          />
        </label>

        <label>
          Link to YouTube channel
          <input
            name="youtubeURL"
            type="url"
            placeholder="https://youtube.com/…"
            // value={userInfo.youtubeURL}
            onChange={handleChange}
          />
        </label>

        <label>
          Link to Instagram page
          <input
            name="instagramURL"
            type="url"
            placeholder="https://instagram.com/…"
            // value={userInfo.instagramURL}
            onChange={handleChange}
          />
        </label>

        <label>
          Add a URL to an Image
          <input
            name="imgURL"
            type="url"
            placeholder="https://imageLink.com/…"
            // value={userInfo.imgURL}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Add Creator</button>
      </form>
    </div>
  );
}
