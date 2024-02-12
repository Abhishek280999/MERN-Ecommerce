import { Grid } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";



const OrderCard = ({item ,order}) => {
  const navigate = useNavigate()
 
  return (
    <div  onClick={()=> navigate(`/account/order/${5}`)} className="p-5 shadow-md  hover:shadow-2xl border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer ">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
              alt=""
            />
            <div className="ml-5">
              <p className="mb-2">Men Printed Pure Cotton Straight Kurta</p>
              <p className="opacity-50 text-xs font-semibold space-x-5">
                <span>Size:L</span>
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>₹499</p>
        </Grid>
        <Grid item xs={4}>
        <p className="space-y-2 font-semibold">
            {order?.orderStatus === "DELIVERED"? (
             <>
             <FiberManualRecordIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 p-0 mr-2 text-sm"
                />
                <span>Delivered On Mar 03</span>

            </>
            ): <>
               
                <AdjustIcon
                sx={{ width: "15px", height: "15px" }}
                className="text-green-600 p-0 mr-2 text-sm"
              />
              <span>Expected Delivery On Mar 03</span>
              </>}
            
          </p>
          <p className="text-xs">Your Item Has Been Delivered</p>

        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
