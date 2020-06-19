import config, { getConfig } from "./config"

async function main(): Promise<void> {
  console.log("poyo");
}

export function poyo() {
  return getConfig()
}

main();

process.on("unhandledRejection", (reason) => {
  console.error(reason);
  process.exit(1);
});
