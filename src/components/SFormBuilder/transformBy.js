export default function transformBy (data, prop, removeEmpty) {
  return data.reduce((acc, item) => {
    !Array.isArray(item)
      ? !removeEmpty || item[prop] ? acc[item.name] = item[prop] : {}
      : item.forEach(i => !removeEmpty || i[prop] ? acc[i.name] = i[prop] : {})

    return acc
  }, {})
}
