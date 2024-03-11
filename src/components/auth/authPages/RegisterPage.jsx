import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../../../store/slices/userSlice';
import '../formStyle.scss';

export const RegisterPage = () => {
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const [avatarLink, setAvatarLink] = useState('');

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleRegister = (email, password) => {
		const auth = getAuth();
		fetch(
			'https://65e2f8ef88c4088649f51c74.mockapi.io/social_app/friends/Users',
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					name,
					surname,
					email: email,
					avatarLink: avatarLink,
				}),
			}
		);
		createUserWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				dispatch(
					setUser({
						email: user.email,
						id: user.uid,
						token: user.accessToken,
						name: name,
						surname: surname,
						avatarLink: avatarLink,
					})
				);
				console.log(user);
				navigate('/main');
			})
			.catch(console.error);
	};
	return (
		<div className='form_overlay'>
			<div className='form_wrapper'>
				<form>
					<div className='form_wrapper_header'>Register</div>
					<div className='form_wrapper_inputs'>
						<div className='form_wrapper-username'>
							<label htmlFor='email'>Email</label>
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
						<div className='form_wrapper-password'>
							<label htmlFor='name'>Name</label>
							<input
								type='text'
								placeholder='type name'
								value={name}
								onChange={e => setName(e.target.value)}
								id='name'
								name='name'
							/>
						</div>
						<div className='form_wrapper-password'>
							<label htmlFor='surname'>Surname</label>
							<input
								type='text'
								placeholder='type surname'
								value={surname}
								onChange={e => setSurname(e.target.value)}
								id='surname'
								name='surname'
							/>
						</div>
						<div className='form_wrapper-password'>
							<label htmlFor='avatarLink'>avatarLink</label>
							<input
								type='text'
								placeholder='type avatarLink'
								value={avatarLink}
								onChange={e => setAvatarLink(e.target.value)}
								id='avatarLink'
								name='avatarLink'
							/>
						</div>
					</div>

					<button type='button' onClick={() => handleRegister(email, pass)}>
						Register
					</button>
					<p className='move_to' style={{ color: 'white', fontSize: '24px' }}>
						Or <Link to='/'>login</Link>
					</p>
				</form>
			</div>
		</div>
	);
	// <div>
	// 	<SignUp />
	// 	<input type="text" />
	// 	<input type="text" />
	// 	<p style={{ color: 'white', fontSize: '24px' }}>
	// 		Or <Link to='/login'>Sign In</Link>
	// 	</p>
	// </div>
};
