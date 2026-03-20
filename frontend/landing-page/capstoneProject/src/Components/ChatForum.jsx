import Typography from "@mui/material/Typography";
import Forum from "./Forum";
import Box from "@mui/material/Box";
import useForumPosts from "../hooks/useForumPosts";

function ChatForum() {
  const { posts, setPosts, addPost, editPost, deletePost, addComment } =
    useForumPosts();

  return (
    <>
      {/* matching the mui theme and sidebar */}
      <Box sx={{ p: 3, bgcolor: "background.default", minHeight: "100%" }}>
        {/* Heading */}
        <Typography variant="h4" gutterBottom>
          Welcome to Roots Rising
        </Typography>
        {/* forum page with props passed  */}
        <Forum
          posts={posts}
          setPosts={setPosts}
          addPost={addPost}
          editPost={editPost}
          deletePost={deletePost}
          addComment={addComment}
        ></Forum>
      </Box>
    </>
  );
}

export default ChatForum;
