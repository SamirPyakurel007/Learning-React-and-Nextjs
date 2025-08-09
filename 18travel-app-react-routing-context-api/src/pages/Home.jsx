import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function Home() {
  return (
    <div>
      <PageNav />
      <h1>worldwise</h1>
      <Link to="/appLayout">Go to App</Link>
    </div>
  );
}

export default Home;
