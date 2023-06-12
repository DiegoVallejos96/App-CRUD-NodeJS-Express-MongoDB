import express from "express";
import indexRoutes from './routes/index.routes' 
import exphbs from 'express-handlebars'
import path from 'path'
import { create } from 'express-handlebars';
import morgan from "morgan";


const app = express();

//el motor de plantillas sera handlebars
//con el set ahora app sabe donde esta views, esta seteada
app.set('views', path.join(__dirname, '/views'));
//todo esto es para que entienda node en donde esta la carpeta views
var hbs = create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main",
    extname: ".hbs",
})
app.engine(".hbs",hbs.engine);
app.set('view engine', '.hbs')

//middlewares
app.use(morgan('dev')) //me tira la respuesta del navegador (404, 200, 304, etc)
app.use(express.urlencoded({ extended: false}));

//routes
app.use(indexRoutes)

//static files o public
app.use(express.static(path.join(__dirname, 'public')))//hacemos la carpeta publica para el navegador y que pueda leerla


export default app