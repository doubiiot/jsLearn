setTimeout(_ => console.log(2))

async function main() {
  console.log(4)
  await Promise.resolve()
  console.log(1)
}

main()

console.log(3)
