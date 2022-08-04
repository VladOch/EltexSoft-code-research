import { put } from '@redux-saga/core/effects';
import { call } from 'redux-saga/effects';
import { getAllInvoices } from 'api/invoices/invoices';
import { getInvoicesSuccess, setInvoicesHistoryCount, setLoadingEnd } from '../action';

export function* getInvoicesSaga() {
  try {
    const { data } = yield call(getAllInvoices);
    yield put(getInvoicesSuccess(data.invoices || []));
    yield put(setInvoicesHistoryCount(data.totalCount));
  } catch (err) {
    console.log('ERROR PATIENT BY ID', err);
  } finally {
    yield put(setLoadingEnd());
  }
}
