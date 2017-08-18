sehr wenig antworten und veröffentliche erfahrungen mit wirklich dynamisch nachladbaren externen bundles
webpack dllplugin kann nicht zur runtime eingesetzt werden (webpack ist kein module loder)

systemjs
  + einziger moderner module loader
  - inkompatibel mit webpack
  - würde umstellung auf jspm bedeuten
    - zu viel wert im webpack ökosystem

scriptjs (& co)
  + problemlos integrierbar mit webpack
  - 'old-school'
  - theoretischer leak von geladenen modulen in globalen scope
    + umschiffbar durch geschickte architektur

ramen
  standard create-react-app
  '/:path' route
    <Loadable name={path} />
    loadModule
    cache lookup
      cache hit
        return cached module
      cache miss
        define registerModule on window
        load module
    return Promise'd module
    Loadable component handled timeout/loading/error/success state

shoyu/miso
  nwb app (der einfachheit halber, muss nicht)
  custom webpack optionen
    output.libraryTarget: 'jsonp'
      "This will wrap the return value of your entry point into a jsonp wrapper."
    output.library: 'registerModule'
      ändert den export-namen der library, welcher gleichzeitig auch den namen der jsonp funktion ändert
      (registerModule wird von ramen bereitgestellt)
