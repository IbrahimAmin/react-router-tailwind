import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { About, Home } from './pages';

function App() {
	return (
		<BrowserRouter>
			<header>
				<Link to='/'>#VanLife</Link>
				<nav>
					<Link to='/'>Home</Link>
					<Link to='/about'>About</Link>
				</nav>
			</header>

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
