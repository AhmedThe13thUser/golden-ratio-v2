from flask import Flask, render_template ,jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

Htmlfiles = {}
Jsfiles = {}

def read(i, Ftype):
    name = ''
    if Ftype == 'html':
        name = 'public/html/'+i
    if Ftype == 'js':
        name = 'public/js/'+i
    f = ''
    with open(name,'r') as fp:
        f = fp.read()
        fp.close()
    return f

def read_parse(i, Ftype):
    print(i)
    if Ftype == 'html':
        Htmlfiles[i] = read(i,Ftype)
    elif Ftype == 'js':
        Jsfiles[i] = read(i,Ftype)

def refresh_site():
    for i in 'index.html', 'projects.html', 'studio.html', 'contacts.html':
        read_parse(i, 'html')
    for i in ['CustomTags.js']:
        read_parse(i,'js')

refresh_site()

@app.route('/')
def index():
    refresh_site()
    return Htmlfiles.get('index.html')

@app.route('/projects')
def projects():
    refresh_site()
    return Htmlfiles.get('projects.html')

@app.route('/studio')
def studio():
    refresh_site()
    return Htmlfiles.get('studio.html')

@app.route('/contacts')
def contacts():
    refresh_site()
    return Htmlfiles.get('contacts.html')

# resources
@app.route('/CustomTags')
def CustomTagsJs():
    refresh_site()
    return Jsfiles.get('CustomTags.js')


app.run(host='0.0.0.0', port=80)