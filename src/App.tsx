import { Button, Grid, Typography } from "@mui/material";
import cities from "./assets/cities.json";
import { useSelectedCountry } from "./hooks/useSelectedCity";
import { AutocompleteCountries } from "./components/Autocomplete";

function App() {
  const { handleSelectCity, setSelected } = useSelectedCountry({
    quantity: 4,
    cities,
  });

  return (
    <Grid container>
      <Typography>Hola Amigos</Typography>

      <AutocompleteCountries cities={cities} setSelected={setSelected} />

      <Button onClick={handleSelectCity}>Buscar</Button>
    </Grid>
  );
}

export default App;
