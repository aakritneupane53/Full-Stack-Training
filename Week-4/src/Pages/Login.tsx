import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import useAuth  from '../hooks/useAuth';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState('');
  const [form, setForm] = useState({ email: '', password: '' });

  // Get the page the user tried to visit before being redirected to login
  const from = location.state?.from?.pathname || '/dashboard';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(form);
      navigate(from, { replace: true }); // Send them to their intended destination
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <input 
          type="email" 
          placeholder="Email" 
          onChange={e => setForm({ ...form, email: e.target.value })} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          onChange={e => setForm({ ...form, password: e.target.value })} 
          required 
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}