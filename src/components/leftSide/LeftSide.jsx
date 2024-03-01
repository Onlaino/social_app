import './leftSide.scss';
import { Link } from 'react-router-dom';

export const LeftSide = () => {
	return (
		<aside>
			{/* <div className='container'> */}
			<div className='leftSide_list'>
				<div><Link to='/'>my profile</Link></div>
				<div><Link to='/news'>news</Link></div>
				<div><Link to='/messages'>messages</Link></div>
				<div><Link to='#'>friends</Link></div>
				<div><Link to='#'>video</Link></div>
				<div><Link to='#'>store</Link></div>
				<div><Link to='#'>other</Link></div>
				<div><Link to='#'>site contact info</Link></div>
			</div>
			{/* </div> */}
		</aside>
	);
};
