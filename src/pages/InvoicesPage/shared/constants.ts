
interface CreateInvoiceDataType {
  id: number,
  label: string,
  name: string,
  customValue?: boolean,
  type?: 'number' | 'text',
}

export const INVOICE_CREATE_PRO_DATA: CreateInvoiceDataType[] = [
  {
    id: 1,
    label: 'patientInformation.name',
    name: 'pro.name'
  },
  {
    id: 2,
    label: 'patientInformation.surname',
    name: 'pro.surname'
  },
  {
    id: 3,
    label: 'account.company',
    name: 'company',
  },
  {
    id: 4,
    label: 'patientInformation.address',
    name: 'pro.professionalInfo.address'
  },
  {
    id: 5,
    label: 'invoices.registrationNumber',
    name: 'certificate'
  },
]

export const INVOICE_CREATE_PATIENT_DATA: CreateInvoiceDataType[] = [
  {
    id: 1,
    label: 'patientInformation.name',
    name: 'patient.name'
  },
  {
    id: 2,
    label: 'patientInformation.surname',
    name: 'patient.surname'
  },
  {
    id: 3,
    label: 'patientInformation.address',
    name: 'patient.address'
  },
  {
    id: 5,
    label: 'auth.signUpFormCountry',
    name: 'patient.country'
  },
  {
    id: 6,
    label: 'onboarding.city',
    name: 'patient.city'
  },
  {
    id: 7,
    label: 'onboarding.companyState',
    name: 'patient.state'
  },
  {
    id: 8,
    label: 'account.companyZipCode',
    name: 'patient.zipCode',
    type: 'number'
  },
]

export const INVOICE_INFO_PRO_DATA = (values: any) => [
  {
    id: 1,
    label: 'account.company',
    value: values.company,
  },
  {
    id: 2,
    label: 'patientInformation.name',
    value: values.pro.name
  },
  {
    id: 3,
    label: 'patientInformation.surname',
    value: values.pro.surname
  },
  {
    id: 4,
    label: 'patientInformation.address',
    value: values.pro.professionalInfo.address
  },
  {
    id: 5,
    label: 'auth.signUpFormCountry',
    value: values.pro.professionalInfo.country
  },
  {
    id: 6,
    label: 'onboarding.city',
    value: values.pro.professionalInfo.city,
  },
  {
    id: 7,
    label: 'onboarding.companyState',
    value: values.pro.professionalInfo.state,
  },
  {
    id: 8,
    label: 'account.companyZipCode',
    value: values.pro.professionalInfo.zipCode,
  },
  {
    id: 9,
    label: 'patientInformation.phoneNumber',
    value: values.pro.professionalInfo.phone,
  },
];

export const INVOICE_INFO_PATIENT_DATA = (values: any) => [
  {
    id: 1,
    label: 'patientInformation.name',
    values: values.patient.name
  },
  {
    id: 2,
    label: 'patientInformation.surname',
    values: values.patient.surname
  },
  {
    id: 3,
    label: 'patientInformation.address',
    values: values.patient.address
  },
  {
    id: 5,
    label: 'auth.signUpFormCountry',
    values: values.patient.country
  },
  {
    id: 6,
    label: 'onboarding.city',
    values: values.patient.city
  },
  {
    id: 7,
    label: 'onboarding.companyState',
    values: values.patient.state
  },
  {
    id: 8,
    label: 'account.companyZipCode',
    values: values.patient.zipCode
  },
  {
    id: 9,
    label: 'patientInformation.phoneNumber',
    values: values.patient.phone
  }
]
