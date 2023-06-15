import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./CourierCard.css";
import { Box, width } from "@mui/system";

export default function CourierCard({ item, number }) {
  const [isFlyAway, setFlyAway] = React.useState(false);

  const handleFlyAway = () => {
    setFlyAway(true);
  };
  return (
    <div className="container">
      <Card
        sx={{
          maxWidth: "60%",
          display: "flex",
          bgcolor: "#E0FFFF",
          margin: " 0 auto",
        }}
        className={`content ${isFlyAway ? "fly-away" : ""}`}
      >
        <CardActionArea>
          <CardContent>
            <Typography
              sx={{ textAlign: "center" }}
              gutterBottom
              variant="h4"
              component="div"
            >
              Order Nº{number}
            </Typography>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              sx={{ fontSize: "14px", textAlign: "center" }}
              color="text.secondary"
            >
              Description:{item.description}
            </Typography>
            <Box className="info" sx={{ display: "flex" }}>
              <Box sx={{ margin: "0 10px" }}>
                <Typography sx={{ fontSize: "14px" }} color="text.secondary">
                  Phone Sender: {item.phone_sender}
                </Typography>
                <Typography sx={{ fontSize: "14px" }} color="text.secondary">
                  Phone Reciver:{item.phone_receiver}
                </Typography>
              </Box>
              <Box sx={{ margin: "0 10px" }}>
                <Typography sx={{ fontSize: "14px" }} color="text.secondary">
                  Adress Sender:{item.address_sender}
                </Typography>
                <Typography sx={{ fontSize: "14px" }} color="text.secondary">
                  Address Reciver:{item.address_receiver}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            className="btn_accept"
            sx={{
              cursor: "pointer",
              bgcolor: "#00FF7F",
              color: "white",
              fontSize: "14px",
            }}
            onClick={() => {
              handleFlyAway();
            }}
          >
            Accept
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
