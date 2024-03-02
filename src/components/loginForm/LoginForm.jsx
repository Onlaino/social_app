import React from 'react';
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

	// Рендеринг формы
	return (
		<form onSubmit={formik.handleSubmit}>
			<div>
				<label htmlFor='username'>Username</label>
				<input
					id='username'
					name='username'
					type='text'
					onChange={formik.handleChange}
					value={formik.values.username}
				/>
				{formik.errors.username && formik.touched.username && (
					<div>{formik.errors.username}</div>
				)}
			</div>

			<div>
				<label htmlFor='password'>Password</label>
				<input
					id='password'
					name='password'
					type='password'
					onChange={formik.handleChange}
					value={formik.values.password}
				/>
				{formik.errors.password && formik.touched.password && (
					<div>{formik.errors.password}</div>
				)}
			</div>

			<button type='submit'>Login</button>
		</form>
	);
};

export default LoginForm;
