import { ReportsUrls } from './index';
import { get, post, remove, secondPut } from '../../shared/services/HttpClient';
import { CreateReportRequest } from '../../shared/models/reports';

export const getReports = () => {
  return get(ReportsUrls.REPORTS)
}

export const getReport = (id: string) => {
  return get(`${ReportsUrls.REPORTS}/${id}`)
}

export const createReport = (data: CreateReportRequest) => {
  return post(ReportsUrls.REPORTS_NEW, data)
}

export const editReport = (id: string, data: CreateReportRequest) => {
  return secondPut(`${ReportsUrls.REPORTS}/${id}`, data)
}

export const deleteReport = (id: string, ) => {
  return remove(`${ReportsUrls.REPORTS}/${id}`)
}

export const getFilteredReports = (patientId: string = '', value: string = '', page: number = 1, take: number = 15) => {
  return get(`${ReportsUrls.REPORTS_ORDER}DESC${patientId && `&patient=${patientId}`}${value && `&search=${value}`}&page=${page}&take=${take}`)
}

export const getReportsByPatient = (patientId: string = '', page: number = 1, take: number = 15) => {
  return get(`${ReportsUrls.REPORTS_ORDER}DESC${patientId ? `&patient=${patientId}` : ''}&page=${page}&take=${take}`)
}

export const sendReport = (id: string) => {
  return post(`${ReportsUrls.REPORTS}/${id}/send`)
}

