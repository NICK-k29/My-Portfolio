from flask import Flask, render_template, redirect, url_for, flash, request
from flask_mail import Mail, Message 
from forms import ContactForm

app = Flask(__name__)
app.config.from_pyfile('config.py')

mail = Mail(app)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/projects")
def projects():
    return render_template("projects.html", projects=projects)

@app.route("/contact", methods=["GET", "POST"])
def contact():
    form = ContactForm()
    if form.validate_on_submit():
        msg = Message(subject=f"Message from {form.name.data}",
                      sender=form.email.data,
                      recipients=["your_email@example.com"],  
                      body=form.message.data)
        mail.send(msg)
        flash("Message sent successfully!", "success")
        return redirect(url_for("contact"))
    return render_template("contact.html", form=form)

if __name__ == "__main__":
    app.run(debug=True)
