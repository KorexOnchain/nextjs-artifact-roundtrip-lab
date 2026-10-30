import fs from 'node:fs'
const victim = 'b'.repeat(40)
const dirs = [
  `art/@next/..\\..\\..\\commits\\${victim}\\next`,
  `art/..\\..\\commits\\${victim}\\next`,
  `art/next`,
]
for (const d of dirs) fs.mkdirSync(d, { recursive: true })
fs.writeFileSync(`${dirs[0]}/scoped.tgz`, 'scoped')
fs.writeFileSync(`${dirs[1]}/plain.tgz`, 'plain')
fs.writeFileSync(`${dirs[2]}/control.tgz`, 'control')
console.log('created:')
for (const d of dirs) console.log('  ' + JSON.stringify(d))
