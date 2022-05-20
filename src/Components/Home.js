import React from "react";
import { HomeDiv } from "../Style/HomeCSS";
import Gallery from "react-photo-gallery";

function Home() {
  return (
    <HomeDiv>
      <Gallery photos={photos} />
    </HomeDiv>
  );
}
export const photos = [
  {
    src:
      "https://images.unsplash.com/photo-1528569937393-ee892b976859?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070",
    width: 4,
    height: 3,
  },
  {
    src:
      "https://images.unsplash.com/photo-1453828423292-392a660a502f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070",
    width: 1,
    height: 1,
  },
  {
    src:
      "https://images.unsplash.com/photo-1598623549917-a38dc6cd19b5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070",
    width: 4,
    height: 3,
  },
  {
    src:
      "https://images.unsplash.com/photo-1594333614467-15503a37381a?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070",
    width: 1,
    height: 1,
  },
  {
    src:
      "https://images.unsplash.com/photo-1581403339300-ac621813a3b9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071",
    width: 4,
    height: 3,
  },
  {
    src:
      "https://images.unsplash.com/photo-1618468121522-fa4b1cbac0e2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070",
    width: 4,
    height: 3,
  },
  {
    src:
      "https://images.unsplash.com/photo-1534531688091-a458257992cb?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070",
    width: 3,
    height: 4,
  },
  {
    src:
      "https://images.unsplash.com/photo-1619646285741-538322e8d6b8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070",
    width: 4,
    height: 3,
  },
  {
    src:
      "https://images.unsplash.com/photo-1627353802076-bd439e09244b?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232",
    width: 4,
    height: 3,
  },
  {
    src:
      "https://images.unsplash.com/photo-1581171388860-c49b6cf74dd9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067",
    width: 3,
    height: 4,
  },
  {
    src:
      "https://images.unsplash.com/photo-1530288782965-fbad40327074?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZpbG0lMjBhbGJ1bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800",
    width: 6,
    height: 3,
  },
  {
    src:
      "https://images.unsplash.com/photo-1602518531278-481ff20dd5c3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3480",
    width: 6,
    height: 2,
  },
  {
    src:
      "https://images.unsplash.com/photo-1508952483248-a4e9a4502d35?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070",
    width: 3,
    height: 4,
  },
  {
    src:
      "https://images.unsplash.com/photo-1599342595735-efe2541bf3b3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2138",
    width: 4,
    height: 3,
  },
  {
    src:
      "https://images.unsplash.com/photo-1627353802047-02c3f5b5fc3e?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232",
    width: 4,
    height: 3,
  },
  {
    src:
      "https://images.unsplash.com/photo-1646645766793-25e5ffa020e9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070",
    width: 4,
    height: 3,
  },
  {
    src:
      "https://images.unsplash.com/photo-1566400907235-027d5ace06b6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2028",
    width: 4,
    height: 3,
  },
];

export default Home;
