import './friendsSide.scss';
import { useEffect, useState } from 'react';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

const FriendsSide = () => {
	const [friends, setFriends] = useState([]);

	useEffect(() => {
		fetch(
			'https://65e2f8ef88c4088649f51c74.mockapi.io/social_app/friends/friends'
		)
			.then(res => res.json())
			.then(res => setFriends(res));
	}, []);

	const renderFriends = arr =>
		arr.map(fr => (
			<div className='friends_side_wrapper_items-item'>
				<img src={fr.avatar} width={100} height={100} alt={fr.avatar} />
				<div className='friends_side_wrapper_items-item-info'>
					<p className='friends_side_wrapper_items-item-info-name'>
						{fr.name}
						{fr.surname}
					</p>
					<p className='friends_side_wrapper_items-item-info-education'>
						{fr.education ? fr.education : 'Нет образования'}
					</p>
					<p className='friends_side_wrapper_items-item-info-message'>
						<span>
							Тут должна быть сылка на отправку сообщения пользователю
						</span>
					</p>
				</div>
				<div className='friends_side_remove'>
					<PersonRemoveIcon color='white' />
				</div>
			</div>
	));

	const renderedFriends = renderFriends(friends);

	return (
		<section className='friends_side'>
			<div className='friends_side_wrapper'>
				<div className='friends_side-tabs'>
					<div className='friends_side_wrapper-tabs-friend'>
						<span>All friends</span>
					</div>
					<div className='friends_side_wrapper-tabs-friend'>
						<span>Friends online</span>
					</div>
				</div>
				<div className='friends_side_wrapper_items'>
					{renderedFriends}
					<div className='friends_side_wrapper_items-item'>
						<img
							src='https://sun9-9.userapi.com/s/v1/ig2/f7mrV-bshO3ouvGlrQh950HoiZNyOVBqP0ktenXA_jSb3mMw3u2-aNY1SAWf7dkkK0rqjra-Fq6KK-xoqaszZPM-.jpg?size=100x100&quality=95&crop=243,686,1529,1529&ava=1'
							alt=''
						/>
						<div className='friends_side_wrapper_items-item-info'>
							<p className='friends_side_wrapper_items-item-info-name'>
								Anzhelika Rozhkova
							</p>
							<p className='friends_side_wrapper_items-item-info-education'>
								KF Baymana
							</p>
							<p className='friends_side_wrapper_items-item-info-message'>
								<span>Send Message</span>
							</p>
						</div>
						<div className='friends_side_remove'>
							<PersonRemoveIcon />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FriendsSide;
