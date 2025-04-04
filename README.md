# Predictive Maintenance for Fleet Management

## 📌 Project Overview
This project implements a **real-time fleet management system** utilizing **edge computing** for **predictive maintenance**. It leverages **TinyML on ESP32** devices to detect anomalies in vehicle sensor data, reducing latency and improving decision-making. The system ensures **low power consumption** and **scalability** for large fleets in challenging environments.

## 🚀 Features
- **Real-time Anomaly Detection:** Uses an LSTM autoencoder to identify potential faults.
- **Edge Computing:** Runs ML models on ESP32 for low-latency processing.
- **CAN Data Processing:** Converts raw CAN bus data into human-readable metrics.
- **Database Integration:** Stores vehicle diagnostics in MySQL.
- **Web Dashboard:** Displays fleet insights such as fuel efficiency, RPM stats, and speed metrics.
- **Searchable UI:** Allows users to search vehicles and view real-time diagnostics.
- **Vehicle Health Score:** Computed using backend Flask API for quick assessment.

## 📂 Project Structure
```
📁 pdm-fleet-management
├── 📁 backend              # API & database integration
├── 📁 public               # Static assets
├── 📁 src                  # Frontend source code
├── 📁 node_modules         # Dependencies
├── 📄 .gitignore           # Git ignore file
├── 📄 eslint.config.js     # ESLint configuration
├── 📄 index.html           # Main HTML file
├── 📄 package-lock.json    # Package lock file
├── 📄 package.json         # Project dependencies
├── 📄 README.md            # Project documentation
├── 📄 vehicle_diagnostics_2.sql  # MySQL database dump
├── 📄 vite.config.js       # Vite configuration
```

## 🧑‍💻 Data Preprocessing & Model Training
### Data Preprocessing:
1. **CAN Data Extraction:** Converts raw CAN signals into structured sensor readings.
2. **Timestamp Standardization:** Ensures consistent 5-second intervals between readings.
3. **Feature Engineering:** Selects 38 key features relevant to vehicle health.
4. **Normalization:** Scales features for better model performance.

### Model Training (LSTM Autoencoder):
1. **Architecture:** Uses an LSTM-based autoencoder trained on normal driving patterns.
2. **Training:** Learns to reconstruct normal sequences, making anomalies detectable via reconstruction error.
3. **Thresholding:** Defines anomaly detection thresholds based on reconstruction loss.
4. **Deployment:** Converts model for inference on ESP32 and integrates with the backend.

## 🔧 Installation
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/ZENZEPHY/pdm-fleet-management.git
cd pdm-fleet-management
```
### 2️⃣ Set Up Virtual Environment (Optional)
```bash
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
```
### 3️⃣ Install Dependencies
```bash
npm install
```
### 4️⃣ Configure Database
- Set up a MySQL database.
- Import `vehicle_diagnostics_2.sql` into MySQL.
- Update database credentials in `backend/config.py`.

### 5️⃣ Deploy on ESP32
- Flash firmware using ESP-IDF or Arduino IDE.
- Ensure MQTT broker is configured for data transmission.

## 📊 Web Dashboard Setup
Navigate to the project root and start the development server:
```bash
npm run dev
```
Access the dashboard at `http://localhost:3000`.

## 🎛 Web UI Overview
- **Search Vehicles:** Find vehicles by ID or name.
- **Real-time Diagnostics:** Fetches live data from the Flask API.
- **Vehicle Health Score:** Displays a calculated health score based on anomalies and sensor data.
- **Fleet Insights:** Provides a summary of fuel efficiency, speed trends, and RPM statistics.

## 🛠 Usage
1. **Deploy Edge Model** on ESP32 to monitor vehicle health.
2. **Stream Data** via MQTT to the backend.
3. **Store & Process** data in MySQL.
4. **Analyze Anomalies** using LSTM autoencoder.
5. **Visualize Fleet Metrics** on the web dashboard.

## 📝 Future Improvements
- Implement more ML models for enhanced fault detection.
- Expand compatibility to other IoT devices.
- Optimize energy efficiency for extended operation.

## 🤝 Contributing
Feel free to submit issues, feature requests, or pull requests. 

## 📜 License
This project is licensed under the **MIT License**.

## 📬 Contact
📧 Email: adithkvxid@gmail.com  
🌍 GitHub: [ZENZEPHY](https://github.com/ZENZEPHY)

