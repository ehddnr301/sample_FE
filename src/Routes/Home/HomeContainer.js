import axios from "axios";
import React, { useCallback, useState } from "react";
import { mlopsAPI } from "../../api";
import HomePresenter from "./HomePresenter";

const useInput = (defaultValue) => {
    const [value, setValue] = useState(defaultValue)

    const onChange = (e) => {
        const {
            target: {value}
        } = e;
        setValue(value)
    }

    return {value, onChange, setValue}
}

const useSelect = (defaultValue) => {
    const [value, setValue] = useState(defaultValue)

    const onChange = (e) => {
        const {
            target: {value}
        } = e;
        setValue(value)
    }

    return {value, onChange, setValue}
}

const HomeContainer = () => {
    const [result, setResult] = useState(null);
    const age = useInput(0);
    const bmi = useInput(0);
    const children = useInput(0);
    const sex = useSelect('male');
    const smoker = useSelect('no');
    const region = useSelect('southeast');

    const getData = useCallback( async() => {
        const res = await axios.put('http://127.0.0.1:8000/predict/insurance?model_name=keep_update_model', {
            age:0,
            sex:0,
            bmi:0.0,
            children:0,
            smoker:0,
            region:0
        })
        console.log(res)
    })
    
    return <HomePresenter 
            getData={getData}
            age= {age} 
            bmi= {bmi} 
            children= {children} 
            sex= {sex} 
            smoker= {smoker} 
            region= {region} 
            />
};

export default HomeContainer;