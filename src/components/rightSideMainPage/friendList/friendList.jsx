import './friendList.scss';
import interfect from '../..//../resources/ula rozkova.png'


export const FriendList = () => {
	return (
		<section className='friends'>
			<div className='friends_wrapper'>
				<div className='friends_wrapper_current-friends'>Friends online</div>
				<div className="divider"></div>
				<div className='friends_wrapper_list'>
					<div className='friends_wrapper_list-item'>
						<div className='friends_wrapper_list-item-img'>
							<img
								src={interfect}
								alt=''
							/>
						</div>
						<div className='friends_wrapper_list-item-name'>Юля Рожкова</div>
					</div>
					<div className='friends_wrapper_list-item'>
						<div className='friends_wrapper_list-item-img'>
							<img
								src={interfect}
								alt=''
							/>
						</div>
						<div className='friends_wrapper_list-item-name'>Юля Рожкова</div>
					</div>
					<div className='friends_wrapper_list-item'>
						<div className='friends_wrapper_list-item-img'>
							<img
								src={interfect}
								alt=''
							/>
						</div>
						<div className='friends_wrapper_list-item-name'>Юля Рожкова</div>
					</div>
					<div className='friends_wrapper_list-item'>
						<div className='friends_wrapper_list-item-img'>
							<img
								src={interfect}
								alt=''
							/>
						</div>
						<div className='friends_wrapper_list-item-name'>Юля Рожкова</div>
					</div>
					<div className='friends_wrapper_list-item'>
						<div className='friends_wrapper_list-item-img'>
							<img
								src={interfect}
								alt=''
							/>
						</div>
						<div className='friends_wrapper_list-item-name'>Юля Рожкова</div>
					</div>
					<div className='friends_wrapper_list-item'>
						<div className='friends_wrapper_list-item-img'>
							<img
								src={interfect}
								alt=''
							/>
						</div>
						<div className='friends_wrapper_list-item-name'>Юля Рожкова</div>
					</div>
				</div>
			</div>
		</section>
	);
};
