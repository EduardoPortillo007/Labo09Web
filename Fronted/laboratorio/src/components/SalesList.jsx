import React, { useEffect, useState } from "react";
import API from "../utils/api";

const SalesList = () => {
  const [sales, setSales] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const response = await API.get("/api/sales");
        setSales(response.data);
      } catch (err) {
        setError("Error al cargar ventas");
        console.error(err);
      }
    };

    fetchSales();
  }, []);

  return (
    <div>
      <h2>Listado de Ventas</h2>

      {error && <p>{error}</p>}

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Monto</th>
            <th>Fecha</th>
            <th>Cliente</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr key={sale.id}>
              <td>{sale.id}</td>
              <td>${sale.amount}</td>
              <td>{new Date(sale.created_at).toLocaleString()}</td>
              <td>{sale.customer_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesList;
