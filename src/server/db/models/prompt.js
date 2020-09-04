const { UUID, UUIDV4, ENUM, STRING } = require('sequelize');
const db = require('../db');

const Prompt = db.define('prompt',{
  id:{
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey:true
  },
  difficulty:{
    type:ENUM('easy', 'medium', 'hard'),
    allowNull: false
  },
  prompt:{
    type: STRING
  },
  specs:{
    type: STRING
  }

})

module.exports = Prompt;