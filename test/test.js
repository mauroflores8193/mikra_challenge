// Problema: Se requiere escribir un algoritmo que pueda leer y escribir valores en un cierto path determinado de un
// objeto cuya estructura es desconocida.
//
//   Tareas:
// Definir e implementar unit tests
// Escribir el algoritmo
//
// Signature:
//   deepGet(object, path) : any
//
// Ejemplo:
//   deepGet(object, ‘sons[1].grandsons[0].name’)

const deepGet = require("../src/deepGet");

test('', () => {
  const object = {
    sons: [
      {
        son1: 1,
        bool: true
      },
      {
        grandsons: [
          { name: 'Nombre' },
          { name: 'Nombre 2' }
        ]
      }
    ]
  }
  expect(deepGet(object, 'sons[1].grandsons[0].name')).toBe('Nombre')
  expect(deepGet(object, 'sons[1].grandsons[1].name')).toBe('Nombre 2')
  expect(deepGet(object, 'sons[0].son1')).toBe(1)
  expect(deepGet(object, 'sons[0].bool')).toBeTruthy()
  expect(deepGet(object, 'sons[0].algo')).toBe(undefined)
  expect(deepGet(object, 'algo[0].algo')).toBe(undefined)
  expect(deepGet(undefined, 'algo[0].algo')).toBe(undefined)
  expect(deepGet(null, 'algo[0].algo')).toBe(undefined)
})
