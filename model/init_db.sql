--
-- Drop Tables
--

-- SET foreign_key_checks = 0;
-- SET foreign_key_checks = 1;

-- SET foreign_key_checks = 0;
-- SET foreign_key_checks = 1;


--
-- Create Tables
--

DROP TABLE if exists questions;
CREATE TABLE questions(
    question_id INT NOT NULL AUTO_INCREMENT, 
    questions VARCHAR(40) not null, 
    PRIMARY KEY (question_id)
    );

DROP TABLE if exists multipleChoiceAnswers;
CREATE TABLE multipleChoiceAnswers(
    multipleChoiceAnswers_id INT NOT NULL AUTO_INCREMENT, 
    questions VARCHAR(40) not null, 
    PRIMARY KEY (multipleChoiceAnswers_id)
    );