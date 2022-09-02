import './Form.css';
import InputMask from 'react-input-mask'
import { useState } from 'react';
import SignedUp from '../SignedUp';

export default function Form({value, onChange}) {

  const [signedUp, setSignedup] = useState(false)

  const showSignedUp = () => {
    setSignedup(!signedUp)
  }

  return (
    <div className="container-main">
      <h1>CADASTRE-SE</h1>
          <form>
            <input type="text" name="nome" placeholder="Nome Completo" required />
            <input type="password" name="senha" id="" placeholder="Crie sua senha" minlength="6" required />
            <InputMask mask='999.999.999-99' placeholder='Digite seu CPF' value={value} onChange={onChange} required/>
            <button className="btn-cadastro" type="button" onClick={showSignedUp}>Cadastrar</button>
          </form>
          {signedUp && <SignedUp active={setSignedup} />}
    </div>
  )
}
