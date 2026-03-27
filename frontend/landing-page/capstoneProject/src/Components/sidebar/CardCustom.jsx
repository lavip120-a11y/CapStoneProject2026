import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

//props
export default function CardCustom({ title, description, image, onClick }) {
  return (
    <Card
      sx={{
        width: "100%",
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: 1,
        transition: "box-shadow 0.3s",
        "&:hover": {
          boxShadow: 6,
        },
      }}
    >
      {/* making the card clickable */}
      <CardActionArea
        onClick={onClick}
        sx={{
          position: "relative",
          height: 150,
          overflow: "hidden",
          "&:hover img": {
            transform: "scale(1.05)",
          },
        }}
      >
        {/* IMage background  */}
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            transition: "transform 0.3s",
          }}
        />

        {/* gradient overlay so text is readable*/}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0)",
          }}
        />
        {/* text */}
        <Box sx={{ position: "absolute", bottom: 0, p: 2, color: "white" }}>
          <Typography variant="h6">{title}</Typography>
          {description && (
            <Typography variant="body2">{description}</Typography>
          )}
        </Box>
      </CardActionArea>
    </Card>
  );
}
