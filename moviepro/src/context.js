//context <API></>
//useContext hooks
import React , {useContext}from "react";

// context(warehouse)
// Provider 
// Consumer / (useContext())
const AppContext = React.createContext();

//we need to create a provider function
const AppProvider = ({children}) => {
    return <AppContext.Provider value="Gaurav">{children}</AppContext.Provider>

};

// global custom hooks
const useGlobalContext =() => {
    return useContext(AppContext);
}
export { AppContext, AppProvider, useGlobalContext};

