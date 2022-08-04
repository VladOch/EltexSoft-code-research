import {
  getReports,
  getFilteredReports,
  createReport,
  editReport,
  deleteReport,
  sendReport,
  getReportsByPatient
} from './reports'

export enum ReportsUrls {
  REPORTS = 'pro/reports',
  REPORTS_NEW = 'pro/reports/new',
  REPORTS_ORDER = 'pro/reports?order=',
}

export {
  getReports,
  getFilteredReports,
  createReport,
  editReport,
  deleteReport,
  sendReport,
  getReportsByPatient
}
