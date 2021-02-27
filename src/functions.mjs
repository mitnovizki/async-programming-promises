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

export function closures() {
  function name(name) {
    return function lastName(lastName) {
      appendText(`${name},  ${lastName}`)
    }
  }
  const myName = name('Aimee ');
  myName(' Mitnovitsky');
  myName(' Meatnwhisky');
}

export function chain() {
}

export function chainCatch() {
}

export function final() {
}
