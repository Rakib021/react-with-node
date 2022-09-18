import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const name= event.target.name.value;
    const email = event.target.email.value;
    const user=(name,email);

    


    //post data to server
fetch('http://localhost:4000/user' , {
  method:'POST',
  header:{
    "content-type" :"aplication/json",
  },
  body:JSON.stringify(user)
})
.then(res=>res.json())
.then(data=>{
  const newUser = [...users,data];
  setUsers(newUser);
  console.log(data);
})

    
  };
  return (
    <div className="App">
      <h2>My own Data :{users.length}</h2>

      <form onSubmit={handleOnSubmit}>
        <input type="text" name="name" id="" placeholder="name" />
        <input type="text" name="email" placeholder="email" id="" />
        <input type="submit" value="add user" />
      </form>
      <ul>
        {users.map((user) => (
          <li key={user.id}>id:{user.id},name:{user.name},email:{user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
