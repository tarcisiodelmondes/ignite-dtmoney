import { createServer, Model } from "miragejs";
import React from "react";
import ReactDOM from "react-dom";

import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: Math.random(),
          title: "Mesa",
          amount: 500,
          category: "Moveis",
          type: "deposit",
          created_at: new Date(),
        },
        {
          id: Math.random(),
          title: "Ignite pro",
          amount: 57.9,
          category: "Estudos",
          type: "withdraw",
          created_at: new Date(),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
