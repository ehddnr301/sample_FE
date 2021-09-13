import React from "react";
import styled from "styled-components";
import { mlopsAPI } from "../../api";

const InsuranceContainer = styled.div`

`;

const Wrapper = styled.div``

const Input = styled.input``

const Select = styled.select``

const HomePresenter = ({getData,age,bmi,children,sex,smoker,region}) => {
    
    return (
    <InsuranceContainer>
        <Wrapper>
            <Input placeholder={'Age'} {...age}/>
            <Input placeholder={'Bmi'} {...bmi}/>
            <Input placeholder={'Children'} {...children}/>
            <Select {...sex}>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
            </Select>
            <Select {...smoker}>
                <option value='no'>No</option>
                <option value='yes'>Yes</option>
            </Select>
            <Select {...region}>
                <option value='southeast'>Southeast</option>
                <option value='southwest'>Southwest</option>
                <option value='northwest'>Northwest</option>
                <option value='northeast'>Northeast</option>
            </Select>
            <button onClick={getData}>
                    예측해줘!</button>
        </Wrapper>
    </InsuranceContainer>    
    );
}

export default HomePresenter