import { emptyDirSync } from 'https://deno.land/std/fs/mod.ts'

emptyDirSync('docs')

let csv   = Deno.readTextFileSync('zipcodes.csv')
let lines = csv.split('\n')

lines = lines.splice(1, lines.length)

lines.forEach(line => {
  let parts = line.split(',')
  let zip   = parts[0].trim()
  let lat   = parts[1].trim()
  let long  = parts[2].trim()

  emptyDirSync(`docs/${zip}`)
  Deno.writeTextFileSync(`docs/${zip}/index.json`, JSON.stringify({ lat: lat, long: long }, null, 2))
})

console.log('Done!')
