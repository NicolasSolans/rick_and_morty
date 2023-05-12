
import { Link  } from 'react-router-dom';
import { ADD_FAV, REMOVE_FAV } from '../../Redux/action-types';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../../Redux/actions';
import { useState, useEffect } from 'react';

 
function Card({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) {

   const [isFav, setIsFav] = useState(false)

   const handleFavorite = ()=>{
      isFav ? removeFav(id) : addFav({id, name, status, species, gender, origin, image, onClose})
      setIsFav(!isFav)
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);


   return (
      <div className='contenedor'>
      {
         (<button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>)
      }
         
         <button onClick={()=>onClose(id)}>Cerrar</button>
         <Link to={`/detail/${id}`}>
         <div className='cara anterior'>
         <img src={image} alt='' /> 
         </div>
         <div className='cara posterior'>
         <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         </div>
         </Link>
            
         
      </div>
   );
}

const mapDispatchToProps = (dispatch)=>{
   return{
      addFav: (character)=>dispatch(addFav(character)),
      removeFav: (id)=>dispatch(removeFav(id)),
   }
}

const mapStateToProps = (state)=>{
   return{
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)

