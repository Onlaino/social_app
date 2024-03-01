import { Dialogs } from '../../dialogs/Dialogs';
import { Header } from '../../header/Header';
import { LeftSide } from '../../leftSide/LeftSide';
import './messagesPage.scss';

export const MessagesPage = () => {
	return (
		<>
			{/* <Header /> */}
			<div className='sides_wrapper'>
				{/* <LeftSide /> */}
				<Dialogs />
			</div>
		</>
	);
};
