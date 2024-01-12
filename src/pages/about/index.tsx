import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div id="AboutPage">
      <h2>About Page</h2>
      <p>
        Notice the url has been changed. Try refreshing the page see what
        happens.
      </p>
      <Link to="/">home</Link>
    </div>
  );
}
