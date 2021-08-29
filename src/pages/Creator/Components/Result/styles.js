import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  height: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Content = styled.div`
  width: ${(props) => (props.param && props.param.width ? `${props.param.width}px` : "100px")};
  height: ${(props) => (props.param && props.param.height ? `${props.param.height}px` : "100px")};
  background: ${(props) => (props.param && props.param.background ? `${props.param.background}` : "red")};
  margin: ${(props) => (props.param && props.param.margin ? `${props.param.margin}px` : "")};
  border-radius: ${(props) => (props.param && props.param.borderRadius ? `${props.param.borderRadius}px` : "")};
  padding: ${(props) => (props.param && props.param.padding ? `${props.param.padding}px` : "")};

`;


