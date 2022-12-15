const deepGet = (obj = {}, path) => {
  const pathParts = path.split('.')
  let response = obj
  pathParts.forEach((part) => {
    const regex = /([\w]+)/g;
    const found = part.match(regex);
    response = response?.[found[0]]
    if (found.length > 1) {
      response = response?.[parseInt(found[1])]
    }
  })
  return response
}

module.exports = deepGet
