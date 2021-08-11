export default (dir = '../src/components', file = /.*?Index\.vue$/) => {
  const requireComponent = require.context(
    // Look for files in the current directory
    dir,
    // Do not look in subdirectories
    true,
    // Only include "_base-" prefixed .vue files
    file
  )

  return requireComponent
    .keys()
    .map(fileName => fileName
      .replace(/^\.\//, '')
      .replace(/\.\w+$/, '')
      .split('/')[0])
}
