import { createAction } from 'redux-actions';
import { IInvoiceStateOptionEnum } from './reducer';
import { InvoiceModel } from '../../shared/models/invoices';

export enum InvoiceActions {
  SET_INVOICE_VALUE = 'SET_INVOICE_VALUE',
  GET_INVOICES_REQUEST = 'GET_INVOICES_REQUEST',
  GET_INVOICES_SUCCESS = 'GET_INVOICES_SUCCESS',
  GET_HISTORY_INVOICES_SUCCESS = 'GET_HISTORY_INVOICES_SUCCESS',
  GET_HISTORY_INVOICES_REQUEST = 'GET_HISTORY_INVOICES_REQUEST',
  SET_HISTORY_COUNT = 'SET_HISTORY_COUNT',
  SELECT_INVOICE = 'SELECT_INVOICE',
  CLEAR_SELECTED_INVOICE = 'CLEAR_SELECTED_INVOICE',
  UPDATE_SELECTED_INVOICE = 'UPDATE_SELECTED_INVOICE',
  SEND_INVOICE = 'SEND_INVOICE',
  ADD_NEW_INVOICE = 'ADD_NEW_INVOICE',
  SEARCH_INVOICE = 'SEARCH_INVOICE',
  LOADING_END = 'LOADING_END',
  INCREMENT_INVOICE_PAGE = 'INCREMENT_INVOICE_PAGE',
  INCREMENT_INVOICE_LIST = 'INCREMENT_INVOICE_LIST'
}

export const getInvoicesRequest = createAction(
  InvoiceActions.GET_INVOICES_REQUEST
);

export const getInvoicesSuccess = createAction(
  InvoiceActions.GET_INVOICES_SUCCESS,
  (payload: InvoiceModel[]) => payload
);

export const setInvoicesHistoryCount = createAction(
  InvoiceActions.SET_HISTORY_COUNT,
  (payload: number) => payload
);

export const selectInvoice = createAction(
  InvoiceActions.SELECT_INVOICE,
  (payload: InvoiceModel) => payload
);

export const updateSelectInvoice = createAction(
  InvoiceActions.UPDATE_SELECTED_INVOICE
);

export const clearSelectedInvoice = createAction(
  InvoiceActions.CLEAR_SELECTED_INVOICE
);

export const sendInvoice = createAction(
  InvoiceActions.SEND_INVOICE
);

export const addNewInvoice = createAction(
  InvoiceActions.ADD_NEW_INVOICE,
  (payload: InvoiceModel) => payload
);

export const searchInvoice = createAction(
  InvoiceActions.SEARCH_INVOICE,
  (payload: InvoiceModel[]) => payload
);

export const getHistoryInvoicesRequest = createAction(
  InvoiceActions.GET_HISTORY_INVOICES_REQUEST
);

export const getHistoryInvoicesSuccess = createAction(
  InvoiceActions.GET_HISTORY_INVOICES_SUCCESS,
  (payload: InvoiceModel[]) => payload
);

export const setLoadingEnd = createAction(
  InvoiceActions.LOADING_END,
);

export const incrementInvoicePage = createAction(
  InvoiceActions.INCREMENT_INVOICE_PAGE
);

export interface SetInvoiceValuePayloadType<B> {
  option: IInvoiceStateOptionEnum,
  value: B,
}

export const setInvoiceValue = createAction(
  InvoiceActions.SET_INVOICE_VALUE,
  (payload: SetInvoiceValuePayloadType<any>) => payload
);

export const incrementInvoiceList = createAction(
  InvoiceActions.INCREMENT_INVOICE_LIST,
  (payload: InvoiceModel[]) => payload
);
