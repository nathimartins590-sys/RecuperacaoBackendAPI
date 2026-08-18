import express from 'express'
import soma from './router/calculadoras.js'
import subtra from './router/calculadoras.js'
import multi from './router/calculadoras.js'
import divi from './router/calculadoras.js'
import potenci from './router/calculadoras.js'
import raiz from './router/calculadoras.js'

const app = express();

app.use(express.json())

app.use('/api/v1/somar', soma)
app.use('/api/v1/sub', subtra)
app.use('/api/v1/mult', multi)
app.use('/api/v1/div', divi)
app.use('/api/v1/poten', potenci)
app.use('/api/v1/raiz', raiz)

app.listen(3000,() => {
    console.log("bah ta funcionando 3000")
});