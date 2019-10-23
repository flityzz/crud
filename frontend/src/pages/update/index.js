import React, { useState, useEffect } from 'react';

import './update.css';

import api from '../../services/api';

export default function Update({ history }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(()=>{

     const  _id  = localStorage.getItem('user_id');
      
      async function loadUser(){
          const dados = await api.get('/session', {
            headers: { _id }
          });

          setEmail(dados.data.email);
          setPassword(dados.data.password);
      }
          loadUser();
  },[])

  async function handleSubmit(e) {
    e.preventDefault();

    const  _id  = localStorage.getItem('user_id');

    await api.put(`session/${_id}`, {
        email: email,
        password: password,
    });

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
              onChange={event => setEmail(event.target.value)}
              />

              <label>Senha* </label>
              <input 
              type="password"
              placeholder="sua senha.."
              onChange={event => setPassword(event.target.value)}
              />

              <button type="submit">editar</button>
          </form>
      </div>
    </>
  );
}
