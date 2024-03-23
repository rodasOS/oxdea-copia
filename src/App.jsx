import { Header } from './components/Header/Header';
import './App.css';
import img from './assets/logo.webp'

function App() {
	return (
		<div className='App'>
			<Header />
      <img src={img} alt="" />
		</div>
	);
}

export default App;
