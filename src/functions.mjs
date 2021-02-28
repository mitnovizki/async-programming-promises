import setText, { appendText, showWaiting, hideWaiting } from "./results.mjs";

// const person = {
//   age: 27,
//   [Date.now]: single,
// }

//https://www.freecodecamp.org/news/javascripts-this-explained-by-starting-a-high-school-band-e072c8035eae/
export function bind() {
  //setText("hi")
  let person = { age: 26, city: 'TelAviv', [Date.now]: 'sinlge' }
  // setText(person.age);

  let logger = {
    keys() {
      setText(Object.keys(this))
      console.log(Object.keys(this))
    },

    values() {
      appendText(Object.values(this));
      console.log(Object.values(this))
    }
  }

  logger.keys.bind(person)()
  logger.values.bind(person)()

  // const logger = {
  //   keys()
  //   // console.log(`Objcet keys: ${ Object.keys(this) }`)
  //   //   setText(`Object keys, ${ Object.keys(this))
  //   // }`);
  // }
}

export function declaration_expression() {

  try {
    declaration()
    expression()

  } catch (error) {
    appendText(error)
  }

  function declaration() { setText('function declaration  \n') }
  const expression = function declaration() {
    appendText('function expression')
  }
}
/* EXAMPLE 1
export function closures() {
  function name(name) {
    setText(' ');
    return function lastName(lastName) {
      appendText(`${name}  ${lastName}`)
    }
  }
  const myName = name('Aimee ');
  myName(' Mitnovitsky');
  myName(' Meatnwhisky');
}
*/
export function closures() {
  setText('use closures to generate different domains\n')
  function buildUrl(domain) {
    return function url(name) {
      appendText(`http://www.${name}.${domain}  `)
    }
  }
  let domainCom = buildUrl('com')
  domainCom('google')
  domainCom('yahoo')
  domainCom('gmail')
  domainCom('facebook')

  let domainIl = buildUrl('co.il')
  domainIl('kneset')
  domainIl('ynet')

  let domainRu = new buildUrl('ru')
  domainRu('putinclub')
  domainRu('moscow')
  domainRu('rusianfederationyeah')
}

export function set() {

  setText(' use set to remove duplocated values')
  let nums = [1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 8, 9, 9, 9]
  appendText(nums)
  var set = new Set(nums);
  appendText('  ')
  appendText(([...set]))
}

export function arrow() {
  setText('=>')
  function greating(name) {
    setText(`hi, ${name}`)
  }

  const arrowFunction = yourName => setText(`hi, ${yourName}`)
  arrowFunction('Amme');

  const arrowFunction2 = num => num ** num
  alert(`√3: ${arrowFunction2(3)}`
  )

}

export function iife() {
  setText('IIFE')
    (function greating(name) {
      appendText(`\n hi, ${name}`)
    }('amme'))
}
export function map() {

}
export function reduce() {

}
export function thisThat() {

}

export function final() {
}
