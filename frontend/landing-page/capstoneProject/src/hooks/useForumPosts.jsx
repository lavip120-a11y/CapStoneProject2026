import { useState, useEffect } from "react";
import axios from "axios";

export default function useForumPosts() {
  const [posts, setPosts] = useState([]);

  //load posts from external API just as an example until i link to my own database
  useEffect(() => {
    axios //fetching posts from external API
      .get("http://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => {
        //returns a promise
        const postsWithComments = res.data.map((post) => ({
          ...post, //copying fields to post
          comments: [], // This is to add comments because the API does not have comments.
        }));
        setPosts(postsWithComments); //calling setPosts will update posts and load new posts
      })
      .catch((err) => console.error("Error fetching:", err));
  }, []); // useEffect runs once because of the empty array, when the component has loaded

  // handler for new posts, removes extra spaces, if the post is empty does not add it.
  const addPost = (title) => {
    if (!title.trim()) return;

    //add a new post
    const newPost = {
      id: Date.now(), //timestamp as id
      title,
      body: "User Post", //jsonPlaceholder content
      comments: [], //empty array for comments
    };

    setPosts((prev) => [newPost, ...prev]); // prevPosts creates a new array of new posts and previous posts.
  };

  //editing a post
  const editPost = (postId, newTitle) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === postId ? { ...p, title: newTitle } : p)),
    );
  };

  //delete a post
  const deletePost = (postId) => {
    setPosts((prev) => prev.filter((p) => p.id !== postId));
  };

  //add comment
  const addComment = (postId, commentText) => {
    if (!commentText.trim()) return;

    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId
          ? {
              ...p,
              comments: [
                ...p.comments,
                {
                  id: Date.now(),
                  text: commentText,
                },
              ],
            }
          : p,
      ),
    );
  };

  return { posts, setPosts, addPost, editPost, deletePost, addComment };
}
