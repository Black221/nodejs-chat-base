import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Welcome to the Node.js, Express and Socket.io API'
    });
});

export default router;
