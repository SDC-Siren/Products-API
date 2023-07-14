COPY product
  FROM '/Users/lorenjohnson/Desktop/HackReacter/SDC/CSV/cleanProduct.csv'
  DELIMITER ',' CSV HEADER;

COPY features
  FROM '/Users/lorenjohnson/Desktop/HackReacter/SDC/CSV/features.csv'
  DELIMITER ',' CSV HEADER;

COPY styles
  FROM '/Users/lorenjohnson/Desktop/HackReacter/SDC/CSV/cleanStyles.csv'
  DELIMITER ',' CSV HEADER;

-- FOREIGN KEY VIOLATIONS: KEY NOT IN PRODUCT
-- COPY RAW DATA FROM THESE CSV FILES INTO TABLES
COPY photosRAW
  FROM '/Users/lorenjohnson/Desktop/HackReacter/SDC/CSV/photos.csv'
  DELIMITER ',' CSV HEADER;

-- COPY skusRAW
--   FROM '/Users/lorenjohnson/Desktop/HackReacter/SDC/CSV/skus.csv'
--   CSV HEADER;

-- COPY relatedRAW
--   FROM '/Users/lorenjohnson/Desktop/HackReacter/SDC/CSV/related.csv'
--   CSV HEADER;

-- POPULATE TABLES WITH VALID ONLY
INSERT INTO photos
  SELECT * FROM photosRAW p INNER JOIN styles s ON p.style_id=s.id;