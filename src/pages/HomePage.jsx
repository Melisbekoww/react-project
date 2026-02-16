import React, { useEffect, useState } from "react";
import { fetchImages } from "../api/fetchData";
import ImagesGallary from "../components/ImagesGallary";
import { useOutletContext } from "react-router-dom";
import Skeleton from "../components/Skeleton";
import Hero from "../components/Hero";
import LoadMore from "../components/LoadMore";

const HomePage = () => {
  const [images, setImages] = useState([]);
  const { search } = useOutletContext();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState (1)

  const getImages = async () => {
    try {
      setLoading(true);
      const data = await fetchImages(search, page);
      setImages((prev)=> [...prev,...data.hits]);
    } catch (error) {
      console.error(`error while getting images ${error}`);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getImages();
  }, [search,page]);

  const handleLoadMore = () => {
  setPage(page + 1)
  }
  return (
    <main>
      <Hero />
      <ImagesGallary images={images} loading={loading} />
      <LoadMore handleLoadMore={handleLoadMore}/>
    </main>
  );
};

export default HomePage;
