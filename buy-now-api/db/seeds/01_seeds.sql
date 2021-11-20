INSERT INTO usertypes (id, usertype_desc)
VALUES (1, 'Admin'),
(2, 'Guest');

INSERT INTO users (email, password, usertype_id)
VALUES ('admin1@gmail.com', 'admin1', 1);


INSERT INTO products (name, price, quantity, thumbnail_photo_url, description, category)
VALUES ('Nanoleaf light-up wall panels', 199.99, 20, 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6039/6039500_sd.jpg', 'Modular LED light panels designed to add a stunning statement of artistic technology to your space.', 'Lifestyle'),
('OMZIN Women Lapel Wrap Coat Outwear Long Overcoat Plue Size Jacket', 59.99, 100, 'https://m.media-amazon.com/images/I/61OckGLlZUL._AC_UL320_.jpg', 'Long trench coat with belt, double breasted storm flap button closure help to keep wind out. Thigh-length and detachable belt gives you a touch of versatility to handle ever-changing weather. 2 hand pockets lend a warm place for chilly hands on cold mornings.', 'Apparel'),
('Coding with JavaScript For Dummies', 35.63, 42, 'https://images-na.ssl-images-amazon.com/images/I/71PnU2pTHLL.jpg', 'Go from beginner to builder quickly with this hands-on JavaScript guide', 'Books');


