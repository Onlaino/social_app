import './leftSide.scss';
import { Link } from 'react-router-dom';
//icons
import MessageIcon from '@mui/icons-material/Message';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NewspaperIcon from '@mui/icons-material/Newspaper';

export const LeftSide = () => {
	return (
		<aside>
			<ul className='leftSide_list'>
				<li>
					<Link to='/'>
						<AccountCircleIcon style={{ color: 'white' }} />
						<div>My profile</div>
					</Link>
				</li>
				<li>
					<Link to='/messages'>
						<MessageIcon style={{ color: 'white' }} />
						<div>Messages</div>
					</Link>
				</li>
				<li>
					<Link to='/news'>
						<NewspaperIcon style={{ color: 'white' }} />
						<div>News</div>
					</Link>
				</li>
				<li>
					<Link to='/'>
						<MessageIcon style={{ color: 'white' }} />
						<div>Messages</div>
					</Link>
				</li>
				<li>
					<Link to='/'>
						<MessageIcon style={{ color: 'white' }} />
						<div>Messages</div>
					</Link>
				</li>
				<li>
					<Link to='/'>
						<MessageIcon style={{ color: 'white' }} />
						<div>Messages</div>
					</Link>
				</li>
				<li>
					<Link to='/'>
						<MessageIcon style={{ color: 'white' }} />
						<div>Messages</div>
					</Link>
				</li>
			</ul>
		</aside>
	);
};
