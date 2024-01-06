export const fetchPosts = async () => {
  try {
    const response = await fetch("http://localhost:3004/posts");
    const posts = await response.json();
    return posts;
  } catch (error) {}
};
