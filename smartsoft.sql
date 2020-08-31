--
-- Volcado de datos para la tabla `tableStructure`
--

INSERT INTO `tableStructure` (`id`, `header`, `dataType`, `format`, `require`, `tableTypeId`) VALUES
(1, 'T1C1', 'numeric', '', 'true', 1),
(2, 'T1C2', 'string', '', 'false', 1),
(3, 'T1C3', 'numeric', '', 'false', 1),
(4, 'T1C4', 'date', 'yyyy-MM-dd', 'false', 1),
(5, 'T2C1', 'string', '', 'true', 2),
(6, 'T2C2', 'string', '', 'false', 2),
(7, 'T2C3', 'numeric', '', 'false', 2),
(8, 'T2C4', 'date', 'yyyy-dd-MM HH:mm:ss', 'true', 2),
(9, 'T2C5', 'numeric', '', 'true', 2),
(10, 'T3C1', 'numeric', '', 'true', 3),
(11, 'T3C2', 'string', '', 'true', 3),
(12, 'T3C3', 'date', 'HH:mm:ss', 'true', 3);

-- --------------------------------------------------------

--
-- Volcado de datos para la tabla `tableType`
--

INSERT INTO `tableType` (`id`, `name`) VALUES
(1, 'Table 1'),
(2, 'Table 2'),
(3, 'Table 3');