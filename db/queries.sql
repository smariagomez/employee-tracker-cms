SELECT *
FROM course_names;

SELECT department, COUNT(id) AS number_courses
FROM course_names
GROUP BY department;
--ORDER BY number_courses DESC
--LIMIT 2;

SELECT department, SUM(total_enrolled) AS sum_enrolled
FROM course_names
GROUP BY department;
--ORDER BY number_courses DESC
--LIMIT 2;

SELECT department, SUM(total_enrolled) AS sum_enrolled
FROM course_names
GROUP BY department;