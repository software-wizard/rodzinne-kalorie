// src/components/atoms/Label/Label.styles.tsx
import styled from 'styled-components';
import {LabelProps} from './Label';
import {COLOR_GREEN, Size} from '../../../GlobalStyle';


export const StyledLabel = styled.p<LabelProps>`
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
            case Size.M:
                return getDefaultSize();
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
                getDefaultSize();
        }
    }}
    color: ${COLOR_GREEN.color1000};
`;


function getDefaultSize() {
    return `
          font-size: 1.2rem;
          font-weight: bold;
        `;
}

export default StyledLabel;