import styled from 'styled-components';

export const Card = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 0.8rem;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15), 0 6px 12px rgba(0, 0, 0, 0.2);
    padding: 5px;
    display: grid;
    position: relative;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2), 0 24px 48px rgba(0, 0, 0, 0.25);
        background-color: #e0f7e9;
    }

    &:hover .action-icons {
        opacity: 1;
    }
`;