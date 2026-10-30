import { execSync } from 'node:child_process'
const out = execSync('find dl -name "*.tgz"', { encoding: 'utf8' }).trim().split('\n')
console.log('after round-trip:')
for (const p of out) console.log('  ' + JSON.stringify(p))
const has = (s) => out.some((p) => p.includes(s))
let fail = 0
const ok = (c, m) => { console.log(`  ${c ? 'PASS' : 'FAIL'}  ${m}`); if (!c) fail++ }
ok(has('..\\..\\..\\commits\\'), 'scoped backslash path survived upload/download')
ok(has('..\\..\\commits\\'), 'unscoped backslash path survived upload/download')
ok(has('control.tgz'), 'control path preserved')
ok(out.length === 3, `exactly 3 tarballs returned (got ${out.length})`)
process.exit(fail ? 1 : 0)
