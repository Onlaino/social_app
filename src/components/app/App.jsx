import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Suspense, lazy } from 'react';

// components
import { LeftSide } from '../leftSide/LeftSide';
import { Header } from '../header/Header';
import { Spinner } from '@chakra-ui/react';

// styles
import './App.scss';

// lazy
const LazyRightSide = lazy(() =>
	import('../../components/rightSideMainPage/RightSideMainPage')
);
const LazyDialogs = lazy(() => import('../../components/dialogs/Dialogs'));
const LazyNews = lazy(() => import('../../components/news/News'));

function App() {
	return (
		<BrowserRouter>
			<main className='container'>
				<Header />
				<div className='sides_wrapper'>
					<LeftSide />
					<Suspense fallback={<Spinner />}>
						<Routes>
							<Route path='/' element={<LazyRightSide />} />
							<Route path='/messages' element={<LazyDialogs />} />
							<Route path='/news' element={<LazyNews />} />
						</Routes>
					</Suspense>
				</div>
			</main>
		</BrowserRouter>
	);
}

export default App;
