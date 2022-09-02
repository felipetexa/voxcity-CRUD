import './SignedUp.css';

let characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let result = ''
let length = 2
function generateString(){
for (let i = length; i > 0; --i) result += characters[Math.round(Math.random() * (characters.length - 1))]
  return result + '-' +result + '-' +result + '-' +result
}

export default function SignedUp({active}) {

  const closeSignedUp = () => {
    active(false)
  }

  return (
    <div className='wrapperSigned'>
      <button onClick={closeSignedUp}><svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="19" cy="19" r="19" fill="black"/>
<path d="M26.42 26L20.54 18.44L26.084 11.272H23.9L19.476 17.04L15.052 11.272H12.812L18.356 18.44L12.532 26H14.772L19.476 19.84L24.152 26H26.42Z" fill="white"/>
        </svg></button>
      <div className='containerSigned'>
        <h1>Seu Cadastro foi efetuado com sucesso!</h1>
        <p>Seu id é:</p>
        <p>
          {generateString()}
        </p>
      </div>
    </div>
  )
}