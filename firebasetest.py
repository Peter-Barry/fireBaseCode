
from firebase import firebase

myDBConn = firebase.FirebaseApplication('https://alt1sept19.firebaseio.com/',None)

data = {
  'name'  : "Zoe",
  'age'   : 21
}
data2 = {
  'city'  : "Cork",
  'temp'   : 21
}
#result = myDBConn.post('student1/mycontacts/',data)
result = myDBConn.post('student1/weather/',data2)

print(result)
