import { LeftSide } from '../../leftSide/LeftSide';
import { Header } from '../../header/Header';
import { RightSideMainPage } from '../../rightSideMainPage/RightSideMainPage';

import './mainPage.scss';

export const MainPage = () => {
	return (
		<>
			<Header />
			<div className='sides_wrapper'>
				<LeftSide />
				<RightSideMainPage />
			</div>
		</>
	);
};
