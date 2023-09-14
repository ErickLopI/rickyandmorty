import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Home = () => {

  const [data,setData] = useState([])
  const [url,setUrl] = useState('https://rickandmortyapi.com/api/character')
  const [next,setNext] = useState('')
  const [after,setAfter] = useState('')
  const [textSerch,setTextSearch] = useState('')


  const getAllCharacters =  async () => {

    try {
      let response = await fetch(url);
      let character = await response.json();
      setData(character.results);
      setNext(character.info?.next)
      setAfter(character.info?.prev)
    } catch(err) {
      console.log(err); // TypeError: failed to fetch
    }
  }
  
  //se pasa en la variable url, ya que al cambiar se necesita lanzar nuevamente la petición para actualizar los datos
  useEffect(() => {
    getAllCharacters()
  }, [url])

  //Esta funcion recibe la URL, para hacer la paginación Next o Previous
  const updateUrl = (url)=>{
    setUrl(url)
  }

  return (
    <>

      <div className="search-header">
        <div className="search-text">Buscador:</div>
        <input id="search-box" onChange={(e)=>setTextSearch(e.target.value)} />
      </div>
    
      <div className='container'>

        { data.length> 0 ? 
          data.filter((item)=>{
            return textSerch ==='' ? item : 
            item.name.toLowerCase().includes(textSerch.toLowerCase())
          }).map((character, index) => (
            <div className='char' key={index}>
              <img className='img' src={character.image} />
              <p>Id: {character.id}</p>
              <p>{character.name}</p>
              <p>{character.species}</p>
              <Link to={`/characterDetail/${character.id}`}>
                      <div className="btn">Ver Detalle</div>
               </Link>
            </div>
          )) : <p>No hay datos</p>
        } 
        </div> 
      
      {
        after!= null ? <button className='pag' onClick={() => updateUrl(after)}>Anterior</button> : ''
      }
      <button className='pag' onClick={() => updateUrl(next)}>Siguiente</button>
    </>
  )
}
export default Home