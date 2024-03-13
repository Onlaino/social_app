import '../rightSideMainPage.scss';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { PhotoGallery } from '../photoGallery/photoGallery';
import FriendList from '../friendList/friendList';
import { useParams } from 'react-router-dom';
import { useGetFriendsQuery } from '../../../api/apiSlice';
import ErrorGif from '../../Page404/error.gif'

const dropDownInfoVariants = {
	initial: {
		height: 0,
		opacity: 0,
	},
	animate: {
		height: '100px',
		opacity: 1,
	},
	exit: {
		height: 0,
		opacity: 0,
	},
};

export const FriendPage = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [friend, setFriend] = useState([]);
	const { data: friends, error, isLoading } = useGetFriendsQuery();
	const { friendId } = useParams();

	useEffect(() => {
		if (friends) {
			const foundFriend = friends.find(friend => friend.id === friendId);
			setFriend(foundFriend);
		}
	}, [friends, friendId]);

	console.log(friend);

	return (
		<div className='layout_main'>
			<div className='layout_main_header'>
				<div className='layout_main_header-bg'>
					<img
						src='https://sun9-47.userapi.com/impf/uQozV6HhZgCmaAp2iUxiQqbkfuy-lFTzKvCTvQ/UKtYFhu3bm8.jpg?size=960x384&quality=96&crop=0,280,1920,640&sign=bfd704df302221657877f7e1fcd21124&c_uniq_tag=ocIRUdKcAHu7G36Km-g6r8Iu0xDlJ3TUX6O6RxbzPMw&type=helpers'
						alt='user_bg'
					/>
				</div>
				<div className='layout_main_user'>
					<div className='layout_main_user-info'>
						<div className='layout_main_user-info-wrapper'>
							<div className='layout_main_user-info-wrapper-photo'>
								<img
									src={friend.avatar ? friend.avatar : ErrorGif}
									alt='userPhoto'
									width={'150px'}
									height={'150px'}
								/>
							</div>
							<div className='layout_main_user-info-wrapper-text'>
								<h2>
									{friend.name} {friend.surname && null}
								</h2>
								<span>status</span>
								<br />
								<div className='location_nd_more'>
									<span>
										{friend.location ? friend.location : 'no location'}
									</span>
									<span
										className='location_nd_more-info'
										onClick={() => setIsOpen(!isOpen)}
									>
										more info
									</span>
									{isOpen ? (
										<AnimatePresence>
											<motion.div
												variants={dropDownInfoVariants}
												initial='initial'
												animate='animate'
												exit='exit'
												className='dropdown_info'
											>
												<ul className='dropdown_info_list'>
													<li className='dropdown_info_list-item'>
														age: {friend.age}
													</li>
													<li className='dropdown_info_list-item'>data</li>
													<li className='dropdown_info_list-item'>data</li>
												</ul>
											</motion.div>
										</AnimatePresence>
									) : null}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='layout_main_body'>
				<PhotoGallery photoProps={friend.gallery ? friend.gallery : null} />
				<FriendList friendsProps={friend.friends} />
			</div>
		</div>
	);
};
