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
CREATE TABLE MultipleChoiceAnswers (
    answer_id INT PRIMARY KEY,
    answer_text TEXT,
    is_correct BOOLEAN,
    question_id INT,
    FOREIGN KEY (question_id) REFERENCES Questions(question_id)
);