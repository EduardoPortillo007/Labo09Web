import React, { useState } from "react";
import API from "../utils/api";

const RegisterSale = () => {
  const [amount, setAmount] = useState("");
  const [idCustomer, setIdCustomer] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("/api/sales", {
        amount,
        id_customer: idCustomer,
      });

      setMessage(response.data.message);
      setAmount("");
      setIdCustomer("");
    } catch (err) {
      setMessage(err.response?.data?.message || "Error al registrar venta");
    }
  };

  return (
    <div>
      <h2>Registrar Venta</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <input
          type="number"
          placeholder="ID del cliente"
          value={idCustomer}
          onChange={(e) => setIdCustomer(e.target.value)}
        />

        <button type="submit">Guardar</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default RegisterSale;
