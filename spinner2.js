const frames = ['|', '/', '-', '\\'];
let time = 100;
for (const frame of frames) {
  setTimeout(() => {
    process.stdout.write(`\r${frame}   `);
  }, time);
  time += 200;
}