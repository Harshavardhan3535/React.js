import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const fetchPostDetails = async (postId) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  if (!response.ok) throw new Error("Failed to fetch post");
  return response.json();
};

const PostDetailsRQ = () => {
  const { postId } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts", postId],
    queryFn: () => fetchPostDetails(postId)
  });

  if (isLoading) return <div>Page is Loading...</div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <div>
      <h2>PostDetailsRQ Page</h2>
      <div>{data.title}</div>
      <div>{data.body}</div>
    </div>
  );
};

export default PostDetailsRQ;