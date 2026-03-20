import { useState } from "react";
import { Box, Container, TextField, Button, Typography } from "@mui/material";
import PostCard from "./PostCard";

export default function Forum({ posts, setPosts, addPost }) {
  //store new posts from user and adds to posts. resets.
  const [newPost, setNewPost] = useState("");

  // handler for new posts, removes extra spaces, if the post is empty does not add it.
  const handleAddPost = () => {
    if (addPost) {
      addPost(newPost); //for use hook
      setNewPost(""); //clear input field
    }
  };
  return (
    // medium width container with top and bottom margins
    <Container maxWidth="md">
      <Box my={4}>
        {/* Title */}
        <Typography variant="h4" gutterBottom>
          A Chat Forum to provide advice and query your needs
        </Typography>

        {/* adding a new post */}
        <Box display="flex" gap={2} mb={3}>
          <TextField
            fullWidth
            label="Share advice or ask a question"
            // newPost updates the textfield
            value={newPost}
            // updates state with users new post
            onChange={(e) => setNewPost(e.target.value)}
          ></TextField>
          {/* on click handleAddPost is called and adds the new post */}
          <Button variant="contained" onClick={handleAddPost}>
            Post
          </Button>
        </Box>

        {/* generating posts */}
        {/* posts.map loops over the posts from useState, creates a new array - in the future it will be stored in database */}
        {posts &&
          posts.map((post) => (
            <PostCard //child component of posts, receiving props from post, posts and setPosts
              key={post.id} //identification for the post
              post={post} //individual post which populates postCard
              posts={posts} //posts array which postCard accesses
              setPosts={setPosts} // setPosts function updates state and is passed as a prop for children to use if needed.
            />
          ))}
      </Box>
    </Container>
  );
}
