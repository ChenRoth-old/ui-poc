export default function ReduxMixin() {
  let _store;

  function valueByPath(node, path) {
    for (let i = 0; i < path.length; i++) {
      if (!node || !hasOwnProperty.call(node, path[i])) {
        return undefined
      }
      node = node[path[i]]
    }
    return node
  }

  function updateState() {
    let shouldUpdate = false
    let state = _store.getState()
    let elementState = {}
    this._reduxUsePaths.forEach((path) => {
      elementState[path[0]] = valueByPath(state, path[1])
      if (elementState[path[0]] !== this.state[path[0]]) {
        shouldUpdate = true
      }
    })
    if (shouldUpdate) {
      this.update({
        state: elementState
      })
    }
  }

  riot.mixin('redux', {
    init: function() {
      this.store = _store;
      this.state = {};
      this.on('unmount', () => {
        if (this._unsubscribe) this._unsubscribe();
      })
    },
    dispatch: function(...args) {
      _store.dispatch.apply(this, args)
    },
    use: function(paths) {
      this._reduxUsePaths = Object.keys(paths).map(function(key) {
        return [key, paths[key].split('.')];
      });
      this._unsubscribe = _store.subscribe(updateState.bind(this));
      updateState.call(this);
    }
  })

  return function setReduxMixinStore(store) {
    _store = riot.observable(store);
    return _store;
  }
}