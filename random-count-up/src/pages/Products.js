import { Link } from 'react-router-dom';
import { TaskList } from 'components';

export default function ProductsPage(props) {
  return (
    <main id="products">
      <h2>Products</h2>

      <TaskList title={'props is readonly'} />

      <Link to="/">Go Home</Link>
    </main>
  );
}
