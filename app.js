const express = require("express");
const sequelize = require("./config/database");
const cors = require("cors");
require("dotenv").config(); // Pastikan dotenv dipanggil di paling atas

const notesRouter = require("./routes/notesRoute"); 

const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost', 'http://localhost:5173', 'http://127.0.0.1:5500'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true 
}));
app.use(express.json());

// Route Health Check
app.get("/", (req, res) => {
  res.send("API Notes is Running...");
});

// Routing Utama
// Alamat: http://localhost:3000/api/v1/notes
app.use("/api/v1/notes", notesRouter); 

const PORT = process.env.PORT || 3000;

// Sinkronisasi DB dan Jalankan Server
sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`Endpoint: http://localhost:${PORT}/api/v1/notes`);
    });
  })
  .catch(err => {
    console.error("Gagal sinkronisasi database:", err);
  });