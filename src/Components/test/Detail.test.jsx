import  '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Detail from '../Routes/Detail'
import axios from 'axios'


beforeEach(() =>{
    //eslint-disable-next-line
  render(<Detail/>)
})

describe('Detail', () => {
    test('Verificacion campos', () => {
        const divName = screen.getByText("Name")
        const divEmail = screen.getByText("Email")
        const divPhone = screen.getByText("Phone")
        const divWebsite = screen.getByText("Website")
        expect(divName).toBeInTheDocument();
        expect(divEmail).toBeInTheDocument();
        expect(divPhone).toBeInTheDocument();
        expect(divWebsite).toBeInTheDocument();
    })

    const fetchData = () => axios.get('https://jsonplaceholder.typicode.com/users/4');

    test("Testing fetch detail", () => {

        return fetchData().then(data => { 
            expect(data.data.id).toBe(1);
            expect(data.data.name).toBe("Patricia Lebsack");
            expect(data.data.username).toBe("Karianne");
        })
    })
})