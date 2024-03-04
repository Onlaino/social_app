import { useGetFriendsQuery } from '../../../api/apiSlice';
import './friendList.scss';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const FriendList = () => {
	const { data: friends, error, isLoading } = useGetFriendsQuery();
	if (isLoading)
		return (
			<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
				<CircularProgress />
			</Box>
		);
	if (error) {
		return (
			<div style={{ fontSize: 30, color: 'white' }}>
				Error: {error.toString()}
			</div>
		);
	}

	const renderFriends = arr =>
		arr.map(friend => (
			<div className='friends_wrapper_list-item' key={friend.id}>
				<div className='friends_wrapper_list-item-img'>
					<img src={friend.avatar} alt={friend.avatar} />
				</div>
				<div className='friends_wrapper_list-item-name'>
					{friend.name}
					{friend.surname}
				</div>
			</div>
		));

	const friendsList = renderFriends(friends);
	return (
		<section className='friends'>
			<div className='friends_wrapper'>
				<div className='friends_wrapper_current-friends'>Friends online</div>
				<div className='divider'></div>
				<div className='friends_wrapper_list'>{friendsList.slice(0, 4)}</div>
			</div>
		</section>
	);
};

export default FriendList;
