import React from 'react';
import '@styles/Login.scss';

const Login = () => {
    return (
        <div className="w-full h-auto grid place-items-center"> 
		{/* Falta organizar el Heigt de valor */}
		    <div className="form-container">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<h1 className="title">Create a new password</h1>
				<p className="subtitle">Enter a new password for your account</p>
				<form action="/" className="form">
					<label for="password" className="label">Password</label>
					<input type="password" id="password" placeholder="*********" className="input input-password" />
					<label for="new-password" className="label">Password</label>
					<input type="password" id="new-password" placeholder="*********" className="input input-password" />
					<input type="submit" value="Confirm" className="bg-tinto rounded-lg border-none text-white w-full cursor-pointer h-12 text-med font-bold mt-4 mb-7" />
				</form>
    		</div>
  		</div>
    );
}

export default Login;