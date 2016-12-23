const log = require('debug')('dont-crack')
const is = require('check-more-types')
const la = require('lazy-ass')
const dontBreak = require('dont-break')
const alwaysError = require('always-error')

const isReleaseType = is.oneOf(['major', 'minor', 'patch'])

function dontCrack (opts, config, callback) {
  log('dont-crack arguments')
  log('opts', opts)
  log('commits')
  log(config.commits)
  log('last release was', config.lastRelease)
  log('next release is', config.nextRelease)

  la(isReleaseType(config.nextRelease.type),
    'invalid next release type', config.nextRelease)

  if (config.nextRelease.type === 'major') {
    log('major release will crack dependents by definition')
    log('no need to check.')
    return callback()
  }

  log('%s release should not break dependents', config.nextRelease.type)

  function finishedChecking (success) {
    console.log('dont-crack finishing with success?', success)
    if (success) {
      return callback(null)
    }
    const type = config.nextRelease.type
    const from = config.lastRelease.version
    const to = config.nextRelease.version
    const s = `Upgrade "${type}" from ${from} to ${to} is cracking dependents.`
    callback(new Error(s))
  }

  const options = {
    // list of dependent projects to test against new release
    dep: opts['test-against']
  }
  dontBreak(options)
    .catch(function (err) {
      console.error('dont-break error?', err)
      callback(alwaysError(err))
    })
    .then(finishedChecking)
    .done()
}
module.exports = dontCrack
