const Notes = require("../schema/notes");

// Fungsi Create
const create = async (notesData) => {
    return await Notes.create(notesData);
};

// Fungsi Find All
const findAll = async () => {
    return await Notes.findAll({
        attributes: ['id', 'judul', 'isi', 'tanggal_dibuat']
    });
};

// Fungsi Update
const updateById = async (id, notesData) => {
    return await Notes.update(notesData, {
        where: { id: id } 
    });
};

// Fungsi Delete 
const deleteById = async (id) => {
    return await Notes.destroy({
        where: { id: id } 
    });
};

module.exports = { create, findAll, updateById, deleteById };