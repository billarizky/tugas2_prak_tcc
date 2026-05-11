const Notes = require("../schema/notes");

// CREATE
const create = async (notesData) => {
  return await Notes.create(notesData);
};

// READ ALL
const findAll = async () => {
  return await Notes.findAll({
    attributes: ["id", "judul", "isi", "tanggal_dibuat"],
    order: [["id", "DESC"]],
  });
};

// READ BY ID
const findById = async (id) => {
  return await Notes.findByPk(id);
};

// UPDATE
const updateById = async (id, notesData) => {
  return await Notes.update(notesData, {
    where: { id },
  });
};

// DELETE
const deleteById = async (id) => {
  return await Notes.destroy({
    where: { id },
  });
};

module.exports = {
  create,
  findAll,
  findById,
  updateById,
  deleteById,
};
