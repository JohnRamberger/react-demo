import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div id="HomePage">
      <h2>Home Page</h2>
      <Link to="/about">about</Link>
    </div>
  );
}
