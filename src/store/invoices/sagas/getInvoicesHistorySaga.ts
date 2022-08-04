import { put } from '@redux-saga/core/effects';
import { call } from 'redux-saga/effects';
import { getHistoryInvoices } from 'api/invoices/invoices';
import { getHistoryInvoicesSuccess } from '../action';

export function* getInvoicesHistorySaga() {
  try {
    const { data } = yield call(getHistoryInvoices);
    yield put(getHistoryInvoicesSuccess(data));

  } catch (err) {
    console.log('ERROR PATIENT BY ID', err);
  }
}
