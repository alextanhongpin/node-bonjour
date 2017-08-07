var bonjour = require('bonjour')()

// advertise an HTTP server on port 3000
bonjour.publish({ name: 'My Web Server', host: 'myapp.local', type: 'http', port: 3000 })
bonjour.publish({ name: 'Quote Service', host: 'quote.local', type: 'http', port: 3000 })
bonjour.publish({ name: 'NodeRed Service', host: 'nodered.local', type: 'http', port: 3000 })
bonjour.publish({ name: 'WhoAmI Service', host: 'whoami.local', type: 'http', port: 3000 })
bonjour.publish({ name: 'Fluentd Service', host: 'fluentd.local', type: 'http', port: 3000 })

bonjour.unpublishAll((err) => {
  console.log(err)
})
// browse for all http services
bonjour.find({ type: 'http' }, function (service) {
  console.log('Found an HTTP server:', service)
})
