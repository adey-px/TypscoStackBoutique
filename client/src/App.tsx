import './App.css';
import { products } from './datasource/data';

function App() {
	return (
		<>
			<header>Typsco</header>

			<main>
				<ul>
					{products.map((product) => (
						<li key={product.slug}>
							<img
								src={product.image}
								alt={product.name}
								className='product-img'
							/>
							<h2>{product.name}</h2>
							<p>${product.price}</p>
						</li>
					))}
				</ul>
			</main>

			<footer>
				<span>&#169;&#65039;All Rights Reserved</span>
			</footer>
		</>
	);
}

export default App;
