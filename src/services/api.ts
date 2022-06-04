import axios from 'axios';
import dayjs from 'dayjs';
import { IListApiParams } from 'types/type';

const API_KEY = process.env.REACT_APP_API_KEY;

const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

// https://kopis.or.kr/openApi/restful/boxoffice?service=45fc0552c4eb40798b83c68bb296a84c&ststype=day&date=20220602

const BASE_URL = 'openApi/restful';
const PERFORMANCE_BASE_URL = `${BASE_URL}/pblprfr`;
const FESTIVAL_BASE_URL = `${BASE_URL}/prffest`;
const AWARD_BASE_URL = `${BASE_URL}/prfawad`;
const BOXOFFICE_BASE_URL = `${BASE_URL}/boxoffice`;

export const getPerformanceListApi = (params: IListApiParams) => {
  const startDate = dayjs().format('YYYYMMDD');

  return axios.get(`${PROXY}/${PERFORMANCE_BASE_URL}`, {
    params: {
      service: API_KEY,
      stdate: startDate,
      eddate: '20991231',
      ...params,
    },
  });
};

export const getDetailApi = (itemId: string) => {
  return axios.get(`${PROXY}/${PERFORMANCE_BASE_URL}/${itemId}?service=${API_KEY}`);
};

export const getFestivalListApi = (params: IListApiParams) => {
  const startDate = dayjs().format('YYYYMMDD');

  return axios.get(`${PROXY}/${FESTIVAL_BASE_URL}`, {
    params: {
      service: API_KEY,
      stdate: startDate,
      eddate: '20991231',
      ...params,
    },
  });
};

export const getAwardListApi = (params: IListApiParams) => {
  const setDate = dayjs().format('YYYYMMDD');

  return axios.get(`${PROXY}/${AWARD_BASE_URL}`, {
    params: {
      service: API_KEY,
      stdate: setDate,
      eddate: '20991231',
      ...params,
    },
  });
};

export const getBoxOfficeListApi = () => {
  const setDate = dayjs().subtract(2, 'day').format('YYYYMMDD');

  return axios.get(`${PROXY}/${BOXOFFICE_BASE_URL}`, {
    params: {
      service: API_KEY,
      ststype: 'week',
      date: setDate,
    },
  });
};
