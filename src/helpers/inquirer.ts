import "colors";
import inquirer from "inquirer";

export enum MENU {
  BUSCAR,
  HISTORIAL,
  SALIR,
}

export const inquirerMenu = async () => {
  const { desc } = await inquirer.prompt({
    type: "list",
    name: "desc",
    message: '"Choose an option: "',
    choices: [
      { value: MENU.BUSCAR, name: `${"1".green} Buscar ciudad` },
      { value: MENU.HISTORIAL, name: `${"2".green} Historial` },
      { value: MENU.SALIR, name: `${"3".green} Salir` },
    ],
  });
  return desc as number;
};

export const readInput = async (message: string): Promise<string> => {
  const { desc } = await inquirer.prompt({
    type: "input",
    name: "desc",
    message,
  });
  return desc;
};

export const pause = async () => {
  const { response } = await inquirer.prompt({
    type: "input",
    name: "response",
    message: `\nPress ${"ENTER".green} to continue`,
  });
  return response;
};
