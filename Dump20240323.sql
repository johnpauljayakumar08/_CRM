-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: crm
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `crm_activity`
--

DROP TABLE IF EXISTS `crm_activity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crm_activity` (
  `id` int NOT NULL AUTO_INCREMENT,
  `call_recording_type` varchar(255) DEFAULT NULL,
  `note_type` text,
  `employed_id` int DEFAULT NULL,
  `lead_id` varchar(255) DEFAULT NULL,
  `lead_status_id` int DEFAULT NULL,
  `timesnap` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `crm_activity_ibfk1_idx` (`employed_id`),
  KEY `crm_activity_ibfk2_idx` (`lead_id`),
  KEY `crm_statuspkfk_idx` (`lead_status_id`),
  CONSTRAINT `crm_statuspkfk` FOREIGN KEY (`lead_status_id`) REFERENCES `crm_lead_status` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crm_activity`
--

LOCK TABLES `crm_activity` WRITE;
/*!40000 ALTER TABLE `crm_activity` DISABLE KEYS */;
INSERT INTO `crm_activity` VALUES (1,'uploadcall\\file_example_MP3_5MG.mp3','call me at 4:00 pm',898734,'1',3,'2024-03-15 16:01:45'),(2,'uploadcall\\file_example_MP3_5MG.mp3','call me  on monday',898734,'1',3,'2024-03-18 18:29:24'),(3,'uploadcall\\file_example_MP3_5MG.mp3','comformed',898734,'1',7,'2024-03-19 12:07:17'),(4,'uploadcall\\file_example_MP3_5MG.mp3','call me at 5:00pm',898734,'2',3,'2024-03-19 12:10:16'),(5,NULL,NULL,NULL,NULL,NULL,'2024-03-23 13:14:26'),(6,NULL,NULL,NULL,NULL,NULL,'2024-03-23 13:14:55'),(7,NULL,'may be later',898734,'1',3,'2024-03-23 13:27:43'),(8,NULL,'may be later',898734,'1',3,'2024-03-23 13:31:44');
/*!40000 ALTER TABLE `crm_activity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `crm_attribute`
--

DROP TABLE IF EXISTS `crm_attribute`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crm_attribute` (
  `employed_id` int DEFAULT NULL,
  `lead_id` int NOT NULL AUTO_INCREMENT,
  `lead_source_id` int DEFAULT NULL,
  `lead_entry_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `crm_attribut_ibfk1_idx` (`employed_id`),
  KEY `crm_attribut_ibfk1_idx1` (`lead_id`),
  KEY `crm_attribut_ibfk3_idx` (`lead_source_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crm_attribute`
--

LOCK TABLES `crm_attribute` WRITE;
/*!40000 ALTER TABLE `crm_attribute` DISABLE KEYS */;
INSERT INTO `crm_attribute` VALUES (898734,1,NULL,'2024-03-12 13:30:05'),(898734,2,NULL,'2024-03-12 13:30:05'),(898734,3,NULL,'2024-03-12 13:30:05'),(898734,4,NULL,'2024-03-12 13:30:05'),(898734,5,NULL,'2024-03-12 13:30:05'),(898734,6,NULL,'2024-03-12 13:30:05'),(898734,7,NULL,'2024-03-12 13:30:05'),(902918,8,NULL,'2024-03-12 13:30:05'),(902918,9,NULL,'2024-03-12 13:30:05'),(902918,10,NULL,'2024-03-12 13:30:05');
/*!40000 ALTER TABLE `crm_attribute` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `crm_country`
--

DROP TABLE IF EXISTS `crm_country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crm_country` (
  `id` int NOT NULL AUTO_INCREMENT,
  `country` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crm_country`
--

LOCK TABLES `crm_country` WRITE;
/*!40000 ALTER TABLE `crm_country` DISABLE KEYS */;
INSERT INTO `crm_country` VALUES (1,'Saudi Arabia'),(2,'Dubai'),(3,'Sharjah'),(4,'malaysia'),(5,'singapore'),(6,'United Kingdom'),(7,'United States');
/*!40000 ALTER TABLE `crm_country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `crm_lead_source`
--

DROP TABLE IF EXISTS `crm_lead_source`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crm_lead_source` (
  `id` int NOT NULL AUTO_INCREMENT,
  `source` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crm_lead_source`
--

LOCK TABLES `crm_lead_source` WRITE;
/*!40000 ALTER TABLE `crm_lead_source` DISABLE KEYS */;
/*!40000 ALTER TABLE `crm_lead_source` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `crm_lead_status`
--

DROP TABLE IF EXISTS `crm_lead_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crm_lead_status` (
  `id` int NOT NULL AUTO_INCREMENT,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crm_lead_status`
--

LOCK TABLES `crm_lead_status` WRITE;
/*!40000 ALTER TABLE `crm_lead_status` DISABLE KEYS */;
INSERT INTO `crm_lead_status` VALUES (1,'New Lead'),(2,'language barrier'),(3,'May Be Later'),(4,'Direct Demo Fixed'),(5,'Online Demo Fixed'),(6,'Not Intersted'),(7,'positive'),(8,'follow up'),(9,'Not Attending call'),(10,'payment initiated'),(11,'Enrolled'),(12,'Direct Demo completed'),(13,'Online Demo completed');
/*!40000 ALTER TABLE `crm_lead_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `crm_profile`
--

DROP TABLE IF EXISTS `crm_profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crm_profile` (
  `lead_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `phone_number` varchar(15) DEFAULT NULL,
  `alt_phone_number` varchar(15) DEFAULT NULL,
  `email_id` varchar(255) DEFAULT NULL,
  `degree` varchar(255) DEFAULT NULL,
  `year_of_passing` int DEFAULT NULL,
  `percentage` varchar(10) DEFAULT NULL,
  `university` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `experience` int DEFAULT NULL,
  `specialization` varchar(255) DEFAULT NULL,
  `interested_country1_id` int DEFAULT NULL,
  `interested_country2_id` int DEFAULT NULL,
  `interested_country3_id` int DEFAULT NULL,
  `expected_salary` decimal(10,2) DEFAULT NULL,
  `status` int DEFAULT NULL,
  `date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `current_status` int DEFAULT NULL,
  PRIMARY KEY (`lead_id`),
  KEY `interested_country1_id` (`interested_country1_id`),
  KEY `interested_country2_id` (`interested_country2_id`),
  KEY `interested_country3_id` (`interested_country3_id`),
  KEY `crm_profile_ibfk_4_idx` (`current_status`),
  CONSTRAINT `crm_profile_ibfk_1` FOREIGN KEY (`interested_country1_id`) REFERENCES `crm_country` (`id`),
  CONSTRAINT `crm_profile_ibfk_2` FOREIGN KEY (`interested_country2_id`) REFERENCES `crm_country` (`id`),
  CONSTRAINT `crm_profile_ibfk_3` FOREIGN KEY (`interested_country3_id`) REFERENCES `crm_country` (`id`),
  CONSTRAINT `crm_profile_ibfk_4` FOREIGN KEY (`current_status`) REFERENCES `crm_lead_status` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crm_profile`
--

LOCK TABLES `crm_profile` WRITE;
/*!40000 ALTER TABLE `crm_profile` DISABLE KEYS */;
INSERT INTO `crm_profile` VALUES (1,'Gayathri Duraisamy','7904202593',NULL,'gayug4761@gmail.com',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-03-12 13:30:05',3),(2,'Arti Singh','8127066899','849575793','artisingh101297@gmail.com','bsc',2016,'80%','bharathiyar','coimbatore','tamilnadu',3,'ICU',3,2,5,300000.00,NULL,'2024-03-12 13:30:05',3),(3,'Sariha. V','9514547425',NULL,'vsariha3107@gmail.com',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-03-12 13:30:05',NULL),(4,'R.kalaiarasi','8098512374',NULL,'kalai03071999@gmail.com',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-03-12 13:30:05',NULL),(5,'Priyanka Balkrushn Pawar','7057642352',NULL,'priyankabpawar04@gmail.com',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-03-12 13:30:05',NULL),(6,'Marter Gadi','7018480176',NULL,'opencloseupanddown@gmail.com',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-03-12 13:30:05',NULL),(7,'Ajay','8886797749',NULL,'ayagallaajaykumar@gmail.com',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-03-12 13:30:05',NULL),(8,'Manoj L','8073753957',NULL,'manojshettylv98@gmail.com',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-03-12 13:30:05',NULL),(9,'Ramesh S','7639787597',NULL,'ramesh24061999@gmail.com',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-03-12 13:30:05',NULL),(10,'Aishwarya Chaudhary','9284768839',NULL,'aishwaryachaudhary09@gmail.com',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-03-12 13:30:05',NULL);
/*!40000 ALTER TABLE `crm_profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `crm_role`
--

DROP TABLE IF EXISTS `crm_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crm_role` (
  `role_id` int NOT NULL AUTO_INCREMENT,
  `role_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crm_role`
--

LOCK TABLES `crm_role` WRITE;
/*!40000 ALTER TABLE `crm_role` DISABLE KEYS */;
INSERT INTO `crm_role` VALUES (1,'Admin'),(2,'senior manager'),(3,'BDM'),(4,'BDE');
/*!40000 ALTER TABLE `crm_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `crm_user`
--

DROP TABLE IF EXISTS `crm_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crm_user` (
  `user_id` varchar(100) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `employed_id` int DEFAULT NULL,
  `employed_phone_number` varchar(15) DEFAULT NULL,
  `email_id` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `head_name` varchar(255) DEFAULT NULL,
  `role_id` int DEFAULT NULL,
  KEY `role_id` (`role_id`),
  CONSTRAINT `crm_user_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `crm_role` (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crm_user`
--

LOCK TABLES `crm_user` WRITE;
/*!40000 ALTER TABLE `crm_user` DISABLE KEYS */;
INSERT INTO `crm_user` VALUES ('76','krishnapriya',902033,'9500844445','krishnapriya.p@kggeniuslabs.com','kp@123','admin',2),('38','admin',1,'9363466093','nursingjobs@kggeniuslabs.com','admin@123','admin',1),('29','johnpaul',902918,'9994736580','johnpaul.j@kggeniuslabs.com','john@123','krishnapriya',2),('1','ram',898734,'9988003213','ram@kggeniuslabs.com','ram@123','johnpaul',4);
/*!40000 ALTER TABLE `crm_user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-23 15:20:17
