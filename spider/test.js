import process from 'process';

(async () => {
    console.log(await (await import('./apps/' + process.argv[2] + ".js")).default());
})()
