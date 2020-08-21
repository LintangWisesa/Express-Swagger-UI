
![simplinnovation](https://4.bp.blogspot.com/-f7YxPyqHAzY/WJ6VnkvE0SI/AAAAAAAADTQ/0tDQPTrVrtMAFT-q-1-3ktUQT5Il9FGdQCLcB/s350/simpLINnovation1a.png)

# Swagger Docs for Node.js (Express.js) app

1. Initialize ```node.js``` (```express.js```) application.

    ```bash
    $ mkdir yourAppName

    $ cd yourAppName
    
    $ npm init

    $ npm i express cors
    ```

2. Create a simple ```app.js``` file with several routes.

    ```javascript
    const express = require('express')
    const app = express()
    app.use(express.json())

    // Home default route
    app.get('/', (req, res)=>{
    res.status(200).json({
        message: 'Welcome home!'
        })
    })

    // GET /data return: array of students
    app.get('/data', (req, res)=>{
        res.status(200).json({
            students: [
                {name: 'Andi', age: 12},
                {name: 'Budi', age: 13},
                {name: 'Caca', age: 14}
            ]
        })
    })

    // POST /data return status & body request
    app.post('/data', (req, res)=>{
        res.status(200).json({
            status: 'POST to /data',
            body: req.body
        })
    })

    // server
    app.listen(1234, ()=>{
        console.log('Server is running on port 1234')
    })
    ```

3. To create ```swagger``` documentation, first install ```swagger-jsdoc``` and ```swagger-ui-express```.

    ```bash
    $ npm i swagger-jsdoc swagger-ui-express
    ```

4. Setup ```swagger-jsdoc``` and ```swagger-ui-express``` on ```app.js```, insert line below (before your routes).

    ```javascript
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
            host: 'localhost:1234',
            basePath: '/'                   // api base URL
        },
        apis: ['./docs/**/*.yaml'],         // path to .yaml
    }

    // swagger UI setup
    const swaggerDocs = swaggerJsdoc(swaggerOptions)
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
    ```

5. Create all route documentations using ```yaml``` inside ```docs``` directory. The ```yaml``` format example is shown below.

    ```yaml
    paths:
        /:
            get:
            tags:
                - Homepage
            summary: Default homepage route
            produces:
            - application/json
            description: Homepage route
            responses:
                '200':
                    description: 'Sukses!'
    ```

6. Run ```app.js``` then the Swagger docs page can be accessed on your ```http://localhost:1234/docs```.

    - Documentation page

        ![a](./img/a.png)

    - GET section

        ![b](./img/b.png)

    - POST section

        ![c](./img/c.png)

    Enjoy ~ 😎

<hr>

#### 🍔 Lintang Wisesa

<a href="mailto: lintangwisesa@ymail.com">
  <img align="left" style="margin-right:10px" alt="lintang ymail" width="22px" src="https://camo.githubusercontent.com/b6e5ff081d7552ec05656de193794847e14d47ad/68747470733a2f2f732e79696d672e636f6d2f63762f61706976322f6d79632f6d61696c2f4d61696c5f694f535f6170705f69636f6e2e706e67" />
</a>

<a href="https://web.facebook.com/lintangbagus/">
  <img align="left" style="margin-right:10px" alt="lintang facebook" width="22px" src="https://camo.githubusercontent.com/a461898d72dd9f4c8c526dfcca9dfdc8a8c69605/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f352f35312f46616365626f6f6b5f665f6c6f676f5f253238323031392532392e7376672f3130323470782d46616365626f6f6b5f665f6c6f676f5f253238323031392532392e7376672e706e67" />
</a>

<a href="https://twitter.com/Lintang_Wisesa">
  <img style="margin-right:10px" align="left" alt="lintang twitter" width="24px" src="https://camo.githubusercontent.com/b6943877f3d8a1269974b9f820388403ee2b1978/68747470733a2f2f332e62702e626c6f6773706f742e636f6d2f2d4e786f754d6d7a32624f592f54385f61633937636573492f41414141414141414767302f65337659315f62646e62452f73313630302f547769747465722b6c6f676f2b323031322e706e67" />
</a>

<a href="https://www.youtube.com/user/lintangbagus">
  <img style="margin-right:10px" align="left" alt="lintang youtube" width="29px" src="https://camo.githubusercontent.com/5b55cea011025699edf565f0eb25a6acc4e3e6a4/68747470733a2f2f6c68332e676f6f676c6575736572636f6e74656e742e636f6d2f70726f78792f4852635f6c617a7378637338416f626f44315f5368527750326b3157514165454b5455556d325946716663586853336d386b6a6b4f4e6a6e4e7447786563545a584b4648584b526475675872305a78447659664469577a50434d5343466953495a72475a6b564f72563256664f46302d4a4255" />
</a>

<a href="https://www.linkedin.com/in/lintangwisesa/">
  <img style="margin-right:10px" align="left" alt="lintang linkedin" width="24px" src="https://camo.githubusercontent.com/0d70d8c72e2f45755511d6799489dc49d0e325f0/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f63652f30392f33632f63653039336337323134616433353762623636356366643266363661386236622e706e67" />
</a>

<a href="https://github.com/LintangWisesa">
  <img style="margin-right:10px" align="left" alt="lintang github" width="23px" src="https://camo.githubusercontent.com/11406e7ae7d4716fcc586cddf450451576d71bef/68747470733a2f2f696d6167652e666c617469636f6e2e636f6d2f69636f6e732f7376672f32352f32353233312e737667" />
</a>

<a href="https://www.hackster.io/lintangwisesa">
  <img style="margin-right:10px" align="left" alt="lintang hackster" width="23px" src="https://user-images.githubusercontent.com/10383395/49821324-358fa080-fda0-11e8-8b00-def2a67fc598.png" />
</a>

<a href="https://lintangwisesa.github.io/me/">
  <img style="margin-right:10px" align="left" alt="lintang bio" width="24px" src="https://avatars2.githubusercontent.com/u/30064213?s=460&u=6640a1c3d5c1892283e1c273006755de8d32fa59&v=4" />
</a>