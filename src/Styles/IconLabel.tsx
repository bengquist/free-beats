import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { spacedChildren } from "../Styles/helpers";

type Props = {
  icon: IconProp;
  text?: string | number;
};

function IconLabel({ icon, text }: Props) {
  return (
    <Container>
      <FontAwesomeIcon icon={icon} />
      {text && <p>{text}</p>}
    </Container>
  );
}

export default IconLabel;

const Container = styled.button`
  display: flex;
  align-items: center;
  ${spacedChildren(0, 0.25, 0, 0.25)}

  color: ${props => props.theme.primary};
`;
