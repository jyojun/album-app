import React, { useState, useEffect } from "react";
import axios from "axios";

import Album from "./Album";
import { AlbumDiv } from "../../Style/AlbumCSS";

import { Pagination } from "@mui/material";
import { Link } from "react-router-dom";
import AlbumUpload from "./AlbumUpload";

function Albums() {
  const [Albums, setAlbums] = useState([]);
  const [Users, setUsers] = useState([]);
  const [Offset, setOffset] = useState(1);
  const [Limit, setLimit] = useState(5);

  const pagination = (array, page_size, page_number) => {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  };

  useEffect(() => {
    getAlbums();
    getUsers();
  }, []);

  const getAlbums = async () => {
    await axios
      .get(`https://jsonplaceholder.typicode.com/albums`)
      .then((res) => {
        if (Albums.length === 0) {
          setAlbums(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUsers = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (Users.length === 0) {
          setUsers(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <AlbumDiv>
      {/* <button
        onClick={() => {
          setUsers([
            ...Users,
            {
              id: 11,
              name: "Hyojun Park",
              username: "Hyojun",
              email: "parkcode98@gmail.com",
              address: {
                street: "Kulas Light",
                suite: "Apt. 556",
                city: "Gwenborough",
                zipcode: "13289",
                geo: {
                  lat: "-37.3159",
                  lng: "81.1496",
                },
              },
              phone: "010-2504-5532",
              website: "github.com/jyojun",
              company: {
                name: "Freedsoft",
                catchPhrase: "Multi-layered client-server neural-net",
                bs: "harness real-time e-markets",
              },
            },
          ]);
          console.log(Users);
        }}
      >
        Create User
      </button> */}
      <Link to="upload">Create Album</Link>
      <AlbumUpload
        Albums={Albums}
        setAlbums={setAlbums}
        Users={Users}
        setUsers={setUsers}
      />
      {pagination(Albums, Limit, Offset).map((album, idx) => {
        return (
          <div key={idx} style={{ marginTop: "3rem" }}>
            {Users.map((user, idx) => {
              if (user.id === album.userId) {
                return (
                  <Album
                    user={user}
                    album={album}
                    Albums={Albums}
                    setAlbums={setAlbums}
                  />
                );
              }
            })}
          </div>
        );
      })}
      <Pagination
        count={parseInt(Albums.length / Limit) + 1}
        page={Offset}
        onChange={(e) => {
          setOffset(parseInt(e.target.innerText));
        }}
      />
    </AlbumDiv>
  );
}

export default Albums;
