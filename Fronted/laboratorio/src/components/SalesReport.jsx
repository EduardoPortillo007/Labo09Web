import React, { useEffect, useState } from "react";
import API from "../utils/api";

const SalesReport = () => {
  const [report, setReport] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const res = await API.get("/api/sales/report");
        setReport(res.data);
      } catch (err) {
        setError("Error al cargar el reporte");
        console.error(err);
      }
    };

    fetchReport();
  }, []);

  return (
    <div>
      <h2>Reporte de Ventas por Cliente</h2>

      {error && <p>{error}</p>}

      <table>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Total Ventas</th>
          </tr>
        </thead>
        <tbody>
          {report.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>${item.total_sales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesReport;
