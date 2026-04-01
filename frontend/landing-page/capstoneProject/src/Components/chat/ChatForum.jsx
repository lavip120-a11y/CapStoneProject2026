import Typography from "@mui/material/Typography";
import Forum from "./Forum";
import Box from "@mui/material/Box";
import useForumPosts from "../../hooks/useForumPosts";

function ChatForum({ user }) {
  //passing current user as a prop
  //returning posts state and functions to update state
  const {
    posts,
    setPosts,
    addPost,
    editPost,
    deletePost,
    addComment,
    editComment,
    deleteComment,
  } = useForumPosts(user); // call custom hook

  return (
    <>
      {/* mui theme - matching sidebar */}
      <Box
        sx={{
          width: "100%",
          p: 3,
          bgcolor: "background.default",
          minHeight: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Heading */}
        <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
          Welcome to Tairawhiti Rising
        </Typography>

        {/* props - posts and update function - passed to forum */}
        <Forum
          posts={posts}
          setPosts={setPosts}
          addPost={addPost}
          editPost={editPost}
          deletePost={deletePost}
          addComment={addComment}
          editComment={editComment}
          deleteComment={deleteComment}
          user={user}
        ></Forum>
      </Box>
    </>
  );
}

export default ChatForum;
