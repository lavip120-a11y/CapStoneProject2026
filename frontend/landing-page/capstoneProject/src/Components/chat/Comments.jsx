import { useState, useContext } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  List,
  ListItem,
} from "@mui/material";

const Comments = ({ comments, postId, addComment }) => {
  const currentUser = { id: 1, name: "Johnny" };

  const [commentText, setCommentText] = useState("");

  const handleAddComment = () => {
    if (!commentText.trim()) return;
    addComment(postId, commentText, currentUser.id);
    setCommentText(""); //clear field
  };

  return (
    <Box sx={{ mt: 2 }}>
      {/* new comment */}
      <Box display="flex" gap={1} mb={2}>
        <TextField
          fullWidth
          placeholder="Comment here ..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          size="small"
        ></TextField>
        <Button variant="contained" size="small" onClick={handleAddComment}>
          Send
        </Button>
      </Box>

      {/* Comments List */}
      <List>
        {comments.map((comment) => (
          <ListItem key={comment.id} sx={{ display: "block", mb: 1 }}>
            <Typography variant="body2" fontWeight={500}>
              User {comment.userId}
            </Typography>
            <Typography variant="body2">
              {comment.text || comment.description}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
export default Comments;
