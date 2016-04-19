import riot from 'riot'
window.riot = riot
var context = require.context('./spec', true, /Spec\.js$/);
context.keys().forEach(context);
