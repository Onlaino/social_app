import './friendList.scss';
import { useEffect, useState } from 'react';

const FriendList = () => {
	const [friends, setFriends] = useState([]);

	useEffect(() => {
		fetch(
			'https://65e2f8ef88c4088649f51c74.mockapi.io/social_app/friends/friends'
		)
			.then(res => res.json())
			.then(res => setFriends(res));
	}, []);

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
				<div className='friends_wrapper_list'>
					{friendsList.slice(0, 4)}
					{/* <div className='friends_wrapper_list-item'>
						<div className='friends_wrapper_list-item-img'>
							<img src={interfect} alt='' />
						</div>
						<div className='friends_wrapper_list-item-name'>Юля Рожкова</div>
					</div>
					<div className='friends_wrapper_list-item'>
						<div className='friends_wrapper_list-item-img'>
							<img src={interfect} alt='' />
						</div>
						<div className='friends_wrapper_list-item-name'>Юля Рожкова</div>
					</div>
					<div className='friends_wrapper_list-item'>
						<div className='friends_wrapper_list-item-img'>
							<img src={interfect} alt='' />
						</div>
						<div className='friends_wrapper_list-item-name'>Юля Рожкова</div>
					</div>
					<div className='friends_wrapper_list-item'>
						<div className='friends_wrapper_list-item-img'>
							<img src={interfect} alt='' />
						</div>
						<div className='friends_wrapper_list-item-name'>Юля Рожкова</div>
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default FriendList;
