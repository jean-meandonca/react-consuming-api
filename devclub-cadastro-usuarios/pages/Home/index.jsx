import './style.css'
import Trash from '../../src/assets/trash.svg'

function Home() {

  const users = [
  {
    id: 'FEFwefwefwe',
    name: 'Rodolfo',
    age: 33,
    email: 'rod@email.com'
  },
  { 
    id: 'jjjretfwefwe',
    name: 'Aline',
    age: 35,
    email: 'Ali@email.com',
  },]

  return (
    <div className='container'>

      <form action="">
        <h1>Cadastro de Usuários</h1>
        <input name='nome' type='text' />
        <input name='idade' type='number' />
        <input name='email' type='email' />
        <button type='button'>Cadastrar</button>
      </form>

    {users.map( user => (
      <div key={user.id}>
        <div>
          <p>Nome: {user.name} </p>
          <p>Idade:{user.age} </p>
          <p>Email:{user.email} </p>
          <button>
            <img src={Trash} alt="" />
          </button>
        </div>
      </div>
    ))}

      
    </div>
  )
}

export default Home
