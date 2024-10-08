import styled from 'styled-components';
import {LabelProps} from './Label';
import {COLOR_GREEN, Size} from '../../../GlobalStyle';


export const StyledLabel = styled.p<LabelProps>`
    ${({size}) => {
        switch (size) {
            case Size.XS:
                return `
      font-size: 0.6rem;
      height: 0.6rem;
      font-weight: normal;
    `;
            case Size.S:
                return `
      font-size: 0.8rem;
      height: 0.8rem;
      font-weight: normal;
    `;
            case Size.M:
                return `
      font-size: 1.2rem;
      height: 1.2rem;
      font-weight: bold;
        `;
            case Size.L:
                return `
      font-size: 1.4rem;
      height: 1.4rem;
      font-weight: bold;
    `;
            case Size.XL:
                return `
      font-size: 2.0rem;
      height: 2.0rem;
      font-weight: bold;
    `;
            default: {
                alert('something wrong with size in label')
            }
        }
    }}
    color: ${COLOR_GREEN.color1000};
`;

export default StyledLabel;