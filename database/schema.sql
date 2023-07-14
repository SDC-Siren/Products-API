CREATE TABLE IF NOT EXISTS product (
  id SERIAL PRIMARY KEY,
  name VARCHAR(40) NOT NULL,
  slogan VARCHAR(300),
  description VARCHAR(500),
  category VARCHAR(20),
  default_price INT
);

CREATE TABLE IF NOT EXISTS features (
  id SERIAL PRIMARY KEY,
  product_id INT NOT NULL,
  feature VARCHAR(30) NOT NULL,
  value VARCHAR(30),
  FOREIGN KEY (product_id) REFERENCES product(id)
);

CREATE TABLE IF NOT EXISTS styles (
  id SERIAL PRIMARY KEY,
  product_id INT NOT NULL,
  name VARCHAR(30) NOT NULL,
  sale_price INT,
  original_price INT,
  default_style BOOL,
  FOREIGN KEY (product_id) REFERENCES product(id)
);

CREATE TABLE IF NOT EXISTS photos (
  id SERIAL PRIMARY KEY,
  style_id INT NOT NULL,
  url VARCHAR(135) NOT NULL,
  thumbnail_url VARCHAR(135),
  FOREIGN KEY (style_id) REFERENCES styles(id)
);

CREATE TABLE IF NOT EXISTS skus (
  id INT PRIMARY KEY,
  style_id INT NOT NULL,
  size VARCHAR(3),
  quantity INT,
  FOREIGN KEY (style_id) REFERENCES styles(id)
);

CREATE TABLE IF NOT EXISTS related (
  id SERIAL PRIMARY KEY,
  current_product_id INT NOT NULL,
  related_product_id INT NOT NULL,
  FOREIGN KEY (current_product_id) REFERENCES product(id),
  FOREIGN KEY (related_product_id) REFERENCES product(id)
);
