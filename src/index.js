const deepGet = require("./deepGet");

const object = {
  sons: [
    '',
    {
      grandsons: [
        { name: 'Nombre' }
      ]
    }
  ]
}

deepGet(object, 'sons[1].grandsons[0].name')
