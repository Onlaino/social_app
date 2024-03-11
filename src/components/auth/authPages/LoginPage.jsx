import { Link } from 'react-router-dom';
import { Login } from '../Login';

export const LoginPage = () => {
	return (
		<div>
			<Login />
			<p style={{ color: 'white', fontSize: '24px' }}>
				Or <Link to='/register'>register</Link>
			</p>
		</div>
	);
};
