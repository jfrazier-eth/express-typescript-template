import { Router } from 'express';
import { sampleDAO } from 'src/container';

const router = Router();

router.get("/", (req, res) => {
    res.sendStatus(200);
})

router.get('/sample', async (req, res) => {
    const data = await sampleDAO.getData('test', 'test');

    if(data) {
        res.send(data);
        return;
    } 

    res.sendStatus(404);
})

export default router;