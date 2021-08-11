const requireComponent = require.context(
  // Look for files in the current directory
  '../../src/components',
  // Do not look in subdirectories
  true,
  // Only include "_base-" prefixed .vue files
  /.*?Index\.vue$/
)

export default requireComponent
  .keys()
  .map(fileName => fileName
    .replace(/^\.\//, '')
    .replace(/\.\w+$/, '')
    .split('/')[0])
