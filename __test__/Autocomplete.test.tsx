import {AutocompleteCountries} from "../src/components/Autocomplete";
import '@testing-library/jest-dom'
import {render, screen} from "@testing-library/react";

test('should render Autocomplete without errors', () => {
    render(<AutocompleteCountries setSelected={() => {
    }} cities={[]}/>);
    expect(screen.getByLabelText('Ciudades')).toBeInTheDocument();
});
