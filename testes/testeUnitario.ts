import { Fila } from "../Fila";
import { RoboDeLimpeza } from "../RoboDeLimpeza";

describe("teste classe fila", () => {
  let fila: Fila;

  beforeEach(() => {
    fila = new Fila();
  });

  it("verifica se esta enfileirando", () => {
    expect(fila.enfileirar("limpar garagem")).toBe("enfileirando");
  });

  it("verifica se esta desenfileirando", () => {
    expect(fila.desenfileirar()).toBe("string");
  });

  it("verifica funcao vazia", () => {
    expect(fila.vazia()).toBe("boolean");
  });
});

describe("teste classe robo", () => {
  let robo: RoboDeLimpeza;

  beforeEach(() => {
    robo = new RoboDeLimpeza();
  });

  it("verifica se esta adicionando", () => {
    expect(robo.adicionarTarefa("limpar a casa")).toBe("string");
  });

  it("verifica se esta executando uma tarefa", () => {
    expect(robo.executarProximaTarefa()).toBe("string");
  });

  it("verifica se esta executando todas as tarefas", () => {
    expect(robo.executarTodasTarefas()).toBe("array");
  });
});
