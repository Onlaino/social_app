import { MessagesPage } from '../pages/messagesPage/MessagesPage';
import {MainPage} from '../pages/mainPage/MainPage'
import { NewsPage } from '../pages/newsPage/NewsPage';
// import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
	return (
		<main className='container'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/messages' element={<MessagesPage />} />
					<Route path='/news' element={<NewsPage />} />
				</Routes>
			</BrowserRouter>
		</main>
	);
}

export default App;
