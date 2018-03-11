const model = require('../models/snacks')

getAll = (req, res, next) => {
  const limit = req.query.limit
  const data = model.getAll(limit)

  if (!data) {
    return next({
      status: 404,
      message: `Could not list snacks of limit ${limit}`
    })
  }

  res.status(200).json({ data })
}

getById = (req, res, next) => {
  const id = req.params.id
  const snack = model.getById(id)

  if (!snack) {
    return next({
      status: 404,
      message: `Could not find snack with id of ${id}`
    })
  }

  res.status(200).json({ snack })
}

create = (req, res, next) => {
  model.create()
}

update = (req, res, next) => {
  const id = req.params.id
  model.update('PUT in update')
}

deleteSnack = (req, res, next) => {
  const id = req.params.id
  model.deleteSnack('DELETE in deleteSnack')
}

module.exports = { getAll, getById, create, update, deleteSnack }
