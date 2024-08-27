async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}
export default async function page() {
  const listPost = await getData();
  return (
    <div>
      <h4>List Post</h4>
      <ul>
        {listPost.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
