from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate-positive-resolved', methods=['POST'])
def calculate_positive_resolved():
    total_csat = int(request.json['totalCsat'])
    total_resolved = int(request.json['totalResolved'])
    result = (total_resolved / total_csat) * 100
    return jsonify(result)

@app.route('/calculate-positive-experience', methods=['POST'])
def calculate_positive_experience():
    total_csat = int(request.json['totalCsat'])
    total_5 = int(request.json['total5'])
    total_4 = int(request.json['total4'])
    result = ((total_5 + total_4) / total_csat) * 100
    return jsonify(result)

if __name__ == '__main__':
    app.run()
