import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  List,
  ListItem,
} from "@mui/material";

const Comments = ({
  comments,
  postId,
  addComment,
  editComment,
  deleteComment,
  user,
}) => {
  // const currentUser = { id: 1, name: "Johnny" };
  const [commentText, setCommentText] = useState(""); //new comment
  const [editingCommentId, setEditingCommentId] = useState(null); //which comment is being edited
  const [editCommentText, setEditCommentText] = useState(""); //editing description

  //handle adding a new comment
  const handleAddComment = () => {
    if (!commentText.trim()) return; //preventing an empty comment
    addComment(postId, commentText, user?.id);
    setCommentText(""); //clear field
  };

  //editing comment
  const handleEditComment = (comment) => {
    setEditingCommentId(comment.id);
    setEditCommentText(comment.text || comment.description);
  };

  //saving edited comment
  const handleSaveEdit = () => {
    if (!editCommentText.trim()) return;
    editComment(postId, editingCommentId, editCommentText);
    setEditingCommentId(null);
    setEditCommentText("");
  };

  //Cancel editing
  const handleCancelEdit = () => {
    setEditingCommentId(null);
    setEditCommentText("");
  };

  //Delete Comment
  const handleDeleteComment = (commentId) => {
    deleteComment(postId, commentId);
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
          <ListItem
            key={comment.id}
            sx={{ display: "flex", flexDirection: "column", mb: 1 }}
          >
            {/* Comment Content */}
            {editingCommentId === comment.id ? (
              <>
                <TextField
                  fullWidth
                  size="small"
                  value={editCommentText}
                  onChange={(e) => setEditCommentText(e.target.value)}
                  sx={{ my: 1 }}
                />
                <Box display="flex" gap={1}>
                  <Button
                    size="small"
                    variant="contained"
                    onClick={handleSaveEdit}
                  >
                    Save
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    onClick={handleCancelEdit}
                  >
                    Cancel
                  </Button>
                </Box>
              </>
            ) : (
              <Box sx={{ width: "100%" }}>
                <Typography variant="body2" fontWeight={500}>
                  User {comment.userId}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  {comment.text || comment.description}
                </Typography>
                <Box display="flex" gap={1}>
                  <Button
                    size="small"
                    onClick={() => handleEditComment(comment)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="small"
                    color="error"
                    onClick={() => handleDeleteComment(comment.id)}
                  >
                    Delete
                  </Button>
                </Box>
              </Box>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
export default Comments;
