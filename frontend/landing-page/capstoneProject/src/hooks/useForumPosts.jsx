import { useState, useEffect } from "react";
import axios from "axios";

//adding logged in user as a parameter so that userId can be provided for posts and comments
export default function useForumPosts(user) {
  const [posts, setPosts] = useState([]); //storing posts (including comments) in state, is empty to start

  //fetching posts from backend mySQL using axios
  useEffect(() => {
    axios
      .get("http://localhost:8081/api/posts")
      .then((res) => {
        console.log("Fetched posts and comments:", res.data); //troubleshooting inability to fetch posts from backend DB
        //handling successful response
        //mapping backend data
        const fetchedPosts = res.data.data
          .map((post) => ({
            id: post.id,
            title: post.title,
            description: post.description,
            userId: post.userId,
            comments: post.comments || [], // add comments.
            likes: 0, // count for likes
            liked: false, //track if user liked (locally for now)
          }))
          .sort((a, b) => b.id - a.id); //sorting newest first
        setPosts(fetchedPosts); //update setPosts with fetchedPosts
      })
      .catch((err) => console.error("Error fetching:", err)); //logging error
  }, []); // useEffect runs once because of the empty array, when the component has loaded

  // handler for new posts, removes extra spaces, if the post is empty does not add it.
  const addPost = async (title, description, userId) => {
    if (!title.trim() || !description.trim()) return;

    const actualUserId = userId || user?.id;
    if (!actualUserId) {
      console.error("No logged-in user");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8081/api/posts/create", {
        title,
        description,
        userId: actualUserId,
      });

      setPosts((prev) => [
        {
          id: res.data.data.id,
          title: res.data.data.title,
          description: res.data.data.description,
          userId: res.data.data.userId,
          comments: [],
        },
        ...prev,
      ]);
    } catch (err) {
      console.error("Error while creating a post:", err);
    }
  };

  //editing a post
  const editPost = async (postId, newTitle, newDescription) => {
    try {
      setPosts((prev) =>
        prev.map((p) =>
          p.id === postId
            ? { ...p, title: newTitle, description: newDescription }
            : p,
        ),
      );
    } catch (err) {
      console.error("Error while editing post:", err);
    }
  };

  //delete a post
  const deletePost = async (postId) => {
    try {
      await axios.delete(`http://localhost:8081/api/posts/${postId}`);
      setPosts((prev) => prev.filter((p) => p.id !== postId));
    } catch (err) {
      console.error("Error deleting post:", err);
    }
  };

  //add comment
  const addComment = async (postId, commentText, userId) => {
    if (!commentText.trim()) return;

    const actualUserId = userId || user?.id;
    if (!actualUserId) {
      console.error("No logged-in user");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:8081/api/comments/create",
        {
          postId,
          description: commentText,
          userId: actualUserId,
        },
      );

      setPosts((prev) =>
        prev.map((p) =>
          p.id === postId
            ? {
                ...p,
                comments: [
                  {
                    id: res.data.data.id,
                    text: res.data.data.description,
                    userId: actualUserId,
                  },
                  ...p.comments, //prepend new comment
                ],
              }
            : p,
        ),
      );
    } catch (err) {
      console.error("Error adding comment:", err);
    }
  };

  //Edit Comment
  const editComment = (postId, commentId, newText) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.map((comment) =>
                comment.id === commentId
                  ? { ...comment, text: newText }
                  : comment,
              ),
            }
          : post,
      ),
    );
  };

  //delete comment

  const deleteComment = (postId, commentId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.filter(
                (comment) => comment.id !== commentId,
              ),
            }
          : post,
      ),
    );
  };

  // likes
  const toggleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post,
      ),
    );
  };

  return {
    posts,
    addPost,
    editPost,
    deletePost,
    addComment,
    editComment,
    deleteComment,
    toggleLike,
  };
}
