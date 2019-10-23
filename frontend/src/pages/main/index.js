import React from 'react';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import './main.css';

export default function Main({ history }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    async function loadUser() {

      const _id = localStorage.getItem('user_id');

      const response = await api.get(`/session/${_id}`);

      console.log(response.data);

      setEmail(response.data.email);
      setPassword(response.data.password);
    }
    loadUser();
  }, []);

  function handlePost(){
      history.push("/post");
  }

  async function handleDelete(e){
    e.preventDefault();

    const _id = localStorage.getItem('user_id');

      await api.delete('/session', {
        headers: { _id }
      });
      setEmail('');
      setPassword('');
      setIsDeleted(true);
    alert("seu usuario foi deletado");
  }

  function handlePut(e){
    e.preventDefault();

    const _id = localStorage.getItem('user_id');

    history.push(`/update/${_id}`);
  }

  function handleGet(e){
    e.preventDefault();

    history.push('/list');
  }

  return (
    <div className="container">
        <div className="data">
            {isDeleted === true ? '' : <h2>{isDeleted}</h2>} 
            {isDeleted === true ? '' : <p>{email}</p>}
            {isDeleted === true ? '' : <p>{password}</p>}
        </div>
        <div className="options">
            <h1>Escolha uma opção</h1>
                    <button className="get" onClick={handleGet}>GET</button>
                    <button className="post" onClick={handlePost}>POST</button>
                    <button className= "delete" onClick={handleDelete}>DELETE</button>
                    <button className="put" onClick={handlePut}>PUT</button>
        </div>
        

    </div>
  );


}
