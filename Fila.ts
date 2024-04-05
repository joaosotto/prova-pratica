export class Fila {
  private elementos: any[];

  constructor() {
    this.elementos = [];
  }

  enfileirar(elemento: any): void {
    this.elementos.push(elemento);
  }

  desenfileirar(): any {
    return this.elementos.shift();
  }

  vazia(): boolean {
    if (this.elementos.length < 1) {
      return true;
    } else {
      return false;
    }
  }
}
