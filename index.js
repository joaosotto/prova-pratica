const express = require("express");
import { RoboDeLimpeza } from "./RoboDeLimpeza.ts";

const robo = new RoboDeLimpeza();

const app = express();

app.get("/executar_todas_tarefas", (req, res) => {
  const operacao = robo.executarTodasTarefas();
  if (operacao) {
    return {
      mensagem: "Todas as tarefas foram executadas com sucesso.",
      tarefasExecutadas: operacao,
    };
  }
});

app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));
