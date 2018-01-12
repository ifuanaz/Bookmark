-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:3306
-- Час створення: Січ 12 2018 р., 17:07
-- Версія сервера: 5.6.35
-- Версія PHP: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- База даних: `c9`
--

-- --------------------------------------------------------

--
-- Структура таблиці `bookmarks`
--

CREATE TABLE `bookmarks` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `link` text NOT NULL,
  `description` text NOT NULL,
  `imgsource` text NOT NULL,
  `creation_date` date NOT NULL,
  `categoryid` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп даних таблиці `bookmarks`
--

INSERT INTO `bookmarks` (`id`, `name`, `link`, `description`, `imgsource`, `creation_date`, `categoryid`) VALUES
(175, 'google', 'https://www.google.com', '', '', '2018-01-12', '2'),
(176, 'google 2', 'https://www.google.com', '', '', '2018-01-12', '1'),
(183, 'w3schools', 'https://www.w3schools.com/', '', '', '2018-01-12', '1'),
(187, 'facebook', 'https://www.facebook.com', '', '', '2018-01-12', '2'),
(188, 'facebook', 'https://www.facebook.com', '', '', '2018-01-12', '2'),
(192, 'some bookmark', 'aslfmasf', '', '', '2018-01-12', '2'),
(193, 'n,mnm,nm,', ' m.', '', '', '2018-01-12', '1'),
(194, 'n,mnm,nm,', ' m.', '', '', '2018-01-12', '1');

-- --------------------------------------------------------

--
-- Структура таблиці `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `description` text NOT NULL,
  `creation_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп даних таблиці `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`, `creation_date`) VALUES
(1, 'Books', 'A lot of books', '0000-00-00'),
(2, 'Another category', 'One more', '0000-00-00'),
(3, 'Нова категорія', '', '2017-12-20');

--
-- Індекси збережених таблиць
--

--
-- Індекси таблиці `bookmarks`
--
ALTER TABLE `bookmarks`
  ADD PRIMARY KEY (`id`);

--
-- Індекси таблиці `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для збережених таблиць
--

--
-- AUTO_INCREMENT для таблиці `bookmarks`
--
ALTER TABLE `bookmarks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=195;
--
-- AUTO_INCREMENT для таблиці `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
