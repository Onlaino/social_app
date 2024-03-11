import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../store/slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../formStyle.scss';

export const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const [userFromServer, setUserFromServer] = useState([]);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogin = (email, password) => {
		fetch(
			'https://65e2f8ef88c4088649f51c74.mockapi.io/social_app/friends/Users'
		)
			.then(res => res.json())
			.then(users => {
				const user = users.find(user => user.email === email);
				if (user) {
					console.log(user);
					setUserFromServer(user);
					const auth = getAuth();
					signInWithEmailAndPassword(auth, email, password)
						.then(({ user: firebaseUser }) => {
							dispatch(
								setUser({
									email: firebaseUser.email,
									id: firebaseUser.uid,
									token: firebaseUser.accessToken,
									name: user.name,
									surname: user.surname,
									avatarLink: user.avatarLink,
								})
							);
							navigate('/main');
						})
						.catch(() => alert('Invalid user'));
				} else {
					alert('No user found with this email');
				}
			})
			.catch(e => {
				console.error(e);
			});
	};

	return (
		<div>
			<div className='form_overlay'>
				<div className='form_wrapper'>
					<form>
						<div className='form_wrapper_header'>Login</div>
						<div className='form_wrapper_inputs'>
							<div className='form_wrapper-username'>
								<label htmlFor='email'>Username</label>
								<input
									id='email'
									name='email'
									type='text'
									placeholder='type email...'
									value={email}
									onChange={e => setEmail(e.target.value)}
								/>
							</div>

							<div className='form_wrapper-password'>
								<label htmlFor='pass'>Password</label>
								<input
									id='pass'
									name='pass'
									type='pass'
									placeholder='type password'
									value={pass}
									onChange={e => setPass(e.target.value)}
								/>
							</div>
						</div>
						<button type='button' onClick={() => handleLogin(email, pass)}>
							Login
						</button>
						<p className='move_to' style={{ color: 'white', fontSize: '24px' }}>
							Or <Link to='/register'>register</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};
