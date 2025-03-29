import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Details = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  //axios.get(`http://127.0.0.1:5000/fetch_all_data/0`)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:5000/fetch_all_data/250`
        ); // ✅ USING fetch_all_data
        console.log("Fetched Data:", response.data);

        if (response.data.length > 0) {
          setData(response.data);
          setLoading(false);
        } else {
          setData([]);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 830);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      }, 830);

      return () => clearInterval(interval);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;

  const currentData = data[currentIndex];

  return (
    <div className="card">
      <h2>Vehicle Diagnostics</h2>
      {data.length > 0 ? (
        <>
          <ul>
            <li>Speed: {currentData.wheel_based_vehicle_speed} km/h</li>
            <li>Engine Load: {currentData.engine_percent_load} %</li>
            <li>Fuel Rate: {currentData.engine_fuel_rate} L/h</li>
            <li>Oil Temp: {currentData.engine_oil_temp} °C</li>
            <li>
              Brake Pressure: {currentData.service_brake_circuit1_pressure} psi
            </li>
            <li>Timestamp: {currentData.timestamp}</li>
          </ul>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[currentData]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="timestamp" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="wheel_based_vehicle_speed"
                fill="#8884d8"
                name="Speed (km/h)"
              />
              <Bar
                dataKey="engine_percent_load"
                fill="#82ca9d"
                name="Engine Load (%)"
              />
              <Bar
                dataKey="engine_fuel_rate"
                fill="#ffc658"
                name="Fuel Rate (L/h)"
              />
              <Bar
                dataKey="engine_oil_temp"
                fill="#ff7300"
                name="Oil Temp (°C)"
              />
              <Bar
                dataKey="service_brake_circuit1_pressure"
                fill="#0088FE"
                name="Brake Pressure (psi)"
              />
            </BarChart>
          </ResponsiveContainer>
        </>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default Details;
