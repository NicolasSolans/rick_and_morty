const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

let character = {
    id: 1111,
    name: 'Nico',
    species: 'human',
    gender: 'male',
    status: 'alive',
    origin: {
        name: 'Earth'
    },
    image: 'image.jpg'
}

describe('Test de RUTAS', ()=>{
    describe('GET /rickandmorty/character/:id', ()=>{
        it('Responde con status: 200', async()=>{
            await agent.get('/rickandmorty/character/1').expect(200);
        })
    
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async()=>{
            const response = await agent.get('/rickandmorty/character/1');
            for(const prop in character){
                expect(response.body).toHaveProperty(prop)
            }
            })  
        })
        it('Si hay un error responde con status: 500', async()=>{
            const response = await agent.get('/rickandmorty/character/0abc');
            expect(response.statusCode).toBe(500);
        })
    }) 


describe('GET /rickandmorty/login', ()=>{
    it('Responde con un objeto con la propiedad access en true, si la informacion de login coincide con el email y password enviados', async()=>{
        const response = await agent.get('/rickandmorty/login?email=nico@gmail.com&password=nicosolans');
        const access = {access: true};
        expect(response.body).toEqual(access)

    })
    it('Si el login no coincide con los datos enviados, responde con la prop access en false', async()=>{
        const response = await agent.get('/rickandmorty/login?email=nicolas@gmail.com&password=nicosolansperritomalvado');
        const access = {access: false};
        expect(response.body).toEqual(access)
    })
})

describe('POSTS /rickandmorty/fav',()=>{
    it('Debe guardar el personaje en favoritos', async()=>{
        const response = await agent.post('/rickandmorty/fav')
        .send(character);
        expect(response.body).toContainEqual(character)
    })
})

