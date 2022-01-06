import { Places } from "./global";
import { Search } from "./models/search";
import {
  inquirerMenu,
  MENU,
  menuPlaces,
  pause,
  readInput,
} from "./helpers/inquirer";

const main = async () => {
  console.clear();
  const search = new Search();
  search.loadHistory();
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
        if (id === "0") continue;

        if (id) {
          chose = placesList.find((place) => place.id === id)!;
          search.saveHistory(chose.name);

          const weather = await search.weatherByCoords(chose.lat, chose.lng);

          // Show weather
          console.clear();
          console.log("\nCURRENT WEATHER\n".green);
          console.log("City: " + chose.name.green);
          console.log(
            `Location: ${chose.lat.toString().green}, ${
              chose.lng.toString().green
            }`
          );
          if (typeof weather === "string") {
            console.log(weather.green);
          } else {
            console.log("Weather " + weather.desc.green);
            console.log(
              `Temperature: ${weather.temp.toString().green}${"C".green} (${
                weather.max
              }C max | ${weather.min}C min)`
            );
          }
        }

        break;
      case MENU.HISTORIAL:
        search.history.map((item, index) => {
          const idx = (index + 1 + ".").toString().green;
          console.log(`${idx} ${item}`);
        });
        break;
    }

    if (optionSelected !== MENU.SALIR) await pause();
  } while (optionSelected !== MENU.SALIR);
};

main();
