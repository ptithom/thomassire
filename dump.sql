-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:8889
-- Généré le :  Ven 06 Octobre 2017 à 00:51
-- Version du serveur :  5.6.35
-- Version de PHP :  5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données :  `thomassire`
--

-- --------------------------------------------------------

--
-- Structure de la table `catskills`
--

CREATE TABLE `catskills` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `path_media` varchar(200) NOT NULL,
  `col` int(11) NOT NULL DEFAULT '12',
  `description` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `catskills`
--

INSERT INTO `catskills` (`id`, `name`, `path_media`, `col`, `description`) VALUES
(1, 'Back end', 'https://media.giphy.com/media/omrlNyA5kqMXC/giphy.gif', 12, 'Développeur back-end de formation, je développe principalement via des framework comme Cakephp pour ce qui est la création de jeux ou de BO par exemple, mais également sur des CMS pour tout les projets plus classique comme Prestashop principalement pour les boutiques e-commerce et Wordpress pour les site plus institutionnel et autre projet pouvant s\'y ratacher.  '),
(2, 'Front end', 'https://media.giphy.com/media/13nM50X6PJYBws/giphy.gif', 12, 'Développeur full stack j\'intègre des maquettes, upgrade des thème sur tout type de structure (CMS, framework, landing...). Je me suis récemment formé sur SASS dont je peux déja plus me séparé. Je suis de plus en plus tourné vers des technos JS comme Angular 4 ou React sur lesquels je me forme '),
(3, 'Hergonomie', '', 6, 'Aillant a coeur que les plateforme que je crée soit utile mais aussi utilisable , je m\'intéresse depuis mes debuts a la notion d\'ergonomie d\'un site web. \r\nQue recherche l\'utilisateur? Qu\'elle est la solution la plus intuitive pour la navigation ? Ces question sont pour moi des point fondamentale pour la réussite d\'un projet'),
(4, 'webmarketing', '', 6, 'Etant dans une agence avec un pôle webmarketing, j\'ai était former de par mon expérience a cette univers. La bonne mise en avant de produit, le retargeting, les marketplaces, l\'A/B testing, les codes de tracking pour les plateformes de suivit... Font partie des mission que j\'ai eu a mettre en place.'),
(5, 'SEO', '', 6, 'L\'agence Stafe propose des prestation pour le référancement de site web. j\'ai acquis de par l\'expérience un oeil attentif pour amélioré et bien construire le référencement d\'un site web. a base notamment d\'un bonne structure, d\'un bon mapping de navigation et de paragraphe bien construit.'),
(6, 'Sysadmin', '', 6, 'Pour être un développeur toujours plus complet, je me suis intéressé a la parti serveur. Commençant par des commandes pour l\'utilisation de GIT, puis la configuration d\'un Vhost et d\'un espace de travail et maintenant a l\'installation de server dédier avec les mod et les package pour sont bon fonctionnement.');

-- --------------------------------------------------------

--
-- Structure de la table `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `link` varchar(200) DEFAULT NULL,
  `description` text,
  `societe_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- Contenu de la table `projects`
--

INSERT INTO `projects` (`id`, `name`, `link`, `description`, `societe_id`) VALUES
(1, 'Création Boutique club', NULL, 'creation de Divers boutique e commerce pour des club sportif afin de vendre des produit dérivés.', 1),
(2, 'administration des ventres', NULL, 'Plate-forme pour que les clubs aient un regard sur leur ventes et puisse mettre en place des action comme des rappel par mail ou sms.', 1),
(3, 'FFBB', NULL, 'site institutionnel de la fédération francaise de basket ball.', 2),
(4, 'R&D application mobile IOS', NULL, 'le projet était de faire une application mobile pour rapprocher les club et les licensier et mettre en place des puch notification, un acces au shop e-commerce, un flux d\'actualité, un flux live au moment de rencontre avec push promotionnel. <br>\r\nMon apprentissage c\'est fini avant la finalisation de cette plate-forme ', 2),
(5, 'Hod', NULL, 'Intégration d\'un nouveaux thème avec maquette responsive sur une boutique magento 1.7', 3),
(6, 'Komunity Booster', NULL, NULL, 4),
(7, 'Faire part de france', NULL, NULL, 5),
(8, 'Tierra latina', NULL, NULL, 5),
(9, 'Jeux - Entremont', NULL, NULL, 4),
(10, 'Radis Capucine', NULL, NULL, 5),
(11, 'IGA', NULL, NULL, 5),
(12, 'Saulaie', NULL, NULL, 5),
(13, 'Etienne Glémot', NULL, NULL, 5),
(14, 'Habitus', NULL, NULL, 5),
(15, 'Jeux - Jardin Bio', NULL, NULL, 4);

-- --------------------------------------------------------

--
-- Structure de la table `skills`
--

CREATE TABLE `skills` (
  `id` int(11) NOT NULL,
  `catskill_id` int(11) DEFAULT NULL,
  `name` varchar(50) NOT NULL,
  `description` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `skills`
--

INSERT INTO `skills` (`id`, `catskill_id`, `name`, `description`) VALUES
(1, 1, 'Wordpress', 'Creation, maintenance, amélioration de site institutionnel, blog et bien d\'autre.'),
(2, 1, 'Prestashop 1.6', 'Création, maintenance, amélioration de site e-commerce '),
(3, 1, 'CakePhp 3', 'Pour creation de site/plate-forme sur mesure '),
(4, 1, 'Game', 'Creation d\'application promotionnel liée  aux réseaux sociaux pour crée de l\'engagement sur une marque. '),
(5, 1, 'Magento 1.7', 'Création, maintenance de site e-commerce '),
(6, 1, 'Web application', 'Création de back office spécifique aux projet de sociétés. \r\nAvec du traitement de donnée, mise en forme de statistique, création de moteur de templating complexe, programmation et publication automatisé sur diverse réseaux sociaux, mailing, création de scrypte pour de la récupération de donnée et bien d\'autre...'),
(7, 1, 'PHP POO', 'j\'utilise le language php orienté object via les divers frameworks que j\'utilise car... Il y a t\'il vraiment besoin de la justifié ?'),
(8, 2, 'HTML 5', 'la base le la base le HTML5 car entre autre chose les \"nouvelles\" balise sont mieux reconnu et apporte plus de poids a la sémantique. '),
(9, 2, 'Sass', 'Ca ne fait pas si longtemps qe je l\'utilise et pourtant je ne pourrais plus m\'en passé sur les création de projet.. '),
(10, 2, 'Wordpress', 'J\'intègre des maquettes sur le CMS wordpress en laissant biensur la possibilité au user de controlle de leur contenu et d\'ajouté des point eu meme dans la mesure du possible.'),
(11, 2, 'Prestashop', 'J\'intègre des maquettes sur le CMS e-commerce prestashop avec un soucie de garder le coeur du CMS ou des modules propre. '),
(12, 2, 'Photoshop', 'Pour la réception et le découpage de maquette. Je l\'utilise egalement personnelement pour la photographie'),
(13, 4, 'Tracking', 'Mise en place de code de tracking pour analyser le comportement des utilisateurs sur des site e-commerce.'),
(14, 5, 'Balisage sémantique', 'le balisage sémantique est un des point important qu\'il ne faut pas négliger dans la création ou l\'amélioration d\'un site web.'),
(15, 5, 'Mapping', 'le cartographie d\'un site est également important pour le référencement ou sont les entrés et sont t\'elles pertinemment.'),
(16, 5, 'KeyWords', 'Au-delas de la balise meta il faut faire attention a la présence et la localisation des ces mots dans le corps d\'un site en plus de leur pertinence biensur.'),
(17, 6, 'Gestion de server Linux', 'J\'utilise et j\'ai déja installé des servers dédie sur débian 8. Je n\'ai pas de compétence professionnel mais je me débrouille car il a fallut parfois mettre les mains dans le cambouis.'),
(18, 6, 'Gitlab', 'J\'utilise professionnelement Git lab pour toute la gestion des depots git. '),
(19, 6, 'Git', 'J\'utilise je gestionnaire de version Git pour casiement la totalité de mes projets au-dela de l\'aide lors d\'un projet a plusieurs main et est aussi utile en son pour l\'historique qu\'il apporte '),
(20, 1, 'SQL', 'malgré le fait que j\'utilise de plus en plus Mysql via des ORM qui simplifie quand meme énormément la tache, je l\'utilise toujours pour les plus petit projet ou la création de scripte.'),
(21, 6, 'Gestion de BDD', 'Creation, Dump, backup, droit d\'utilisateurs et j\'en passe.'),
(22, 2, 'Magento', 'J\'intègre des maquettes sur le CMS e-commerce Magento. '),
(23, 3, 'Balsamiq mockup', 'j\'utilise ce logiciel pour avoir un rendu de l\'agencement optimum en fonction du support.'),
(24, 2, 'Bootstrap', 'Une base solide est important');

-- --------------------------------------------------------

--
-- Structure de la table `skills_projects`
--

CREATE TABLE `skills_projects` (
  `id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `skill_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `societes`
--

CREATE TABLE `societes` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` text,
  `path_logo` varchar(250) DEFAULT NULL,
  `link` varchar(100) DEFAULT NULL,
  `poste` varchar(100) DEFAULT NULL,
  `d_start` datetime DEFAULT NULL COMMENT 'date debut du job',
  `d_end` datetime DEFAULT NULL COMMENT 'date fin du job'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='les société dans lequel j''ai travaillé';

--
-- Contenu de la table `societes`
--

INSERT INTO `societes` (`id`, `name`, `description`, `path_logo`, `link`, `poste`, `d_start`, `d_end`) VALUES
(1, 'Push-e', 'Push-e est une agence de communication globale qui vous écoute, vous conseille et vous accompagne dans la réalisation de votre stratégie de communication et dans la création de tous les supports qui l’accompagnent.\r\n\r\nla société n\'existe plus actuellement', '/pushe.png', 'https://web.archive.org/web/20130713141053/http://www.push-e.com:80/', 'Développeur web', '2013-10-10 00:00:00', '2014-09-11 00:00:00'),
(2, 'Clubaddict', 'ClubsAddict est un atelier de marquage qui propose de personnaliser vos textiles et accessoires grâce a différentes techniques de marquage.Nous permettons aux clubs de mettre en place une boutique en ligne.', '/clubsaddict.gif', 'http://www.clubsaddict.com/', 'Développeur web', '2013-10-10 00:00:00', '2014-09-11 00:00:00'),
(3, 'Thomas sire', 'Auto entreprise monté suite a la fin de mes etudes. Ne supportant pas de ne rein faire et aillant des demande je me suis donc lancer dans cette aventure. elle m\'a permit de répondre a des demande de développement web notamment sur du e-commerce. \r\nElle est actuellement en cessation d\'activité.\r\n', NULL, '/', 'Développeur web', NULL, NULL),
(4, 'Komunity web', 'L’agence social media Komunity Web est spécialisée dans le déploiement de stratégie Social Media engageante, la mise en place de community management créatif et le développement d’application Facebook sur mesure.\r\nCOMMUNITY MANAGEMENT - GESTION PUBLICITAIRE - STRATÉGIE SOCIAL MÉDIA -\r\n DISPOSITIFS DIGITAUX', '/komunityweb.svg', 'https://www.komunity-web.com/', 'Développeur web', '2014-02-04 00:00:00', NULL),
(5, 'Stafe', 'Stafe est une agence webmarketing dont le cœur de cible est le e-commerce.\r\nL\'agence développe ses compétences autour de 4 pôles distincts et complémentaires :\r\nLe e-commerce - Le Webmarketing - Le référencement - La formation', '/stafe.png', 'http://www.stafe.fr/', 'Développeur web', '2014-02-04 00:00:00', NULL);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `catskills`
--
ALTER TABLE `catskills`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `skills_projects`
--
ALTER TABLE `skills_projects`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `societes`
--
ALTER TABLE `societes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `catskills`
--
ALTER TABLE `catskills`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT pour la table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT pour la table `skills`
--
ALTER TABLE `skills`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT pour la table `skills_projects`
--
ALTER TABLE `skills_projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `societes`
--
ALTER TABLE `societes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;