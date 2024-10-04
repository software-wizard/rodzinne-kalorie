import styled from 'styled-components';

export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15), 0 12px 24px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative; /* Aby ikony były pozycjonowane względem karty */
  text-align: center;
  font-family: Arial, sans-serif;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2), 0 24px 48px rgba(0, 0, 0, 0.25);
    background-color: #e0f7e9;
  }

  &:hover .action-icons {
    opacity: 1; /* Pokaż ikony akcji po hoverze */
  }
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #333;
  font-weight: bold;
`;