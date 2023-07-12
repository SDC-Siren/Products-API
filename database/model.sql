CREATE TABLE IF NOT EXISTS product {
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(40) NOT NULL,
  slogan VARCHAR(100),
  description VARCHAR(300),
  category VARCHAR(20),
  default_price INT,
  PRIMARY KEY (id)
}