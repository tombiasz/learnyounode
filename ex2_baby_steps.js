let sum = 0;
for (let i = 2; i < process.argv.length; i += 1) {
  sum += Number(process.argv[i]);
}
console.log(sum);
