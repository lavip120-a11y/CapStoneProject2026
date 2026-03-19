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
  const [comment, setComment] = useState("");
  const [editing, setEditing] = useState(false); // default false - not editing
  const [editText, setEditText] = useState(post.title); //storing the original post

  //adding a comment to a post
  const handleAddComment = () => {
    if (!comment.trim()) return;
    //updating posts, starts with posts array, map loops through and returns new array
    const updatedPosts = posts.map((p) =>
      //checking the id, is this the post we want to comment on? if not keep the original.
      p.id === post.id
        ? {
            ...p, //copy post
            comments: [
              //create a new array
              ...p.comments, //include comments
              //new comment object
              {
                id: Date.now(),
                text: comment,
              },
            ],
          }
        : p,
    );
    setPosts(updatedPosts); //updating posts using setPosts
    setComment(""); //clears the input field
  };

  //Delete Post
  const handleDeletePost = () => {
    //filtering posts, returning all posts without the one that matches the id. setPosts updates posts
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  //save the edited post
  const handleSaveEdit = () => {
    //map returning new array
    const updatedPosts = posts.map((p) =>
      //if the post id matches, create a new post by copying everything in the original post and replacing title with editText.
      p.id === post.id ? { ...p, title: editText } : p,
    );

    setPosts(updatedPosts); //updates original posts with the updatedPosts
    setEditing(false); //returns to default - not editing
  };

  return (
    // card and cardContent container with spacing around the posts
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
          {post.body}
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
          {/* looping over the post comments and returning a listItem - uses id to identify between comments */}
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
