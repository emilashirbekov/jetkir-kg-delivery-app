import React from "react";
import CourierNavbar from "../CourierNavbar";
import CourierCard from "../CourierCard/CourierCard";
import { Pagination } from "@mui/material";

const CourierPage = () => {
  return (
    <div>
      <CourierNavbar />
      <CourierCard />
      <Pagination
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        count={10}
        color="primary"
        variant="outlined"
        shape="rounded"
      />
    </div>
  );
};

export default CourierPage;
