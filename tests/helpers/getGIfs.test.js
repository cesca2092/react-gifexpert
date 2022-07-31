import { getGifs } from "../../src/helpers/getGIfs";


describe('Probando helper getGIfs', () => {

    test('Debe de retornar un arreglo de gifs', async () => {
        const gifs = await getGifs('One Punch');

        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    });

})