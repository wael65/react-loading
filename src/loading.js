import React from "react";
import ReactLoading from "react-loading";

export const list = [
  {
    prop: "balls",
    name: "Balls",
  },
  {
    prop: "bars",
    name: "Bars",
  },
  {
    prop: "bubbles",
    name: "Bubbles",
  },
  {
    prop: "cubes",
    name: "Cubes",
  },
  {
    prop: "cylon",
    name: "Cylon",
  },
  {
    prop: "spin",
    name: "Spin",
  },
  {
    prop: "spinningBubbles",
    name: "SpinningBubbles",
  },
  {
    prop: "spokes",
    name: "Spokes",
  },
];

const Loading = () => (
  <div className="Loading">
    <ReactLoading
      type={list[1].prop}
      color="#3140cc"
      // height={667}
      // width={375}
    />
  </div>
);

export default Loading;
