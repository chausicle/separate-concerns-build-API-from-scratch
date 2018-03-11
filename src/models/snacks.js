const uuid = require('uuid/v4')
const snacks = require('../../db/snacks')

getAll = (limit) => {
  const listOfSnacks = (!limit) ? snacks : (limit > snacks.length) ? false : snacks.slice(0, limit)

  return listOfSnacks
}

getById = (id) => {
  const snack = snacks.find(snack => { return snack.id === id })

  return snack
}

create = (changeLater) => {
  return
}

update = (changeLater) => {
  return
}

deleteSnack = (changeLater) => {
  return
}

module.exports = { getAll, getById, create, update, deleteSnack }
