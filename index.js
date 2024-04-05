const express = require("express");
import { RoboDeLimpeza } from "./RoboDeLimpeza.TS";

const robo = RoboDeLimpeza();

const app = express();

app.get("/executar_todas_tarefas", (req, res) => {
  return robo.executarTodasTarefas();
});

app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));
