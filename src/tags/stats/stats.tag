<stats>
  <header>
  <button class="no-style"><i class="fa fa-th"></i></button>
  <h3>Status</h3>
  <button onclick={ requestStats } disabled={ isBusy() } class="no-style">
  <i class="fa fa-refresh fa-lg { isBusy() && 'fa-spin' }" disabled={ isBusy() } onclick={ requestStats }></i></button>
  </header>
  <div>
  <section class="info">
  <div class="table" each={ attr in state.stats }>
    <div class="cell">{ attr }</div><div class="cell">{ state.stats[attr] }</div>
  </div>
  </section>
  <style scoped type="scss">
    :scope {
      .table {
        display: table;
      }
      .cell {
        display: table-cell;
      }
      text-align: center;
      display: inline-block;
      border: 1px solid #888;
    }
  </style>
  <script>
    this.mixin('redux')
    this.use({ stats: 'stats' })

    isBusy() {
      return !Object.keys(this.state.stats).length
    }

    requestStats() {
      this.dispatch(fetchStats())
    }
  </script>
</stats>