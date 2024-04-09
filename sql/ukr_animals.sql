-- MySQL dump 10.13  Distrib 8.0.29, for macos12 (x86_64)
--
-- Host: localhost    Database: ukr_animals
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `adopts`
--

DROP TABLE IF EXISTS `adopts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adopts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `adopt_date` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `personId` int DEFAULT NULL,
  `petId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `adopts_petId_personId_unique` (`personId`,`petId`),
  KEY `petId` (`petId`),
  CONSTRAINT `adopts_ibfk_1` FOREIGN KEY (`personId`) REFERENCES `persons` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `adopts_ibfk_2` FOREIGN KEY (`petId`) REFERENCES `pets` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adopts`
--

LOCK TABLES `adopts` WRITE;
/*!40000 ALTER TABLE `adopts` DISABLE KEYS */;
INSERT INTO `adopts` VALUES (5,'\"2023-01-23T20:58:56.305Z\"','2023-01-23 20:58:56','2023-01-23 20:58:56',23,1);
/*!40000 ALTER TABLE `adopts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `donates`
--

DROP TABLE IF EXISTS `donates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `donates` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `last_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `country` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `amount` int NOT NULL,
  `card_number` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `month` int NOT NULL,
  `year` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `donates`
--

LOCK TABLES `donates` WRITE;
/*!40000 ALTER TABLE `donates` DISABLE KEYS */;
INSERT INTO `donates` VALUES (1,'Test','Test','test@test.test','123456789','Austria',10000,'1234567891234',1,2025,'2023-01-24 07:44:20','2023-01-24 07:44:20'),(2,'Lilli','Rust','test@test.com','123456789','Malta',123455,'1234567891234',12,2028,'2023-01-24 07:59:46','2023-01-24 07:59:46');
/*!40000 ALTER TABLE `donates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `outputs`
--

DROP TABLE IF EXISTS `outputs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `outputs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sum` int NOT NULL,
  `target` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `outputs`
--

LOCK TABLES `outputs` WRITE;
/*!40000 ALTER TABLE `outputs` DISABLE KEYS */;
INSERT INTO `outputs` VALUES (1,12058,'Food','2023-01-24 08:26:24','2023-01-24 08:26:24'),(2,6011,'Detergents','2023-01-24 08:26:24','2023-01-24 08:26:24'),(3,12019,'Veterinary Services','2023-01-24 08:26:24','2023-01-24 08:26:24'),(4,22058,'Food','2023-01-24 08:26:24','2023-01-24 08:26:24'),(5,16011,'Food','2023-01-24 08:26:24','2023-01-24 08:26:24'),(6,9019,'Toys','2023-01-24 08:26:24','2023-01-24 08:26:24'),(7,15010,'Premises maintenance','2023-01-24 08:26:24','2023-01-24 08:26:24');
/*!40000 ALTER TABLE `outputs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `persons`
--

DROP TABLE IF EXISTS `persons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `persons` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `last_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `country` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `any_text` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `persons`
--

LOCK TABLES `persons` WRITE;
/*!40000 ALTER TABLE `persons` DISABLE KEYS */;
INSERT INTO `persons` VALUES (23,'Den','Holp','test@test.test','123456789','France','Love dogs!','2023-01-23 20:58:56','2023-01-23 20:58:56');
/*!40000 ALTER TABLE `persons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pets`
--

DROP TABLE IF EXISTS `pets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `available` tinyint(1) NOT NULL,
  `type` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `img` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `pet_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `age` int NOT NULL,
  `sex` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `breed` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `friendliness` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `energy_level` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `size` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `color` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `about` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pets`
--

LOCK TABLES `pets` WRITE;
/*!40000 ALTER TABLE `pets` DISABLE KEYS */;
INSERT INTO `pets` VALUES (1,1,'dog','p21.png,p22.png,p23.png','Ruby',2,'Female','King Charles Spaniel','Yes','High','26-28 inches, 26 pounds','Red/White','<p>Ruby believes she’s a direct descendant of King Charles. She has taken the traditional English Teatime and given it her own unique spin by replacing tea with Puppy-Mojito. This has become her signature drink for afternoon soirees and has clearly made her popular among the other animals in the area, as you can see by Friski’s frequent courting of her. However, Ruby doesn’t give in to Friski’s attempts to woo her as she knows their relationship would never be accepted by the Royal Court. It’s clear that Ruby has a strong sense of loyalty to her royal heritage, and she is determined to uphold its traditions.<br>\n<br>\nRuby was rescued in February as her owners were no longer able to care for her due to their economic situation. She is very well-trained and has a gentle, playful nature. She would be the perfect family pet, especially with small children around.</p>','2023-01-22 22:12:00','2023-01-22 22:12:00'),(2,1,'dog','p31.png,p32.png,p33.png','Jack',4,'Male','Bernese Mountain Dog','Yes','Middle','26-28 inches, 120 pounds','Black/Brown/White','<p> Jack is an ideal companion for walks in the park, spa retreats and barbershops. His knowledge of the meaning of life and food science is unparalleled and his ability to be a better companion is evident. He is a true gentleman and knows how to treat a lady. His presence will bring an air of sophistication to any gathering, and his conversations will be both stimulating and enlightening. Jack\'s scholarly pursuits have made him an invaluable asset to any group or individual looking for a meaningful experience. <br>\n<br>\nJack was rescued in January as his previous owners left Ukraine due to the conflict. He’s very boisterous and playful, and he loves the outdoors. He makes a great family pet but due to his size and boisterousness, we recommend that he only be adopted by families if the children are more than 3 years old.\n</p> ','2023-01-22 22:12:00','2023-01-22 22:12:00'),(3,1,'dog','p41.png,p42.png,p43.png','Porter',5,'Male','West Highland White Terrier','Yes','Middle','15 inches, 12 pounds','White','<p>Porter is an impressive terrier who is dedicated to his work. He spends his days at the accounting office, sniffing numbers and checking for accuracy. His voice is recognizable by canines, just like Morgan Freedman’s voice is to humans. Porter is a busy worker, but he still finds time to enjoy the finer things in life. He loves going for walks in the park and visiting the groomer every once in a while, to look sharp. Porter is a true gentleman and an admirable companion who balances hard work and leisurely activities with ease. <br>\n<br>\nPorter was rescued in November. He’s a warm and friendly dog and tends to cuddle up to anyone. He’s very mild-tempered but can sometimes bark when he gets excited. He’s trained and well-behaved, especially on walks and in public. Porter is a great companion and would make a great pet for any family and particularly for the elderly.</p> ','2023-01-22 22:12:00','2023-01-22 22:12:00'),(4,1,'dog','p11.png,p12.png,p13.png','Terry',3,' Gender Neutral','West Highland White Terrier','No','High','10 inches, 6 pounds','Brown','<p> Terry is an incredible individual with a unique set of interests and hobbies. He is a proud member of the LGBTQ community and has an obsession with bubbles. Terry loves bubble baths and enjoys spending time on someone\'s lap when they are not out exploring the world. Walks in the park, retreats, and dining out would be great activities to enjoy with Terry. <br>\n<br>\nTerry was rescued in December. He was found wandering the streets and we don’t know who his previous owners were or what happened to them or him. He doesn’t appear to be traumatized and apart from his lively personality, he is a very well-mannered dog. Due to his small size, he would make the perfect pet for anyone living in a small home. </p>','2023-01-22 22:12:00','2023-01-22 22:12:00'),(6,1,'cat','p61.png,p62.png,p63.png','Max',7,'Male','Bengal','Yes','Low','16 inches, 14 pounds','Brown','<p> Max is a great example of someone who values comfort and relaxation. He loves to lounge on smooth surfaces and take naps, which is a great way to unwind and destress. His love for plush pillows and fuzzy rugs tells of his appreciation for comfort, while his occasional yoga practice shows that he also values health and fitness. <br>\n<br>\nMax was rescued in February as his owners were planning to leave Ukraine and not return. His an unusually friendly cat. He rubs up against anyone and purrs at the slightest pampering he receives. Due to his impressive and unusual coat, most people are drawn to him, so he receives lots of attention and he laps it all up. He would make the perfect pet for any home. He’s two years old and he gets on with other pets, even dogs, (except when they bark at him!).</p>','2023-01-23 15:29:05','2023-01-23 15:29:05'),(7,1,'dog','p71.png,p72.png,p73.png','Luna',5,'Female','Poodle','No','High','16 inches, 14 pounds','Brown','<p>Luna is the perfect companion. She loves to run and play in the park, which will provide you with a much-needed break from your scholarly pursuits or work. Her genuine smile and true happiness will make you feel loved and special, providing you with the emotional support you need. Luna\'s high energy will also help keep you active, ensuring that you stay fit and healthy. With Luna by your side, you will be able to enjoy life to its fullest. <br>\n<br>\nLuna was rescued in January. She was brought to us by a couple who found her wandering the streets. There have been no signs of mistreatment or abuse and her mild and friendly manner is a testament to that. <br>\n<br>\nWe estimate her age to be around 5 years. She would be the perfect companion to any owner, with or without kids. She’s loyal, playful and energetic, but she also likes to cuddle up to anyone at the end of a busy day.</p>','2023-01-23 15:29:05','2023-01-23 15:29:05'),(8,1,'dog','p81.png,p82.png,p83.png','Mila',6,'Female','Labrador','Yes','Medium','24 inches, 80 pounds','White','<p> Mila is the perfect companion for any child or adult. Her traditional loving Labrador personality makes her a joy to be around. She loves costume parties, long walks on the beach, swimming in the ocean, and playing catch. Mila loves children and will be a true companion to any child. She is a social butterfly and makes friends on the fly. With Mila by your side, you\'ll never feel alone and you\'ll always have someone to share your adventures with. Whether it\'s a day at the beach, a costume party or just playing catch in the backyard, Mila will be there with you every step of the way. <br>\n<br>\nMila is 3 years old. Her elderly owner could no longer care for her due to the circumstances of the war. She has been treated very well and had a good life. There are no signs of trauma or bad behavior caused by mistreatment.</p>','2023-01-23 15:29:05','2023-01-23 15:29:05'),(9,1,'cat','p91.png,p92.png,p93.png','Eula',4,'Female','Ginger Scottish','No','Low','12 inches, 15 pounds','Red','<p> Eula would be a perfect fit for a home with a big backyard. With plenty of space to explore and investigate, Eula would be able to satisfy her curiosity and love of freedom. She could spend her days chasing mice, listening to birds, and playing in the grass. Homeowners should be prepared to trust Eula and let her explore the world in her own way. With patience and understanding, she will always come back home safely. <br>\n<br>\nEula is 6 months old. Her coat has an unusual color and markings for a domestic cat. Although she has an independent spirit she seems to be well cared for and adjusts easily to her environment. She can also be playful and affectionate but space to explore seems to be her main concern. She would make a great pet for any family and is very easy to care for.</p>','2023-01-23 15:29:05','2023-01-23 15:29:05');
/*!40000 ALTER TABLE `pets` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-14 15:00:16
