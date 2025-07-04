from flask import render_template, redirect, url_for, request, session
from dataclasses import dataclass
from typing import List

from . import app

@dataclass
class Employee:
    name: str
    role: str

employees: List[Employee] = []

# simple in-memory user
ADMIN_EMAIL = 'admin@example.com'
ADMIN_PASS = 'password'

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/services')
def services():
    return render_template('services.html')

@app.route('/services/<service>')
def service_detail(service):
    template = f'services/{service}.html'
    return render_template(template)

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    error = None
    if request.method == 'POST':
        if request.form['email'] == ADMIN_EMAIL and request.form['password'] == ADMIN_PASS:
            session['user'] = ADMIN_EMAIL
            return redirect(url_for('admin'))
        else:
            error = 'Invalid credentials'
    return render_template('login.html', error=error)

@app.route('/admin', methods=['GET', 'POST'])
def admin():
    if session.get('user') != ADMIN_EMAIL:
        return redirect(url_for('login'))
    if request.method == 'POST':
        name = request.form.get('emp_name')
        role = request.form.get('emp_role')
        if name and role:
            employees.append(Employee(name, role))
    return render_template('admin.html', employees=employees)

@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('home'))
