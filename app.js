const express = require('express')
const app = express()
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

// swagger options
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Lintang API",
            description: "Welcome to my API documentations",
            termsOfService: "http://zipay.id",
            contact: {
                name: "Lintang Wisesa",
                url: "bit.ly/linbio",
                email: "lintangwisesa@ymail.com"
            },
            license: {
                name: "Apache 2.0",
                url: "https://www.apache.org/licenses/LICENSE-2.0.html"
            },
            version: "0.1.0",
            server: {
                url: "http://localhost:1234",
                description: "Development server"
            }
        },
        host: 'http://localhost:1234',
        basePath: '/'                   // api base URL
    },
    apis: ['./docs/**/*.yaml'],         // path to .yaml
}

// swagger UI setup
const swaggerDocs = swaggerJsdoc(swaggerOptions)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

// Routes
app.get('/', (req, res)=>{
    res.status(200).json({message: 'Welcome home!'})
})

app.get('/data', (req, res)=>{
    res.status(200).json({
        students: [
            {name: 'Andi', age: 12},
            {name: 'Budi', age: 13},
            {name: 'Caca', age: 14}
        ]
    })
})

app.listen(1234, ()=>{
    console.log('Server is running on port 1234')
})