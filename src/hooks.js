import React, { useState } from "react";
import axios from "axios";
import uuid from "uuid";

const useFlip = () => {
    const [state, setState] = useState(true);
    const setIsFacingUp = () => {
        setState(isUp => !isUp);
    };

    return [state, setIsFacingUp];
};

const useAxios = (base_url) =>{
    const [state, setState]  = useState([]);
    const addCard = async (term="") => {
        const url = `${base_url}/${term}`;
        console.log(term)
        console.log(url)
        console.log(JSON.stringify(term))
        const response = await axios.get(url);
        setState(cards => [...cards, { ...response.data, id: uuid() }]);
      };

      return [state, addCard];
}

export { useFlip, useAxios };