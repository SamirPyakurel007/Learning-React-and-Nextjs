import { useCreatePostMutation, useGetPostsQuery } from "./state/api";

function App() {
  const {
    data: posts,
    error: getPostError,
    isLoading: isPostLoading,
  } = useGetPostsQuery();

  const [createPost] = useCreatePostMutation();

  if (isPostLoading) return <p>Loading...</p>;

  if (getPostError) return <p>There is an error...</p>;

  console.log(posts);
  return <h1>there are 100 resources</h1>;
}

export default App;
