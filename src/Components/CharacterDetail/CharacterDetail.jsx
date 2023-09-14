import React, {useEffect, useState } from 'react'
import {useNavigate, useParams } from 'react-router-dom';



const CharacterDetail = () => {
  const { slug } = useParams();
  const [data,setData]= useState([])
  const navigate = useNavigate();


  const getCharacter =  async () => {

    try {
      let response = await fetch(`https://rickandmortyapi.com/api/character/${slug}`);
      let character = await response.json();
      setData(character)
    } catch(err) {
      console.log(err); // TypeError: failed to fetch
    }
  }
//Obtiene los datos del personaje selecionado
  useEffect(() => {
    getCharacter()
  }, [])


  return (
    <>
    <button className="btn" onClick={() => navigate(-1)}>
          Regresar
    </button>
    <div className='character'>        
        <img src={data?.image}/>
        <p>{data?.name}</p>
        <p>Especie: {data?.species}</p>
        <p>Estatus: {data?.status}</p>
    </div>
    </>
  )
}

export default CharacterDetail