import json

student=[{
	"studentid":101,
	"firstname":"John",
	"lastname":"Doe",
	"isStudent":True,
	"score":[40,30],
	"courses":{
		"major":"Finance",
		"Minor":"Marketing"
	}
}]
print(student)



student_json = '''[{"studentid": 101, "firstname": "John", "lastname":
				"Doe", "isStudent": true, "courses": {"major": "Finance", "minor":
				"Marketing"}, "scores": [40, 50]}]'''


print(json.loads(student_json))
print(json.dumps(student_json))