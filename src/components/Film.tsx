import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

interface FilmProps {
  url: string;
}
interface IFilm {
  title: string;
}
const Film = (props: FilmProps) => {
  const [film, setFilm] = useState<IFilm | null>(null);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch(props.url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFilm(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);
  return (
    <div>
      <List>- {film?.title}</List>
      {error ? <p>{error}</p> : ""}
    </div>
  );
};

export default Film;
const List = styled.p`
  padding-left: 1.2rem;
`;
