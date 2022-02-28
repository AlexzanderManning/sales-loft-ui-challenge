import styled from "styled-components";

const PlaceHolder = ({ hieght, children }) => {
  //Allowing the use of an explicit hieght property to match mockup size for placeholder containers.
  const PlaceHolder = styled.div`
    border: 1px solid #e5e5e5;
    background-color: #f9fafb;
    grid-row: auto;
    height: ${hieght};
    margin: 10px 0;
  `;

  return <PlaceHolder>{children}</PlaceHolder>;
};

export default PlaceHolder;
