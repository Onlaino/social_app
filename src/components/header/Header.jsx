import './header.scss';

import { Avatar } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<nav className='main_nav'>
			{/* <div className='container'> */}
			<div className='main_nav_wrapper'>
				<Link to='/'>
					<div className='main_nav_logo'>
						<img
							src='https://i.etsystatic.com/9092070/r/il/8ce347/4430138385/il_fullxfull.4430138385_pkws.jpg'
							alt='logotype'
							width='50px'
							height={'50px'}
							style={{ borderRadius: '50%' }}
						/>
						<div className='main_nav_logo-text'>Belfegor</div>
					</div>
				</Link>

				<div className='main_nav_profile'>
					<Avatar
						borderRadius='50%'
						width='50px'
						height={'50px'}
						name='Kola Tio	luwani'
						src='https://sun9-1.userapi.com/impg/_xUCqVjhLabqXolbBMOS9Q3MVbpLJCWgYy8Dag/jJL8lr2nItY.jpg?size=1156x1583&quality=95&sign=df8002f55f4b3fbac043c337358b3f77&type=album'
					/>
				</div>
			</div>
			{/* </div> */}
		</nav>
	);
};
