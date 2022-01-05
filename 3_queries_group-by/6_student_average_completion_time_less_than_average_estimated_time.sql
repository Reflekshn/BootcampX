SELECT students.name as student, AVG(assignment_submissions.duration) as average_assignment_duration, AVG(assignments.duration) as average_estimated_duration
FROM assignments
JOIN assignment_submissions ON assignment_submissions.assignment_id = assignments.id
JOIN students ON students.id = assignment_submissions.student_id
WHERE students.end_date IS NULL
GROUP BY (students.name)
HAVING AVG(assignments.duration) > AVG(assignment_submissions.duration)
ORDER BY AVG(assignment_submissions.duration) ASC;