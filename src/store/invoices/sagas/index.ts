import { all, takeLatest } from 'redux-saga/effects';
import { InvoiceActions } from '../action';
import { getInvoicesSaga } from './getInvoicesSaga';
import { getInvoicesHistorySaga } from './getInvoicesHistorySaga';

export default function* InvoicesSaga(): IterableIterator<any> {
  yield all([
      takeLatest(InvoiceActions.GET_INVOICES_REQUEST, getInvoicesSaga),
      takeLatest(InvoiceActions.GET_HISTORY_INVOICES_REQUEST, getInvoicesHistorySaga)
  ]);
}
