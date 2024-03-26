import { Header } from './components/Header/Header';
import './App.css';
import { UserTools } from './components/UserTools/UserTols';
import { Nav } from './components/Nav/Nav';

function App() {
	return (
		<div className='App'>
			<Header />
			<UserTools />
			<Nav/>
		</div>
	);
}

export default App;
