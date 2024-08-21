import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, User, Passwords, Button, Error } from './styled';

function LogIN({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError(`Inputlarni To'ldiring`);
    } else if (username === 'admin12' && password === 'admin12') {
      setError('');
      onLogin();
      navigate('/home');
    } else {
      setError('Noto‘g‘ri foydalanuvchi nomi yoki parol');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        {error && <Error>{error}</Error>}
        <User
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Foydalanuvchi nomi"
        />
        <Passwords
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Parol"
        />
        <Button type="submit">Kirish</Button>
      </Form>
    </Container>
  );
}

export default LogIN;
