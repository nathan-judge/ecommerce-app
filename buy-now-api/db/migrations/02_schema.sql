DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS order_lineItems CASCADE;
DROP TABLE IF EXISTS order_status CASCADE;
DROP TABLE IF EXISTS themes CASCADE;



CREATE TABLE order_status (
  id SERIAL PRIMARY KEY NOT NULL,
  status_description TEXT
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  date DATE NOT NULL,
  email_id VARCHAR(255) NOT NULL,
  number_of_items INTEGER,
  discount INTEGER NOT NULL DEFAULT 0,
  subtotal INTEGER NOT NULL DEFAULT 0,
  orderStatus_id INTEGER REFERENCES order_status(id)
);

CREATE TABLE order_lineItems (
  id SERIAL PRIMARY KEY NOT NULL,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
  price INTEGER NOT NULL DEFAULT 0,
  quantity INTEGER, 
  discount decimal NOT NULL DEFAULT 0
);


CREATE TABLE themes (
  name TEXT, --Christmas, Black Friday, Easter, etc.
  start_date DATE,
  end_date DATE,
  discount decimal
);