import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import Album from "./Album";
import { AlbumDiv } from "../../Style/AlbumCSS";

import { Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AlbumUpload from "./AlbumUpload";
import { AuthContext } from "../../Context/Auth";

function Albums() {
  const [Albums, setAlbums] = useState([]);
  const [Photos, setPhotos] = useState([]);
  const [Users, setUsers] = useState([]);
  const [Offset, setOffset] = useState(1);
  const [Limit, setLimit] = useState(5);
  const Auth = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!Auth.isAuthenticated) {
      alert("Please Login");
      navigate("/login");
    }
  }, []);

  const currentUser = {
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
  };

  const pagination = (array, page_size, page_number) => {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  };

  useEffect(() => {
    getAlbums();
    getUsers();
    getPhotos();
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
          setUsers([...res.data, currentUser]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPhotos = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        if (Photos.length === 0) {
          setPhotos(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <AlbumDiv>
      <AlbumUpload
        Albums={Albums}
        setAlbums={setAlbums}
        Users={Users}
        setUsers={setUsers}
        Photos={Photos}
        setPhotos={setPhotos}
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
                    Photos={Photos}
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
