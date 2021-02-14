puts "Enter student name: "
name = gets

puts "Enter assignment name: "
assignment = gets

puts "Enter grade in number: "
grade = gets

class Grader
	def initialize
		@name = name
		@assignment = assignment
		@grade = grade
	end
	def get_grade
		if @grade <= 100 && @grade >= 90
			@grade = 'A'
		
		elsif @grade <= 89 && @grade >= 80
			@grade = 'B'
		
		elsif@grade <= 79 && @grade >= 70
			@grade = 'C'
		
		elsif @grade <= 69 && @grade >= 60
			@grade = 'D'
		
		elsif @grade <60
			@grade = 'F'
		
		else
			"Please enter a valid number for grade"
		end
		return @grade
	end
	def display_grader
		return "Grade Details: "+@name+"@fullsail.edu"
		"Your grade for "+@assignment+" is: "+@grade
	end
end

grader = Grader.new

grader.get_grade()
print(grader.display_grader())