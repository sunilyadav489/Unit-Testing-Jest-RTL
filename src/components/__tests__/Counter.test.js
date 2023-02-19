import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer'

import Counter from '../Counter';

describe('Counter', () => {
    it('Should increment the counter' , () => {
        render(<Counter/>);
        const counter = screen.getByTestId("counter");
        const increment = screen.getByTestId('increment');
        fireEvent.click(increment);
        expect(counter).toHaveTextContent(2);
    })

    it('Should decrement the counter', () => {
        render(<Counter/>);
        const counter = screen.getByTestId("counter");
        const decrement = screen.getByTestId('decrement');
        fireEvent.click(decrement);
        expect(counter).toHaveTextContent(0);
    })
});

//Use case : To validate your UI does not change unexpectedly
describe('Counter snapshot', () => {
    const tree = renderer.create(<Counter/>).toJSON();
    expect(tree).toMatchSnapshot();
})