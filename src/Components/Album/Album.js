import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

import axios from "axios";
import Photo from "../Photo/Photo";
import { TextField } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Album({ user, album, setAlbums, Albums, Photos }) {
  const [expanded, setExpanded] = useState(false);
  const [PopUp, setPopUp] = useState(false);
  const [Title, setTitle] = useState(album.title);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleEdit = (e) => {
    if (album.userId !== 11) {
      return alert("you have no access to this album");
    }
    let editedAlbum = {
      userId: album.userId,
      id: album.id,
      title: Title,
    };
    e.preventDefault();
    axios.put(
      `https://jsonplaceholder.typicode.com/albums/${album.id}`,
      editedAlbum
    );
    setAlbums([editedAlbum, ...Albums.filter((item) => item.id !== album.id)]);
  };
  const handleDelete = async () => {
    if (album.userId !== 11) {
      return alert("you have no access to this album");
    }
    if (window.confirm("Are you sure to delete?") === true) {
      axios.delete(`https://jsonplaceholder.typicode.com/albums/${album.id}`);
      setAlbums(Albums.filter((item) => item.id !== album.id));
      console.log(Albums);
    } else {
      return;
    }
  };

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: "#" + stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  return (
    <Card sx={{ width: "100%" }}>
      <CardHeader
        avatar={
          <Avatar
            {...stringAvatar(`${user.name}`)}
            sx={{ bgcolor: `#${stringToColor(user.name)}` }}
            aria-label="recipe"
          ></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon onClick={() => setPopUp(!PopUp)} />
          </IconButton>
        }
        title={album.title}
        subheader={`Made by ${user.name}`}
      />

      {PopUp && (
        <div
          className="modalControl"
          style={{ position: "relative", top: "20%" }}
        >
          <div
            className="modalDiv"
            style={{
              position: "absolute",
              padding: "10px",
              background: "blue",
              right: "10px",
              backgroundColor: "whitesmoke",
              boxShadow:
                "0px 5px 10px rgba(0, 0, 0, 0.03), 0px 7.5px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: "5px",
              // overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              type="text"
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              <Button
                style={{ marginRight: "1rem" }}
                onClick={handleEdit}
                endIcon={<SendIcon />}
              >
                Edit
              </Button>
              <Button
                style={{ color: "red" }}
                startIcon={<DeleteIcon />}
                onClick={handleDelete}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}

      <CardMedia
        component="img"
        height="194"
        image={`https://place-hold.it/600X300/${stringToColor(
          album.title
        )}/?text=${album.title}`}
        alt="Paella dish"
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Photo Album={album} Photos={Photos} />
        </CardContent>
      </Collapse>
    </Card>
  );
}
