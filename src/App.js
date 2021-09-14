import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Layout from './Layout';
import Products from './pages/Products'
import Cart from './pages/Cart'


const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/">
            <Products />
          </Route>
        </Switch>
      </Layout>
    </Router>
  )
}


export default App
