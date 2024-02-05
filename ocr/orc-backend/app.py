from flask import Flask, request, jsonify
from recognize_text import recognize_text
from flask_cors import CORS
import re
import sys
from pytesseract.pytesseract import main

app = Flask(__name__)
CORS(app, resources={"/api/ocr": {"origins": "http://localhost:3000"}})


@app.route('/api/ocr', methods=['POST'])
def ocr():
    if 'image' not in request.files:
        return jsonify({'error': 'No file part'})

    image = request.files['image']
    text = recognize_text(image)
    return jsonify({'text': text})

if __name__ == '__main__':
    app.run(debug=True)
