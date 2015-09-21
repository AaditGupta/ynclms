from flask import Flask, render_template, abort
from flask.ext.bootstrap import Bootstrap

app = Flask(__name__)
bootstrap = Bootstrap(app)

# VARIABLES TO BE PASSED INTO TEMPLATE

titles = ['YNC_Hacks', 'Open Democracy Society', 'Flying Spaghetti Monster Open Worship', 'Marx Is Cool Club']
dates = ['21/09/15', '22/09/15', '23/09/15', '24/09/15']
imgs = ['/static/img1.gif', '/static/img2.jpg', '/static/img3.jpg', '/static/img4.jpg']

class Poster:
    def __init__(self):
        self.titles = []
        self.dates = []
        self.imgs = []

    def add_title(self, title):
        self.titles.append(title)

    def add_date(self, date):
        self.dates.append(date)

    def add_image(self, image):
        self.imgs.append(image)

posters = Poster()

for title in titles:
    posters.add_title(title)

for date in dates:
    posters.add_date(date)

for img in imgs:
    posters.add_image(img)

# END VARIABLES----------------------

@app.route('/')
def index():
    return render_template('index.html', posters=posters)



if __name__ == '__main__':
    app.run(debug=True)
