import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
// components
import { LeftSide } from '../leftSide/LeftSide';
import { Header } from '../header/Header';
import { LoginPage } from '../auth/authPages/LoginPage';
import { RegisterPage } from '../auth/authPages/RegisterPage';
// styles
import './App.scss';

// lazy
const LazyRightSide = lazy(() =>
	import('../../components/rightSideMainPage/RightSideMainPage')
);
const LazyDialogs = lazy(() => import('../../components/dialogs/Dialogs'));
const LazyNews = lazy(() => import('../../components/news/News'));
const LazyFriends = lazy(() =>
	import('../../components/friendsSide/FriendsSide')
);

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<main className='container'>
					<Header />
					<div className='sides_wrapper'>
						<LeftSide />
						<Suspense fallback={<div>Loading...</div>}>
							<Routes>
								<Route path='/' element={<LoginPage />} />
								<Route path='/register' element={<RegisterPage />} />
								<Route path='/main' element={<LazyRightSide />} />
								<Route path='/messages' element={<LazyDialogs />} />
								<Route path='/news' element={<LazyNews />} />
								<Route path='/friends' element={<LazyFriends />} />
							</Routes>
						</Suspense>
					</div>
				</main>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
