import React, {useState} from 'react';
import {MaxValue, MinValue, RangeInput, RangeTrack, Slider, Wrapper} from './MultiRangeInput.styles';

interface MultiRangeInputProps {
    initialMinValue?: number;
    initialMaxValue?: number;
    onChange?: (min: number, max: number) => void;
    min?: number;
    max?: number;
    unit?: string;
}

const MultiRangeInput: React.FC<MultiRangeInputProps> = ({
                                                             initialMinValue = 40,
                                                             initialMaxValue = 60,
                                                             min = 0,
                                                             max = 100,
                                                             unit = '',
                                                             onChange = () => {
                                                             }
                                                         }) => {
    const [minValue, setMinValue] = useState<number>(initialMinValue);
    const [maxValue, setMaxValue] = useState<number>(initialMaxValue);

    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Number(e.target.value), maxValue - 1);
        setMinValue(value);
        onChange(value, maxValue);
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(Number(e.target.value), minValue + 1);
        setMaxValue(value);
        onChange(minValue, value);
    };

    return (
        <Wrapper>
            <Slider>
                <RangeTrack
                    style={{
                        left: `${((minValue - min) / (max - min)) * 100}%`,
                        right: `${100 - ((maxValue - min) / (max - min)) * 100}%`,
                    }}
                />
                <RangeInput
                    type="range"
                    min={min}
                    max={max}
                    value={minValue}
                    className="min"
                    onChange={handleMinChange}
                />
                <RangeInput
                    type="range"
                    min={min}
                    max={max}
                    value={maxValue}
                    className="max"
                    onChange={handleMaxChange}
                />
                <MinValue left={((minValue - min) / (max - min)) * 100}>{minValue + unit}</MinValue>
                <MaxValue right={100 - ((maxValue - min) / (max - min)) * 100}>{maxValue + unit}</MaxValue>
            </Slider>
        </Wrapper>
    );
};

export default MultiRangeInput;
