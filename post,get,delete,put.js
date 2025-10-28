const express=require('express')
const mongoose=require('mongoose')
const{TodoModel}=require('./model');
const cors=require('cors');

const app =express()
app.use(cors());
app.use(express.json())