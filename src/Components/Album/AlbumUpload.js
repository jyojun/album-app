import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AlbumUpload({ Albums, setAlbums, Users, setUsers }) {
  const [Title, setTitle] = useState("");
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();

    let body = {
      userId: 11,
      id: 101,
      title: Title,
    };
    // console.log([...Users, user]);
    console.log([body, ...Albums]);
    // setUsers([...Users, user]);
    setAlbums([body, ...Albums]);

    navigate("/albums");
  };
  return (
    <div>
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
    </div>
  );
}

export default AlbumUpload;
