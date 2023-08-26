import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Movie from "./Movie";
const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className=" text-white font-bold md:text-xl p-4">{title}</h2>
      <div className=" relative flex items-center group">
        <FaChevronLeft
        onClick={slideLeft}
          className=" left-1 rounded-full absolute opacity-100 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={25}
          color="white"
        />
        <div
          id={"slider" + rowID}
          className=" w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <FaChevronRight
        onClick={slideRight}
          className=" right-1 rounded-full absolute opacity-100 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block "
          size={25}
          color="white"
        />
      </div>
    </>
  );
};

export default Row;
