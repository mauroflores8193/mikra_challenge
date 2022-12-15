const deepGet = (obj = {}, path) => {
  const regex = /([\w]+)/g;
  const parts = path.match(regex);
  let response = obj
  parts.forEach(part => {
    response = response?.[part]
  })
  return response
}

module.exports = deepGet
