import styled from '@emotion/styled';

export const InvoicesContainer = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.anotherGrayColor};
`;

export const InvoicesContent = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom-left-radius: 40px;
  border-top-left-radius: 40px;
  z-index: 5;
`;
