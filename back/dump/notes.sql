-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Авг 18 2022 г., 14:05
-- Версия сервера: 8.0.24
-- Версия PHP: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `gestbook`
--

-- --------------------------------------------------------

--
-- Структура таблицы `notes`
--

CREATE TABLE `notes` (
  `id` int NOT NULL,
  `date` varchar(29) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `note` varchar(1224) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `notes`
--

INSERT INTO `notes` (`id`, `date`, `name`, `note`) VALUES
(2, '1660730744224', 'jon', 'Hello'),
(3, '1660730858693', 'Bob', 'Helelo'),
(4, '1660740771644', 'ivan', 'hsajh jsdh asjk dhjs djashd  jkasdjk sdjkas dkja shdk asjkd askjdh askd aksjd asjkhdkajs hdkjasdh kasj dhkjas dhkjas dkas dhkas dkas hdkjashdkjashdjkash kdjash'),
(5, '1660740778824', 'ivan', 'hsajh jsdh asjk dhjs djashd  jkasdjk sdjkas dkja shdk asjkd adsfdds df sdf f'),
(6, '1660744344999', 'Jon', 'ije ofiho dhfo sdf sdo fhods fosdh fio sdofh osdi hfods ofh sdofhosdihfoisd of sdofhsod hfosdh'),
(7, '1660744356027', 'Jon', 'ije ofiho dhfo sdf sdo fhods fosdh fio sdofh osdi hfods ofh sdofhosdihfoisd of sdofhsod hfosdh'),
(8, '1660744419441', 'Ron', 'lkj kdjfklds flks fkdsjfk sfdljsd kfjslkf lsdk fjsldjfl;ksdjfsdjf sdfjsdkf jds fjskdjf dsjfdsfisdfudufsdiofu iodsufoidsufdspfudsf sdfu sdufopsdufosdiuf oisu dfpoisdufuo sdf dsp fusdoifupsdifupsd ufp sidufpisdufiousdp fudspo fupsdu fpsdufpsudf'),
(9, '1660744486413', 'Hort', '12 h3j 1h2j3h1k 3h1j2 3k12h32hkj324h5kj34o5u45u3495u93p4u58345u3 405u034u534u59u345u9348 5u98312 h3j 1h2j3h1k 3h1j2 3k12h32hkj324h5kj34o5u45u3495u93p4u58345u3 405u034u534u59u345u9348 5u98312 h3j 1h2j3h1k 3h1j2 3k12h32hkj324h5kj34o5u45u3495u93p4u58345u3 405u034u534u59u345u9348 5u98312 h3j 1h2j3h1k 3h1j2 3k12h32hkj324h5kj34o5u45u3495u93p4u58345u3 405u034u534u59u345u9348 5u983'),
(10, '1660744603436', 'sdf', '21313'),
(11, '1660745797830', 'jon', 'ihefowe eir oeiriow eroiwe ro ewor uewoirweoi rowei uroiew r weoir weoiroiweurowie roiwe'),
(12, '1660748348593', 'jon', 'hih'),
(13, '1660807068242', 'jon', '23'),
(14, '1660818949568', 'kjj', 'dskfjlk kdjfk dsjf k dsjfkd sjfk');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
