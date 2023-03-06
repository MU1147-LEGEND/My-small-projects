import requests
from bs4 import BeautifulSoup
import sys
sys.stdout.reconfigure(encoding='utf-8')

# Get the HTML of the login page
url = 'https://mbasic.facebook.com/'
response = requests.get(url)
html = response.content

# Parse the HTML with BeautifulSoup
soup = BeautifulSoup(html, 'html.parser')

# Find the form element
form = soup.find('form')

# Find the username and password fields
username_field = form.find('input', {'name': 'email'})
password_field = form.find('input', {'name': 'pass'})

# Fill in the username and password fields
username_field['value'] = '01734906838'
password_field['value'] = '114798####11'

# Convert form data to a dictionary
form_data = {}
for input_field in form.find_all('input'):
    form_data[input_field.get('name')] = input_field.get('value')

# Submit the form
submit_button = form.find('button', {'type': 'submit'})
response = requests.post(url, data=form_data)

# Check the response
if 'Log in' in response.text:
    print('Login failed')
else:
    print('Login successful')
print(response.text)
