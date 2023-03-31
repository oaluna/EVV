import { useState } from 'react'
import axios from 'axios'

const Login = () => {
	const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(process.env.EMEDNY_API_KEY);
	  // Login API call
		const handleLogin = async () => {
			try {
				const response = await axios.post(`${BASE_URL}/login`, { username, password });
				setToken(response.data.token);
			} catch (error) {
				setError(error.response.data);
			}
		};
	
		// Verify token API call
		const handleVerifyToken = async () => {
			try {
				const response = await axios.post(`${BASE_URL}/verifyToken`, { token });
				console.log(response.data);
			} catch (error) {
				setError(error.response.data);
			}
		};
	return (
		<div className="space-y-3 flex flex-col items-start">
        <input className="border border-1 border-gray-400 text-sm rounded-sm shadow-sm px-3 py-1" type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} />
        <input className="border border-1 border-gray-400 text-sm rounded-sm shadow-sm px-3 py-1" type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <button className="bg-gradient-to-tr from-[#0e1862] via-[#2d83b5] to-[#89ccf6] px-3 py-1 text-gray-50 rounded-sm shadow-sm" type="button" onClick={handleLogin}>Login</button>
      </div>
	)
}