//import axios from 'axios';
import { GET_ITEMS, DELETE_ITEM, ADD_ITEM, ITEMS_LOADING } from "./types";

//axios.defaults.proxy.host = "http://localhost:5000";

const axios = require('axios').default;

axios.defaults.baseURL= "http://localhost:5000";

export const getItems=()=>dispatch=>{
    dispatch(setItemsLoading());

    console.log("********");

    axios.get('/api/items')
        .then(res=>
        
        dispatch({
            type:GET_ITEMS,
            payload:res.data
        })
    );
};

export const addItem=(item)=>dispatch=>{

    axios.post('/api/items',item)
        .then(res=>
        
        dispatch({
            type:ADD_ITEM,
            payload:res.data
        })
    );

};


export const deleteItem=(id)=>dispatch=>{

    axios.delete(`/api/items/${id}`)
        .then(res=>
        
        dispatch({
            type:DELETE_ITEM,
            payload:id
        })
    );


    return {
        type: DELETE_ITEM,
        payload:id
    };
};




export const setItemsLoading=()=>{
    return{
        type:ITEMS_LOADING
    }

}

