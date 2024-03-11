import { useState } from 'react';
import { Link } from 'react-router-dom';
import './formStyle.scss';
const Form = ({ title, handleClick }) => {
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');

	return (
		<div className='form_overlay'>
			<div className='form_wrapper'>
				<form>
					<div className='form_wrapper_header'>{title}</div>
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
					<button type='button' onClick={() => handleClick(email, pass)}>
						{title}
					</button>
				</form>
			</div>
		</div>
	);
};

export { Form };
