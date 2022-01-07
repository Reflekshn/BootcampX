const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.connect();

const cohortName = process.argv[2] || 'JUL02';
const values = [`%${cohortName}%`];

const queryString = `SELECT DISTINCT cohorts.name as cohort, teachers.name as teacher
FROM teachers
JOIN assistance_requests ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
LIMIT 10;
`;

pool.query(queryString, values)
  .then(res => {
    res.rows.forEach(queryResults => {
      console.log(`${queryResults.cohort}: ${queryResults.teacher}`);
    });
  }).catch(err => console.error('query error', err.stack));