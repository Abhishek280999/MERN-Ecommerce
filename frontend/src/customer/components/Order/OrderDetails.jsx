import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTraker from "./OrderTraker";
import StarIcon from "@mui/icons-material/Star";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTraker activeStep={3} />
      </div>
      {[1, 1, 1, 1, 1].map((item) => (
        <Grid className="space-y-5" container>
          <Grid
            item
            container
            className="shadow-xl rounded-md p-5 border  "
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[6rem] h-[6rem] object-cover object-top"
                  src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
                  alt=""
                />
                <div className="ml-5 space-y-2">
                  <p className="font-semibold">
                    Men Printed Pure Cotton Straight Kurta
                  </p>
                  <p className="opacity-50 text-xs font-semibold space-x-5">
                    <span>Color: pink</span> <span>Size: L</span>
                  </p>
                  <p>Seller: Majestic Man</p>
                  <p>₹499 </p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <Box
                sx={{ color: deepPurple[500] }}
                className="flex items-center cursor-pointer"
              >
                <StarIcon sx={{ fontSize: "2rem" }} className="px-2 text-5xl" />
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

export default OrderDetails;
