import { useParams, useNavigate, Link } from "react-router-dom";
import { supabase } from "../client";
import { useEffect, useState } from "react";
import "./EditCreator.css";
// import { CCloseButton }
// import "../App.css";
function EditCreator() {
  let { name } = useParams();
  let navigate = useNavigate();

  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const getCreatorData = async () => {
      // console.log(name);
      const { data } = await supabase
        .from("creators")
        .select()
        .eq("name", name);

      setUserData(data[0]);
    };

    getCreatorData();
  }, []);

  const deleteCreator = async () => {
    const response = await supabase.from("creators").delete().eq("name", name);
    if (response.status == 204) {
      alert("Deleted");
    }
    navigate("/");
  };

  const handleChange = (e) => {
    let varName = e.target.name;
    let value = e.target.value;
    setUserData((prevInfo) => ({ ...prevInfo, [varName]: value }));
  };
  const submitChange = async (e) => {
    e.preventDefault();
    const { response, error } = await supabase
      .from("creators")
      .update(userData)
      .eq("name", name);
    console.log(error);
    alert("Successfully Edited");
  };
  const handleCloseBtn = () => {
    navigate("/");
  };
  return (
    userData && (
      <div className="form-wrapper">
        <form className="creator-form">
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
              value={userData.name}
              onChange={handleChange}
            />
          </label>

          <label>
            Description
            <textarea
              name="description"
              rows={4}
              defaultValue={userData.description}
              onChange={handleChange}
            />
          </label>

          <label>
            Link to YouTube channel
            <input
              name="youtubeURL"
              type="url"
              value={userData.youtubeURL}
              onChange={handleChange}
            />
          </label>

          <label>
            Link to Instagram page
            <input
              name="instagramURL"
              type="url"
              value={userData.instagramURL}
              onChange={handleChange}
            />
          </label>

          <label>
            Add a URL to an Image
            <input
              name="imgURL"
              type="url"
              value={userData.imgURL}
              onChange={handleChange}
            />
          </label>

          <button className="action-btn" type="submit" onClick={submitChange}>
            Update Info
          </button>
          <button className="action-btn" type="button" onClick={deleteCreator}>
            Delete Creator
          </button>
        </form>
      </div>
    )
  );
}

export default EditCreator;
