import './header.scss';
import { motion, AnimatePresence } from 'framer-motion';
import FaceIcon from '@mui/icons-material/Face';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

import { useState } from 'react';
import { Link } from 'react-router-dom';

const dropDownHeaderVariants = {
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

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className='main_nav'>
			<div className='main_nav_wrapper'>
				<Link to='/main'>
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
					<FaceIcon fontSize='large' color='primary' />
					<Link to='/login' style={{ color: 'white' }}>
						{' '}
						LOGIN{' '}
					</Link>
					<KeyboardDoubleArrowDownIcon
						style={{ cursor: 'pointer' }}
						onClick={() => setIsOpen(!isOpen)}
						fontSize='small'
						color='primary'
					/>
					<AnimatePresence>
						{isOpen ? (
							<motion.div
								variants={dropDownHeaderVariants}
								initial='initial'
								animate='animate'
								exit='exit'
								className='dropDownHeader'
							>
								<ul className='dropDownHeader_list'>
									<li>1111111111</li>
									<li>1111111111</li>
									<li>1111111111</li>
									<li>1111111111</li>
									<li>1111111111</li>
								</ul>
							</motion.div>
						) : null}
					</AnimatePresence>
				</div>
			</div>
		</nav>
	);
};
