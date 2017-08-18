import React from 'react'
import scriptjs from 'scriptjs';
import Loadable from 'react-loadable';

const MODULE_CACHE = new Map()

function LoadingComponent(props) {
  if (props.isLoading) {
    // While our other component is loading...
    if (props.timedOut) {
      // In case we've timed out loading our other component.
      return <div>Loader timed out!</div>;
    } else if (props.pastDelay) {
      // Display a loading screen after a set delay.
      return <div>Loading...</div>;
    } else {
      // Don't flash "Loading..." when we don't need to.
      return null;
    }
  } else if (props.error) {
    // If we aren't loading, maybe
    return <div>Error! Component failed to load</div>;
  } else {
    // This case shouldn't happen... but we'll return null anyways.
    return null;
  }
}


const loadModule = name => (
  new Promise((resolve, reject) => {
    if (MODULE_CACHE.has(name)) {
      resolve(MODULE_CACHE.get(name))
    } else {
      if (window.registerModule) {
        reject('Parallel module loading is not supported')
      } else {
        window.registerModule = module => MODULE_CACHE.set(name, module.default)
        scriptjs(`http://localhost:8080/${name}/umd/${name}.min.js`, () => {
          if (MODULE_CACHE.has(name)) {
            resolve(MODULE_CACHE.get(name))
          } else {
            reject('Module not found')
          }
          delete window.registerModule
        })
      }
    }
  })
)

export default ({ name }) => {
  const Component = Loadable({
    loader: () => loadModule(name),
    loading: LoadingComponent
  })
  return React.createElement(Component)
}
