import './newsPage.scss';
import { Header } from '../../header/Header';
import { LeftSide } from '../../leftSide/LeftSide';
import { News } from '../../news/News';

export const NewsPage = () => {
	return (
		<>
			{/* <Header /> */}
			<div className='sides_wrapper'>
				{/* <LeftSide /> */}
				<News />
			</div>
		</>
	);
};
