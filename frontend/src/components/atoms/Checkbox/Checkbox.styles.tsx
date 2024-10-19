// src/components/molecules/Checkbox/Checkbox.styles.tsx
import styled from 'styled-components';

export const StyledCheckbox = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    &.checked {
        text-decoration: line-through;
    }

    input {
        margin-right: 8px;
    }
`;

export const Label = styled.label`
    cursor: pointer;
`;