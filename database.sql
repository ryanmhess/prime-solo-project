DROP TABLE "user", "quest", "category";

-- Database name = quest_board
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

--	User Table	--------------------------------------------

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "is_parent" BOOLEAN DEFAULT TRUE,
    "parent_id" INT DEFAULT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "code" VARCHAR(4) DEFAULT NULL
);

--	Category Table	----------------------------------------

CREATE TABLE "category" (
	"id" SERIAL PRIMARY KEY,
	"parent_text" VARCHAR NOT NULL,
	"child_text" VARCHAR NOT NULL,
	"type" VARCHAR NOT NULL
);

--	Quest Table	--------------------------------------------

CREATE TABLE "quest" (
	"id" SERIAL PRIMARY KEY,
	"child_id" INT REFERENCES "user",
	"category_id" INT REFERENCES "category",
	"complete" BOOLEAN DEFAULT FALSE,
	"score" INT NOT NULL DEFAULT (0),
	"start" TIME DEFAULT NULL,
	"finish" TIME DEFAULT NULL,
	"description" VARCHAR (500) NOT NULL
);

--	Actual Data for Category Table	------------------------

INSERT INTO "category" 
		("parent_text", "child_text", "type") 
	VALUES 
		('Bathroom', 'Infested Sewer', 'location'),
		('Basement', 'Ancient Crypt', 'location'),
		('Kitchen', 'Alchemical Lab', 'location'),
		('Bedroom', 'Dark Dungeon', 'location'),
		('Pets', 'Horse Stables', 'animal'),
		('House', 'Knights Manor', 'location'),
		('Garage', 'Dragon Lair', 'location'),
		('Yard', 'Battlefield', 'location'),
		('Exercise', 'Training Grounds', 'activity'),
		('School', 'Wizard Tower', 'activity'),
		('Brother', 'Orc', 'person'),
		('Sister', 'Kobold', 'person'),
		('Sibling', 'Goblin', 'person'),
		('Siblings', 'Goblins', 'person'),
		('Parent', 'Ogre', 'person'),
		('Grandparent', 'Troll', 'person'),
		('Neighbor', 'Bandit', 'person'),
		('Friend', 'Adventuring Companion', 'person'),
		('Grocery', 'Town Market', 'location'),
		('Playroom', 'Tomb of Horrors', 'location'),
		('Dinning Room', 'Grand Hall', 'location'),
		('Living Room', 'Labyrinth', 'location');

--	In APP - Register a parent account, login, then create 
--	at least 4 child accounts before running the dummy data
--	below. Thanks!

--	Dummy Data for Quest Table -----------------------------

INSERT INTO "quest"
		("child_id", "category_id", "description")
	VALUES
		('2', '4', 'This is dummy data for chore #4'),
		('2', '7', 'Do the stuff for chore #7'),
		('2', '12', 'Do the stuff for chore #12'),
		('2', '17', 'Do the stuff for chore #17'),
		('2', '20', 'Do the stuff for chore #20'),
		('3', '1', 'Do the stuff for chore #1'),
		('3', '2', 'Do the stuff for chore #2'),
		('3', '6', 'Do the stuff for chore #6'),
		('4', '10', 'Do the stuff for chore #10'),
		('4', '19', 'Do the stuff for chore #19');

--	Additional Dummy Data for Quest Table ------------------
	
UPDATE "quest"
	SET "complete" = true, "score" = '95', "start" = '10:30:12', "finish" = '12:22:01'
	WHERE "id" = '1';
	
UPDATE "quest"
	SET "start" = '10:30:12', "finish" = '12:22:01'
	WHERE "id" = '2';
	
UPDATE "quest"
	SET "start" = '12:12:24'
	WHERE "id" = '3';
	
UPDATE "quest"
	SET "start" = '05:50:00'
	WHERE "id" = '5';
	
UPDATE "quest"
	SET "start" = '07:47:49'
	WHERE "id" = '6';
	
UPDATE "quest"
	SET "start" = '08:55:06', "finish" = '09:27:48'
	WHERE "id" = '7';
	
UPDATE "quest"
	SET "score" = '88', "start" = '03:18:09', "finish" = '06:34:17'
	WHERE "id" = '10';

