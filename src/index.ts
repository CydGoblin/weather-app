import { Search } from "./models/search";
import {
  inquirerMenu,
  MENU,
  menuPlaces,
  pause,
  readInput,
} from "./helpers/inquirer";
import { Places } from "./search";

const main = async () => {
  console.clear();
  const search = new Search();
  let optionSelected: number;
  do {
    optionSelected = await inquirerMenu();

    switch (optionSelected) {
      case MENU.BUSCAR:
        // ask for a place
        const placeToSearch = await readInput("Place: ");

        // Search for it, show options
        const placesList = await search.place(placeToSearch);

        // Select place
        let chose: Places;
        const id = await menuPlaces(placesList);
        if (id) {
          chose = placesList.find((place) => place.id === id)!;

          // Show weather
          console.log("City: " + chose.name);
          console.log(`Location: ${chose.lat}, ${chose.lng}`);
          console.log(`Temperature: (0 max | 0min)`);
        }

        break;
      case MENU.HISTORIAL:
        console.log("HISTORIAL...");
        break;
    }

    if (optionSelected !== MENU.SALIR) await pause();
  } while (optionSelected === 0);
};

main();
