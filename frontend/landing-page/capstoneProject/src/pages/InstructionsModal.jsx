import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  maxHeight: "80vh",
  overflowY: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function InstructionsModal({ open, onClose }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="instructions-modal-title"
      aria-describedby="instructions-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="instructions-modal-title"
          variant="h6"
          component="h2"
          gutterBottom
        >
          Instructions
        </Typography>
        <Typography id="instructions-modal-description" sx={{ mt: 2 }}>
          Welcome to Tairawhiti Rising Chat Forum <br />
          Post questions or advice in the forum <br />
          Browse other posts and use comment to provide advice <br />
          Log out when you are finished <br />
        </Typography>
      </Box>
    </Modal>
  );
}
