import * as chai from 'chai';
const expect = chai.expect;
import chaiHttp from "chai-http";
import app from "../index.js";
import faker from 'faker';

const consta = chai.use(chaiHttp)


describe('GET /api/info', ()=>{
    it('should GET all info', (done)=>{ //Esto es una respuesta guarda en el url
        consta.request(app)
        .get('/api/info')
        .end((err,res)=>{
            expect(err).to.be.null
            expect(res).to.have.status(200)
            expect(res.body).be.a('array')
            expect(res.body).not.have.lengthOf(0)
            done()
        })
    })
})

describe('POST /api/info', ()=>{
    it('should POST a new info', (done)=>{
        let prueba ={
            nombre:faker.Lorem.words(1)[0],
            descripcion:faker.Lorem.paragraph(1)[0],
            img:faker.Image.animals(),
            leftColor:faker.Internet.color(),
            rightColor:faker.Internet.color()
        }
        consta.request(app)
        .post('/api/info')
        .send(prueba)
        .end((err,res)=>{
            expect(err).to.be
            expect(err).to.be.null
            expect(res).to.have.status(201)
            expect(res.body).be.a('object')
            expect(res.body).to.have.property('prueba') //Aqui se le indica que tiene que pasar las propiedades de labase de datos
        })
        done()
    })
})
describe('GET /api/info/:id', ()=>{
    it('should GET all info for ID', (done)=>{ //Esto es una respuesta guarda en el url
        consta.request(app)
        .get('/api/info/1')
        .end((err,res)=>{
            expect(err).to.be.null
            expect(res).to.have.status(200)
            expect(res.body).to.have.property('obtener')
            expect(res.body.obtener).to.be.a('array')
            expect(res.body.obtener[0]).to.have.property('id',1)
            
        })
        done()
    })
})
