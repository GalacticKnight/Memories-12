import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);//this is needed as the first aspect of the link to use the posts routes /posts/etc and it uses the postRoutes to call the file you are getting the route from


//this is the general method of connecting to mongoDB//
const CONNECTION_URL = 'mongodb+srv://vincentlaucs:Synthesis716@cluster0.6axk28i.mongodb.net/?retryWrites=true&w=majority';
//this is the port
const PORT = process.env.PORT|| 5000;//this is here until we deal with heroku
//this will connect to the port
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })//this is the connection url
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))//port is 20
  .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);//false ensures we dont get warnings in the console