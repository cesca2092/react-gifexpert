import { fireEvent, render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {

    const category = 'One Punch';

    test('Debe mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render( <GifGrid category={category}/>);
        // screen.debug();
        expect( screen.getByText('Cargando...'));
        expect( screen.getByText( category ));
    });

    test('Debe mostrar items cuando se cargan las imagenes mediante fetch', () => {
        
        const gifs = [
            {
                id: 'abc',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: 'def',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true,
        });

        render( <GifGrid category={category}/>);

        expect( screen.getAllByRole('img').length).toBe(2);
        // screen.debug();
        
    });

});