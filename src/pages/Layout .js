import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import logo from './../logo.svg';

const Layout = () => {
	const [currentDateTime, setCurrentDateTime] = useState('');

	useEffect(() => {
		const intervalID = setTimeout(() => {
			const today = new Date();
			setCurrentDateTime(today.toLocaleDateString("en-US") + ' ' + today.toLocaleTimeString('en-US'));
		}, 1000);
		return () => clearInterval(intervalID);
	}, [currentDateTime]);

	return (
		<>
			<header className="App-header">
				<div className="App-header1">
					<div className="App-header2">
						<img src={logo} className="App-logo" alt="logo" />
						<a
							className="App-link"
							href="https://reactjs.org"
							target="_blank"
							rel="noopener noreferrer"
						>
							Learn React
						</a>
						{currentDateTime}
					</div>
					<div className="App-header3">
						<h1>React</h1>
						<p>A JavaScript library for building user interfaces</p>
					</div>
				</div>

			</header>

			<nav className='App-menu'>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About Us</Link></li>
					<li><Link to="/blogs">Blogs</Link></li>
					<li><Link to="/contact">Contact</Link></li>
					<li><Link to="/login">Login</Link></li>
					<li><Link to="/login1">Login1</Link></li>
					<li><Link to="/login2">Login2</Link></li>
				</ul>
			</nav>

			<Outlet />
		</>
	)
};

export default Layout;