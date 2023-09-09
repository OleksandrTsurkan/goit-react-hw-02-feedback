import { styled } from 'styled-components';


export const FeedbackList = styled.ul`
  margin: 40px auto;
  gap: 20px;
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 10px;
`;


export const FeedbackLi = styled.button`
  border: 3px solid #3a7999;
  border-radius: 20px;
  background-color: #fffcfc;
  cursor: pointer;

  transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  &:hover {
    border: 3px dotted #3a7999;
    color: #3a7999;
    background: rgba(0, 0, 0, 0);
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);
  }
`;