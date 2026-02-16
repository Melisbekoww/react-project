import React from "react";
import SimpleSlider from "./SimpleSlider";
import { useState } from "react";
import { useEffect } from "react";
import { fetchImages } from "../api/fetchData";

const Hero = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("nature");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getImages = async () => {
      try {
        setLoading(true);
        const data = await fetchImages(search);
        setImages(data.hits.slice(0, 6));
      } catch (error) {
        console.error(`error while getting images ${error}`);
      } finally {
        setLoading(false);
      }
    };
    getImages();
  }, [search]);
  return (
    <section className="hero">
      <SimpleSlider images={images} />
    </section>
  );
};

export default Hero;
