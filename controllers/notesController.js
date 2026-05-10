const notesModels = require("../models/notesModel");

// CREATE
const createNote = async (req, res) => {
    try {
        const { judul, isi } = req.body;

        if (!judul || !isi) {
            return res.status(400).json({ message: "Judul dan isi tidak boleh kosong" });
        }

        const newNote = await notesModels.create({ judul, isi });
        res.status(201).json(newNote);
    } catch (error) {
        res.status(500).json({
            message: "Gagal membuat catatan",
            error: error.message
        });
    }
};

// READ
const getAllNotes = async (req, res) => {
    try {
        const notes = await notesModels.findAll();
        res.json(notes);
    } catch (error) {
        res.status(500).json({
            message: "Gagal mengambil data",
            error: error.message
        });
    }
};

// UPDATE
const updateNote = async (req, res) => {
    try {
        const { id } = req.params;

        const updated = await notesModels.updateById(id, req.body);

        if (updated[0] === 0) {
            return res.status(404).json({ message: "Catatan tidak ditemukan" });
        }

        res.json({ message: "Catatan berhasil diperbarui" });
    } catch (error) {
        res.status(500).json({
            message: "Gagal update catatan",
            error: error.message
        });
    }
};

// DELETE
const deleteNote = async (req, res) => {
    try {
        const { id } = req.params;

        const deleted = await notesModels.deleteById(id);

        if (!deleted) {
            return res.status(404).json({ message: "Catatan tidak ditemukan" });
        }

        res.json({ message: "Catatan berhasil dihapus" });
    } catch (error) {
        res.status(500).json({
            message: "Gagal menghapus catatan",
            error: error.message
        });
    }
};

module.exports = {
    createNote,
    getAllNotes,
    updateNote,
    deleteNote
};