const utils = require('../src/utils')
let expect = require('chai').expect
// expect chai
/* const cervezas = require('../src/utils') */

// Vamos a utilizar mocha

/* GLobal describe */

describe('Módulo utils', () => {
  describe('suma', () => {
    it('Suma positivos', () => {
      /* const res = utils.suma(3, 4)
      if (res !== 7) {
        throw new Error(`La suma de positivos no funciona. ${res}`)
      } */
      expect(utils.suma(3, 5)).equal(8)
    })
    it('Suma negativos', () => {
      const res = utils.suma(-3, -4)
      if (res !== -7) {
        throw new Error(`La suma de negativos no funciona ${res}`)
      }
    })
    it('Suma mixta', () => {
      const res = utils.suma(-3, 4)
      if (res !== 1) {
        throw new Error(`La suma de mixta no funciona ${res}`)
      }
    })
  })
  describe('resta', () => {
    it('Resta positivos', () => {
      const res = utils.resta(3, 4)
      if (res !== -1) {
        throw new Error(`La resta de positivos no funciona. ${res}`)
      }
    })
    it('Resta negativos', () => {
      const res = utils.resta(-3, -4)
      if (res !== 1) {
        throw new Error(`La resta de negativos no funciona ${res}`)
      }
    })
    it('Resta mixta', () => {
      const res = utils.resta(-3, 4)
      if (res !== -7) {
        throw new Error(`La resta de mixta no funciona ${res}`)
      }
    })
  })
  describe('multi', () => {

  })
  describe('divi', () => {

  })
})
