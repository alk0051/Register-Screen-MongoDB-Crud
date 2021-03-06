import React, { useState } from 'react'
import '../styles/Register.css'
import api from '../services/api';

export default function Register() {
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  async function handleSubmit() {
    const data = { 
      firstName,
      lastName,
      email,
      password,
    }
    
    const registerUser = await api.post('/createUser', data);
    
    if(registerUser.status === 201) {
      alert('Usuario cadastrado!')
    }else {
      alert('Erro ao cadastrar usuario!')
      console.log(registerUser.status);
    }
  }

  return (
    <form>
      <label>Primeiro nome</label><br/>
      <input 
        type="text" 
        value={firstName}
        onChange={ e => setFirstName(e.target.value) }
      /><br/><br/>
      
      <label>Ultimo nome</label><br/>
      <input 
        type="text"
        value={lastName}
        onChange={ e => setLastName(e.target.value) }

      /><br/><br/>
      
      <label>E-mail</label><br/>
      <input 
        type="text"
        value={email}
        onChange={ e => setEmail(e.target.value) }

      /><br/><br/>
      
      <label>Senha</label><br/>
      <input 
        type="password"
        value={password}
        onChange={ e => setPassword(e.target.value) }
        
      /><br/><br/>

      <label>Confirmar senha</label><br/>
      <input 
        type="password"

      /><br/><br/>

      <button className="submit" type="button" onClick={handleSubmit} >Criar conta</button>
    </form>
  )
}