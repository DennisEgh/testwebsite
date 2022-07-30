import React from "react";
import Fifthcar from "../components/Fifthcar";
import Fourthcar from "../components/Fourthcar";
import Landing from "../components/landing";
import Secondcar from "../components/Secondcar";
import Sixthcar from "../components/Sixthcar";
import Thirdcar from "../components/Thirdcar";

export default function Home() {
  return (
    <>
      <Landing />
      <Secondcar />
      <Thirdcar />
      <Fourthcar />
      <Fifthcar />
      <Sixthcar />
    </>
  );
}
