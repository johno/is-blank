import test from 'ava'
import isBlank from './'

test('should think that [] is blank', t => {
  t.plan(1)

  t.true(isBlank([]))
})

test('should think that {} is blank', t => {
  t.plan(1)

  t.true(isBlank({}))
})

test('should think that 0 is blank', t => {
  t.plan(1)

  t.true(isBlank(0))
})

test('should think that an empty function is blank', t => {
  t.plan(1)

  t.true(isBlank(function(){}))
})

test('should think that null is blank', t => {
  t.plan(1)

  t.true(isBlank(null))
})

test('should think that undefined is blank', t => {
  t.plan(1)

  t.true(isBlank(undefined))
})

test('should think that \'\' is blank', t => {
  t.plan(1)

  t.true(isBlank(''))
})

test('should think that \'    \' is blank', t => {
  t.plan(1)

  t.true(isBlank('    '))
})

test('should think that \'\\r\\t\\n\' is blank', t => {
  t.plan(1)

  t.true(isBlank('\r\t\n '))
})

test('should not think that [\'a\', \'b\'] is blank', t => {
  t.plan(1)

  t.true(!isBlank(['a', 'b']))
})

test('should not think that { a: \'b\' } is blank', t => {
  t.plan(1)

  t.true(!isBlank({ a: 'b' }))
})

test('should not think that \'string\' is blank', t => {
  t.plan(1)

  t.true(!isBlank('string'))
})

test('should not think that 42 is blank', t => {
  t.plan(1)

  t.true(!isBlank(42))
})

test('should not think that a function with arguments is blank', t => {
  t.plan(1)

  t.true(!isBlank(function(a,b){}))
})
