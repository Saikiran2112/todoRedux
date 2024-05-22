import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid'
import {useDispatch} from 'react-redux'
import { add } from './store/taskReducer';
import Products from './Products';
import Star from './components/Star';
function App() {
  const [name,setName]=useState('')
  const dispatch=useDispatch()
  const handler=()=>{
    const t={
      id:uuidv4(),
      name:name
    }
    dispatch(add(t))
    setName('')
  }
  return (
    <div className="App">
      <label htmlFor='task'></label>
      <input type='text'  id='task' placeholder='enter the task' value={name} onChange={(e)=>{
        setName(e.target.value)
      }}/>
      <button onClick={handler}>Add</button>
      <Products/>
      
    </div>
  );
}

export default App;
