
-- Create Tables
--

SET foreign_key_checks = 0; 

DROP TABLE if exists questions;
CREATE TABLE questions (
    question_id INT NOT NULL AUTO_INCREMENT, 
    questions VARCHAR(40) not null, 
    PRIMARY KEY (question_id)
    );

DROP TABLE if exists multipleChoiceAnswers;
CREATE TABLE multipleChoiceAnswers (
    answer_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    answer_text TEXT NOT NULL,
    is_correct BOOLEAN,
    question_id INT,
    FOREIGN KEY (question_id) REFERENCES questions(question_id)
);

DROP TABLE if exists description;


-- don't need table, can code in frontend as one piece of data
CREATE TABLE description ( 
    description_id INT PRIMARY KEY,
    description_title VARCHAR(255),
    description_body TEXT,
    image_url VARCHAR(255) 
);


INSERT INTO questions (questions) VALUES 
("Η Μαρία (πίνω) καφέ."), 
("Εμείς (αγοράζω) φρούτα στη λαϊκή."),
("Εσύ (παίζω) πιάνο."), 
("Ο Νίκος και η Ελένη (δουλεύω) κάθε μέρα."), 
("Ο Χανς δεν (καταλαβαίνω) ελληνικά."), 
("Η Σοφία (μαθαίνω) ελληνικά."),
("Τα παιδιά (βλέπω) τηλεόραση."),
("Ο παππούς (διαβάζω) εφημερίδα."),
("Εμείς (αγαπώ) την Ελλάδα."),
("Εσείς (πηγαίνω) στο θέατρο συχνά;");


INSERT INTO multipleChoiceAnswers (answer_text, is_correct, question_id) VALUES  
("πίνουμε", FALSE, 1),
("πίνει", TRUE, 1),
("πίνω", FALSE, 1),
("αγοράζω", FALSE, 2),
("αγοράζει", FALSE, 2),
("αγοράζουμε", TRUE, 2),
("παίζεις", TRUE, 3),
("παίζει", FALSE, 3),
("παίζετε", FALSE, 3),
("δουλεύει", FALSE, 4),
("δουλεύεις", FALSE, 4),
("δουλεύουν", TRUE, 4),
("καταλαβαίνω", FALSE, 5),
("καταλαβαίνει", TRUE, 5),
("καταλάβετε", FALSE, 5),
("μαθαίνουν", FALSE, 6),
("μαθαίνω", FALSE, 6),
("μαθαίνει", TRUE, 6),
("βλέπουν", TRUE, 7),
("βλέπουμε", FALSE, 7),
("βλέπετε", FALSE, 7),
("διαβάζει", TRUE, 8),
("διαβάζεις", FALSE, 8),
("διαβάζουν", FALSE, 8),
("αγαπώ", TRUE, 9),
("αγαπάμε", TRUE, 9),
("αγαπάτε", FALSE, 9),
("πηγαίνουμε", FALSE, 10),
("πηγαίνεις", FALSE, 10),
("πηγαίνετε", TRUE, 10);



-- Πίνουμε, πίνει*, πίνω
-- Αγοράζω, αγοράζει, αγοράζουμε*
-- Παίζεις*, παίζει, παίζετε
-- Δουλεύει, δουλεύεις, δουλεύουν*
-- Καταλαβαίνω, καταλαβαίνει*, καταλάβετε 
-- Μαθαίνουν, μαθαίνω, μαθαίνει*
-- Βλέπουν*, βλέπουμε, βλέπετε
-- Διαβάζει*, διαβάζεις, διαβάζουν
-- Αγαπώ, αγαπάμε*, αγαπάτε (λολ)
-- Πηγαίνουμε, πηγαίνεις, πηγαίνετε*

SET foreign_key_checks = 1;