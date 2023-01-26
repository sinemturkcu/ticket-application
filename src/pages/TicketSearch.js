import React from "react";
import FindRoadCard from "../components/findRoadCard";
import Navbar from "../components/navbar";
class SelamUser extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <p className="mt-8 text-lg ml-20">Find road </p>
        <FindRoadCard />
      </>
    );
  }
}
export default SelamUser;
