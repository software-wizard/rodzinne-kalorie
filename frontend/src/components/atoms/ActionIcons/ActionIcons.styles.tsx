import styled from 'styled-components';

// Stylizacja kontenera ikon akcji
export const ActionIconsContainer = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    gap: 10px;
    opacity: 0; /* Ukryj ikony, gdy nie najechano na kartę */
    transition: opacity 0.3s ease; /* Płynne przejście */
`;

// Stylizacja pojedynczej ikony akcji
export const ActionIcon = styled.div`
  width: 24px;
  height: 24px;
  background-color: #4caf50; /* Zielona ikona */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #388e3c; /* Zmiana koloru ikony po hoverze */
  }

  svg {
    fill: white; /* Kolor ikony (np. SVG) */
  }
`;