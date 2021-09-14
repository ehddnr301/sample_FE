import React from "react";
import styled from "styled-components";

const changeTemp = (r, t) => {
  const result = document.getElementById(r);
  const temp = document.getElementById(t);

  temp.innerText = result.value;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const H2 = styled.h2`
  font-size: 24px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

const H3 = styled.h3`
  font-size: 16px;
  margin-bottom: 5px;
`;

const Input = styled.input``;

const Select = styled.select``;

const Btn = styled.button`
  border: 1px solid white;
  padding: 10px 5px;
  background-color: #fff;
  border-radius: 15px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #23b499;
    border: 1px solid black;
  }
`;
const Result = styled.div``;

const Temp = styled.div`
  margin-bottom: 5px;
`;

const HomePresenter = ({
  getData,
  age,
  bmi,
  children,
  sex,
  smoker,
  region,
  result,
  task,
  toggleTask,
}) => {
  return task ? (
    <Container>
      <H2 onClick={toggleTask}>Predict Insurance</H2>
      <Wrapper>
        <Box>
          <H3>Age를 입력해주세요.</H3>
          <Input placeholder={"Age"} {...age} />
        </Box>
        <Box>
          <H3>BMI를 입력해주세요.</H3>
          <Input placeholder={"BMI"} {...bmi} />
        </Box>
        <Box>
          <H3>Children 수를 입력해주세요.</H3>
          <Input placeholder={"Children"} {...children} />
        </Box>
        <Box>
          <H3>성별을 선택해주세요.</H3>
          <Select {...sex}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Select>
        </Box>
        <Box>
          <H3>흡연여부를 선택해주세요.</H3>
          <Select {...smoker}>
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </Select>
        </Box>
        <Box>
          <H3>거주지역을 선택해주세요.</H3>
          <Select {...region}>
            <option value="southeast">Southeast</option>
            <option value="southwest">Southwest</option>
            <option value="northwest">Northwest</option>
            <option value="northeast">Northeast</option>
          </Select>
        </Box>
        <Btn onClick={getData}>Make Prediction</Btn>
      </Wrapper>
      {result ? <Result>1</Result> : <Result>2</Result>}
    </Container>
  ) : (
    <Container>
      <H2 onClick={toggleTask}>Predict Temperature</H2>
      <Wrapper>
        {[1, 2, 3, 4, 5, 6, 7].map((i) => {
          return (
            <Box>
              <Temp>
                {i !== 7
                  ? `${i * 10}번째까지 온도 평균을 설정해주세요`
                  : `72번째까지 온도 평균을 설정해주세요`}
              </Temp>
              <Input
                id={`r${i}`}
                type="range"
                min={-10}
                max={40}
                step={0.1}
                onChange={() => changeTemp(`r${i}`, `t${i}`)}
              ></Input>
              <div id={`t${i}`}></div>
            </Box>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default HomePresenter;
