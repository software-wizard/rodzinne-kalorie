// src/components/molecules/Checkbox/Checkbox.tsx
import React, { useState } from 'react';
import { StyledCheckbox, Label } from './Checkbox.styles';

export type CheckboxProps = {
    label: string;
};

const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <StyledCheckbox className={checked ? 'checked' : ''}>
            <input type="checkbox" checked={checked} onChange={handleChange} />
            <Label onClick={handleChange}>{label}</Label>
        </StyledCheckbox>
    );
};

export default Checkbox;