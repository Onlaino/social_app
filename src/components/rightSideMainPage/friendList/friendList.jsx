import { useGetFriendsQuery } from '../../../api/apiSlice';
import './friendList.scss';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const FriendList = ({ friendsProps }) => {
	if (!friendsProps)
		return (
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					alignSelf: 'center',
				}}
			>
				<CircularProgress />
			</Box>
		);

	const renderFriends = arr =>
		arr.map(friendsProps => (
			<div
				className='friends_wrapper_list-item'
				friendid={friendsProps.id}
				key={friendsProps.id}
			>
				<Link to={`/friend_page/${friendsProps.id}`}>
					<div className='friends_wrapper_list-item-img'>
						<img src={friendsProps.avatar} alt={friendsProps.avatar} />
					</div>
					<div className='friends_wrapper_list-item-name'>
						{friendsProps.name}
						{friendsProps.surname}
					</div>
				</Link>
			</div>
		));

	const friendsList = renderFriends(friendsProps);
	return (
		<section className='friends'>
			<div className='friends_wrapper'>
				<div className='friends_wrapper_current-friends'>Friends</div>
				<div className='divider'></div>
				<div className='friends_wrapper_list'>{friendsList.slice(0, 6)}</div>
			</div>
		</section>
	);
};

export default FriendList;
