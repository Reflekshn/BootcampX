const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.connect();

pool.query(`
SELECT DISTINCT cohorts.name as cohort, teachers.name as teacher
FROM teachers
JOIN assistance_requests ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '${process.argv[2] || 'JUL02'}'
LIMIT 10;
`,)
  .then(res => {
    res.rows.forEach(queryResults => {
      console.log(`${queryResults.cohort}: ${queryResults.teacher}`);
    });
  }).catch(err => console.error('query error', err.stack));