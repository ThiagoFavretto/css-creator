import React, {useState} from "react";

import Change from './Components/Change';
import Result from './Components/Result';

import { Container } from "./styles";

const Creator = () => {
  const [value, setValue] = useState();

  const changeValue = (event) => {
    setValue(event)
  }

  return (
    <Container>
      <Change changeValue={changeValue}></Change>
      <Result value={value}></Result>
    </Container>
  );
};

export default Creator;