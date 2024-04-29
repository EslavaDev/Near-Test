import '@testing-library/jest-dom'
import {render, screen} from "@testing-library/react";
import App from "../src/App";

// Inside your test

it('should render the AutocompleteCountries component', () => {
    render(<App/>);
    const autocomplete = screen.getByLabelText('Ciudades');
    expect(autocomplete).toBeInTheDocument();
});
