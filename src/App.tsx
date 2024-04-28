import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import cities from "./assets/cities.json";
import { useSelectedCountry } from "./hooks/useSelectedCity";
import { AutocompleteCountries } from "./components/Autocomplete";

function App() {
  const { handleSelectCity, listNearCity, setSelected } = useSelectedCountry({
    quantity: 4,
    cities,
  });

  return (
    <Grid container>
      <Typography>Hola Amigos</Typography>

      <AutocompleteCountries cities={cities} setSelected={setSelected} />

      <Button onClick={handleSelectCity}>Buscar</Button>


      <Typography>Lista Ciudades</Typography>
      <Stack>
        {listNearCity?.map((city) => (
          <Box>
            <Typography>{city.name}</Typography>
          </Box>
        ))}
      </Stack>
    </Grid>
  );
}

export default App;
