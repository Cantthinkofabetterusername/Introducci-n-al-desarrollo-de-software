const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Base de datos en memoria
let education = [
  { id: 1, name: 'Montano College', degree: 'Bachillerato en ciencias y letras', startYear: '2017', endYear: '2024', details: 'None' },
  { id: 2, name: 'Universidad Francisco Marroquín', degree: 'Ingeniería en Ciencias de la Computación', startYear: '2025', endYear: '2028', details: 'None' }
];

let nextId = 3;

// GET / - Bienvenida
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a la API de Proyectos' });
});

// GET /projects - Ver todos los proyectos
app.get('/education', (req, res) => {
  res.json(education);
});

// GET /projects/:id - Ver un proyecto específico
app.get('/education/:id', (req, res) => {
  const ed = education.find(p => p.id === parseInt(req.params.id));

  if (!ed) {
    return res.status(404).json({ error: 'Proyecto no encontrado' });
  }

  res.json(ed);
});

// POST /projects - Crear un proyecto
app.post('/education', (req, res) => {
  const { name, degree, startYear, endYear, details } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'El campo "name" es requerido' });
  }

  const newEducation = {
    id: nextId++,
    name,
    degree: degree || 0,
    startYear: startYear || 0,
    endYear: endYear || 0,
    details: details || 0,
  };

  projects.push(newEducation);
  res.status(201).json(newEducation);
});

// PATCH /projects/:id - Actualizar un proyecto
app.patch('/education/:id', (req, res) => {
  const index = education.findIndex(p => p.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: 'Educación no encontrada' });
  }

  education[index] = { ...education[index], ...req.body };
  res.json(education[index]);
});

// DELETE /projects/:id - Eliminar un proyecto
app.delete('/education/:id', (req, res) => {
  const index = education.findIndex(p => p.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: 'Proyecto no encontrado' });
  }

  const deleted = education.splice(index, 1);
  res.json({ message: 'Proyecto eliminado', ed: deleted[0] });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});