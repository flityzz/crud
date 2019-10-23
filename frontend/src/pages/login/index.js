import React, { useState} from 'react';
import api from '../../services/api';

import './login.css';

export default function Login({ history }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/session', {
      email: email,
      password: password
    });
    
    localStorage.setItem("user_id", response.data._id);

    history.push('/');
  }

  return (
    <>
      <div className="container">
          <form className="form-container" onSubmit={handleSubmit}>
              <label>Email* </label>
              <input 
              type="email"
              placeholder="seu email.."
              value={email}
              onChange={event => setEmail(event.target.value)}
              />

              <label>Senha* </label>
              <input 
              type="password"
              placeholder="sua senha.."
              value={password}
              onChange={event => setPassword(event.target.value)}
              />

              <button type="submit">Logar</button>
          </form>
      </div>
    </>
  );
}
