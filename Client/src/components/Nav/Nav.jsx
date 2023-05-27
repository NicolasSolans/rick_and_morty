import SearchBar from '../SearchBar/SearchBar.jsx'
import style from './Nav.module.css'
import { Link, NavLink } from 'react-router-dom'

const Nav = ({onSearch}) =>{
    return(
        <div className={style.nav}>
            <SearchBar onSearch={onSearch}/>

        <Link to='/about'>
            <button>About</button>
        </Link>

        <NavLink to='/home'>
            <button>Home</button>
        </NavLink>

        <NavLink to='/favorites'>
            <button>Favoritos</button>
        </NavLink>
        </div>

        
    )

}

 export default Nav