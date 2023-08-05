import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { products } from './datasource/data';

function App() {
	return (
		<div className='d-flex flex-column vh-100'>
			<header>
				<Navbar>
					<Container>
						<Navbar.Brand>Typsco</Navbar.Brand>
					</Container>
					<Nav>
						<a
							href='/cart'
							className='nav-link'
						>
							Cart
						</a>
						<a
							href='/signin'
							className='nav-link'
						>
							Login
						</a>
					</Nav>
				</Navbar>
			</header>

			<main>
				<Container className='mt-3'>
					<Row>
						{products.map((product) => (
							<Col
								key={product.slug}
								sm={6}
								md={4}
								lg={3}
							>
								<img
									src={product.image}
									alt={product.name}
									className='product-img'
								/>
								<h4>{product.name}</h4>
								<p>${product.price}</p>
							</Col>
						))}
					</Row>
				</Container>
			</main>

			<footer>
				<div className='text-center'>
					<span>&#169;&#65039;All Rights Reserved</span>
				</div>
			</footer>
		</div>
	);
}

export default App;
