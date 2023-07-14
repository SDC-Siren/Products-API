COPY product
  FROM '/Users/lorenjohnson/Desktop/HackReacter/SDC/CSV/cleanProduct.csv'
  CSV HEADER;

COPY features
  FROM '/Users/lorenjohnson/Desktop/HackReacter/SDC/CSV/features.csv'
  CSV HEADER;

COPY styles
  FROM '/Users/lorenjohnson/Desktop/HackReacter/SDC/CSV/cleanStyles.csv'
  CSV HEADER;

COPY photos
  FROM '/Users/lorenjohnson/Desktop/HackReacter/SDC/CSV/photos.csv'
  CSV HEADER;
-- CLEANUP : VARCHAR TOO LONG FOR LINK

-- COPY skus
--   FROM '/Users/lorenjohnson/Desktop/HackReacter/SDC/CSV/skus.csv'
--   CSV HEADER;