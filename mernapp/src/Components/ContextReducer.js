import React,{ createContext, useContext, useReducer } from 'react'
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
//import SignUp from '../Screens/SignUp';
//import Home from "../Screens/Home";
//import Login from "../Screens/Login";


const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer =(state,action)=>{
    switch(action.type){

   case "ADD":
         return [...state,{id:action.id,name:action.name,qty:action.qty,size:action.size,price:action.price}]
         default:
            console.log("error is reducer"); 

    }


}


export const CartProvider = ({children})=>{

    const [state,dispatch] = useReducer(reducer,[])
return (
  <CartDispatchContext.Provider value = {dispatch}>
    <CartStateContext.Provider value={state}>
        {children}
    </CartStateContext.Provider>
    </CartDispatchContext.Provider>
   

)



}
export const useCart = () => useContext(CartStateContext);
export const useDispatchCart=()=>useContext(CartDispatchContext);
