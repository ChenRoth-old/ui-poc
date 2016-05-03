// import fetch from 'isomorphic-fetch'

export default function fetchStats() {

  return (dispatch) => {

    dispatch({
      type: 'REQUESTING_STATS'
    })

    let stats = {
      status: 'running',
      services: [
        'influx',
        'agent',
        'diamond'
      ],
      version: '3.4',
      uptime: '364 days'
    }

    setTimeout(() => {
      dispatch({
        type: 'RECEIVE_STATS',
        stats
      })
    }, 1000)
  }
}