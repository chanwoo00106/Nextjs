export default function User({ user }) {
  return (
    <li>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </li>
  );
}
