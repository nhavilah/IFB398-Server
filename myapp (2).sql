-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 29, 2021 at 05:37 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `myapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `age_references`
--

CREATE TABLE `age_references` (
  `Country` varchar(144) NOT NULL,
  `UnderForty` int(11) NOT NULL,
  `FortyToFifty` int(11) NOT NULL,
  `FiftyToSixty` int(11) NOT NULL,
  `SixtyToSeventy` int(11) NOT NULL,
  `SeventyToEighty` int(11) NOT NULL,
  `OverEighty` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `age_references`
--

INSERT INTO `age_references` (`Country`, `UnderForty`, `FortyToFifty`, `FiftyToSixty`, `SixtyToSeventy`, `SeventyToEighty`, `OverEighty`) VALUES
('Bali', 20, 20, 20, 10, 10, 10),
('Budapest', 20, 20, 20, 20, 20, 10),
('Chiang Mai', 30, 30, 20, 20, 10, -20),
('Corfu', 20, 20, 30, 20, 30, 20),
('Gozo', 10, 10, 20, 20, 20, 10),
('Killarney', 0, 0, 20, 20, 20, 10),
('Ljubljana', 20, 20, 20, 20, 20, 10),
('Paphos', 10, 10, 10, 10, 10, 0),
('Penang', 20, 20, 20, 0, -10, -20),
('Pune', 20, 10, 0, -10, -20, -30),
('Riga', 20, 10, 20, 20, 20, 10),
('Split', 20, 20, 20, 20, 20, 10),
('Tallinn', 20, 20, 20, 20, 20, 10),
('The Algarve', 10, 10, 30, 30, 30, 20),
('Unawatuna', 20, 10, 0, -10, -20, -30),
('Utrecht', 10, 10, 10, 10, 10, 10),
('Val Paraiso', 10, 10, 10, 0, -10, -20),
('Vancouver', 10, 10, 20, 20, 20, 20);

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

CREATE TABLE `answers` (
  `name` varchar(144) NOT NULL,
  `destination1` varchar(144) NOT NULL,
  `destination2` varchar(144) NOT NULL,
  `destination3` varchar(144) NOT NULL,
  `age` varchar(144) NOT NULL,
  `gender` varchar(144) NOT NULL,
  `relationshipStatus` varchar(144) NOT NULL,
  `costOfLiving` int(11) NOT NULL,
  `healthCareQuality` int(11) NOT NULL,
  `locationProximity` int(11) NOT NULL,
  `lifestyleCulture` int(11) NOT NULL,
  `accessToGoodQuality` int(11) NOT NULL,
  `accessToExPats` int(11) NOT NULL,
  `safety` int(11) NOT NULL,
  `goodTransport` int(11) NOT NULL,
  `accessToBenefits` int(11) NOT NULL,
  `warmerClimate` int(11) NOT NULL,
  `coolerClimate` int(11) NOT NULL,
  `englishSpeaking` int(11) NOT NULL,
  `closeToBeach` int(11) NOT NULL,
  `natureAndTranquility` int(11) NOT NULL,
  `lgbtqFriendly` int(11) NOT NULL,
  `volunteeringOpportunities` int(11) NOT NULL,
  `otherPreferences` varchar(144) NOT NULL,
  `perfectDay` varchar(2000) NOT NULL,
  `lengthAbroad` varchar(144) NOT NULL,
  `livingAbroad` varchar(144) NOT NULL,
  `levelAssistance` varchar(144) NOT NULL,
  `growingPension` int(11) NOT NULL,
  `generateAdditionalIncome` int(11) NOT NULL,
  `receivingSteadyIncome` int(11) NOT NULL,
  `clearingDebt` int(11) NOT NULL,
  `settingUpInsurance` int(11) NOT NULL,
  `postRetirementOptions` int(11) NOT NULL,
  `connectingWithCommunity` int(11) NOT NULL,
  `physicallyActive` int(11) NOT NULL,
  `homeAdaptations` int(11) NOT NULL,
  `otherRetirement` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `answers`
--

INSERT INTO `answers` (`name`, `destination1`, `destination2`, `destination3`, `age`, `gender`, `relationshipStatus`, `costOfLiving`, `healthCareQuality`, `locationProximity`, `lifestyleCulture`, `accessToGoodQuality`, `accessToExPats`, `safety`, `goodTransport`, `accessToBenefits`, `warmerClimate`, `coolerClimate`, `englishSpeaking`, `closeToBeach`, `natureAndTranquility`, `lgbtqFriendly`, `volunteeringOpportunities`, `otherPreferences`, `perfectDay`, `lengthAbroad`, `livingAbroad`, `levelAssistance`, `growingPension`, `generateAdditionalIncome`, `receivingSteadyIncome`, `clearingDebt`, `settingUpInsurance`, `postRetirementOptions`, `connectingWithCommunity`, `physicallyActive`, `homeAdaptations`, `otherRetirement`) VALUES
('rr', 'Vancouver', 'Killarney', 'Utrecht', '50to60', 'other', 'Single', 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', 'v', 'SixMonths', 'SomewhatLikely', 'Fully', 0, 0, 1, 1, 1, 1, 1, 0, 0, 0),
('T ', 'Vancouver', 'Killarney', 'Utrecht', '50to60', 'other', 'Single', 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, '', 'v', 'SixMonths', 'VeryLikely', 'Fully', 0, 0, 0, 0, 1, 1, 1, 1, 1, 0),
('f', 'Vancouver', 'Killarney', 'Utrecht', '40to50', 'male', 'Couple', 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', 'v', 'SixMonths', 'SomewhatLikely', 'Fully', 1, 1, 1, 1, 1, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `gender_references`
--

CREATE TABLE `gender_references` (
  `Country` varchar(144) NOT NULL,
  `Male` int(11) NOT NULL,
  `Female` int(11) NOT NULL,
  `Other` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `gender_references`
--

INSERT INTO `gender_references` (`Country`, `Male`, `Female`, `Other`) VALUES
('Unawatuna', 10, -10, -20),
('Pune', 10, -10, -10),
('Bali', 10, -10, -20),
('Penang', 30, 10, -30),
('Chiang Mai', 30, 20, 10),
('Budapest', 30, 10, -10),
('Val Paraiso', 30, 0, -20),
('Riga', 30, 20, -20),
('Paphos', 30, 10, -10),
('Split', 30, 10, -10),
('Tallinn', 30, 30, -10),
('The Algarve', 30, 10, -10),
('Gozo', 30, 10, 0),
('Ljubljana', 30, 20, 10),
('Corfu', 30, 10, 0),
('Utrecht', 30, 30, 20),
('Killarney', 30, 30, 20),
('Vancouver', 30, 30, 30);

-- --------------------------------------------------------

--
-- Table structure for table `living_abroad_references`
--

CREATE TABLE `living_abroad_references` (
  `Country` varchar(144) NOT NULL,
  `SixMonths` int(11) NOT NULL,
  `TwelveMonths` int(11) NOT NULL,
  `OneToTwoYears` int(11) NOT NULL,
  `ThreePlus` int(11) NOT NULL,
  `SeriesOfStays` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `living_abroad_references`
--

INSERT INTO `living_abroad_references` (`Country`, `SixMonths`, `TwelveMonths`, `OneToTwoYears`, `ThreePlus`, `SeriesOfStays`) VALUES
('Unawatuna', 0, 10, 10, 10, 10),
('Pune', 0, 10, 10, 10, 10),
('Bali', 0, 0, 0, 0, 0),
('Penang', 0, 0, 0, 0, 0),
('Chiang Mai', 0, 0, 0, 0, 0),
('Budapest', 0, 0, 0, 0, 0),
('Val Paraiso', 0, 0, 0, 0, 0),
('Riga', 0, 0, 0, 0, 0),
('Paphos', 0, 0, 0, 0, 0),
('Split', 0, 0, 0, 0, 0),
('Tallinn', 0, 0, 0, 0, 0),
('The Algarve', 0, 0, 0, 0, 0),
('Gozo', 0, 0, 0, 0, 0),
('Ljubljana', 0, 0, 0, 0, 0),
('Corfu', 0, 0, 0, 0, 0),
('Utrecht', 0, 0, 0, 0, 0),
('Killarney', 0, 0, 0, 0, 0),
('Vancouver', 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `location_preferences_references`
--

CREATE TABLE `location_preferences_references` (
  `Country` varchar(144) NOT NULL,
  `CostOfLiving` int(11) NOT NULL,
  `HealthCareQuality` int(11) NOT NULL,
  `LocationProximity` int(11) NOT NULL,
  `Lifestyle` int(11) NOT NULL,
  `AccessToGoodQualityServices` int(11) NOT NULL,
  `AccessToCommunity` int(11) NOT NULL,
  `Safety` int(11) NOT NULL,
  `GoodTransport` int(11) NOT NULL,
  `AccessToBenefits` int(11) NOT NULL,
  `WarmerClimate` int(11) NOT NULL,
  `CoolerClimate` int(11) NOT NULL,
  `EnglishSpeaking` int(11) NOT NULL,
  `CloseToBeach` int(11) NOT NULL,
  `NatureAndTranquility` int(11) NOT NULL,
  `LGBTQ` int(11) NOT NULL,
  `VolunteeringOpportunities` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `location_preferences_references`
--

INSERT INTO `location_preferences_references` (`Country`, `CostOfLiving`, `HealthCareQuality`, `LocationProximity`, `Lifestyle`, `AccessToGoodQualityServices`, `AccessToCommunity`, `Safety`, `GoodTransport`, `AccessToBenefits`, `WarmerClimate`, `CoolerClimate`, `EnglishSpeaking`, `CloseToBeach`, `NatureAndTranquility`, `LGBTQ`, `VolunteeringOpportunities`) VALUES
('Unawatuna', 20, 20, -10, 0, 0, -10, 20, -20, 0, 0, 0, 0, 0, 0, 0, 0),
('Pune', 10, 20, -10, 0, 0, 0, 10, -20, 0, 0, 0, 0, 0, 0, 0, 0),
('Penang', 30, 10, 30, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0),
('Chiang Mai', 30, 10, 30, 10, 10, 10, 20, 10, 0, 0, 0, 0, 0, 0, 0, 0),
('Budapest', 10, 20, -30, 30, 20, 10, 20, 20, 0, 0, 0, 0, 0, 0, 0, 0),
('Val Paraiso', 2, 0, -30, 0, 0, 0, -10, -10, 0, 0, 0, 0, 0, 0, 0, 0),
('Riga', 0, 20, -30, 20, 20, 0, 20, 20, 0, 0, 0, 0, 0, 0, 0, 0),
('Paphos', 0, 20, -30, 10, 10, 10, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0),
('Split', 10, 10, -30, 2, 10, 10, 10, 20, 0, 0, 0, 0, 0, 0, 0, 0),
('Tallinn', 0, 10, -30, 20, 20, 10, 10, 20, 0, 0, 0, 0, 0, 0, 0, 0),
('The Algarve', 20, 20, -30, 10, 20, 20, 10, 20, 0, 0, 0, 0, 0, 0, 0, 0),
('Gozo', 10, 20, -30, 10, 20, 10, 20, 20, 0, 0, 0, 0, 0, 0, 0, 0),
('Ljubljana', 10, 20, -30, 20, 20, 10, 10, 20, 0, 0, 0, 0, 0, 0, 0, 0),
('Corfu', 0, 10, -30, 10, 10, 20, 20, 10, 0, 0, 0, 0, 0, 0, 0, 0),
('Utrecht', -10, 20, -30, 20, 30, 20, 30, 30, 0, 0, 0, 0, 0, 0, 0, 0),
('Killarney', -10, 30, -30, 10, 20, 30, 30, 10, 0, 0, 0, 0, 0, 0, 0, 0),
('Vancouver', -20, 30, -20, 20, 30, 30, 10, 30, 0, 0, 0, 0, 0, 0, 0, 0),
('Bali', 30, 20, 30, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `relationship_status_references`
--

CREATE TABLE `relationship_status_references` (
  `country` varchar(144) NOT NULL,
  `single` int(11) NOT NULL,
  `couple` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `relationship_status_references`
--

INSERT INTO `relationship_status_references` (`country`, `single`, `couple`) VALUES
('', 0, 0),
('', 0, 0),
('', 0, 0),
('', 0, 0),
('', 0, 0),
('', 0, 0),
('', 0, 0),
('', 0, 0),
('', 0, 0),
('', 0, 0),
('', 0, 0),
('', 0, 0),
('', 0, 0),
('', 0, 0),
('', 0, 0),
('', 0, 0),
('', 0, 0),
('', 0, 0),
('Unawatuna', 10, 10),
('Pune', 10, 10),
('Bali', 10, 10),
('Penang', 10, 10),
('Chiang Mai', 10, 10),
('Budapest', 10, 10),
('Val Paraiso', 10, 10),
('Riga', 10, 10),
('Paphos', 10, 10),
('Split', 10, 10),
('Tallinn', 10, 10),
('The Algarve', 10, 10),
('Gozo', 10, 10),
('Ljubljana', 10, 10),
('Corfu', 10, 10),
('Utrecht', 10, 10),
('Killarney', 10, 10),
('Vancouver', 10, 10);

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(240) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `password` varchar(240) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`) VALUES
(0, 'user0', 'password0'),
(1, 'test@test', '$2b$09$b7WtEyGEYnA2.2/k3gwudustrd9Hhdroiv1ttoCkhwFSKpOXIP1FS');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `age_references`
--
ALTER TABLE `age_references`
  ADD UNIQUE KEY `Country` (`Country`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
