import { Link } from 'react-router-dom';
import { SignUp } from '../SignUp';

export const RegisterPage = () => {
	return (
		<div>
			<SignUp />
			<p style={{ color: 'white', fontSize: '24px' }}>
				Or <Link to='/login'>Sign In</Link>
			</p>
		</div>
	);
};
