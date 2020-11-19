from flask import Flask, render_template, request							
app = Flask(__name__)

@app.route("/login")
def screen():
    return render_template('login.html')

@app.route('/login',methods = ['POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        return "Email: " + email + "<br> " + "Password: " + password

if __name__ == "__main__":
    app.run(debug=True)

