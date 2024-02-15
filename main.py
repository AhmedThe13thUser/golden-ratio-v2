from flask import Flask, render_template ,jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

files = {}

def read(i, Ftype):
    if Ftype == 'html':
        name = 'public/html/'+i
    f = ''
    with open(name,'r') as fp:
        f = fp.read()
        fp.close()
    return f

def read_parse(i, Ftype):
    files[i] = read(i,Ftype)

for i in 'index.html', 'projects.html', 'studio.html', 'contacts.html':
    read_parse(i, 'html')

@app.route('/')
def index():
    return files.get('index.html')


app.run(host='0.0.0.0', port=80)