import apisauce from 'apisauce'

const create = (baseURL = 'https://api.football-data.org/v2/') => {
  const api = apisauce.create({
    baseURL,
    timeout: 10000
  })

  const getMatches = () => api.get('matches')

  return {
    getMatches
  }
}

export default {
  create
}