import { createServer } from "miragejs";
import React from "react";
import ReactDOM from "react-dom";

import { App } from "./App";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Transaction 1",
          amount: 500,
          type: "deposit",
          category: "food ",
          created_at: new Date(),
        },
        {
          id: 2,
          title: "Transaction 2",
          amount: 5000,
          type: "withdraw",
          category: "food ",
          created_at: new Date(),
        },
      ];
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
