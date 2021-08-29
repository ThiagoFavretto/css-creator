import React, {useState,useEffect} from "react";

import { Container,Input,InputSeparetor } from "./styles";

const Change = ({changeValue}) => {
  const [valueObject, setValueObject] = useState();

  
  useEffect(() => {
    changeValue(valueObject)
  }, [valueObject, changeValue]);

  const prepareValue = (value) => {
    setValueObject({...valueObject, ...value})
  }

  return (
    <Container>
      <InputSeparetor>
        width: <Input onChange={(event) => prepareValue({width: event.target.value})} type="number"/>
      </InputSeparetor>
      <InputSeparetor>
        height: <Input onChange={(event) => prepareValue({height: event.target.value})} type="number"/>
      </InputSeparetor>
      <InputSeparetor>
        background: <Input onChange={(event) => prepareValue({background: event.target.value})} type="text"/>
      </InputSeparetor>
      <InputSeparetor>
        margin: <Input onChange={(event) => prepareValue({margin: event.target.value})} type="number"/>
      </InputSeparetor>
      <InputSeparetor>
        border-radius: <Input onChange={(event) => prepareValue({borderRadius: event.target.value})} type="number"/>
      </InputSeparetor>
      <InputSeparetor>
        padding: <Input onChange={(event) => prepareValue({padding: event.target.value})} type="number"/>
      </InputSeparetor>
    </Container>
  );
};

export default Change;