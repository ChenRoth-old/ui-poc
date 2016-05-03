<stats>
  <h2>Stats</h2>
  <div>
  <button onclick={ requestStats } disabled={ isBusy() }>{ messages[isBusy() ? 'BUSY' : 'NOT_BUSY'] } ♻</button>
  { JSON.stringify(state.stats) || 'fetching...' }
  </div>
  <style scoped type="scss">
    :scope {
      text-align: center;
      display: inline-block;
      border: 1px solid #000;
      h2 {
        padding: 0;
        margin: 0;
        background: blue;
      }
    }
  </style>
  <script>
    this.mixin('redux')
    this.use({ stats: 'stats' })
    this.messages = {
      BUSY: 'fetching...',
      NOT_BUSY: 'request stats'
    }

    isBusy() {
      return !Object.keys(this.state.stats).length
    }

    requestStats() {
      this.dispatch(fetchStats())
    }
  </script>
</stats>