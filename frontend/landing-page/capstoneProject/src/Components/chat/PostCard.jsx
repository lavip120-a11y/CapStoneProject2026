import { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export default function PostCard({ post, posts, setPosts }) {
  const [comment, setComment] = useState(""); //stores the new comment
  const [editing, setEditing] = useState(false); // editing or not (default false - not editing post)
  const [editText, setEditText] = useState(post.title); //storing the post while its being edited

  //adding a comment to a post
  const handleAddComment = () => {
    if (!comment.trim()) return;
    handleAddComment(post.id, comment);
    setComment(""); //clears the input field
  };

  //Delete Post
  const handleDeletePost = () => {
    handleDeletePost(post.id);
  };

  //save the edited post
  const handleSaveEdit = () => {
    if (!editText.trim()) return;
    editPost(post.id, editText);
    setEditing(false); //returns to default - not editing
  };

  return (
    // card and cardContent container controls spacing around the posts
    <Card sx={{ mb: 2 }}>
      <CardContent>
        {/* if editing, show input field and save button */}
        {editing ? (
          <Box display="flex" gap={2} mb={1}>
            <TextField //editText is updated by setEditText
              fullWidth
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              size="small"
            />

            <Button variant="contained" size="small" onClick={handleSaveEdit}>
              Save
            </Button>
          </Box>
        ) : (
          //if not editing, show title
          <Typography variant="subtitle1" fontWeight={500}>
            {post.title}
          </Typography>
        )}
        {/* show the post body */}
        <Typography color="text.secondary" sx={{ mb: 1 }}>
          {post.description}
        </Typography>

        {/* edit and delete buttons */}
        <Box display="flex" gap={1} mb={2}>
          <Button
            variant="outlined"
            size="small"
            onClick={() => setEditing(!editing)}
          >
            {editing ? "Cancel" : "Edit"}
          </Button>

          <Button
            variant="outlined"
            size="small"
            color="error"
            onClick={handleDeletePost}
          >
            Delete
          </Button>
        </Box>

        {/* Comments List */}
        <List>
          {/* looping the post comments and returning a listItem - uses id to identify between comments */}
          {post.comments.map((comment) => (
            <ListItem key={comment.id}>
              <ListItemText primary={comment.text} />
            </ListItem>
          ))}
        </List>

        {/* Add Comment Input field - box with textfield and button in a row, spacing and margintop */}
        <Box display="flex" gap={2} mt={1}>
          <TextField
            fullWidth
            label="Add a response/comment"
            value={comment} //shows original comment stored in state
            onChange={(e) => setComment(e.target.value)} //updates state
            size="small"
          />
          {/* onclick calls handleAddComment function which updates state and clears textfield. */}
          <Button variant="outlined" size="small" onClick={handleAddComment}>
            Comment
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
