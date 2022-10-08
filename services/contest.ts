import axios from 'axios'

const baseUrl = 'https://dev.krypto.army/referral/api/'

export const registerContest = (params) => axios.post(`${baseUrl}contest/register`, params)

export const getContestRegistration = (userId) => axios.get(`${baseUrl}contest/users/${userId}`)

export const getContestResult = () => axios.get(`${baseUrl}contest/result`)
