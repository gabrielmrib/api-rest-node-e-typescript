
import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup'


describe('UpdateById  - cidades', () => {


    it('Atualiza Registro', async () => {
        const resp = await testServer.post('/cidades').send(
            {
                nome: 'Carmopolis'
            }
        )
        expect(resp.statusCode).toEqual(StatusCodes.CREATED)
        console.log(resp.body, 'aquiiiiiiiiiiii');
        
        const atuliza = await testServer
            .put(`/cidades/${resp.body.id}`)
            .send({ nome: "Conselheiro Lafaiete" });

        expect(atuliza.statusCode).toEqual(StatusCodes.NO_CONTENT);
    })

    it('Registro não encontrado para atualizar', async ()=> {
        const resp =  await testServer.get('/cidades/909090').send();
        expect(resp.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(resp.body).toHaveProperty('errors.default');
    })

})