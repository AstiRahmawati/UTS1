function samplePromise(){
    return Promise.resolve("Asti");
}

const name = await samplePromise();
console.info(name);