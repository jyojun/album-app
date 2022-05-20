import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Photo from "../Photo/Photo";
import { AlbumDetailDiv } from "../../Style/AlbumCSS";

function AlbumDetail() {
  const param = useParams();

  const [Album, setAlbum] = useState({});
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/albums?id=${param.albumId}`)
      .then((res) => {
        setAlbum(res.data[0]);
        // console.log(Album);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <AlbumDetailDiv>
      <h3>{Album.title} Album Photos</h3>
      <Photo Album={Album} />
    </AlbumDetailDiv>
  );
}

export default AlbumDetail;
