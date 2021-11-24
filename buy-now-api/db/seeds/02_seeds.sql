INSERT INTO carts (id, product_id, number_of_items)
VALUES (1, 1, 1),
(1, 2, 3),
(2, 3, 5),
(2, 1, 10);

INSERT INTO order_status (id, status_description)
VALUES (1, 'Order Created'),
(2, 'Order Shipped'),
(3, 'Order Delivered');

INSERT INTO orders (id, date, email_id, number_of_items, discount, subtotal, orderStatus_id) --If you were to have multiple items, subtotal would change, (so how would this tie to order_lineITEMS?)
VALUES (1, '2021-11-19', 'test1@gmail.com', 1, 0, 199.99, 1),
(2, '2021-11-19', 'test2@gmail.com', 1, 0.25, 59.99, 2),
(3, '2021-11-19', 'test3@gmail.com', 1, 0.30, 35.63, 3);

INSERT INTO order_lineItems (order_id, product_id, price, quantity, discount) --THIS SHOULD HAVE A MANY TO MANY RELATIONSHIP AS WELL (just like carts?) because you'll have many product_id. instead of just 1 product id right? (assuming you're ordering many products) right? ALSO for the quantity here, is it specifing THIS order has HOW MANY PRODUCTS here?
VALUES (1, 1, 199.99, 1, 0),
(2, 2, 59.99, 1, 0.25),
(3, 3, 35.63, 1, 0.30);


INSERT INTO themes (name, start_date, end_date, discount)
VALUES ('Christmas', '2021-12-01', '2021-12-31', 0.30),
('Black Friday', '2021-11-20', '2021-11-30', 0.45),
('Summer', '2021-05-20', '2021-09-22', 0.10);