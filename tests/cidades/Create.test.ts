import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup'

describe('Cidades - create', () => {
    it('cria registro', async () => {
        const res1 = await testServer.post('/cidades')
            .send({ nome: 'Caxias do Sul' });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED)
    });

    it('tenta criar um regirsto com menos de 3 caracteres', async () => {
        const res2 = await testServer
            .post('/cidades')
            .send({ "nome": "va" });


        expect(res2.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res2.body).toHaveProperty('errors.body.nome')
    })
})