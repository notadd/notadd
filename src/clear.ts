import * as rimraf from 'rimraf';
async function clear() {
    rimraf(`{demos,libs,src,apps}/**/*.{js,d.ts,js.map}`, () => {
        console.log(`rimraf`)
    })
}
clear();