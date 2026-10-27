DROP SCHEMA IF EXISTS db_retrogames;
CREATE SCHEMA db_retrogames;
use db_retrogames;

CREATE TABLE jogos(
    id int not null primary key AUTO_INCREMENT,
    titulo_jogo varchar(100) not null,
    plataforma ENUM('SNES', 'Mega Drive', 'PS1') not null,
    desenvolvedora varchar(100) not null,
    imagem_url varchar(2048) not null,
    preco decimal(10,2) not null,
    data_cadastro DATE not null
);

INSERT INTO jogos (titulo_jogo, plataforma, desenvolvedora, imagem_url, preco, data_cadastro) values
( 'Super Mario World', 'SNES', 'Nintendo', 'https://retrogames-exemplo.com', 149.90, '2026-10-27'),
('Sonic the Hedgehog 2', 'Mega Drive', 'SEGA', 'https://retrogames-exemplo.com', 129.90, '2026-10-27'),   
('Castlevania: Symphony of the Night', 'PS1', 'Konami', 'https://retrogames-exemplo.com', 249.90, '2026-10-27');
