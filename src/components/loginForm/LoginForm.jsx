import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './loginForm.scss';

const validationSchema = Yup.object().shape({
	username: Yup.string()
		.min(2, 'Username must be at least 2 characters')
		.required('Username is required'),
	password: Yup.string()
		.min(8, 'Password must be at least 8 characters')
		.required('Password is required'),
});

const LoginForm = () => {
	const [isFormOpen, setIsFormOpen] = useState(false);

	// Инициализация formik
	const formik = useFormik({
		initialValues: {
			username: '',
			password: '',
		},
		validationSchema: validationSchema,
		onSubmit: values => {
			// Обрабатываем отправку формы
			console.log(values);
			// Здесь должен быть запрос к серверу
		},
	});

	return (
		<div className='form_overlay'>
			<div className='form_wrapper'>
				<form onSubmit={formik.handleSubmit}>
					<div className='form_wrapper_header'>Sign in</div>
					<div className='form_wrapper_inputs'>
						<div className='form_wrapper-username'>
							<label htmlFor='username'>Username</label>
							<input
								id='username'
								name='username'
								type='text'
								onChange={formik.handleChange}
								value={formik.values.username}
							/>
							{formik.errors.username && formik.touched.username && (
								<div className='form_error_username'>{formik.errors.username}</div>
							)}
						</div>

						<div className='form_wrapper-password'>
							<label htmlFor='password'>Password</label>
							<input
								id='password'
								name='password'
								type='password'
								onChange={formik.handleChange}
								value={formik.values.password}
							/>
							{formik.errors.password && formik.touched.password && (
								<div className='form_error_password'>{formik.errors.password}</div>
							)}
						</div>
					</div>

					<button type='submit'>Login</button>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
