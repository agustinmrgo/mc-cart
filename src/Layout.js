import { Link } from 'react-router-dom'

import ProductsList from './components/ProductsList'

function Layout({ children }) {
  return (
    <section>
      <header>
        <nav>
          <h4>MasterClass</h4>
          <Link to="/">Products</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </header>

      <main>
        {children}
      </main>
    </section>
  );
}

export default Layout
