import React from "react";
import TimelineUI from "../components/TimelineUI";
import MyForm from "../components/Form";
import SelectDate from "../components/SelectDate";

const Home = () => {
  return (
    <div>
      <SelectDate />
      <MyForm />
      <TimelineUI />
    </div>
  );
};

export default Home;
