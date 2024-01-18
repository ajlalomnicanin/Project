import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Typography } from "@mui/material";
import {
  fetchBathroom,
  fetchBedroom,
  fetchKitchen,
  fetchLivingroom,
} from "../slices/category";
import Products from "../components/products/index";
function Categories() {
  const data = useParams();
  const Bathroom = useSelector((state) => state.category.bathroom);
  const Bedroom = useSelector((state) => state.category.bedroom);
  const Livingroom = useSelector((state) => state.category.livingroom);
  const Kitchen = useSelector((state) => state.category.kitchen);
  const dispatch = useDispatch();
  console.log(Bathroom);
  useEffect(() => {
    dispatch(fetchBathroom());
    dispatch(fetchBedroom());
    dispatch(fetchLivingroom());
    dispatch(fetchKitchen());
  }, []);
  return (
    <>
      <Typography className="naslovi" variant="h2">
        Bathroom
      </Typography>
      <div>
        <Products data={Bathroom?.data} />
      </div>
      <Typography className="naslovi" variant="h2">
        Bedroom
      </Typography>
      <div>
        <Products data={Bedroom?.data} />
      </div>
      <Typography className="naslovi" variant="h2">
        Living room
      </Typography>
      <div>
        <Products data={Livingroom?.data} />
      </div>
      <Typography className="naslovi" variant="h2">
        Kitchen
      </Typography>
      <div>
        <Products data={Kitchen?.data} />
      </div>
    </>
  );
}

export default Categories;
