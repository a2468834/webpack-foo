const { txnEmulator } = require("../dist/bundle");

const main = async () => {
    const lala = await txnEmulator(123);
    console.log(lala);
};

main();