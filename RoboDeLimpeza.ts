import { Fila } from "./Fila";

export class RoboDeLimpeza {
  private fila: Fila;
  private tarefasExecutadas: any[];
  private elementoRetirado: string;

  constructor() {
    this.fila = new Fila();
    this.tarefasExecutadas = [];
  }

  adicionarTarefa(tarefa: string): void {
    this.fila.enfileirar(tarefa);
  }

  executarProximaTarefa(): string {
    if (this.fila.vazia()) {
      return "erro: não há tarefas a serem executadas";
    }

    return this.fila.desenfileirar();
  }

  executarTodasTarefas() {
    if (!this.fila.vazia) {
      this.elementoRetirado = this.fila.desenfileirar();
      this.tarefasExecutadas.push(this.elementoRetirado);
    } else {
      console.log(this.elementoRetirado);
      return this.elementoRetirado;
    }
  }
}
