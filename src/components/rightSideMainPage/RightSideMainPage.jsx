import './rightSideMainPage.scss';
import { PhotoGallery } from './photoGallery/photoGallery';
import { lazy } from 'react';
import { useGetFriendsQuery } from '../../api/apiSlice';
import { Box, CircularProgress } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { skipToken } from '@reduxjs/toolkit/query';

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

	const {
		data: friends,
		error,
		isLoading,
	} = useGetFriendsQuery(loaded ? undefined : skipToken);

	if (isLoading)
		return (
			<Box
				sx={{
					width: 100,
					height: 100,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					alignSelf: 'center',
				}}
			>
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

	return (
		<div className='layout_main'>
			<div className='layout_main_header'>
				<div className='layout_main_header-bg'>
					<img
						src='https://sun9-47.userapi.com/impf/uQozV6HhZgCmaAp2iUxiQqbkfuy-lFTzKvCTvQ/UKtYFhu3bm8.jpg?size=960x384&quality=96&crop=0,280,1920,640&sign=bfd704df302221657877f7e1fcd21124&c_uniq_tag=ocIRUdKcAHu7G36Km-g6r8Iu0xDlJ3TUX6O6RxbzPMw&type=helpers'
						alt=''
					/>
				</div>
				<div className='layout_main_user'>
					<div className='layout_main_user-info'>
						<div className='layout_main_user-info-wrapper'>
							<div className='layout_main_user-info-wrapper-photo'>
								<img
									src='https://sun9-1.userapi.com/impg/_xUCqVjhLabqXolbBMOS9Q3MVbpLJCWgYy8Dag/jJL8lr2nItY.jpg?size=1156x1583&quality=95&sign=df8002f55f4b3fbac043c337358b3f77&type=album'
									alt='userPhoto'
									width={'150px'}
									height={'150px'}
								/>
							</div>
							<div className='layout_main_user-info-wrapper-text'>
								<h2>Oleg Vasilev</h2>
								<span>status</span>
								<br />
								<div className='location_nd_more'>
									<span>location</span>
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
													<li className='dropdown_info_list-item'>data</li>
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
				<PhotoGallery />
				<FriendList />
			</div>
		</div>
	);
};

export default RightSideMainPage;
