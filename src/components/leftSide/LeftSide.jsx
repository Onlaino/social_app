import './leftSide.scss';
import { Link } from 'react-router-dom';

export const LeftSide = () => {
	return (
		<aside>
			{/* <div className='container'> */}
			<ul className='leftSide_list'>
				<li>
					<Link to='/'>my profile</Link>
				</li>
				<li>
					<Link to='/news'>news</Link>
				</li>
				<li>
					<Link to={'/messages'}>messages</Link>
				</li>
				<li>
					<Link>friends</Link>
				</li>
				<li>
					<Link>video</Link>
				</li>
				<li>
					<Link>store</Link>
				</li>
				<li>
					<Link>other</Link>
				</li>
				<li>
					<Link>site contact info</Link>
				</li>
			</ul>
			{/* </div> */}
		</aside>
	);
};
