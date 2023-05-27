import './App.css';
import style from './App.module.css'
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/favorites';

const email = 'nico@gmail.com'
const password = 'nicosolans'

function App() {
   const location = useLocation();
   const navigate = useNavigate();
   
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const {data} = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
         
      } catch (error) {
        console.log(error.message); 
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onSearch = async(id)=> {
   try {
      const {data} = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`)

      if(data.name){
         setCharacters((oldChars) => [...oldChars, data]);
       }
      }
      catch (error) {
      alert('¡No hay personajes con este ID!');
   } 
   };

   const onClose = (id) => {
      setCharacters(
         characters.filter((char)=>{
            return char.id !== id
         })
      )
   } 

   return (

      <div className={style.App}>
         {
            location.pathname !== '/' ? <Nav onSearch={onSearch}/> : null
         }
         

         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes> 
      </div>
      
   );
}


export default App;
