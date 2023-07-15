-- COPY product
--   FROM '/Users/lorenjohnson/Desktop/HackReacter/SDC/CSV/cleanProduct.csv'
--   DELIMITER ',' CSV HEADER;

-- COPY features
--   FROM '/Users/lorenjohnson/Desktop/HackReacter/SDC/CSV/features.csv'
--   DELIMITER ',' CSV HEADER;

-- COPY styles
--   FROM '/Users/lorenjohnson/Desktop/HackReacter/SDC/CSV/cleanStyles.csv'
--   DELIMITER ',' CSV HEADER;

-- FOREIGN KEY VIOLATIONS: KEY NOT IN PRODUCT
-- COPY RAW DATA FROM THESE CSV FILES INTO TABLES
-- COPY photosRAW
--   FROM '/Users/lorenjohnson/Desktop/HackReacter/SDC/CSV/photos.csv'
--   DELIMITER ',' CSV HEADER;

-- COPY skusRAW
--   FROM '/Users/lorenjohnson/Desktop/HackReacter/SDC/CSV/cleanSkus.csv'
--   DELIMITER ',' CSV HEADER;

-- COPY relatedRaw1
--   FROM '/Users/lorenjohnson/Desktop/HackReacter/SDC/CSV/related.csv'
--   CSV HEADER;

-- POPULATE TABLES WITH VALID DATA ONLY
-- INSERT INTO photos (style_id, url, thumbnail_url)
--   SELECT style_id, url, thumbnail_url FROM photosRAW p INNER JOIN styles s ON p.style_id=s.id;

-- INSERT INTO skus (style_id, size, quantity)
--   SELECT style_id, size, quantity FROM skusRAW sR INNER JOIN styles s ON sR.style_id=s.id;

-- INSERT INTO relatedRaw2 (current_product_id, related_product_id)
--   SELECT current_product_id, related_product_id FROM relatedRaw1 INNER JOIN product ON relatedRaw1.current_product_id=product.id;

-- INSERT INTO related (current_product_id, related_product_id)
--   SELECT current_product_id, related_product_id FROM relatedRaw2 INNER JOIN product ON relatedRaw2.related_product_id=product.id;

-- DROP TABLE photosRAW;
-- DROP TABLE skusRAW;
-- DROP TABLE relatedRAW1;
-- DROP TABLE relatedRAW2;