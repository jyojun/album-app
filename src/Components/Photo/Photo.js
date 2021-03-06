import React, { useEffect, useState } from "react";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { PhotosDiv } from "../../Style/PhotoCSS";

function Photo({ Album, Photos }) {
  const breakpoints = {
    xs: 0,
    sm: 600,
    md: 960,
  };

  const getColumns = (width) => {
    if (width < breakpoints.sm) {
      return 2;
    } else if (width < breakpoints.md) {
      return 3;
    } else {
      return 3;
    }
  };

  const [columns, setColumns] = useState(getColumns(window.innerWidth));
  const updateDimensions = () => {
    setColumns(getColumns(window.innerWidth));
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const [AlbumPhotos, setAlbumPhotos] = useState([]);

  const getPhotos = () => {
    setAlbumPhotos(Photos.filter((photo) => photo.albumId === Album.id));
  };
  useEffect(() => {
    getPhotos();
  }, [Photos]);
  // console.log(usePhoto.Photos);
  return (
    <PhotosDiv>
      <ImageList className="my-image-list" sx={{}} cols={columns} gap={100}>
        {AlbumPhotos.map((item) => (
          <ImageListItem
            style={{ boxShadow: "0 40px 40px -40px black" }}
            key={item.url}
          >
            <img
              src={`${item.url}`}
              srcSet={`${item.url}`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </PhotosDiv>
  );
}
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];
export default Photo;
