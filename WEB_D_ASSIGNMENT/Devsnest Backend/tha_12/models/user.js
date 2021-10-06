const { Datatypes, DataTypes } =require("sequelize");

const sequeliz=require('../database');

const User =sequeliz.define('User',{
    fullName: {
        type : DataTypes.STRING,
        allowNull:false
    },
    email: {
        type:DataTypes.STRING,
        allowNull:false
    },
    password : {
        type : DataTypes.STRING,
        allowNull:false
    }
});

module.exports =User 