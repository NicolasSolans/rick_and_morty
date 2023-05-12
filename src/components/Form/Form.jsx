import style from './Form.module.css'
import { useState } from 'react'
import validation from '../Validation/Validation'

const Form = ({login})=>{
    const handleSubmit = (event)=>{
        event.preventDefault();
        login(userData);
    }

    const [errors, setErrors] = useState({})


    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event)=>{
        setUserData({
            ...userData,
            [event.target.name] : event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name] : event.target.value
        }))
    }

    return(
        <form className={style.form} onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input  type="text" name='email' value={userData.email} onChange={handleChange}/>
            {errors.email && <p>{errors.email}</p>}
            <hr />
            <label  htmlFor="password">Password</label>
            <input type="text" name='password' value={userData.password} onChange={handleChange}/>
            {errors.password && <p>{errors.password}</p>}
            <hr />
            <button>Submit</button>
        </form>
    )
}

export default Form;