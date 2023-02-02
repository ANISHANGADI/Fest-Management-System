import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function CardComponent({ content, title, imageUrl, altText }) {
  return (
    <Card
      sx={{
        maxWidth: 350,
      }}
    >
      <CardActionArea
        sx={{
          opacity: "0.83",
          transition: "0.1s",
          ":hover": {
            boxShadow: 23,
            opacity: "1",
          },
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt={altText}
        />
        <CardContent>
          <Typography gutterBottom component="div" sx={{ fontSize: "1.4rem" }}>
            {title}
          </Typography>
          <p sx={{ fontSize: "15px" }}>{content}</p><br />
          <p style={{fontFamily:"Space Mono",color:"gray"}}><span style={{fontSize:"18px"}}>Timings-</span><br /> 8:00 AM to 9:30 AM</p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
