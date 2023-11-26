from firebase import firebase
#https://alt1sept19.firebaseio.com/


myDBConn = firebase.FirebaseApplication('https://alt1sept19.firebaseio.com/',None)
myGetResults = myDBConn.get('/pbarry/mycontacts',None)
print(myGetResults)
for keyID in myGetResults:
  print(keyID,"\t",myGetResults[keyID]['name'],"\t",myGetResults[keyID]['age'])
 
myGetResults = myDBConn.get('/student1/weather',None)
print(myGetResults)
for keyID in myGetResults:
  print(keyID,"\t",myGetResults[keyID]['city'],"\t",myGetResults[keyID]['temp'])