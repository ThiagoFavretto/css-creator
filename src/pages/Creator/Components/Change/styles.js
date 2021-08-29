import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  height: 100%;
  background: #191A21;
  color: white;

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`;

export const Input = styled.input`
  background: #191A21;
  border: none;
  color: #fff
`;

export const InputSeparetor = styled.div`
  margin-bottom: 5px
`;