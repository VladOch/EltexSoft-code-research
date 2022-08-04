import { ApplicationState } from 'store/rootReducer';
import { InvoiceModel } from '../../shared/models/invoices';
import { InvoicesStateModel } from './reducer';

export const mainInvoiceSelector = (state: ApplicationState): InvoicesStateModel =>
  state.invoices;

export const invoicesSelector = (state: ApplicationState): InvoiceModel[] =>
  state.invoices.invoices;

export const selectedInvoiceSelector = (state: ApplicationState): InvoiceModel =>
  state.invoices.selectedItem;

export const historyInvoicesSelector = (state: ApplicationState): InvoiceModel[] =>
  state.invoices.history;

