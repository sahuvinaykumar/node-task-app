const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const knexConfig = require('./knexfile');
const Knex = require('knex');
const { Model } = require('objection');
const xlsx = require('xlsx');
const app = express();
const PORT = 3000;
const knex = Knex(knexConfig.development);
Model.knex(knex);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs', exphbs.engine({ extname: 'hbs', defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');

const User = require('./models/User');
const Task = require('./models/Task');

app.get('/users', async (req, res) => {
  const users = await User.query();
  res.render('users', { users });
});

app.post('/users', async (req, res) => {
  const { name, email, mobile } = req.body;
  await User.query().insert({ name, email, mobile });
  res.redirect('/users');
});

app.get('/tasks', async (req, res) => {
  const users = await User.query();
  res.render('tasks', { users });
});

app.post('/tasks', async (req, res) => {
  const { user_id, task_name, status } = req.body;
  await Task.query().insert({ user_id, task_name, status });
  res.redirect('/tasks');
});

app.get('/export', async (req, res) => {
  const users = await User.query();
  const tasks = await Task.query();
  const wb = xlsx.utils.book_new();
  const userSheet = xlsx.utils.json_to_sheet(users);
  const taskSheet = xlsx.utils.json_to_sheet(tasks);
  xlsx.utils.book_append_sheet(wb, userSheet, 'Users');
  xlsx.utils.book_append_sheet(wb, taskSheet, 'Tasks');
  const filePath = path.join(__dirname, 'users_tasks.xlsx');
  xlsx.writeFile(wb, filePath);
  res.download(filePath);
});

app.get('/tasks/:id', async (req, res) => {
  const tasks = await Task.query().where('user_id', req.params.id);
  res.json(tasks);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});