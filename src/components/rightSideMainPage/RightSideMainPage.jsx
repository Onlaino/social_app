import './rightSideMainPage.scss';
import { PhotoGallery } from './photoGallery/photoGallery';
import { lazy } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useSelector } from 'react-redux';

const FriendList = lazy(() => import('./friendList/friendList'));

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

const RightSideMainPage = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [loaded, setLoaded] = useState(false);
	const { isAuth, email } = useAuth();

	const user = useSelector(state => state.user);
	let navigate = useNavigate();

	
	return isAuth ? (
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
									src={user.avatarLink}
									alt='userPhoto'
									width={'150px'}
									height={'150px'}
								/>
							</div>
							<div className='layout_main_user-info-wrapper-text'>
								<h2>{user.name} {user.surname}</h2>
								<span>status</span>
								<br />
								<div className='location_nd_more'>
									<span>location</span>
									<span
										className='location_nd_more-info'
										// onClick={() => setIsOpen(!isOpen)}
									>
										more info
									</span>
									{/* {isOpen ? (
										<AnimatePresence>
											<motion.div
												variants={dropDownInfoVariants}
												initial='initial'
												animate='animate'
												exit='exit'
												className='dropdown_info'
											>
												<ul className='dropdown_info_list'>
													<li className='dropdown_info_list-item'>data</li>
													<li className='dropdown_info_list-item'>data</li>
													<li className='dropdown_info_list-item'>data</li>
												</ul>
											</motion.div>
										</AnimatePresence>
									) : null} */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='layout_main_body'>
				<PhotoGallery />
				<FriendList />
			</div>
		</div>
	) : (
		navigate('/login')
	);
};

export default RightSideMainPage;
