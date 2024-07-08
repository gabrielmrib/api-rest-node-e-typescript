
import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup'

describe('GetById - Cidades',()=>{

    it('busca um regristro por id', async ()=>{
        const res1 = await testServer.post('/cidades').send({nome: 'Pindamonhangaba'});
        expect(res1.statusCode).toEqual(StatusCodes.CREATED);

        const resp1 = await testServer.get(`/cidades/${res1.body}`).send()

        expect(resp1.statusCode).toEqual(StatusCodes.OK);
        expect(resp1.body).toHaveProperty('nome');
    });

    it('Tenta pegar um registro que não existe', async ()=>{
        const resp1 = await testServer.get('/cidades/90909090').send()
        expect(resp1.statusCode).toEqual(StatusCodes.NOT_FOUND);
        expect(resp1.body).toHaveProperty('errors.default')


    })
})