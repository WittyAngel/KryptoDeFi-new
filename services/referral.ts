import axios from 'axios'

const baseUrl = 'https://dev.krypto.army/referral/api/'

export const getReferredUsersById = (userId) =>
  axios.get(`${baseUrl}users/listReferredUsersByUser/${userId}`)

export const generateReferralCode = async (params) =>
  axios.post(`${baseUrl}users/genReferralCode`, params)
