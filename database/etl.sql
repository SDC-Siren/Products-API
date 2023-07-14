COPY product
  FROM '/Users/lorenjohnson/Desktop/HackReacter/SDC/CSV/product.csv'
  CSV HEADER;

COPY features
  FROM '/Users/lorenjohnson/Desktop/HackReacter/SDC/CSV/features.csv'
  CSV HEADER;

-- (id, product_id, name, sale_price, original_price, default_style)
COPY styles
  FROM '/Users/lorenjohnson/Desktop/HackReacter/SDC/CSV/styles.csv'
  CSV HEADER;