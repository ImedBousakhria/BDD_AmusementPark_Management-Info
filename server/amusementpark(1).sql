-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Sam 27 Janvier 2024 à 02:46
-- Version du serveur :  5.6.17
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `amusementpark`
--

-- --------------------------------------------------------

-- Structure de la table `amusementpark`
CREATE TABLE IF NOT EXISTS `amusementpark` (
`id_amusementpark` int(11) NOT NULL AUTO_INCREMENT,
`open_time` DATETIME NOT NULL,
`close_time` DATETIME NOT NULL,
`park_address` varchar(255) NOT NULL, -- Changer le type de données
PRIMARY KEY (`id_amusementpark`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;



-- Structure de la table `admin`
CREATE TABLE IF NOT EXISTS `admin` (
`first_name` varchar(100) NOT NULL,
`last_name` varchar(100) NOT NULL,
`id_admin` int(11) NOT NULL AUTO_INCREMENT,
`email` varchar(100) NOT NULL, -- Changer le type de données
PRIMARY KEY (`id_admin`),
UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;




-- Structure de la table `feedback`
CREATE TABLE IF NOT EXISTS `feedback` (
`id_feedback` int(11) NOT NULL AUTO_INCREMENT,
`id_game` int(11) NOT NULL,
`feedback` text NOT NULL,
`rating` int(11) NOT NULL,
`id_user` int(11) NOT NULL,
PRIMARY KEY (`id_feedback`),
CONSTRAINT `fk_feedback_game` FOREIGN KEY (`id_game`) REFERENCES `game` (`id_game`),
CONSTRAINT `fk_feedback_user` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;




-- Structure de la table `game`
CREATE TABLE IF NOT EXISTS `game` (
`id_game` int(11) NOT NULL AUTO_INCREMENT,
`description` text NOT NULL, -- Correction du nom de colonne
`name` varchar(100) NOT NULL,
`picture_game` binary(255) NOT NULL,
PRIMARY KEY (`id_game`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;




-- Structure de la table `schedule`
CREATE TABLE IF NOT EXISTS `schedule` (
`id_schedule` int(11) NOT NULL AUTO_INCREMENT,
`id_team` int(11), -- Ajout de la colonne manquante
PRIMARY KEY (`id_schedule`),
CONSTRAINT `fk_schedule_team` FOREIGN KEY (`id_team`) REFERENCES `team` (`id_team`),
CONSTRAINT `fk_schedule_zone` FOREIGN KEY (`id_zone`) REFERENCES `zone` (`id_zone`)




) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;
-- Structure de la table `staff`
CREATE TABLE IF NOT EXISTS `staff` (
`first_name` varchar(100) NOT NULL, -- Changer le type de données
`last_name` varchar(100) NOT NULL, -- Changer le type de données
`id_staff` int(11) NOT NULL AUTO_INCREMENT,
`job_title` varchar(255) NOT NULL, -- Changer le type de données
`phone_number` INT(10) NOT NULL, -- Changer le type de données
PRIMARY KEY (`id_staff`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;



-- Structure de la table `stand`
CREATE TABLE IF NOT EXISTS `stand` (
`id_stand` int(11) NOT NULL AUTO_INCREMENT,
`stand_name` varchar(255) NOT NULL, -- Changer le type de données
`stand_type` varchar(255) NOT NULL, -- Changer le type de données
PRIMARY KEY (`id_stand`),
CONSTRAINT `fk_stand_zone` FOREIGN KEY (`stand_zone`) REFERENCES `zone` (`id_zone`) 
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;




-- Structure de la table `task`
CREATE TABLE IF NOT EXISTS `task` (
`id_task` int(11) NOT NULL AUTO_INCREMENT,
`description` text NOT NULL,
`ending_time` datetime NOT NULL,
`starting_time` datetime NOT NULL,
PRIMARY KEY (`id_task`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;




-- Structure de la table `team`
CREATE TABLE IF NOT EXISTS `team` (
`id_team` int(11) NOT NULL AUTO_INCREMENT,
PRIMARY KEY (`id_team`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;



-- Structure de la table `user`
CREATE TABLE IF NOT EXISTS `user` (
`id_user` int(11) NOT NULL AUTO_INCREMENT,
`email` varchar(100) NOT NULL,
`first_name` varchar(100) NOT NULL,
`last_name` varchar(100) NOT NULL,
`phone_number` INT(10) NOT NULL, 
PRIMARY KEY (`id_user`),
UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;



-- Structure de la table `zone`
CREATE TABLE IF NOT EXISTS `zone` (
`id_zone` int(11) NOT NULL AUTO_INCREMENT,
`zone_name` varchar(100) NOT NULL,
`zone_number` int(11) NOT NULL,
`id_team` int(11), 
PRIMARY KEY (`id_zone`),
CONSTRAINT `fk_zone_team` FOREIGN KEY (`id_team`) REFERENCES `team` (`id_team`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1; 

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
