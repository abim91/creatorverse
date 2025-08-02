import "./profileCard.css";
import React from "react";
import { FaYoutube, FaInstagram, FaRegStar, FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
function ProfileCard({ name, imgUrl, description, ytLink, instaLink }) {
  return (
    <article className="card" aria-label={`Profile card for ${name}`}>
      <img className="card__photo" src={imgUrl} alt={name} />

      <div className="card__overlay">
        <header className="card__header">
          <h2 className="card__title">{name}</h2>
          <div className="card__actions">
            <Link
              to={`/editCreator/${name}`}
              onClick={(e) => e.stopPropagation()}
            >
              <FaRegEdit className="icon action" aria-label="Edit profile" />
            </Link>
          </div>
        </header>

        <nav className="card__social">
          {ytLink && (
            <a
              href={ytLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube channel"
              onClick={(e) => e.stopPropagation()}
            >
              <FaYoutube className="icon yt" />
            </a>
          )}
          {instaLink && (
            <a
              href={instaLink}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
            >
              <FaInstagram className="icon ig" />
            </a>
          )}
        </nav>

        <p className="card__description">{description}</p>
      </div>
    </article>
  );
}
export default ProfileCard;
