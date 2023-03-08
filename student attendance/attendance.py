import requests
import datetime
import pytz
from twilio.rest import Client

# # Your Account SID and Auth Token from twilio.com/console
# account_sid = 'AC72f6db2fe3aa5013f1bf29fe725df7e6'
# auth_token = 'e5b3abae6304cdac8f7fac8e48557f66'

# # Initialize the Twilio client
# client = Client(account_sid, auth_token)


# Load student data from file
with open('students.txt', 'r') as f:
    students = [line.strip().split(', ') for line in f]

# Record attendance
present = []
tz = pytz.timezone('Asia/Dhaka')
for name_id in students:
    name = name_id[0]
    id = name_id[1]
    now = datetime.datetime.now(tz)
    response = input(f"Is {name},{id} present? (y/n): ")
    if response.lower() == 'y':
        present.append((name, id, now.strftime('%Y-%m-%d %H:%M')))

# Write attendance to file
with open('attendance.txt', 'w') as f:
    for attendance in present:
        f.write(', '.join(attendance) + '\n')

# Find absent students
absent = [(name, id, guardian_name, phone) for name, id, guardian_name, phone in students if (name, id) not in [(p[0], p[1]) for p in present]]

# Write absent students to file
with open('absent.txt', 'w') as f:
    for name, id, guardian_name, phone in absent:
        f.write(f"{name}, {id},{guardian_name},{phone}, {now.strftime('%Y-%m-%d %H:%M')}\n")

# # Send SMS notifications to absent students via API (twilio)
# for name, id, guardian_name, phone in absent:
#     message = f'Hello {guardian_name}, your child {name} with ID {id} was absent from school today.'
#     message = client.messages.create(
#         body=message,
#         from_='+15673132923',
#         to=phone
#     )
#     print(f'Sent SMS to {guardian_name} at {phone} with SID {message.sid}')

# Send SMS notifications to absent students via API (sms.net.bd)
url = "https://api.sms.net.bd/sendsms"
api_key = "FdnavsH4Y0250QCTcyf5RO5lQE3rx2Og9982xjqo"
for name, id, guardian_name, phone in absent:
    msg = f'Hello {guardian_name}, your child {name} with ID {id} was absent from school today.'
    payload = {
    "api_key": api_key,
    "to": phone,
    "msg": msg
}
    response = requests.post(url, data=payload)
if response.status_code == 200:
    print("Message Report:", response.text)
else:
    print("Message Report:", response.text)

#install all modules by pip install -r requirements.txt