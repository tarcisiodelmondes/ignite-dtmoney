import Modal from "react-modal";

import { RadioBox, Container, TransactionTypeContainer } from "./styles";

import closeImg from "../../assets/close.svg";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { FormEvent, useState } from "react";
import { api } from "../../services/api";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState<"deposit" | "withdraw">("deposit");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  async function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault();

    const data = { type, title, value: Number(value), category };

    await api.post("/transactions", data);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleCreateNewTransaction}>
        <button
          type="button"
          className="react-modal-close"
          onClick={onRequestClose}
        >
          <img src={closeImg} alt="Fechar modal" />
        </button>

        <h2>Cadastrar transação</h2>

        <input
          type="text"
          placeholder="Titulo"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          type="number"
          placeholder="Valor"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />

        <TransactionTypeContainer>
          <RadioBox
            isActive={type === "deposit"}
            activeColor={"green"}
            type="button"
            onClick={() => setType("deposit")}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            isActive={type === "withdraw"}
            activeColor={"red"}
            type="button"
            onClick={() => setType("withdraw")}
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Entrada</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
