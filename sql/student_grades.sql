/*Get distinct names of students with grades over 75%, sort alphabetically */
SELECT DISTINCT Name 
FROM STUDENTS 
WHERE EXISTS (SELECT DISTINCT SUBSTRING(Name, 1, 3) AS nameEnd
FROM STUDENTS 
WHERE Marks > 75)
ORDER BY Name ASC;
