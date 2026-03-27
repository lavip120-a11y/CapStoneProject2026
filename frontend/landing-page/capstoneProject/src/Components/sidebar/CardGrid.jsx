import * as React from "react";
import Box from "@mui/material/Box";
import CardCustom from "./CardCustom";

//receiving data from cards
export default function CardGrid({ cards, selectedCardIndex, onSelect }) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: 1,
      }}
    >
      {cards.map(
        (
          card,
          index, //looping through cards and passing props
        ) => (
          <CardCustom
            key={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
            active={selectedCardIndex === index}
            onClick={() => onSelect(index)}
          />
        ),
      )}
    </Box>
  );
}
