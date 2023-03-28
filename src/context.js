//context <API></>
//useContext hooks
import React , {useContext, useEffect, useState}from "react";

const API_URL = 'http://www.omdbapi.com/?apikey=f1d7927c&s=titanic';

// context(warehouse)f1d7927c
// Provider (Provider)
// Consumer / (useContext(You))
const AppContext = React.createContext();

//we need to create a provider function
const AppProvider = ({children}) => {

    const [isLoading, setIsLoading] =useState(true);
    const [movie, setMovie] =useState([]);
    const [isError, setIsError] = useState({show:"fasle", msg:""});

    const getMovies=async(url) =>{
        try { 
            const res = await fetch(url);
            const data =await res.json();
            console.log(data);
            if (data.Response === "true"){
                setIsLoading(false);
                setMovie(data.Search);
            } else{
                setIsError({
                    show: true,
                    msg:data.error
                })

            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMovies(API_URL);
    }, []);
    return <AppContext.Provider value={ {isError, movie, isLoading }}>{children}
    </AppContext.Provider>

};

// global custom hooks
const useGlobalContext =() => {
    return useContext(AppContext);
}
export { AppContext, AppProvider, useGlobalContext};

