SELECT teachers.name as teacher_name, students.name as student_name, assignments.name as assignment_name, completed_at - started_at as duration
FROM assistance_requests
JOIN students ON students.id = assistance_requests.student_id
JOIN teachers ON teachers.id = assistance_requests.teacher_id
JOIN assignments ON assignments.id = assistance_requests.assignment_id
ORDER BY duration;