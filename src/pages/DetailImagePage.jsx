import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
const API_KEY = import.meta.env.VITE_API_KEY;
const DetailImagePage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [image, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      try {
        setLoading(true);
        const { data } = await axios(`?key=${API_KEY}&id=${id}`);
        setImages(data.hits[0]);
      } catch (error) {
        console.error(`error while getting images ${error}`);
      } finally {
        setLoading(false);
      }
    };
    getImages();
  }, []);
  return (
    <>
    {loading ? <p>loading...</p> : <div className="container">
      <h2>{image.tags}</h2>
      <img
        src={image.largeImageURL}
        alt={image.tags}
        style={{ width: "100%", height: "600px", maxWidth: "600px" }}
      />

      <p>Author : {image.user}</p>
      <p>Views : {image.views}</p>
      <p>Downloads : {image.downloads}</p>
      <p>likes : {image.likes}</p>
      <p>Comments : {image.comments}</p>
    </div>}
    </>
  );
};

export default DetailImagePage;
