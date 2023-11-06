--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists questions;
SET foreign_key_checks = 1;

SET foreign_key_checks = 0;
DROP TABLE if exists multipleChoiceAnswers;
SET foreign_key_checks = 1;


--
-- Create Tables
--

CREATE TABLE questions(
    question_id INT NOT NULL AUTO_INCREMENT, 
    questions VARCHAR(40) not null, 
    PRIMARY KEY (id)
    );

CREATE TABLE multipleChoiceAnswers(
    multipleChoiceAnswers_id INT NOT NULL AUTO_INCREMENT, 
    questions VARCHAR(40) not null, 
    PRIMARY KEY (id)
    );