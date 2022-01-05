import { Search } from "./models/search";
import { inquirerMenu, MENU, pause, readInput } from "./helpers/inquirer";

const main = async () => {
  const search = new Search();
  let optionSelected: number;
  do {
    optionSelected = await inquirerMenu();

    switch (optionSelected) {
      case MENU.BUSCAR:
        // ask for a place
        const placeToSearch = await readInput("Place: ");
        await search.place(placeToSearch);

        // Search for it, show options

        // Select place

        // Show weather
        console.log("City: ");
        console.log(`Location: Lat,Lng`);
        console.log(`Temperature: (0 max | 0min)`);
        break;
      case MENU.HISTORIAL:
        console.log("HISTORIAL...");
        break;
    }

    if (optionSelected !== MENU.SALIR) await pause();
  } while (optionSelected === 0);
};

main();
