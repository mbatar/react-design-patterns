const Presentational = (props) => {
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
