import React, {useEffect,useState} from "react";

import { Container,Content } from "./styles";

const Result = ({value}) => {
  const [valueParam, setValueParam] = useState({});

  useEffect(() => {
    setValueParam(value)

  }, [value]);

  return (
    <Container>
      <Content param={valueParam}></Content>
    </Container>
  );
};

export default Result;