import { useState, useEffect } from "react";
import axios from "axios";

export default function useForumPosts() {
  const [posts, setPosts] = useState([]); //storing posts in state, is empty to start

  //fetching posts from backend mySQL uing axios
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/posts")
      .then((res) => {
        //handling successful response
        //mapping backend data
        const fetchedPosts = res.data.data.map((post) => ({
          id: post.id,
          title: post.title,
          body: post.description,
          comments: [], // This is to add comments later.
        }));
        setPosts(fetchedPosts); //update setPosts with fetchedPosts
      })
      .catch((err) => console.error("Error fetching:", err)); //logging error
  }, []); // useEffect runs once because of the empty array, when the component has loaded

  // handler for new posts, removes extra spaces, if the post is empty does not add it.
  const addPost = async (title) => {
    if (!title.trim()) return;

    try {
      const res = await axios.post("http://localhost:8080/api/posts/create", {
        title,
        description: "User Post",
        userId: 1,
      });

      setPosts((prev) => [
        {
          id: res.data.data.id,
          title: res.data.data.title,
          body: res.data.data.description,
          comments: [],
        },
        ...prev,
      ]);
    } catch (err) {
      console.error("Error while creating a post:", err);
    }
  };

  //editing a post
  const editPost = async (postId, newTitle) => {
    try {
      setPosts((prev) =>
        prev.map((p) => (p.id === postId ? { ...p, title: newTitle } : p)),
      );
    } catch (err) {
      console.error("Error while editing post:", err);
    }
  };

  //delete a post
  const deletePost = async (postId) => {
    try {
      await axios.delete(`http://localhost:8080/api/posts/${postId}`);
      setPosts((prev) => prev.filter((p) => p.id !== postId));
    } catch (err) {
      console.error("Error deleting post:", err);
    }
  };

  //add comment
  const addComment = async (postId, commentText) => {
    if (!commentText.trim()) return;

    try {
      const res = await axios.post("http://localhost:8080/api/posts/create", {
        postId,
        description: commentText,
        userId: 1,
      });

      setPosts((prev) =>
        prev.map((p) =>
          p.id === postId
            ? {
                ...p,
                comments: [
                  ...p.comments,
                  {
                    id: res.data.data.id,
                    text: res.data.data.description,
                  },
                ],
              }
            : p,
        ),
      );
    } catch (err) {
      console.error("Error adding comment:", err);
    }
  };

  return { posts, setPosts, addPost, editPost, deletePost, addComment };
}
