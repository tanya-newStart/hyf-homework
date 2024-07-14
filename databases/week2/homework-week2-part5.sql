CREATE TABLE author (
    author_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (255) NOT NULL
);

CREATE TABLE article (
    article_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL
);

CREATE TABLE article_authors (
    article_id INT,
    author_id INT,
    PRIMARY KEY (article_id,author_id),
    Foreign Key (article_id) REFERENCES article(article_id),
    Foreign Key (author_id) REFERENCES author(author_id)
)

CREATE TABLE tag (
    tag_id INT AUTO_INCREMENT PRIMARY KEY,
    key_word VARCHAR(255) NOT NULL
);

CREATE Table article_tags (
    article_id INT,
    tag_id INT,
    PRIMARY KEY(article_id,tag_id),
    Foreign Key (article_id) REFERENCES article(article_id),
    Foreign Key (tag_id) REFERENCES tag(tag_id)
);