import { createContext, useReducer, useMemo,} from "react";


const reducerFunction = (state, { bgFlag }) => { 
  switch (bgFlag) {
    case "DARK":
      return {
        bgFlag: "LIGHT", //type
        bgColor: "#FFFFFF", 
        ftColor: "#1e1e1e"
      }
    case "LIGHT":
      return {
        bgFlag: "DARK",
        bgColor: "#1e1e1e",
        ftColor: "#FFFFFF",
        btColor: "#0f0f0f"
        
      }
    default:
      return state;
  }
}

export const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

const initialState = { 
  bgFlag: "LIGHT",
  bgColor: "#ffffff",
  ftColor: "#000000"

};

const [state, dispatch] = useReducer(reducerFunction, initialState); 

const providerValue = useMemo(()=>({
  state, 
  dispatch 
}),[state])


  return (
    <ContextGlobal.Provider value={providerValue}>
      {children}
    </ContextGlobal.Provider>
  );


};



export default ContextProvider;
