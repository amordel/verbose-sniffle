CREATE TABLE IF NOT EXISTS `DeckCard` (
    `deck` INT(11) NOT NULL,
    `cardName` VARCHAR(255) NOT NULL,
PRIMARY KEY(`deck`, `cardName`));
