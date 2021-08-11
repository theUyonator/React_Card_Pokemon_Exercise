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

const useAxios = ({term=null, base_url}) =>{
    const [state, setState]  = useState([]);
    const url = term ? `${base_url}/${term}/` : base_url;
    const addCard = async () => {
        const response = await axios.get(url);
        setState(cards => [...cards, { ...response.data, id: uuid() }]);
      };

      return [state, addCard];
}

export { useFlip, useAxios };