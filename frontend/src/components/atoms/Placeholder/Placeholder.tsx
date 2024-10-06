import React, { useRef, useState, useEffect } from 'react';
import { StyledPlaceholder } from './Placeholder.styles';

export type PlaceholderProps = {
    width?: string;
    height?: string;
    name?: string;
    children?: React.ReactNode;
};

const Placeholder: React.FC<PlaceholderProps> = ({ width = '100%', height = '100%', name, children }) => {
    const placeholderRef = useRef<HTMLDivElement>(null);
    const [realDimensions, setRealDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateDimensions = () => {
            if (placeholderRef.current) {
                const { width, height } = placeholderRef.current.getBoundingClientRect();
                setRealDimensions({ width: Math.round(width), height: Math.round(height) });
            }
        };

        updateDimensions();

        window.addEventListener('resize', updateDimensions);
        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, []);

    let shouldShowNameAndSize = children === undefined;
    return (
        <StyledPlaceholder ref={placeholderRef} style={{ width, height }}>
            {shouldShowNameAndSize && (
                <React.Fragment>
                    <p>{name}</p>
                    <p>Defined: {width} x {height}</p>
                    <p>Real: {realDimensions.width}px x {realDimensions.height}px</p>
                </React.Fragment>
            )}
            {children}
        </StyledPlaceholder>
    );
};

export default Placeholder;