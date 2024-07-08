import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup'

describe('GetAll - Cidades', ()=> {

    it('Buscar todos os regristos', async ()=> {
        const res1 = await testServer.post('/cidades').send({nome : "Caixias do Sul"});
        expect((res1.statusCode)).toEqual(StatusCodes.CREATED);

        const resBuscar =  await testServer.get('/cidades').send();
        expect(Number(resBuscar.header['x-total-count'])).toBeGreaterThan(0);
        expect(resBuscar.statusCode).toEqual(StatusCodes.OK);
        expect(resBuscar.body.length).toBeGreaterThan(0);
    })
})