SELECT students.name as student, AVG(assignment_submissions.duration) as average_completion_time
FROM assignment_submissions
JOIN students ON students.id = assignment_submissions.student_id
WHERE students.end_date IS NULL
GROUP BY (students.name)
ORDER BY AVG(assignment_submissions.duration) DESC;