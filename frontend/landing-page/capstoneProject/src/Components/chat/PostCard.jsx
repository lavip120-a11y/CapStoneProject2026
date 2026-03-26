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
import Comments from "./Comments";

export default function PostCard({ post, editPost, deletePost, addComment }) {
  const [editing, setEditing] = useState(false); // editing or not (default false - not editing post)
  const [editText, setEditText] = useState(post.title); //storing the post while its being edited

  //Delete Post
  const handleDeletePost = () => {
    deletePost(post.id);
  };

  //save the edited post
  const handleSaveEdit = () => {
    if (!editText.trim()) return;
    editPost(post.id, editText);
    setEditing(false); //returns to default - not editing
  };

  return (
    // card and cardContent container controls spacing around the posts
    <Card sx={{ mb: 3, borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        {/* header - title and user */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
        >
          {editing ? (
            <TextField //editText is updated by setEditText
              fullWidth
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              size="small"
            />
          ) : (
            <Typography variant="h6">{post.title}</Typography>
          )}
          <Typography variant="caption" color="text.secondary">
            User {post.userId}
          </Typography>
        </Box>
        {/* Post Description */}
        <Typography variant="body1" color="text.primary" mb={2}>
          {post.description}
        </Typography>

        {/* Action Buttons */}
        <Box display="flex" gap={1} mb={2}>
          <Button
            variant="outlined"
            size="small"
            onClick={() => setEditing(!editing)}
          >
            {editing ? "Cancel" : "Edit"}
          </Button>
          {editing && (
            <Button variant="contained" size="small" onClick={handleSaveEdit}>
              Save
            </Button>
          )}
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
        <Comments
          comments={post.comments}
          postId={post.id}
          addComment={addComment}
        />
      </CardContent>
    </Card>
  );
}
