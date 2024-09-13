/*Looking for all of X with a sum less than or greater than 255, and returning their id and first_name*/

-- marks total 
SELECT SUM(o.amount + o.customer_id) as Marks, c.customer_id, c.first_name
FROM Orders o, Customers c -- order id combine
WHERE o.order_id = c.customer_id
GROUP BY c.first_name
HAVING SUM(o.amount + o.customer_id) > 255;
