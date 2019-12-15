import React, {useState} from 'react'

const App = () => {
    const [names, setNames] = useState('');
    const [persons, setPersons] = useState([]);
   const addNumbers = (event) =>{
       event.preventDefault();
       console.log('button clicked',event.target);
       setPersons(persons.concat({name: names}));
       setNames('');
   }
   const changeEvent = (event) =>{
      console.log(event.target.value);
      setNames(event.target.value);
   }
   return(
       <div>
           <h2>PhoneBook</h2>
           <form onSubmit = {addNumbers}>
               <div> name : <input value={names} onChange= {changeEvent}/></div>
               <div> <button type="submit">add</button></div>
           </form>
           <div> Names entered : 
               {persons.map(person => <div>{person.name}</div>)}
               </div>   
       </div>
   )
}

export default App