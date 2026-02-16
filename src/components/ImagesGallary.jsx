import React from "react";
import Skeleton from "./Skeleton";
import { Link } from "react-router-dom";

const ImagesGallary = ({ images, Loading }) => {
  return (
    <ul className="ImageGallery">
      {images.map((el) =>
        Loading ? (
          <Skeleton />
        ) : (
          <li className="ImageGalleryItem" key={el.id}>
            <Link to={`image/${el.id}`}>
              <img
                className="ImageGalleryItem-image"
                src={el.webformatURL}
                alt={el.tags}
              />
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

export default ImagesGallary;
