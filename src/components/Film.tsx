import React from "react";
import { useState, useEffect } from "react";

interface FilmProps {
  url: string;
}
interface IFilm {
  title: string;
}
const Film = (props: FilmProps) => {
  const [film, setFilm] = useState<IFilm | null>(null);

  useEffect(() => {
    fetch(props.url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFilm(data);
      });
  }, []);
  console.log(film);
  return (
    <div>
      <p>{film?.title}</p>
    </div>
  );
};

export default Film;
