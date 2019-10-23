import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import  './list.css';

export default function List() {

const [userData, setUserData] = useState([]);

useEffect(()=>{
    async function loadUser(){
        const response = await api.get('/session');
        setUserData(response.data);
    }
       loadUser();
},[])

  return (
      <>
        <div className="container">
            <h1>Lista de usuários</h1>
            <ul className="listUsers">
                <div className="email">
                    <h2>Email*</h2>
                    {userData.map((user)=> <li>{user.email}</li>)}
                </div>
                <div>
                    <h2>Senha*</h2>
                    {userData.map((user)=> <li>{user.password}</li>)} 
                </div>    
            </ul>  
        </div>    
    
      </>
  );
}
