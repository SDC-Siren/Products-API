COPY product
  FROM '/Users/lorenjohnson/Desktop/HackReacter/SDC/CSV/cleanProduct.csv'
  CSV HEADER;

COPY features
  FROM '/Users/lorenjohnson/Desktop/HackReacter/SDC/CSV/features.csv'
  CSV HEADER;

COPY styles
  FROM '/Users/lorenjohnson/Desktop/HackReacter/SDC/CSV/cleanStyles.csv'
  CSV HEADER;

-- CLEANUP : VARCHAR TOO LONG THUMBNAIL URL
-- COPY photos
--   FROM '/Users/lorenjohnson/Desktop/HackReacter/SDC/CSV/photos.csv'
--   CSV HEADER;

-- CLEANUP : SOME STYLE IDS DO NOT EXIST IN STYLE TABLE
-- COPY skus
--   FROM '/Users/lorenjohnson/Desktop/HackReacter/SDC/CSV/skus.csv'
--   CSV HEADER;

-- CLEANUP: 'Key (related_product_id)=(0) is not present in table "product".
-- COPY related
--   FROM '/Users/lorenjohnson/Desktop/HackReacter/SDC/CSV/related.csv'
--   CSV HEADER;