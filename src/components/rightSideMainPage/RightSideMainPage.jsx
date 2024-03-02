import './rightSideMainPage.scss';
import { PhotoGallery } from './photoGallery/photoGallery';
import { lazy } from 'react';

const FriendList = lazy(() => import('./friendList/friendList'));

const RightSideMainPage = () => {
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
									<span>подробнее</span>
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
