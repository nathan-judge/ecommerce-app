DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS usertypes CASCADE;
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS reviews CASCADE;
DROP TABLE IF EXISTS carts CASCADE;


CREATE TABLE usertypes (
  id SERIAL PRIMARY KEY NOT NULL,
  usertype_desc VARCHAR(255) --(guest, or admin)
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  usertype_id INTEGER REFERENCES usertypes(id) ON DELETE CASCADE
);


CREATE TABLE products (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  price INTEGER NOT NULL DEFAULT 0,
  quantity INTEGER,
  thumbnail_photo_url VARCHAR(255),
  description TEXT,
  category VARCHAR(255),
  number_of_ratings INTEGER DEFAULT 0,
  avg_rating DECIMAL DEFAULT 0
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY NOT NULL,
  product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
  username VARCHAR(255),
  comment TEXT,
  rating DECIMAL,
  created_at TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE carts (
  id VARCHAR(255) NOT NULL,
  product_id INTEGER REFERENCES products(id),
  number_of_items INTEGER NOT NULL DEFAULT 0,
  order_placed BOOLEAN DEFAULT false
);



