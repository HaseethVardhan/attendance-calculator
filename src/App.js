import Navbar from "./components/Navbar.js"
import Form from "./components/Form.js"
import React from "react"

function App() {

  const [attdt, setAttdt] = React.useState({
    totalclass: '',
    totalclassatt: '',
    atttill: ''
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

  console.log(attdt);

  return (
    <div>
      <Navbar />
      <Form attdt={attdt} handleChange={handleChange}/>
    </div>
  );
}

export default App;
