
import './App.css';

function App() {
  const submitted = ()=>{
    const url = 'http://localhost:5000/api/v1/auth/signup'
    const response = fetch(url, {
      c
    })
  }
  return (
    <>
      <div className='signup-form'>
          <form onSubmit={submitted}>
              <input type="text" name='name'/>
              <input type="email" name='email'/>
              <input type="password" name='password'/>
          </form>
      </div>
    </>
  );
}

export default App;
