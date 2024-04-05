export class Fila {
  private elementos: any[];

  constructor() {
    this.elementos = ["limpar chão", "limpar janela"];
  }

  enfileirar(elemento: any): string {
    this.elementos.push(elemento);
    return "enfileirando";
  }

  desenfileirar(): any {
    if (this.vazia()) {
      return "fila vazia";
    }
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
