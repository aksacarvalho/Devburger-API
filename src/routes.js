import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import authMiddleware from './App/middlewares/auth';

import UserController from './App/controllers/UserController';
import SessionController from './App/controllers/SessionController';
import productController from './App/controllers/productController';
import CategoryController from './App/controllers/CategoryController';




const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware);
routes.post('/products', upload.single('file'), productController.store);
routes.get('/products',  productController.index);

routes.post('/categories',  CategoryController.store);
routes.get('/categories',  CategoryController.index);


export default routes;