-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 14, 2020 at 07:34 PM
-- Server version: 8.0.21
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `checkhms`
--

-- --------------------------------------------------------

--
-- Table structure for table `component_tb`
--

DROP TABLE IF EXISTS `component_tb`;
CREATE TABLE IF NOT EXISTS `component_tb` (
  `id` int NOT NULL AUTO_INCREMENT,
  `module_id` int NOT NULL DEFAULT '0',
  `component_name` varchar(200) DEFAULT NULL,
  `main_name` varchar(200) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `link` varchar(200) DEFAULT NULL,
  `link_type` varchar(200) DEFAULT NULL,
  `icon_name` varchar(200) DEFAULT NULL,
  `link_color` varchar(200) DEFAULT NULL,
  `status` varchar(200) NOT NULL DEFAULT 'active',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `component_tb`
--

INSERT INTO `component_tb` (`id`, `module_id`, `component_name`, `main_name`, `description`, `link`, `link_type`, `icon_name`, `link_color`, `status`, `created_at`, `updated_at`) VALUES
(1, 4, 'All Items', 'main', 'all items module', 'items', NULL, NULL, NULL, 'active', '2020-06-10 16:48:44', '2020-06-10 16:48:44'),
(3, 4, 'Type', 'null', 'setting item types', 'item_type', NULL, NULL, NULL, 'active', '2020-06-10 16:48:44', '2020-06-10 16:48:44'),
(4, 4, 'Brand', 'null', 'name of manufacturer of drugs', 'manufacturer', NULL, NULL, NULL, 'active', '2020-06-10 16:48:44', '2020-06-10 16:48:44'),
(5, 4, 'Shelf', 'null', 'self setting', 'shelves', NULL, NULL, NULL, 'active', '2020-06-10 16:48:44', '2020-06-10 16:48:44'),
(6, 5, 'Patient ', NULL, NULL, 'patient', 'menu', NULL, NULL, 'active', '2020-06-24 23:59:49', '2020-06-24 23:59:49'),
(7, 5, 'add patient ', NULL, NULL, 'add_patient', 'menu', NULL, NULL, 'active', '2020-06-24 23:59:49', '2020-06-24 23:59:49'),
(8, 5, 'Patient Category', NULL, NULL, 'patient_category', 'Menu', NULL, NULL, 'active', '2020-06-25 00:03:02', '2020-06-25 00:03:02'),
(9, 5, 'Scheme HMO', NULL, NULL, 'scheme_hmo', 'Menu', NULL, NULL, 'active', '2020-06-25 00:03:02', '2020-06-25 00:03:02'),
(10, 5, 'Insurance ', NULL, NULL, 'insurance', 'Menu', NULL, NULL, 'active', '2020-06-25 00:05:30', '2020-06-25 00:05:30'),
(11, 7, 'History', NULL, NULL, 'history', 'menu', NULL, NULL, 'active', '2020-06-25 00:05:30', '2020-06-25 00:05:30'),
(12, 7, 'Report', NULL, NULL, 'report', 'menu', NULL, NULL, 'active', '2020-06-25 00:06:11', '2020-06-25 00:06:11'),
(13, 2, 'Ward Type', 'Ward Type', NULL, 'ward-type', 'menu', NULL, NULL, 'active', '2020-06-25 00:06:11', '2020-06-25 00:06:11'),
(14, 2, 'Ward', 'Ward', NULL, 'ward', 'menu', NULL, NULL, 'active', '2020-06-25 00:06:11', '2020-06-25 00:06:11'),
(15, 4, 'Category', 'category', 'setting item category', 'item_category', NULL, NULL, NULL, 'active', '2020-06-10 16:48:44', '2020-06-10 16:48:44'),
(16, 4, 'Unit', 'Unit', 'name of manufacturer of drugs', 'unit', NULL, NULL, NULL, 'active', '2020-06-10 16:48:44', '2020-06-10 16:48:44'),
(17, 6, 'Revenue report ', 'Report', 'Revenue Report', 'Rev-report', 'menu', NULL, NULL, 'active', '2020-06-25 00:06:11', '2020-06-25 00:06:11');

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

DROP TABLE IF EXISTS `departments`;
CREATE TABLE IF NOT EXISTS `departments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `module_id` int DEFAULT NULL,
  `image` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'hosp.jpg',
  `status` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'create',
  `created_by` int DEFAULT NULL,
  `updated_by` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`id`, `name`, `description`, `module_id`, `image`, `status`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 'Pharmacy', 'Pharmacy Module', 4, 'pharm.jpg', 'default', NULL, NULL, '2019-11-05 23:00:00', '2019-11-05 23:00:00'),
(2, 'Clinic', 'Doctor Module', 2, 'doc.jpg', 'default', NULL, NULL, '2019-11-05 23:00:00', '2019-11-05 23:00:00'),
(10, 'Admin', 'Administration', 1, 'admin.jpg', 'default', NULL, NULL, '2019-11-10 20:27:46', '2019-11-10 20:27:46'),
(11, 'Revenue', 'Revenue Module', 6, 'cash.jpg', 'default', NULL, NULL, '2019-11-10 20:28:22', '2019-11-10 20:28:22'),
(12, 'Radiology', 'Radiology Module', 3, 'hosp.jpg', 'default', NULL, NULL, '2020-01-30 18:21:50', '2020-01-30 18:21:50'),
(15, 'Laboratory', 'Lab Module', 3, 'hosp.jpg', 'default', NULL, NULL, '2020-03-19 05:57:46', '2020-03-19 05:57:46'),
(16, 'Records', 'Hospital Records', 5, 'hosp.jpg', 'default', NULL, NULL, '2020-03-19 05:57:46', '2020-03-19 05:57:46'),
(17, 'Theater ', 'Theater Module', 2, 'hosp.jpg', 'default', NULL, NULL, '2020-03-19 05:57:46', '2020-03-19 05:57:46'),
(18, 'Nurse', 'Nurse Module', 2, 'hosp.jpg', 'default', NULL, NULL, '2020-03-19 05:57:46', '2020-03-19 05:57:46'),
(19, 'Ward', 'Ward Module', 2, 'hosp.jpg', 'default', NULL, NULL, '2020-03-19 05:57:46', '2020-03-19 05:57:46'),
(20, 'Patient', 'Patient Module', NULL, 'hosp.jpg', 'default', NULL, NULL, '2020-03-19 05:57:46', '2020-03-19 05:57:46'),
(22, 'Eye Clinic Store 1', 'Eye Clinic (Dispensing Section)', 4, 'hosp.jpg', 'create', NULL, NULL, '2020-08-26 01:29:11', '2020-08-26 01:29:11'),
(23, 'Lab Store', 'Laboratory Store', 4, 'hosp.jpg', 'create', NULL, NULL, '2020-08-26 09:37:30', '2020-08-26 09:37:30');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `uuid` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `general_settings`
--

DROP TABLE IF EXISTS `general_settings`;
CREATE TABLE IF NOT EXISTS `general_settings` (
  `id` int UNSIGNED NOT NULL,
  `company_name` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `short_name` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `logo` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `icon` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact_number` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `web_url` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `app_url` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `for_email` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `module` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `license_key` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `owner_name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `owner_mobile` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `state` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone2` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `time_zone` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date_formate` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `language` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `currency` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `currency_symbol` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `invoice_prefix` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `expiring_date` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `app` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `create_date` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `create_time` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_by` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `delete_by` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `delete_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `general_settings_contact_number_unique` (`contact_number`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `general_settings`
--

INSERT INTO `general_settings` (`id`, `company_name`, `short_name`, `address`, `logo`, `icon`, `contact_number`, `email`, `web_url`, `app_url`, `for_email`, `module`, `status`, `license_key`, `owner_name`, `owner_mobile`, `country`, `state`, `city`, `phone2`, `time_zone`, `date_formate`, `language`, `currency`, `currency_symbol`, `invoice_prefix`, `expiring_date`, `app`, `create_date`, `create_time`, `created_at`, `updated_at`, `updated_by`, `delete_by`, `delete_at`) VALUES
(1, 'BUTH HMS', 'BUTHs', 'Check Address', 'logo.png', '1605185094.png', NULL, 'check@jtcheck.com', 'jtcheck.com', 'http://localhost:8000', 'hms.jtcheck.com', 'registration', 'activated', 'qwert123yuij3kds6', 'Island, lagos Nigeria', NULL, 'Nigeria', 'Alabama', 'Ogbomoso', '060060060', 'Lagos (GMT+1', 'd.m.Y', 'English', 'NGN', 'N', 'Cash Before market', NULL, 'Check', 'Oct 26, 2020', '08:20:00 PM', '2020-01-26 23:00:00', 'Nov 13, 2020', '6', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permission_tb`
--

DROP TABLE IF EXISTS `permission_tb`;
CREATE TABLE IF NOT EXISTS `permission_tb` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `position_id` int DEFAULT NULL,
  `component_id` int DEFAULT NULL,
  `read_status` varchar(200) DEFAULT 'unread',
  `write_status` varchar(200) DEFAULT 'unwrite',
  `created_by` int DEFAULT NULL,
  `updated_by` int DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `permission_tb`
--

INSERT INTO `permission_tb` (`id`, `user_id`, `position_id`, `component_id`, `read_status`, `write_status`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 1032, NULL, 1, 'read', 'write', 6, 6, '2020-06-11 12:23:00', '2020-06-11 12:23:00'),
(2, 1032, NULL, 2, 'read', NULL, 6, 6, '2020-06-11 12:23:00', '2020-06-11 12:23:00'),
(3, 1044, NULL, 13, NULL, 'write', 6, 6, '2020-08-08 11:01:08', '2020-08-08 11:01:08'),
(4, 1045, NULL, 13, NULL, 'write', 6, 6, '2020-08-09 09:47:03', '2020-08-09 09:47:03'),
(5, 3, NULL, 1, 'read', 'write', 6, 6, '2020-08-09 13:38:36', '2020-08-09 13:38:36'),
(6, 3, NULL, 2, 'read', 'write', 6, 6, '2020-08-09 13:38:36', '2020-08-09 13:38:36'),
(7, 1048, NULL, 2, 'read', NULL, 6, 6, '2020-08-19 16:04:29', '2020-08-19 16:04:29'),
(8, 1048, NULL, 1, NULL, 'write', 6, 6, '2020-08-19 16:04:29', '2020-08-19 16:04:29'),
(9, 3, NULL, 3, 'read', 'write', 6, 6, '2020-09-01 08:45:10', '2020-09-01 08:45:10'),
(10, 3, NULL, 4, 'read', 'write', 6, 6, '2020-09-01 08:45:10', '2020-09-01 08:45:10'),
(11, 3, NULL, 5, 'read', 'write', 6, 6, '2020-09-01 08:45:10', '2020-09-01 08:45:10'),
(12, 3, NULL, 15, 'read', 'write', 6, 6, '2020-09-01 08:45:10', '2020-09-01 08:45:10'),
(13, 3, NULL, 16, 'read', 'write', 6, 6, '2020-09-01 08:54:08', '2020-09-01 08:54:08'),
(14, 1053, NULL, 1, 'read', 'write', 6, 6, '2020-06-11 12:23:00', '2020-06-11 12:23:00'),
(15, 6, NULL, 1, 'read', 'write', 6, 6, '2020-06-11 12:23:00', '2020-06-11 12:23:00'),
(16, 1012, NULL, 17, 'read', 'write', 6, 6, '2020-06-11 12:23:00', '2020-06-11 12:23:00');

-- --------------------------------------------------------

--
-- Table structure for table `positions`
--

DROP TABLE IF EXISTS `positions`;
CREATE TABLE IF NOT EXISTS `positions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `position_name` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dept_id` int DEFAULT NULL,
  `description` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'active',
  `created_by` int DEFAULT NULL,
  `updated_by` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `positions`
--

INSERT INTO `positions` (`id`, `position_name`, `dept_id`, `description`, `image`, `status`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 'Pharmacist', 1, 'Pharmacist of the organisation', 'pharm.jpg', NULL, NULL, NULL, '2019-11-06 14:16:00', '2019-11-06 14:16:00'),
(2, 'Cashier', 11, 'Cashier of the organisation', 'cash.jpg', NULL, NULL, NULL, '2019-11-06 14:18:00', '2019-11-06 14:18:00'),
(3, 'Doctor', 2, 'Doctors/Physicians of the organisation', 'doc.jpg', 'Active', NULL, NULL, '2019-11-06 14:22:00', '2019-11-06 14:22:00'),
(4, 'Administrator', 10, 'Administrator of the organisation', 'admin.jpg', 'Active', NULL, NULL, '2019-11-06 14:23:00', '2019-11-06 14:23:00'),
(5, 'Patient', NULL, 'Patient of the organisation', 'patient.jpg', 'Active', NULL, NULL, '2019-11-06 14:24:00', '2019-11-06 14:24:00'),
(6, 'Records', 16, 'Hospital Records', 'patient.jpg', 'Active', NULL, NULL, '2019-11-06 14:24:00', '2019-11-06 14:24:00'),
(7, 'Lab Scientist', 15, 'Lab Scientist', 'patient.jpg', 'Active', NULL, NULL, '2019-11-06 14:24:00', '2019-11-06 14:24:00'),
(8, 'Radiologist', 12, 'Radiologist', 'patient.jpg', 'Active', NULL, NULL, '2019-11-06 14:24:00', '2019-11-06 14:24:00'),
(9, 'Nurse', 2, 'Nurse', 'patient.jpg', NULL, NULL, NULL, '2019-11-06 14:24:00', '2019-11-06 14:24:00');

-- --------------------------------------------------------

--
-- Table structure for table `possition_module`
--

DROP TABLE IF EXISTS `possition_module`;
CREATE TABLE IF NOT EXISTS `possition_module` (
  `id` int NOT NULL AUTO_INCREMENT,
  `position_id` int DEFAULT NULL,
  `component_id` int DEFAULT NULL,
  `status` varchar(200) DEFAULT 'permite',
  `created_by` int DEFAULT NULL,
  `updated_by` int DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `possition_module`
--

INSERT INTO `possition_module` (`id`, `position_id`, `component_id`, `status`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 1, 2, 'permite', 6, 6, '2020-06-10 21:06:52', '2020-06-10 21:06:52'),
(2, 1, 1, 'permite', 6, 6, '2020-06-10 21:06:52', '2020-06-10 21:06:52'),
(3, 16, 1, 'unpermite', 6, 6, '2020-06-16 12:44:49', '2020-06-16 12:44:49'),
(4, 16, 2, 'unpermite', 6, 6, '2020-06-16 12:44:49', '2020-06-16 12:44:49'),
(5, 9, 13, 'unpermite', 6, 6, '2020-08-04 21:52:19', '2020-08-04 21:52:19'),
(6, 1, 3, 'permite', 6, 6, '2020-09-01 08:10:22', '2020-09-01 08:10:22'),
(7, 1, 4, 'permite', 6, 6, '2020-09-01 08:10:24', '2020-09-01 08:10:24'),
(8, 1, 5, 'permite', 6, 6, '2020-09-01 08:10:28', '2020-09-01 08:10:28'),
(9, 1, 15, 'permite', 6, 6, '2020-09-01 08:17:42', '2020-09-01 08:17:42'),
(10, 1, 16, 'permite', 6, 6, '2020-09-01 08:53:37', '2020-09-01 08:53:37'),
(11, 4, 1, 'permite', 6, 6, '2020-06-10 21:06:52', '2020-06-10 21:06:52'),
(12, 2, 17, 'permite', 6, 6, '2020-10-12 13:26:09', '2020-10-12 13:26:09');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int UNSIGNED NOT NULL,
  `name` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `slug`, `description`, `status`, `created_at`, `updated_at`) VALUES
(1001, 'Super Admin', 'super', 'The Super Admin of this platform', 'active', '2020-01-09 23:00:00', '2020-01-10 00:00:00'),
(1002, 'System Admin', 'system', 'This system_admin in this platform', 'active', '2020-01-09 23:00:00', '2020-01-09 23:00:00'),
(3003, 'Department Admin', 'global', 'The head of each departments in this platform', 'active', '2020-01-09 23:00:00', '2020-01-09 23:00:00'),
(4004, 'Staff', 'stall', 'This staffs in this platform', 'active', '2020-01-09 23:00:00', '2020-01-09 23:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `firstname` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `d_o_b` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `mobile_number` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `state` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lga` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hospital_id_num` int DEFAULT NULL,
  `password` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_number` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'male.png',
  `facebook_handle` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `twitter_handle` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `instagram_handle` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `degree` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `about` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `status` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'reg',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `dept_id` int DEFAULT NULL,
  `position_id` int DEFAULT NULL,
  `permission` json DEFAULT NULL,
  `branch_id` int NOT NULL DEFAULT '0',
  `role_id` int DEFAULT NULL,
  `license` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rank_id` int DEFAULT NULL,
  `team_id` int DEFAULT NULL,
  `center_id` int DEFAULT NULL,
  `online_status` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'offline',
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  UNIQUE KEY `users_mobile_number_unique` (`mobile_number`),
  KEY `users_dept_id_index` (`dept_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1055 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `gender`, `d_o_b`, `email`, `email_verified_at`, `mobile_number`, `address`, `city`, `state`, `lga`, `country`, `hospital_id_num`, `password`, `remember_token`, `id_number`, `image`, `facebook_handle`, `twitter_handle`, `instagram_handle`, `degree`, `about`, `status`, `created_at`, `updated_at`, `dept_id`, `position_id`, `permission`, `branch_id`, `role_id`, `license`, `rank_id`, `team_id`, `center_id`, `online_status`) VALUES
(3, 'Ayo', 'Lala', 'male', NULL, 'pharm1@gmail.com', NULL, '764196171', NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$PSahJY2NJR3nNpL5pqmnBOEWhG937EovBlegWGJZeLni5w.GvqEKS', NULL, 'ywy77', '1580402869.jpeg', NULL, NULL, NULL, NULL, NULL, 'approved', '2019-11-06 23:38:56', '2020-09-01 08:54:08', 1, 1, '[\"restore/user\", \"delete/user\", \"update\"]', 1, 3003, NULL, 0, 1, NULL, 'offline'),
(6, 'admin', 'admin', 'male', NULL, 'admin@gmail.com', NULL, '0807796884747', NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$PSahJY2NJR3nNpL5pqmnBOEWhG937EovBlegWGJZeLni5w.GvqEKS', NULL, 'yey333', '1580638681.jpeg', NULL, NULL, NULL, NULL, NULL, 'approved', '2019-11-10 20:34:46', '2020-02-02 10:18:01', 10, 4, '[{\"id\": \"4\", \"name\": \"Create user\", \"slug\": \"sac\", \"route\": \"restore/user\", \"created_at\": \"2018-01-18 10:53:10.930\", \"deleted_at\": null, \"updated_at\": null}, {\"id\": \"7\", \"name\": \"Delete User\", \"slug\": \"sac\", \"route\": \"delete/user\", \"created_at\": \"2018-01-18 10:53:10.930\", \"deleted_at\": null, \"updated_at\": null}]', 1, 1001, NULL, 0, 1, NULL, 'online'),
(1002, 'Abeeb', 'Ishola', 'male', NULL, 'doctor@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$PSahJY2NJR3nNpL5pqmnBOEWhG937EovBlegWGJZeLni5w.GvqEKS', NULL, 'BU1234', 'male.png', NULL, NULL, NULL, NULL, NULL, 'approved', '2020-03-19 05:53:47', '2020-03-19 05:53:47', 2, 3, NULL, 0, 3003, NULL, 0, 1, NULL, 'offline'),
(1003, 'Oladunjoye', 'Ola', 'male', NULL, 'ola@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$PSahJY2NJR3nNpL5pqmnBOEWhG937EovBlegWGJZeLni5w.GvqEKS', NULL, '06060', 'male.png', NULL, NULL, NULL, NULL, NULL, 'approved', '2020-04-02 23:16:57', '2020-04-14 10:03:04', 16, 6, NULL, 22, 3003, NULL, 0, 2, NULL, 'offline'),
(1005, 'Olawale', 'Jonson', 'male', NULL, 'olawale@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$PSahJY2NJR3nNpL5pqmnBOEWhG937EovBlegWGJZeLni5w.GvqEKS', NULL, '1234', 'male.png', NULL, NULL, NULL, NULL, NULL, 'approved', '2020-04-05 02:23:12', '2020-04-05 02:23:12', 16, NULL, NULL, 0, 3003, NULL, 0, 1, NULL, 'offline'),
(1006, 'Olamide', 'Ife', 'female', NULL, 'olamide@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$PSahJY2NJR3nNpL5pqmnBOEWhG937EovBlegWGJZeLni5w.GvqEKS', NULL, '121', 'male.png', NULL, NULL, NULL, NULL, NULL, 'approved', '2020-04-08 16:57:03', '2020-04-08 16:57:03', 2, NULL, NULL, 0, 3003, NULL, 0, 1, NULL, 'offline'),
(1009, 'record', 'staf1', 'male', NULL, 'recordstaf1@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$PSahJY2NJR3nNpL5pqmnBOEWhG937EovBlegWGJZeLni5w.GvqEKS', NULL, '232', 'male.png', NULL, NULL, NULL, NULL, NULL, 'approved', '2020-03-10 12:25:35', '2020-04-12 14:17:58', 16, 6, NULL, 22, 4004, NULL, 0, 0, NULL, 'offline'),
(1010, 'Tobi', 'Revenue', 'male', NULL, 'tobi@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$PSahJY2NJR3nNpL5pqmnBOEWhG937EovBlegWGJZeLni5w.GvqEKS', NULL, '8789', 'male.png', NULL, NULL, NULL, NULL, NULL, 'approved', '2020-04-18 06:18:08', '2020-04-18 06:18:08', 11, 6, NULL, 23, 3003, NULL, 0, 0, NULL, 'offline'),
(1011, 'Tobi', 'Staff', 'male', NULL, 'tobistaff@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$PSahJY2NJR3nNpL5pqmnBOEWhG937EovBlegWGJZeLni5w.GvqEKS', NULL, '8789', 'male.png', NULL, NULL, NULL, NULL, NULL, 'approved', '2020-04-18 06:19:05', '2020-04-25 13:39:41', 11, 5, NULL, 23, 4004, NULL, 0, 0, NULL, 'offline'),
(1012, 'revenue', 'revenue1', 'male', NULL, 'revenueadmin@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$PSahJY2NJR3nNpL5pqmnBOEWhG937EovBlegWGJZeLni5w.GvqEKS', NULL, '1271', 'male.png', NULL, NULL, NULL, NULL, NULL, 'approved', '2020-04-23 23:13:35', '2020-04-23 23:13:35', 11, 2, NULL, 23, 3003, NULL, 0, 0, NULL, 'offline'),
(1013, 'Nurse1', 'Nurse1', 'female', NULL, 'nurse1@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$PSahJY2NJR3nNpL5pqmnBOEWhG937EovBlegWGJZeLni5w.GvqEKS', NULL, '121', 'male.png', NULL, NULL, NULL, NULL, NULL, 'approved', '2020-05-25 19:28:30', '2020-05-25 19:28:30', 18, 9, NULL, 27, 3003, NULL, 0, 0, NULL, 'online'),
(1014, 'system Admin', 'system', 'male', NULL, 'system@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$PSahJY2NJR3nNpL5pqmnBOEWhG937EovBlegWGJZeLni5w.GvqEKS', NULL, '456', 'male.png', NULL, NULL, NULL, NULL, NULL, 'approved', '2020-06-03 14:42:26', '2020-06-03 14:42:26', 10, NULL, NULL, 0, 1002, NULL, 0, 0, NULL, 'offline'),
(1017, 'Taiwo', 'Enoch', 'male', NULL, 'recordstaf1@yahoo.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '$2y$10$t1YCRDU7pReBhxJZ/6Ncc..ts5N04ZkpYm3sIfg4MCdpALkiMW/fy', NULL, '909ht', 'male.png', NULL, NULL, NULL, NULL, NULL, 'reg', '2020-06-11 20:06:50', '2020-06-11 20:06:50', NULL, NULL, NULL, 1, 3003, NULL, 0, 0, NULL, 'offline'),
(1033, 'Taiwo', 'Akanni', 'male', NULL, 'Taiwo@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '$2y$10$PSahJY2NJR3nNpL5pqmnBOEWhG937EovBlegWGJZeLni5w.GvqEKS', NULL, 'jh5667', 'male.png', NULL, NULL, NULL, NULL, NULL, 'approved', '2020-08-02 04:01:58', '2020-08-02 04:01:58', 2, 3, NULL, 27, 3003, NULL, 0, 0, NULL, 'offline'),
(1034, 'Doctor1', 'Akanni', 'male', NULL, 'doctor1@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '$2y$10$PSahJY2NJR3nNpL5pqmnBOEWhG937EovBlegWGJZeLni5w.GvqEKS', NULL, 'jh5661', 'male.png', NULL, NULL, NULL, NULL, NULL, 'approved', '2020-08-02 04:02:48', '2020-08-02 04:02:48', 2, 3, NULL, 26, 3003, NULL, 0, 0, NULL, 'offline'),
(1035, 'Doctor2', 'Akanni', 'female', NULL, 'doctor2@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '$2y$10$PSahJY2NJR3nNpL5pqmnBOEWhG937EovBlegWGJZeLni5w.GvqEKS', NULL, 'jh5662', 'male.png', NULL, NULL, NULL, NULL, NULL, 'approved', '2020-08-02 04:03:10', '2020-08-02 04:03:10', 2, 3, NULL, 27, 3003, NULL, 0, 0, NULL, 'offline'),
(1036, 'Doctor3', 'Akanni', 'female', NULL, 'doctor3@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '$2y$10$PSahJY2NJR3nNpL5pqmnBOEWhG937EovBlegWGJZeLni5w.GvqEKS', NULL, 'jh5663', 'male.png', NULL, NULL, NULL, NULL, NULL, 'approved', '2020-08-02 04:03:25', '2020-08-02 04:03:25', 2, 3, NULL, 28, 3003, NULL, 0, 0, NULL, 'offline'),
(1037, 'Doctor4', 'Akanni', 'female', NULL, 'doctor4@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '$2y$10$PSahJY2NJR3nNpL5pqmnBOEWhG937EovBlegWGJZeLni5w.GvqEKS', NULL, 'jh5664', 'male.png', NULL, NULL, NULL, NULL, NULL, 'approved', '2020-08-02 04:03:40', '2020-08-02 04:03:40', 2, 3, NULL, 29, 3003, NULL, 0, 0, NULL, 'online'),
(1044, 'Nurse', '2', 'female', NULL, 'nurse2@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '$2y$10$PSahJY2NJR3nNpL5pqmnBOEWhG937EovBlegWGJZeLni5w.GvqEKS', NULL, 'jh5667', 'male.png', NULL, NULL, NULL, NULL, NULL, 'approved', '2020-08-08 10:59:43', '2020-08-08 11:01:08', 2, 9, NULL, 27, 4004, NULL, 2, 1, NULL, 'online'),
(1045, 'Nurse', '4', 'female', NULL, 'nurse4@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '$2y$10$bTCpvw0Nz8RKaV1FOg2R2uU0sZEwJyAfzTLt8MqbIlER1C7LuXU2C', NULL, 'h7767757', 'male.png', NULL, NULL, NULL, NULL, NULL, 'approved', '2020-08-09 09:46:16', '2020-08-09 09:47:03', 2, 9, NULL, 28, 4004, NULL, 2, 1, NULL, 'offline'),
(1046, 'Nurse', '3', 'female', NULL, 'nurse3@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '$2y$10$b1N/cCN053U38grCebfINeaHrwqvNeqT5ZegY/gsrCDMh.ODHV9yS', NULL, '12345', 'male.png', NULL, NULL, NULL, NULL, NULL, 'approved', '2020-08-09 13:36:14', '2020-08-09 13:36:14', 2, 9, NULL, 26, 4004, NULL, 2, 1, NULL, 'offline'),
(1053, 'Akani', 'Samuel', 'male', NULL, 'akani2@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$DnoRXgXj4hS6L5fXwQiWde7iMOoHrw74iwMRpxtiPKjxBRjq1hAYK', NULL, 'Buthadpf1129', 'male.png', NULL, NULL, NULL, NULL, NULL, 'approved', '2020-08-24 12:34:52', '2020-08-24 12:34:52', 10, 4, NULL, 1, 1002, NULL, 0, 0, NULL, 'offline'),
(1054, 'Lab', 'one', 'male', NULL, 'lab@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '$2y$10$MM.LqvpdG98dZvbjq3VKWOB/9SiiLRIPZVrZzeuebg96MHpDPwYZG', NULL, 'jh5667yu', 'male.png', NULL, NULL, NULL, NULL, NULL, 'approved', '2020-09-18 11:00:07', '2020-09-18 11:00:07', 15, 7, NULL, 46, 4004, NULL, NULL, NULL, NULL, 'offline');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
