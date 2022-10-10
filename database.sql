--DROP TABLE "user";


-- Database name = quest_board
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "is_parent" BOOLEAN DEFAULT TRUE,
    "parent_id" INT DEFAULT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "code" VARCHAR(4) DEFAULT NULL
);
