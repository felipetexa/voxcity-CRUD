import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import { useState } from 'react';

function App() {

  const [cpf, setCpf] = useState('');

  return (
    <div>
      <Header />
      <Form value={cpf} onChange={(e)=> setCpf(e.target.value)} />
    </div>
  );
}

export default App;
