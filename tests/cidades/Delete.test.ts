import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup'

describe('Cidades -  Delete', () => {

    it('apaga registro', async () => {
        const res1 = await testServer.post('/cidades').send({ 'nome': 'Pin da Monhangaba' });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);

        const resApagado = await testServer.delete(`/cidades/${res1.body}`).send();

        expect(resApagado.statusCode).toEqual(StatusCodes.NO_CONTENT)
    });

    it('Tenta Apagar o que não existe', async () => {

        const res1 = await testServer.delete(`/cidades/9999999`).send();
        
        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty('errors.default');

    }

    )
})