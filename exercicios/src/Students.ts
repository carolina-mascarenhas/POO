// Exercício 1: Escreva uma classe cujos objetos representarão pessoas estudantes matriculadas em uma disciplina. Cada objeto dessa classe deve conter os seguintes dados: matrícula, nome, 4 notas de prova, 2 notas de trabalho.

// Exercício 2: Para isso adicione dois métodos: um que calcula a soma das notas da pessoa estudante e outro que calcula a média das notas da pessoa estudante.

class Students {
  private _matricula: string;
  private _name: string;
  private _testGrades: number[];
  private _workGrades: number[];

  constructor(matricula: string, name: string, test: number[], work: number[]) {
    this._matricula = matricula;
    this._name = name;
    this._testGrades = test;
    this._workGrades = work;
  }

  public get matricula(): string {
    return this._matricula;
  }
  
  public set matricula(value: string) {
    this._matricula = value;
  }

  public get name(): string {
    return this._name;
  }
  
  public set name(value: string) {
    this._name = value;
  }

  public get testGrades(): number[] {
    return this._testGrades;
  }
  
  public set testGrades(value: number[]) {
    this._testGrades = value;
  }

  public get workGrades(): number[] {
    return this._workGrades;
  }

  public set workGrades(value: number[]) {
    this._workGrades = value;
  }

  calculateSum() {
    const allGrades = [...this._testGrades, ...this._workGrades];
    const sum = allGrades.reduce((acc, grade) => acc + grade);
    console.log('A soma de todas as notas é:', sum);
    return sum;
  }

  calculateAverage() {
    const sum = this.calculateSum();
    console.log('A media de todas as notas é:', sum / 6);
    return sum / 6;
  }
}

const student1 = new Students('11.114.568-6', 'Carol', [10, 9, 8, 7], [8, 9]);
console.log(student1.matricula);
student1.matricula = '11.115.637-7';
console.log(student1.matricula);

student1.calculateSum();
student1.calculateAverage();