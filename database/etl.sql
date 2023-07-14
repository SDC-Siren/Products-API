COPY product
  FROM '/Users/lorenjohnson/Desktop/HackReacter/SDC/CSV/cleanProduct.csv'
  CSV HEADER;

COPY features
  FROM '/Users/lorenjohnson/Desktop/HackReacter/SDC/CSV/features.csv'
  CSV HEADER;

COPY styles
  FROM '/Users/lorenjohnson/Desktop/HackReacter/SDC/CSV/cleanStyles.csv'
  CSV HEADER;