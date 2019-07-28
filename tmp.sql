SELECT c.Name 'Course', t.Name 'Teacher'
FROM Courses c, Teachers t
WHERE c.id = t.id
ORDER BY 1
