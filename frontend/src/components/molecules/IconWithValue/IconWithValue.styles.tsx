import styled from 'styled-components';
import {IconWithValueProps} from './IconWithValue';
import {COLOR_GREEN, Size} from '../../../GlobalStyle';


export const StyledLabel = styled.p<IconWithValueProps>`
    ${({size}) => {
        switch (size) {
            case Size.XS:
                return `
      font-size: 0.6rem;
      font-weight: normal;
    `;
            case Size.S:
                return `
      font-size: 0.8rem;
      font-weight: normal;
    `;
                return `
          font-size: 1.2rem;
          font-weight: bold;
        `;
            case Size.L:
                return `
      font-size: 1.4rem;
      font-weight: bold;
    `;
            case Size.XL:
                return `
      font-size: 2.0rem;
      font-weight: bold;
    `;
            default:
                return `
          font-size: 1.2rem;
          font-weight: bold;
        `;
        }
    }}
    color: ${COLOR_GREEN.color1000};
`;


export default StyledLabel;