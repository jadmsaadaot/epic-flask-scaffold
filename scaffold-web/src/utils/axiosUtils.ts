/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppConfig } from '@/config'
import axios, { AxiosError } from 'axios'

export type OnErrorType = (error: AxiosError) => void;
export type OnSuccessType = (data: any) => void;

const client = axios.create({ baseURL: AppConfig.apiUrl })

export const request = ({ ...options }) => {
  // client.defaults.headers.common.Authorization = `Bearer token`

  const onSuccess = (response: any) => response
  const onError = (error: AxiosError) => {
    // optionaly catch errors and add additional logging here
    if (!error.response) {
      // CORS error or network error
      throw new Error('Network error or CORS issue');
    }
    throw error
  }

  return client(options).then(onSuccess).catch(onError)
}
