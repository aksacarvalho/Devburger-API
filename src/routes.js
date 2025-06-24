import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import authMiddleware from './App/middlewares/auth';

import UserController from './App/controllers/UserController';
import SessionController from './App/controllers/SessionController';
import productController from './App/controllers/ProductController';
import CategoryController from './App/controllers/CategoryController';
import OrderController from './App/controllers/OrderController';




const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware);
routes.post('/products', upload.single('file'), productController.store);
routes.get('/products',  productController.index);
routes.put('/products/:id', upload.single('file'), productController.update);

routes.post('/categories',  CategoryController.store);
routes.get('/categories',  CategoryController.index);

routes.post('/orders', OrderController.store);
routes.get('/orders', OrderController.index);
routes.put('/orders/:id', OrderController.update);

export default routes;