import sys

name = raw_input("Enter student name: ")
assignment = raw_input("Enter assignment name: ")
grade = raw_input("Enter grade in numbers: ")

class Grader:
	def _init_(self,name,assignment,grade):
		self.name = name
		self.assignment = assignment
		self.grade = grade

	def getGrade(grade):
		if grade <= 100 and grade >= 90:
			grade == 'A'
	
		elif grade <= 89 and grade >= 80:
			grade == 'B'
		
		elif grade <= 79 and grade >= 70:
			grade == 'C'
		
		elif grade <= 69 and grade >= 60:
			grade == 'D'
		
		elif grade <60:
			grade == 'F'
		
		else:
			"Please enter a valid number for grade"
		
		return grade
	def displayGrader():
		print name+"@fullsail.edu\n"
	"Your grade for "+assignment+" is: "+grade



grader = Grader(name,assignment,grade)
grader.getGrade()
grader.displayGrader()