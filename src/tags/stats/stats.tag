<stats>
  <h2>Stats</h2>
  <button onclick={ requestStats } disabled={ isBusy() }>{ isBusy() ?  'fetchin stats...' : 'request stats' }</button>
  <table>
  <tr>
  <th>status</th>
  </tr>
  <tr>
  <td>
  { opts.s.status || 'fetching...' }
  </td>
  </tr>
  </table>
  <style scoped type="scss">
    :scope {
      display: inline-block;
      background: red;
      padding: 5px;
    }
  </style>
  <script>
    this.isBusy = () => {
      return Object.keys(opts.s).length == 0
    }
    this.requestStats = () => {
      store.dispatch(fetchStats())
    }
  </script>
</stats>