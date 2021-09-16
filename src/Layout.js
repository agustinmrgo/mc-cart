import { Link } from "react-router-dom";
import { routes } from "./routes";

function Layout({ children }) {
  return (
    <section>
      <header>
        <nav>
          <h4>MasterClass</h4>
          <Link to={routes.products}>Products</Link>
          <Link to={routes.cart}>Cart</Link>
        </nav>
      </header>

      <main>{children}</main>
    </section>
  );
}

export default Layout;
