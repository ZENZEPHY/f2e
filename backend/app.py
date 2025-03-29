from flask import Flask, jsonify
from flask_cors import CORS
from datetime import timezone
import mysql.connector


def get_db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="fleet_management"
    )

app = Flask(__name__)
CORS(app)

@app.route('/fetch_all_data/<int:offset>', methods=['GET'])
def fetch_all_data(offset):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)

    query = """
        SELECT wheel_based_vehicle_speed, engine_percent_load, engine_fuel_rate, 
               engine_oil_temp, service_brake_circuit1_pressure, timestamp
        FROM vehicle_diagnostics 
        ORDER BY timestamp ASC 
        LIMIT 10 OFFSET %s
    """
    cursor.execute(query, (offset,))
    data = cursor.fetchall()

    cursor.close()
    conn.close()

    if data:
        for row in data:
            row["timestamp"] = row["timestamp"].strftime("%Y-%m-%d %H:%M:%S")  # Convert timestamp
        return jsonify(data)
    else:
        return jsonify([])



if __name__ == '__main__':
    app.run(debug=True)
