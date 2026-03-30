import { useState } from "react";
import {
  Card,
  CardContent,
  Container,
  TextField,
  Button,
  Typography,
  Stack,
} from "@mui/material";
import PostCard from "../chat/PostCard";

export default function Forum({
  posts,
  setPosts,
  addPost,
  editPost,
  deletePost,
  addComment,
}) {
  //post title
  const [newTitle, setNewTitle] = useState("");
  //post description
  const [newPost, setNewPost] = useState(""); //store new posts from user and updating setNewPost.

  // handler for adding new posts, removes extra spaces, if the post is empty does not add it.
  const handleAddPost = () => {
    if (!newTitle.trim() || !newPost.trim()) return;
    addPost(newTitle, newPost); //title, description
    setNewTitle(""); //clear title field
    setNewPost(""); //clear input field
  };

  return (
    // medium width container with top and bottom margins
    <Container
      maxWidth={false}
      sx={{ py: 2, display: "flex", flexDirection: "column", gap: 4 }}
    >
      {/* post card */}
      <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
        <CardContent>
          {/* Heading */}
          <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
            Provide advice and query your needs
          </Typography>

          <Stack spacing={2}>
            <TextField
              fullWidth
              label="Post Topic ..."
              // updates the topic (title) - this will eventually have a drop down with topics to choose
              value={newTitle}
              // updates state with new title
              onChange={(e) => setNewTitle(e.target.value)}
            ></TextField>

            <TextField
              fullWidth
              label="Ask a question or share advice ..."
              // newPost updates the textfield
              value={newPost}
              // updates state with users new post
              onChange={(e) => setNewPost(e.target.value)}
              multiline
              variant="outlined"
              sx={{
                "& .MuiInputBase-root": {
                  height: 180,
                  alignItems: "flex-start",
                  padding: "8px",
                },
              }}
            ></TextField>
            {/* on click handleAddPost is called and adds the new post */}
            <Button variant="contained" onClick={handleAddPost}>
              Post
            </Button>
          </Stack>
        </CardContent>
      </Card>

      {/* Displaying posts */}
      {/* posts.map loops over the posts from useState, creates a new array - stored in database */}
      <Stack spacing={3}>
        {posts &&
          posts.map((post) => (
            <PostCard //child component of posts, receiving props from post, posts and setPosts
              key={post.id} //identification for the post
              post={post} //individual post which populates postCard
              posts={posts} //posts array which postCard accesses
              setPosts={setPosts} // setPosts function updates state and is passed as a prop for children to use if needed.
              editPost={editPost}
              deletePost={deletePost}
              addComment={addComment}
            />
          ))}
      </Stack>
    </Container>
  );
}
