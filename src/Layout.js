import { Link } from "react-router-dom";
import { routes } from "./routes";
import { element, number } from "prop-types";

function Layout({ children, cartTotalAmount }) {
  return (
    <section>
      <header>
        <nav>
          <h4>MasterClass</h4>
          <Link to={routes.products}>Products</Link>
          <Link to={routes.cart}>
            Cart {cartTotalAmount > 0 && <span>({cartTotalAmount})</span>}
          </Link>
        </nav>
      </header>

      <main>{children}</main>
    </section>
  );
}

Layout.propTypes = {
  children: element,
  cartTotalAmount: number.isRequired,
};

export default Layout;
