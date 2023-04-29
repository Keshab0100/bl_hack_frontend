import React from "react";
import TimelineUI from "../components/TimelineUI";
import MyForm from "../components/Form";
import SelectDate from "../components/SelectDate";

const Home = () => {
  return (
    <div style={{background: "#f0f0f0", padding: "1rem", display: "flex",flexDirection: "column", alignItems: "center"}}>
      <SelectDate />
      <MyForm />
      <TimelineUI />
    </div>
  );
};

export default Home;
