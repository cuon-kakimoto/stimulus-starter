import { Controller } from 'stimulus'

export default class extends Controller{
  static targets = ['name']

  // connect(){
  //   console.log("Hello, Stimulus", this.element)
  // }

  greet() {
    console.log(`Hello, ${this.name}!`)
  }

  // https://stimulusjs.org/handbook/hello-stimulus#controllers-simplify-refactoring
  get name (){
    return this.nameTarget.value
  }
}