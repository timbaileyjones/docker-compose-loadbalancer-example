import datetime
import os
from flask import Flask, request, jsonify
from flask_restful import Resource, Api

hostname = os.uname()[1]
print "hostname for flask-site:", hostname
app = Flask(__name__, static_url_path='/static')
api = Api(app)


@app.route('/')
def root():
    return app.send_static_file('index.html')

@app.route('/api/data', methods = ['POST'])
def postData():
    payload = str(request.data)
    logfile = open('/tmp/shared_logs/%s_access.flask.log' % hostname, 'a');
    logfile.write('%s accepted input: %s\n' % (datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S'), payload))
    logfile.close()
    return "{'status': 'success'}"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=False)
