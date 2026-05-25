const express = require('express')
const app = express()
const port = 80;
require('dotenv').config()
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: 'mysql'
  }
);

const Board = sequelize.define('boards', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING
  },
  content: {
    type: DataTypes.STRING
  }
}, {
  timestamps: false
})

app.get('/health', (req, res) => {
  res.status(200).send("Success Health Check");
})

app.get('/', (req, res) => {
  res.send('Hello, kuma!');
});

app.get('/boards', async (req, res) => {
  await Board.create({
    title: "게시글 제목",
    content: "게시글 내용"
  });

  const boards = await Board.findAll();

  res.status(200).send(boards);
});

app.listen(port, async () => {
  await sequelize.authenticate();
  await sequelize.sync({ force: true });
  console.log(`Example app listening on port ${port}`)
})
