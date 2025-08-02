import "./App.css";
import ProfileCard from "./components/ProfileCard.jsx";
import { useState, useEffect } from "react";
import ShowCreator from "./pages/ShowAllCreators.jsx";
import AddCreator from "./pages/AddCreator.jsx";
import { Link, redirect, useNavigate } from "react-router-dom";
import getData from "./components/getData.js";
import ViewSingle from "./pages/ViewSingle.jsx";
function App() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await getData();
      setData(response);
    }

    fetchData();
  }, []);

  function clickable(item) {
    navigate(`/${item.name}`);
  }
  return (
    <>
      <div className="page">
        <div className="header">
          <h1>CREATORVERSE</h1>
          <nav>
            <ul>
              <Link to="/viewAll" className="view-btn">
                VIEW ALL CREATORS
              </Link>
              <Link to="/addCreator" className="view-btn">
                Add A CREATOR
              </Link>
            </ul>
          </nav>
        </div>
        <div className="display-profile-top-5">
          {data && data.length >= 5 ? (
            data.slice(0, 5).map((item) => (
              <div
                onClick={() => clickable(item)}
                className="link"
                key={item.id}
              >
                <ProfileCard
                  key={item.name}
                  name={item.name}
                  imgUrl={item.imgURL}
                  instaLink={item.instagramURL}
                  ytLink={item.youtubeURL}
                  description={item.description}
                />
              </div>
            ))
          ) : (
            <div>NOT ENOUGH CREATORS HAVE BEEN ADDED</div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
