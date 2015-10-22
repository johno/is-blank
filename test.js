import test from 'ava'
import isBlank from './'

test('thinks that [] is blank', t => {
  t.plan(1)

  t.true(isBlank([]))
})

test('thinks that {} is blank', t => {
  t.plan(1)

  t.true(isBlank({}))
})

test('thinks that 0 is blank', t => {
  t.plan(1)

  t.true(isBlank(0))
})

test('thinks that an empty function is blank', t => {
  t.plan(1)

  t.true(isBlank(function(){}))
})

test('thinks that null is blank', t => {
  t.plan(1)

  t.true(isBlank(null))
})

test('thinks that undefined is blank', t => {
  t.plan(1)

  t.true(isBlank(undefined))
})

test('thinks that \'\' is blank', t => {
  t.plan(1)

  t.true(isBlank(''))
})

test('thinks that \'    \' is blank', t => {
  t.plan(1)

  t.true(isBlank('    '))
})

test('thinks that \'\\r\\t\\n\' is blank', t => {
  t.plan(1)

  t.true(isBlank('\r\t\n '))
})

test('does not think that [\'a\', \'b\'] is blank', t => {
  t.plan(1)

  t.true(!isBlank(['a', 'b']))
})

test('does not think that { a: \'b\' } is blank', t => {
  t.plan(1)

  t.true(!isBlank({ a: 'b' }))
})

test('does not think that \'string\' is blank', t => {
  t.plan(1)

  t.true(!isBlank('string'))
})

test('does not think that 42 is blank', t => {
  t.plan(1)

  t.true(!isBlank(42))
})

test('does not think that a function with arguments is blank', t => {
  t.plan(1)

  t.true(!isBlank(function(a,b){}))
})

test('thinks that true is not blank', t => {
  t.plan(1)

  t.true(!isBlank(true))
})

test('thinks that false is not blank', t => {
  t.plan(1)

  t.true(!isBlank(false))
})
