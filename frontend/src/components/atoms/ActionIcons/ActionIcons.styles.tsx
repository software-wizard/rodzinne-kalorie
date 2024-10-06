import styled from 'styled-components';
import {COLOR_GREEN, COLOR_GREY} from "../../../GlobalStyle";

export const ActionIconsContainer = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    opacity: 0;
    transition: opacity 0.3s ease;
`;

export const ActionIcon = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: ${COLOR_GREEN.color900};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
      background-color: ${COLOR_GREEN.color900};
  }

  svg {
    fill: ${COLOR_GREY.color100};
  }
`;