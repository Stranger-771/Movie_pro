import React, {useContext} from 'react';
//import {AppContext} from "./context";
import { useGlobalContext } from './context';

const Home = () => {
    //const name = useContext(AppContext);
    const name = useGlobalContext();
  return (
    <>
    <div>Movie Page </div>
    <p>{name}</p>
    
    </>
  )
}

export default Home