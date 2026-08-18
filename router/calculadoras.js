import express from 'express'
import calculado from '../repository/calculadora.js';

const router = express.Router()

router.post('/somar', (req, res) => {
    const { num1, num2 } = req.body;

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ erro: "Envie num1 e num2" });
    }

    const resultado = Number(num1) + Number(num2);
    calculado.push(resultado);

    res.json({ resultado });
});

router.post('/sub', (req, res) => {
    const { num1, num2 } = req.body;
    
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ erro: "Envie num1 e num2" });
    }
    
    const resultado = Number (num1) - Number (num2)
    calculado.push(resultado)

    res.json({ resultado });
});

router.post('/mult', (req, res) => {
    const { num1, num2 } = req.body;
    
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ erro: "Envie num1 e num2" });
    }
    
    const resultado = Number (num1) * Number (num2)
    calculado.push(resultado)

    res.json({ resultado });
});

router.post('/div', (req, res) => {
    const { num1, num2 } = req.body;
    
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ erro: "Envie num1 e num2" });
    }
    
    const resultado = Number (num1) / Number (num2)
    calculado.push(resultado)

    res.json({ resultado });
});

router.post('/poten', (req, res) => {
    const { a, m, n } = req.body;
    
    if (typeof a^m !== 'number' || typeof a^n !== 'number') {
        return res.status(400).json({ erro: "Envie um valor a^m e a^n" });
    }
    
    const resultado = Number (a^m) * Number (a^n)
    calculado.push(resultado)

    res.json({ resultado });
});

router.post('/raiz', (req, res) => {
    const num1 = req.body;
    
    if (typeof num1 !== 'number') {
        return res.status(400).json({ erro: "Envie num1" });
    }
    
    const resultado = Math.sqrt(Number(num1)) 
    calculado.push(resultado)

    res.json({ resultado });
});

export default router