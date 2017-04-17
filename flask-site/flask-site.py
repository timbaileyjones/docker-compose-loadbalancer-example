import datetime
import os
from flask import Flask
from flask_restful import Resource, Api

hostname = os.uname()[1]
print "hostname for flask-site:", hostname
app = Flask(__name__, static_url_path='/static')
api = Api(app)


class Schedule(Resource):
    def get(self):
        logfile = open('/tmp/shared_logs/%s_access.log' % hostname, 'a');
        print "logfile", logfile
        logfile.write('%s schedule sent\n' % datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S'))
        logfile.close()
        return [
        {
                'date': '04/28/2017 19:00:00',
                'venue': 'Tampa Covenant Church',
                'desc': 'Spring Concert 2017'
        },
        {
                'date': '07/03/2017 19:00:00',
                'venue': 'Osborne Riverfront Park',
                'desc': 'Summer Concert'
        },
        ]

@app.route('/')
def root():
    return app.send_static_file('index.html')
api.add_resource(Schedule, '/schedule')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
