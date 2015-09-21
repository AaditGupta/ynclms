from flask import Flask, render_template, abort
from flask.ext.bootstrap import Bootstrap

app = Flask(__name__)
bootstrap = Bootstrap(app)

# VARIABLES TO BE PASSED INTO TEMPLATE

titles = ['YNC_Hacks', 'Open Democracy Society', 'Flying Spaghetti Monster Open Worship', 'Marx Is Cool Club']
dates = ['21/09/15', '22/09/15', '23/09/15', '24/09/15']

class Poster:
    def __init__(self):
        self.titles = []
        self.dates = []

    def add_title(self, title):
        self.titles.append(title)

    def add_date(self, date):
        self.dates.append(date)

posters = Poster()

for title in titles:
    posters.add_title(title)

for date in dates:
    posters.add_date(date)

# END VARIABLES----------------------

@app.route('/')
def index():
    return render_template('index.html', posters=posters)



if __name__ == '__main__':
    app.run(debug=True)
