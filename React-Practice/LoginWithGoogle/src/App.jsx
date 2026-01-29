import { GoogleLogin } from '@react-oauth/google'
import './App.css'
import axios from 'axios'

function App() {

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      console.log(credentialResponse, "....credential response");

      const res = await axios.post('http://localhost:5000/api/v1/auth/google/callback', {
        credential: credentialResponse.credential
      })

      // console.log(res, "....res");

    } catch (error) {
      console.log("Google credential Error catch block", error);

    }
  }

  const handleGoogleError = (err) => {
    console.log("Google credential Error-----", err);

  }


  return (
    <>
      <div>
        <h1> Login  With Google </h1>

        <GoogleLogin
          onSuccess={handleGoogleSuccess}

          onError={handleGoogleError}
        />
      </div>
    </>
  )
}

export default App
