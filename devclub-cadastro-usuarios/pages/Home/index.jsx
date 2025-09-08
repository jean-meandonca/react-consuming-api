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
        <input placeholder="Nome" name='nome' type='text' />
        <input placeholder="Idade" name='idade' type='number' />
        <input placeholder="E-mail" name='email' type='email' />
        <button type='button'>Cadastrar</button>
      </form>

      {users.map(user => (
        <div key={user.id} className="card">
          <div>
            <p>Nome: <span>{user.name}</span> </p>
            <p>Idade:<span>{user.age}</span> </p>
            <p>Email:<span>{user.email}</span> </p>
          </div>
           <button>
              <img src={Trash} alt="" />
            </button>
        </div>
      ))}


    </div>
  )
}

export default Home
