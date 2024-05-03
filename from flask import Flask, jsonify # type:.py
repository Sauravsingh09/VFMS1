from flask import Flask, jsonify # type: ignore

app = Flask(__name__)

@app.route('/fuel-consumption')
def get_fuel_consumption():
    # Sample fuel consumption data
    fuel_data = {
        'vehicle_id': 1,
        'date': '2024-04-25',
        'fuel_consumed': 50,
        'distance_traveled': 200
    }
    return jsonify(fuel_data)

if __name__ == '__main__':
    app.run(debug=True)
