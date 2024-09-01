import Navbar from "./components/Navbar.js"
import Form from "./components/Form.js"
import Result from "./components/Result.js"
import React from "react"

function App() {

  const [attdt, setAttdt] = React.useState({
    totalclass: '',
    totalclassatt: '',
    atttill: '',
    change: false
  })

  function handleChange(event){
    const {name, value} = event.target;
    setAttdt((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  function handleSubmit(event){
    event.preventDefault();
    setAttdt(prevState => {
      return{
        ...prevState,
        change: true
      }
    })
  }

  return (
    <div>
      <Navbar />
      <Form attdt={attdt} handleChange={handleChange} handleSubmit={handleSubmit}/>
      {attdt.change ? <Result attdt={attdt}/> : ''}
    </div>
  );
}

export default App;
