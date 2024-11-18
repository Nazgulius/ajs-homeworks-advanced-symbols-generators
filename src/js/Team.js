export default class Team {
  constructor(){
    this.charectors = [];
  }

  addCharector(character) {
    this.charectors.push(character);  
  }

  teamList() {
    for (const value of this.charectors) {
      console.log(value);
    }
  }

  *[Symbol.iterator]() {  
    for (let i = 0; i < this.charectors.length; i++) {  
      yield this.charectors[i];  
    }  
  } 
}