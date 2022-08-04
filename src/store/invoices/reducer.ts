import { Action, handleActions } from 'redux-actions';
import { InvoiceActions, SetInvoiceValuePayloadType } from './action';
import { InvoiceModel, UpdateSelectedInvoicePayload } from '../../shared/models/invoices';

export interface InvoicesStateModel {
  invoices: InvoiceModel[],
  selectedItem: null | InvoiceModel,
  history: InvoiceModel[],
  totalCount: number | null,
  loading: boolean,
  skip: boolean,
  page: number,
  take: number,
  searchValue: string
}

export enum IInvoiceStateOptionEnum {
  Invoices = 'invoices',
  History = 'history',
  Loading = 'loading',
  Skip = 'skip',
  Page = 'page',
  SearchValue = 'searchValue',
}

const initialState: InvoicesStateModel = {
  invoices: [],
  selectedItem: null,
  history: [],
  totalCount: null,
  loading: true,
  skip: false,
  page: 1,
  take: 15,
  searchValue: ''
};

const invoicesReducer = handleActions<InvoicesStateModel, any>(
  {
    [InvoiceActions.SET_INVOICE_VALUE]: (state, {payload}: Action<SetInvoiceValuePayloadType<any>>) => ({
      ...state,
      [payload.option]: payload.value,
    }),
    [InvoiceActions.GET_INVOICES_SUCCESS]: (state, {payload}: Action<InvoiceModel[]>) => ({
      ...state,
      invoices: payload,
      selectedItem: payload[0],
      loading: false,
    }),
    [InvoiceActions.INCREMENT_INVOICE_PAGE]: (state) => ({
      ...state,
      page: state.page + 1,
    }),
    [InvoiceActions.LOADING_END]: (state) => ({
      ...state,
      loading: false,
    }),
    [InvoiceActions.SET_HISTORY_COUNT]: (state, {payload}: Action<number>) => ({
      ...state,
      totalCount: payload,
    }),
    [InvoiceActions.GET_HISTORY_INVOICES_SUCCESS]: (state, {payload}: Action<InvoiceModel[]>) => ({
      ...state,
      history: payload,
    }),
    [InvoiceActions.SELECT_INVOICE]: (state, {payload}: Action<InvoiceModel>) => ({
      ...state,
      selectedItem: payload,
    }),
    [InvoiceActions.ADD_NEW_INVOICE]: (state, { payload }: Action<InvoiceModel>) => ({
      ...state,
      invoices: [payload, ...state.invoices],
      totalCount: state.totalCount + 1,
    }),
    [InvoiceActions.CLEAR_SELECTED_INVOICE]: (state) => ({
      ...state,
      selectedItem: null,
    }),
    [InvoiceActions.UPDATE_SELECTED_INVOICE]: (state, {payload}: Action<UpdateSelectedInvoicePayload>) => {
      if (state.selectedItem) {
        return {
          ...state,
          selectedItem: {
            ...state.selectedItem,
            ...payload
          },
          invoices: state.invoices.map(item => item.id === state.selectedItem.id ? {
            ...item,
            ...payload
          } : item)
        }
      } else {
        return {
          ...state,
          invoices: state.invoices.map((item, index) => index === 0 ? {
            ...item,
            ...payload
          } : item)
        }
      }
    },
    [InvoiceActions.SEARCH_INVOICE]: (state, {payload}: Action<InvoiceModel[]>) => ({
      ...state,
      invoices: payload,
    }),
    [InvoiceActions.INCREMENT_INVOICE_LIST]: (state, {payload}: Action<InvoiceModel[]>) => ({
      ...state,
      invoices: [...state.invoices, ...payload],
    })
  },
  initialState
);

export default invoicesReducer;
