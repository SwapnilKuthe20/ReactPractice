import './App.css'
import Admin from './Components/Admin';
import Banner from './Components/Banner';
import User from './Components/User';

function App() {
  // fetch("https://api.example.com/data");
  console.log("app render...");

  const hello = <h1>Hello world !!</h1>

  const name = "swapnil";
  let age = 22;
  const city = "Nagpur"
  const isLogin = true;

  const isLoginResult = isLogin ? <h1> User login </h1> : <h1>Please login </h1>;

  const isAdmin = false;
  const content = isAdmin ? <> <Admin /> <Banner /> </> : <User />

  const btn = true;

  return (
    <>
      {hello}
      <p> App Component </p>

      {isLoginResult}

      <p>Name : {name}</p>
      <p>age : {age + 2}</p>
      <p>Name : {city}</p>

      {
        btn &&
        <button>click</button>
      }

      {content}
    </>
  )
}

export default App
