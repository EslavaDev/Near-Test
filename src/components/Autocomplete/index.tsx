/* eslint-disable no-extra-boolean-cast */
import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { City } from "../../types/City";

interface Props {
  cities: City[];
  setSelected: (value: Partial<City>) => void;
  selected?: Partial<City>;
}

export const AutocompleteCountries = ({ setSelected,cities }: Props) => {
  const [options, setOptions] = useState<City[]>([]);

  const loadOptions = (query: string) => {
    if (!!query) {
      const filteredOptions = cities.filter((option: City) =>
        option.name.toLowerCase().includes(query.toLowerCase())
      );
      setOptions(filteredOptions);
    }
  };

  return (
    <Autocomplete
      options={options}
      onInputChange={(_, newInputValue) => loadOptions(newInputValue)}
      getOptionLabel={(option) => option?.name}
      renderInput={(params) => <TextField {...params} label="Ciudades" />}
      onChange={(_, select) => setSelected(select ?? {})}
    />
  );
};
