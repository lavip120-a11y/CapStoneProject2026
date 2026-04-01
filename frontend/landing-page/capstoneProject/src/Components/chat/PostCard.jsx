import { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import Comments from "./Comments"; //component add comment and list comments

export default function PostCard({
  post,
  editPost,
  deletePost,
  addComment,
  editComment,
  deleteComment,
  user,
}) {
  const [editing, setEditing] = useState(false); // editing or not (default false - not editing post)
  const [editText, setEditText] = useState(post.title); //storing the post while its being edited

  const [showComments, setShowComments] = useState(false); //toggle comments
  const [likes, setLikes] = useState(0); //local state for likes - not connecting to database - uncertain of purpose at this point

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
            //post title
            <Typography variant="h6" fontWeight={600}>
              {post.title}
            </Typography>
          )}
          {/* userID for post */}
          <Typography variant="caption" color="text.secondary">
            User {post.userId}
          </Typography>
        </Box>

        {/* Post Description */}
        <Typography variant="body1" sx={{ mb: 2 }}>
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
          {/* save button shows when editing */}
          {editing && (
            <Button variant="contained" size="small" onClick={handleSaveEdit}>
              Save
            </Button>
          )}
          {/* delete post */}
          <Button
            variant="outlined"
            size="small"
            color="error"
            onClick={handleDeletePost}
          >
            Delete
          </Button>
        </Box>

        <Divider sx={{ mb: 1 }} />
        {/* button for like and show/hide comments */}
        <Box display="flex" gap={3} mb={1}>
          <Button size="small" onClick={() => setLikes(likes + 1)}>
            👍Like ({likes})
          </Button>

          <Button size="small" onClick={() => setShowComments(!showComments)}>
            💬 {showComments ? "Hide Comments" : "Comments"}
          </Button>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {/* Comments Toggle */}
        {showComments && (
          <Comments
            comments={post.comments} //comments for post
            postId={post.id} //postId for new comments
            addComment={addComment} //addCOmment - useForumPosts hook
            editComment={editComment} //editComment
            deleteComment={deleteComment} //delete Comment
            user={user} //pass user from chatForum so we know who is commenting
          />
        )}
      </CardContent>
    </Card>
  );
}
