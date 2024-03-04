import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { motion } from 'framer-motion';
import { useGetFriendsQuery } from '../../api/apiSlice';
import { Skeleton } from '@mui/material';
import './friendsSide.scss';

const friendsVariants = {
	initial: {
		height: 0,
		opacity: 0,
	},
	animate: {
		height: '150px',
		opacity: 1,
	},
	exit: {
		height: 0,
		opacity: 0,
	},
};

const FriendsSide = () => {
	const { data: friends, error, isLoading } = useGetFriendsQuery();
	if (isLoading)
		return (
			<Skeleton
				variant='rectangular'
				width={210}
				height={118}
				sx={{ bgcolor: 'white.900' }}
			/>
		);
	if (error) {
		return (
			<div style={{ fontSize: 30, color: 'white' }}>
				Error: {console.log(error)}
			</div>
		);
	}
	const renderFriends = arr =>
		arr.map(fr => (
			<motion.div
				variants={friendsVariants}
				initial='initial'
				animate='animate'
				exit='exit'
				className='friends_side_wrapper_items-item'
				key={fr.id}
			>
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
			</motion.div>
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
