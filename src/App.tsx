import {Chip, Container, Grid, Stack, Typography} from "@mui/material";
import cities from "./assets/cities.json";
import {useSelectedCountry} from "./hooks/useSelectedCity";
import {AutocompleteCountries} from "./components/Autocomplete";
import {Fragment} from "react";
import EmptyContent from "./components/EmptyContent";

function App() {
    const {handleSelectCity, listNearCity, setSelected, clean} = useSelectedCountry({
        quantity: 4,
        cities,
    });
    const [principalCity, ...restCities] = listNearCity ?? [];
    return (
        <Container>

            <Grid container spacing={5}>
                <Grid item xs={12}>

                    <AutocompleteCountries cities={cities} setSelected={setSelected} handleSelect={handleSelectCity}
                                           clean={clean}/>
                </Grid>


                {principalCity?.name ?
                    <Fragment>

                        <Grid item xs={12} spacing={4} justifyContent="center" alignItems="center">

                            <Typography variant="h4" align="center">Ciudad seleccionada</Typography> <Chip
                            variant="filled" color="info"
                            label={principalCity?.name}/>
                        </Grid>
                        <Grid item xs={12} spacing={4} justifyContent="center" alignItems="center">
                            <Typography variant="h4" align="center">Ciudades cercanas</Typography>
                            <Grid container xs={12} spacing={6} mt={5}>
                                {restCities?.map((city, i) => (
                                    <Grid item xs={2} key={`city-${city}-${i}`}>
                                        <Chip label={city.name}/>

                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Fragment>

                    :
                <Stack justifyContent="center" alignItems="center" width="100%">
                    <EmptyContent title={"No hay datos"}
                                  sx={{
                                      '& span.MuiBox-root': {height: 300},
                                  }}/>
                </Stack>
                }
            </Grid>
        </Container>

    );
}

export default App;
