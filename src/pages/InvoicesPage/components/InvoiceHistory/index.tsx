import React, { useEffect, useState } from 'react';
import {
  BackToDetails,
  HistoryPaymentStatus,
  InvoicesHistoryContainer,
  NoHistoryInvoice,
  TitleInvoicesHistory,
} from './styled';
import MuiButton from 'components/Buttons/Button';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import theme from 'shared/theme/theme';
import { ReactComponent as HelpIcon } from '../../../HomePage/images/helpButtonIcon.svg';
import BasicTable from 'shared/components/Table';
import { INVOICE_TABLE_HEADER } from 'constants/index';
import { TableRow } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getHistoryInvoicesSuccess } from 'store/invoices/action';
import MuiTableCell from 'shared/components/Table/TableCell';
import { calcCurrency } from 'shared/utils';
import { momentLocale } from 'shared/utils/localeMoment';
import { useScrollPagination } from 'shared/hooks';
import { getHistoryInvoices } from 'api/invoices/invoices';
import CenteredSpin from 'components/Loaders';
import ModalHelp from 'components/Modals/ModalHelp';
import { InvoiceModel } from 'shared/models/invoices';

const InvoicesHistory: React.FC = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const backToDetails = () => history.push('/dashboard/invoices');
  const [showHelpDialog, setShowHelpDialog] = useState<boolean>(false);
  const closeModal = () => setShowHelpDialog(false);
  const dispatch = useDispatch();
  const {
    data,
    scrollRef,
    loading,
  } = useScrollPagination(async (page: number, take: number) => await getHistoryInvoices(page, take));

  useEffect(() => {
    dispatch(getHistoryInvoicesSuccess(data));
  }, [data]);

  return (
    <InvoicesHistoryContainer>
      <MuiButton
        background={theme.colors.darkPink}
        style={{ alignSelf: 'flex-end' }}
        onClick={() => setShowHelpDialog(true)}
        startIcon={<HelpIcon />}
      >
        {t('home.needhelp')}
      </MuiButton>
      <TitleInvoicesHistory>
        {t('invoices.invoicesHistory')}
      </TitleInvoicesHistory>
      <BasicTable
        tableHeadProps={{ headCells: INVOICE_TABLE_HEADER }}
        style={{ borderBottom: '5px solid rgba(151, 151, 151, 0.426152)', width: '1200px', flex: 1 }}
      >
        {loading ? <CenteredSpin /> : data?.length > 0 ?
          data.map((item: InvoiceModel) => {
            return (
              <TableRow
                key={item.id}
              >
                <MuiTableCell>{momentLocale(item.createdAt).format('D MMM YYYY')}</MuiTableCell>
                <MuiTableCell align={'center'} width={'auto'}>#{item.invoiceNumber}</MuiTableCell>
                <MuiTableCell
                  align={'center'}>{item.patientName} {item.patientSurname ? item.patientSurname : ''}</MuiTableCell>
                <MuiTableCell align={'center'}>{calcCurrency(item.amount)}</MuiTableCell>
                <MuiTableCell align={'center'}><a href={item.invoiceUrl}
                                                  target={'_blank'}>{t('common.details')}</a></MuiTableCell>
                <MuiTableCell align={'center'}>
                  <HistoryPaymentStatus status={item.paymentStatus}>
                    {t(`invoiceStatus.${item.paymentStatus.toLowerCase()}`)}
                  </HistoryPaymentStatus>
                </MuiTableCell>
                <MuiTableCell align={'right'} width={1000}><a
                  href={item.invoicePdf}>{t('common.download')}</a></MuiTableCell>
              </TableRow>
            );
          })
          : <NoHistoryInvoice>
            {t('invoices.noInvoices')}
          </NoHistoryInvoice>
        }
        <div style={{ width: '100%', height: 10, backgroundColor: 'transparent' }} ref={scrollRef} />
      </BasicTable>
      <BackToDetails onClick={backToDetails}>{t('invoices.backToDetails')}</BackToDetails>
      {showHelpDialog &&
        <ModalHelp
          open={showHelpDialog}
          onClose={closeModal}
        />
      }
    </InvoicesHistoryContainer>
  );
};

export default InvoicesHistory;
