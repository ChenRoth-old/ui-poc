import fetchStats from '../actions/stats'

const defaultStats = {
  status: 'not running',
  uptime: '0',
  services: [],
  version: ''
}

export default function statsReducer(stats = defaultStats, action) {
  switch (action.type) {
    case "REQUESTING_STATS":
      return {}
    case "RECEIVE_STATS":
      return action.stats
    default:
      return stats
  }
}