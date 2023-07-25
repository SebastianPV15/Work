import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { FaTable } from "react-icons/fa";

const ChartComponent = () => {
  const [selectedOption, setSelectedOption] = useState("estatal");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const data = {
    estatal: [
      {
        region: "Region 1",
        LN0M: 223888,
        META: 45905,
        COMPROMISOS: 21403,
        AVANCE: 20101,
        OTROS: 21285,
      },
      {
        region: "Region 2",
        LN0M: 387660,
        META: 74334,
        COMPROMISOS: 21960,
        AVANCE: 21130,
        OTROS: 22404,
      },
      {
        region: "Region 3",
        LN0M: 1148994,
        META: 236888,
        COMPROMISOS: 97233,
        AVANCE: 63311,
        OTROS: 60285,
      },
      {
        region: "Region 4",
        LN0M: 400810,
        META: 81139,
        COMPROMISOS: 81139,
        AVANCE: 20598,
        OTROS: 21773,
      },
      {
        region: "Region 5",
        LN0M: 442094,
        META: 77091,
        COMPROMISOS: 64721,
        AVANCE: 70390,
        OTROS: 62085,
      },
      {
        region: "Region 6",
        LN0M: 795072,
        META: 152704,
        COMPROMISOS: 65086,
        AVANCE: 61433,
        OTROS: 58465,
      },
      {
        region: "Region 7",
        LN0M: 1184637,
        META: 328042,
        COMPROMISOS: 64287,
        AVANCE: 50043,
        OTROS: 49238,
      },
    ],

    local: [
      {
        region: "Region 1",
        LN0M: 435888,
        META: 35905,
        COMPROMISOS: 31403,
        AVANCE: 23101,
        OTROS: 25285,
      },
      {
        region: "Region 2",
        LN0M: 257660,
        META: 59334,
        COMPROMISOS: 23160,
        AVANCE: 25130,
        OTROS: 19404,
      },
      {
        region: "Region 3",
        LN0M: 1848994,
        META: 346888,
        COMPROMISOS: 67233,
        AVANCE: 43311,
        OTROS: 50285,
      },
      {
        region: "Region 4",
        LN0M: 310810,
        META: 72139,
        COMPROMISOS: 79139,
        AVANCE: 29598,
        OTROS: 25773,
      },
      {
        region: "Region 5",
        LN0M: 542094,
        META: 69091,
        COMPROMISOS: 58721,
        AVANCE: 60390,
        OTROS: 62085,
      },
      {
        region: "Region 6",
        LN0M: 595072,
        META: 232704,
        COMPROMISOS: 85086,
        AVANCE: 71433,
        OTROS: 68465,
      },
      {
        region: "Region 7",
        LN0M: 1344637,
        META: 348042,
        COMPROMISOS: 54287,
        AVANCE: 70043,
        OTROS: 89238,
      },
    ],

    federal: [
      {
        region: "Region 1",
        LN0M: 695888,
        META: 47905,
        COMPROMISOS: 40403,
        AVANCE: 29101,
        OTROS: 30285,
      },
      {
        region: "Region 2",
        LN0M: 427660,
        META: 79334,
        COMPROMISOS: 33160,
        AVANCE: 35130,
        OTROS: 26404,
      },
      {
        region: "Region 3",
        LN0M: 1048994,
        META: 216888,
        COMPROMISOS: 57233,
        AVANCE: 43311,
        OTROS: 54285,
      },
      {
        region: "Region 4",
        LN0M: 490810,
        META: 65139,
        COMPROMISOS: 55139,
        AVANCE: 39598,
        OTROS: 55773,
      },
      {
        region: "Region 5",
        LN0M: 342094,
        META: 49091,
        COMPROMISOS: 28721,
        AVANCE: 20390,
        OTROS: 22085,
      },
      {
        region: "Region 6",
        LN0M: 575072,
        META: 562704,
        COMPROMISOS: 89086,
        AVANCE: 79433,
        OTROS: 59465,
      },
      {
        region: "Region 7",
        LN0M: 1884637,
        META: 548042,
        COMPROMISOS: 64287,
        AVANCE: 59043,
        OTROS: 68238,
      },
    ],
  };
  const selectedData = data[selectedOption];

  return (
    <div>
      <h2>Gráfico y tabla con datos {selectedOption}</h2>
      <div>
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="estatal">Estatal</option>
          <option value="local">Local</option>
          <option value="federal">Federal</option>
        </select>
      </div>
      <div style={{ display: "flex", flexDirection: "column", marginTop: "15px"}}>
        <div style={{ flex: 1 }}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={selectedData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="region" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="LN0M" fill="#8884d8" />
              <Bar dataKey="META" fill="#82ca9d" />
              <Bar dataKey="COMPROMISOS" fill="#ffc658" />
              <Bar dataKey="AVANCE" fill="#d0ed57" />
              <Bar dataKey="OTROS" fill="#ffc0cb" />
            </BarChart>
          </ResponsiveContainer>
          </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "10px" }}>
            <FaTable size={24} style={{ marginRight: "5px" }} />
            <h3>Tabla de datos</h3>
          </div>
          <table>
            <thead>
              <tr>
                <th>Región</th>
                <th>LN0M</th>
                <th>META</th>
                <th>COMPROMISOS</th>
                <th>AVANCE</th>
                <th>OTROS</th>
              </tr>
            </thead>
            <tbody>
              {selectedData.map((item) => (
                <tr key={item.region}>
                  <td>{item.region}</td>
                  <td>{item.LN0M}</td>
                  <td>{item.META}</td>
                  <td>{item.COMPROMISOS}</td>
                  <td>{item.AVANCE}</td>
                  <td>{item.OTROS}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;