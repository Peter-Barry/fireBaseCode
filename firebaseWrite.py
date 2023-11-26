#https://alt1sept19.firebaseio.com/

from firebase import firebase

myDBConn = firebase.FirebaseApplication('https://alt1sept19.firebaseio.com/',None)

data = {
  'name'  : "Sandra",
  'age'   : 29
}
data2 = {
  'city'  : "Lucan3",
  'temp'   : 29.5
}
result = myDBConn.post('student1/mycontacts/',data)
print(result)
result = myDBConn.post('student1/weather/',data2)

print(result)
