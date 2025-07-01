import { createContext, useState } from 'react';
import './App.css';
import First from './Components/useContextObj/First';
// import Comp1 from './Components/useContext/Comp1';
// import FunctionEffect from './Components/useEffect/FunctionEffect';
// import ClassEffect from './Components/useEffect/ClassEffect';
// import FunctionState from './Components/useState/FunctionState';
// import ClassSatte from './Components/useState/ClassSatte';
// import StateArray from './Components/useState/StateArray';
// import StateObject from './Components/useState/StateObject';
// import State from './Components/useState/State';

// export const nameContext = createContext();
// export const ageContext = createContext();

export const studentContext = createContext();

function App() {
  const [student, setStudent] = useState({
    name: "Swapmil",
    age: 23,
    Dev: "Frontend"
  })

  let handleContext = () => {
    setStudent({
      ...student,
      Dev: "Fullstack"
    })
  }

  return (
    <div className="App">
      {/* <State/> */}
      {/* <StateObject /> */}
      {/* <StateArray /> */}
      {/* <ClassSatte /> */}
      {/* <FunctionState /> */}
      {/* <ClassEffect /> */}
      {/* <FunctionEffect /> */}

      {/* <nameContext.Provider value={"SwapSid"}>
        <ageContext.Provider value={21}>
          <Comp1 />
        </ageContext.Provider>
      </nameContext.Provider > */}

      <studentContext.Provider value={{ student, handleContext }} >
        <First />
      </studentContext.Provider>





    </div>
  );
}

export default App;
