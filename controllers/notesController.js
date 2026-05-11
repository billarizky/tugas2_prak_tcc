const notesModels = require("../models/notesModel");

// CREATE
const createNote = async (req, res) => {
  try {
    const { judul, isi } = req.body;

    if (!judul || !isi) {
      return res.status(400).json({
        success: false,
        message: "Judul dan isi wajib diisi",
      });
    }

    const newNote = await notesModels.create({
      judul,
      isi,
    });

    res.status(201).json({
      success: true,
      message: "Catatan berhasil dibuat",
      data: newNote,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Gagal membuat catatan",
      error: error.message,
    });
  }
};

// READ ALL
const getAllNotes = async (req, res) => {
  try {
    const notes = await notesModels.findAll();

    res.json({
      success: true,
      data: notes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Gagal mengambil data",
      error: error.message,
    });
  }
};

// READ BY ID
const getNoteById = async (req, res) => {
  try {
    const note = await notesModels.findById(req.params.id);

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Catatan tidak ditemukan",
      });
    }

    res.json({
      success: true,
      data: note,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Gagal mengambil data",
      error: error.message,
    });
  }
};

// UPDATE
const updateNote = async (req, res) => {
  try {
    const { id } = req.params;

    const updated = await notesModels.updateById(id, req.body);

    if (updated[0] === 0) {
      return res.status(404).json({
        success: false,
        message: "Catatan tidak ditemukan",
      });
    }

    res.json({
      success: true,
      message: "Catatan berhasil diperbarui",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Gagal update catatan",
      error: error.message,
    });
  }
};

// DELETE
const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await notesModels.deleteById(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Catatan tidak ditemukan",
      });
    }

    res.json({
      success: true,
      message: "Catatan berhasil dihapus",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Gagal menghapus catatan",
      error: error.message,
    });
  }
};

module.exports = {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote,
};
