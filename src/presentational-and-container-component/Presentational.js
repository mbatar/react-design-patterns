const Presentational = (props) => {
  if (!props.posts) return <div>Please start to json server!</div>;
  return (
    <ul>
      {props.posts.map((post) => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <small>{post.author}</small>
        </li>
      ))}
    </ul>
  );
};

export default Presentational;
