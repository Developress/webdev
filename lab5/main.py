import re
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)


def check_for_emptiness(field_name, field_value):
    if field_value == '':
        return f'{field_name} not entered\n'

    return ''


def check_for_pattern(field_name, field_value):
    if not re.match(r'[A-Za-z ]{1,50}', field_value):
        return f'{field_name} must contain only uppercase and lowercase english letters and be no longer than 50 ' \
               f'symbols\n'

    return ''


def validate_data(data):
    msg = ''
    data = {
        'First name': data['first_name'],
        'Last name': data['last_name'],
        'Gender': data['gender'],
        'Feedback': data['feedback'],
        'Age': data['age']
    }

    for key in data:
        msg += check_for_emptiness(key, data[key])
        if key == 'First name' or key == 'Last name':
            msg += check_for_pattern(key, data[key])

    if msg == '':
        msg = 'Data was saved successfully'

    return msg


@app.route("/player", methods=['POST'])
def index():
    data = request.json
    result = validate_data(data)
    print(result)
    return jsonify(result), 200


if __name__ == '__main__':
    CORS(app)
    app.run()



