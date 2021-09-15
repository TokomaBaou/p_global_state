import styled from "styled-components";

//inputの共通のデザインを持つこと
//placeholderは受け取って動的に変更できるようにしたい⇨propsを使う
export const Input = (props) => {
  const { placeholder = "" } = props;

  return <SInput type="text" placeholder={placeholder} />;
};

const SInput = styled.input`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 9999px;
  outline: none;
`;
