CREATE TABLE IF NOT EXISTS book
  (
     id            SERIAL NOT NULL PRIMARY KEY,
     name          VARCHAR(28) NOT NULL,
     author        VARCHAR(12) NOT NULL,
     description   VARCHAR(514),
     cover_picture VARCHAR(88),
     category      VARCHAR(13) NOT NULL,
     stock         INTEGER NOT NULL DEFAULT 0
  ); 