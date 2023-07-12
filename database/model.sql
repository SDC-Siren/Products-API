CREATE TABLE IF NOT EXISTS product {
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(40) NOT NULL,
  slogan VARCHAR(100),
  description VARCHAR(300),
  category VARCHAR(20),
  default_price INT,
  PRIMARY KEY (id)
}

CREATE TABLE IF NOT EXISTS features {
  id INT NOT NULL AUTO_INCREMENT,
  product_id INT NOT NULL,
  feature VARCHAR(30) NOT NULL,
  value VARCHAR(25),
  PRIMARY KEY (id),
  FOREIGN KEY (product_id) REFERENCES product(id)
}

CREATE TABLE IF NOT EXISTS styles {
  id INT NOT NULL AUTO_INCREMENT,
  product_id INT NOT NULL,
  name VARCHAR(30) NOT NULL,
  sale_price INT,
  original_price INT,
  default_style BOOL,
  PRIMARY KEY (id),
  FOREIGN KEY (product_id) REFERENCES product(id)
}

CREATE TABLE IF NOT EXISTS photos {
  id INT NOT NULL AUTO_INCREMENT,
  style_id INT NOT NULL,
  url VARCHAR(135),
  thumbnail_url VARCHAR(135),
  PRIMARY KEY (id),
  FOREIGN KEY (style_id) REFERENCES styles(id)
}

CREATE TABLE IF NOT EXISTS skus {
  id INT NOT NULL AUTO_INCREMENT,
  style_id INT NOT NULL,
  size VARCHAR(3),
  quantity INT,
  PRIMARY KEY (id),
  FOREIGN KEY (style_id) REFERENCES styles(id)
}

CREATE TABLE IF NOT EXISTS related {
  id INT NOT NULL AUTO_INCREMENT,
  current_product_id INT NOT NULL,
  related_product_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (current_product_id) REFERENCES product(id),
  FOREIGN KEY (related_product_id) REFERENCES product(id)
}