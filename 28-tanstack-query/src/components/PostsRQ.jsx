import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  if (!response.ok) throw new Error("Failed to fetch posts");
  return response.json();
};

const addPost = async (post) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
  if (!response.ok) throw new Error("Failed to create post");
  return response.json();
};

const PostsRQ = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error, isFetching, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 3000,
  });

  const { mutate } = useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ title, body });
    setTitle("");
    setBody("");
  };

  console.log({ isLoading, isFetching, data });

  if (isLoading) return <div>Page is Loading...</div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setTitle(e.target.value)} placeholder="Enter post title" value={title} />
        <input onChange={(e) => setBody(e.target.value)} placeholder="Enter post Body" value={body} />
        <button type="submit">Post</button>
      </form>
      <button onClick={() => refetch()}>Fetch Posts</button>
      {data?.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsRQ;