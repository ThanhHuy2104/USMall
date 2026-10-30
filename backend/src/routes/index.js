import express from 'express';

import adminRouter from '../modules/admin/adminRoutes.js';
import authRouter from '../modules/auth/authRoutes.js';
import cartRouter from '../modules/cart/cartRoutes.js';
import categoriesRouter from '../modules/categories/categoriesRoutes.js';
import chatBotRouter from '../modules/chatBot/chatBotRoutes.js';
import ordersRouter from '../modules/orders/ordersRoutes.js';
import paymentsRouter from '../modules/payments/paymentsRoutes.js';
import productsRouter from '../modules/products/productsRoutes.js';
import profileRouter from '../modules/profile/profileRoutes.js';
import reviewsRouter from '../modules/reviews/reviewsRoutes.js';
import sellerRouter from '../modules/seller/sellerRoutes.js';
import userRouter from '../modules/user/userRoutes.js';

const router = express.Router();

router.use('/admin', adminRouter);
router.use('/auth', authRouter);
router.use('/cart', cartRouter);
router.use('/categories', categoriesRouter);
router.use('/chatBot', chatBotRouter);
router.use('/orders', ordersRouter);
router.use('/payments', paymentsRouter);
router.use('/products', productsRouter);
router.use('/profile', profileRouter);
router.use('/reviews', reviewsRouter);
router.use('/seller', sellerRouter);
router.use('/user', userRouter);

export default router;
