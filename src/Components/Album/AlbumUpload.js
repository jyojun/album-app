import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AlbumUploadDiv } from "../../Style/AlbumCSS";

function AlbumUpload({ Albums, setAlbums, Photos, setPhotos }) {
  const [Title, setTitle] = useState("");
  const [AlbumId, setAlbumId] = useState(101);
  const [UserId, setUserId] = useState(11);
  const [PhotoId, setPhotoId] = useState(Photos.length + 1);
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();

    let newAlbum = {
      userId: UserId,
      id: AlbumId,
      title: Title,
    };

    let newPhoto = {
      albumId: AlbumId,
      id: PhotoId,
      title: "default photo",
      url:
        "https://images.unsplash.com/photo-1464820453369-31d2c0b651af?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1464820453369-31d2c0b651af?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480",
    };

    axios
      .post(`https://jsonplaceholder.typicode.com/albums`, newAlbum)
      .then((res) => {
        console.log(res.data);
        setAlbums([newAlbum, ...Albums]);
        setAlbumId(AlbumId + 1);
      });

    axios
      .post(`https://jsonplaceholder.typicode.com/photos`, newPhoto)
      .then((res) => {
        console.log(res.data);
        setPhotos([...Photos, newPhoto]);
        setPhotoId(PhotoId + 1);
      });

    navigate("/albums");
  };
  return (
    <AlbumUploadDiv>
      <form
        onSubmit={(e) => {
          onSubmit(e);
        }}
      >
        <label>Title</label>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          value={Title}
        />
        <button type="submit">Create New Album</button>
      </form>
    </AlbumUploadDiv>
  );
}

export default AlbumUpload;
