import styled from '@emotion/styled';
import { InvoicePaymentStatus } from 'shared/models/enums';

export const InvoicesHistoryContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
`

export const TitleInvoicesHistory = styled.h1`
  font-weight: 600;
  font-size: 39px;
  line-height: 69px;
  margin-bottom: 30px;
`

interface HistoryPaymentStatusProps {
  status: InvoicePaymentStatus
}

export const HistoryPaymentStatus = styled.p<HistoryPaymentStatusProps>`
  color: ${({ theme, status }) =>
          status === InvoicePaymentStatus.PAID ? theme.colors.primaryGreen :
          status === InvoicePaymentStatus.CANCELLED ? theme.colors.salmon : theme.colors.primaryOrange
  };
  margin-bottom: 0;
`

export const BackToDetails = styled.h3`
  font-weight: 600;
  font-size: 21px;
  color: rgba(0, 0, 0, 0.7366);
  cursor: pointer;
  align-self: flex-start;
  margin-top: 55px;
`
export const NoHistoryInvoice = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  
`
