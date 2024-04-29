/* eslint-disable no-extra-boolean-cast */
import {Autocomplete, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {City} from "../../types/City";
import {useDebouncedValue} from "../../hooks/useDebounceValue.tsx";

interface Props {
    cities: City[];
    setSelected: (value: Partial<City>) => void;
    selected?: Partial<City>;
    handleSelect?: any;
    clean?: VoidFunction;
}

export const AutocompleteCountries = ({setSelected, cities, handleSelect, clean}: Props) => {
    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState<City[]>([]);
    const [debouncedInput] = useDebouncedValue(inputValue, 1000);

    useEffect(() => {
        if (debouncedInput) {
            const filteredOptions = cities.filter((option: City) =>
                option.name.toLowerCase().includes(debouncedInput.toLowerCase())
            ).map((city) => ({
                ...city,
                key: `${city.name}-${city.lat}-${city.lng}`,
            }));
            setOptions(filteredOptions);
        } else {
            setOptions([]);
        }
    }, [debouncedInput, cities]);

    return (
        <Autocomplete
            options={options}
            onInputChange={(_, newInputValue) => setInputValue(newInputValue)}
            getOptionLabel={(option) => option?.name}
            getOptionKey={(option) => option.key!}
            renderInput={(params) => <TextField {...params} label="Ciudades"/>}
            onChange={(_, select) => {
                if (select) {
                    setSelected(select ?? {})
                    handleSelect?.(select ?? undefined)
                } else {
                    clean?.()
                }

            }}
        />
    );
};
