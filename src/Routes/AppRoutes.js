import { Route, Routes } from 'react-router-dom';
import Layout from '../pages/Layout ';
import Home from '../pages/Home';
import About from '../pages/About';
import Blogs from '../pages/Blogs';
import Contact from '../pages/Contact';
import NoPage from '../pages/NoPage';
import Login from '../pages/login/Login';
import Login1 from '../pages/login1/Login1';
import Login2 from '../pages/login2/Login2';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="blogs" element={<Blogs />} />
				<Route path="contact" element={<Contact />} />
				<Route path="login" element={<Login />} />
				<Route path="login1" element={<Login1 />} />
				<Route path="login2" element={<Login2 />} />
				<Route path="*" element={<NoPage />} />
			</Route>
		</Routes>
	);
}
export default AppRoutes;