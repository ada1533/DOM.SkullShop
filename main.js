// ! кнопка swipe
const swipeBtn = document.getElementById("swipeBtn");

function swipeDown() {
  const distanceToScroll = window.innerHeight * 1.3;
  const scrollStep = distanceToScroll / 30;
  let currentScrollPosition = window.scrollY;

  function scrollToNextStep() {
    if (currentScrollPosition < distanceToScroll) {
      currentScrollPosition += scrollStep;
      window.scrollTo(0, currentScrollPosition);
      requestAnimationFrame(scrollToNextStep);
    }
  }

  requestAnimationFrame(scrollToNextStep);
}

swipeBtn.addEventListener("click", swipeDown);

//! ТИПA БАЗА ДАННЫХ
const games = [
  {
    title: "Grand Theft Auto V: Special Edition",
    desc: "Grand Theft Auto V — компьютерная игра из серии Grand Theft Auto в жанре Action, разработанная компанией Rockstar North. Также известна как GTA 5 или GTA V. Это пятнадцатая игра в серии. Действия игры разворачиваются в городе Лос-Сантос, а также в сельской и пустынной местностях штата Сан-Андреас.",
    category: "Фэнтези RPG",
    price: 23.89,
    reliz: "September 11th, 2012",
    platforms: "Xbox 360, PlayStation 3/4, PC (Microsoft Windows)",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2nbc.png",
  },
  {
    title: "Battlefield 3: Premium Edition",
    category: "Shooter",
    desc: "Battlefield 3 – это научно-фантастический военный шутер, разработанный компанией DICE (Digital Illusions CE) и изданный Electronic Arts. Игра была выпущена в 2011 году и стала одной из самых популярных игр в серии Battlefield.",
    price: 29.99,
    reliz: "September 11th, 2012",
    platforms: "Xbox 360, PC (Microsoft Windows), PlayStation 3",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co69ev.png",
  },
  {
    title: "Vinemon: Sauce Edition",
    category: "Role-playing (RPG)",
    desc: "Vinemon: Sauce Edition - это фанатская игра-пародия на ловлю монстров, созданная на движке RPG Maker XP Engine, которую разработчики назвали «Интерактивным дерьмовым постом, полным души». Действие игры происходит в новом регионе, известном как «Фанот», который когда-то был регионом, в который когда-то считалось, что ни один человек не сможет или не сможет войти.",
    price: 0,
    reliz: "Jun 20, 2023",
    platforms: "PC (Microsoft Windows)",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4rmj.png",
  },
  {
    title: "The Last of Us Part I",
    category: "Adventure, Shooter",
    desc: "Насладитесь эмоциональным повествованием и незабываемыми персонажами Джоэла и Элли в The Last of Us, получившей более 200 наград «Игра года» и теперь переработанной для PlayStation 5. Наслаждайтесь полной переработкой оригинального опыта, точно воспроизведенного, но с модернизированным игровым процессом, улучшенным управлением и расширенными возможностями доступа. Кроме того, почувствуйте себя погруженным с улучшенными эффектами и улучшенными исследованиями и боями.",
    price: 59.73,
    reliz: "Sep 01, 2022",
    platforms: "PlayStation 5, PC (Microsoft Windows)",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5xex.png",
  },
  {
    title: "Sekiro: Shadows Die Twice - GOTY Edition",
    category: "Adventure, Hack and slash/Beat 'em up, Role-playing (RPG)",
    desc: "Проложите свой собственный умный путь к мести в отмеченном наградами приключении от разработчика FromSoftware, создателей серии Dark Souls. Отомстить. Восстановите свою честь. Убить изобретательно. Издание «Игра года» теперь включает бонусный контент: - Отражение и Перчатка силы - новые режимы испытаний боссов - Остатки - оставляйте сообщения и записи своих действий, которые другие игроки могут просматривать и оценивать - 3 разблокируемых косметических скина",
    price: 31.99,
    reliz: "Oct 28, 2020",
    platforms: "Xbox One, PlayStation 4, PC (Microsoft Windows)",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co67k9.png",
  },
  {
    title: "Gwent: Crimson Curse",
    category: "Strategy",
    desc: "Наряду с множеством новых инструментов для ведения войны, Багровое проклятие представляет более 100 карт для всех игровых фракций ГВИНТА. Игроки смогут поразить врага отравлением и кровотечением, использовать щит и живучесть для защиты от входящего урона, а также попытаться переломить ход битвы, используя игровые механики «Смертельный удар» и «Берсерк». Как всегда, каждая карта доступна как в стандартной версии, так и в премиальном анимированном варианте — одной из отличительных особенностей презентации ГВИНТА.",
    price: 10.99,
    reliz: "Mar 28, 2019",
    platforms: "Xbox One, PlayStation 4, PC (Microsoft Windows)",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1yw9.png",
  },
  {
    title: "The Witcher 3: Wild Hunt - Game of the Year Edition",
    category: "Adventure, Role-playing (RPG)",
    desc: "Станьте профессиональным убийцей монстров и отправляйтесь в приключение эпических масштабов! После выхода «Ведьмак 3: Дикая Охота» мгновенно стала классикой, получив более 250 наград «Игра года». Теперь вы можете насладиться этим огромным, более чем 100-часовым приключением в открытом мире, а также обоими его сюжетными дополнениями, которые стоят дополнительных 50 часов игрового процесса. Это издание включает в себя весь дополнительный контент — новое оружие, доспехи, костюмы компаньонов, новый игровой режим и побочные квесты.",
    price: 7.49,
    reliz: "Aug 29, 2016",
    platforms: "Xbox One, PlayStation 4, PC (Microsoft Windows)",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wz4.png",
  },
  {
    title: "Gwent: Iron Judgment",
    category: "Strategy",
    desc: "Север на подъеме, и Радовид вернулся, чтобы вершить правосудие над своими врагами — правосудие, которому служат огонь и железо. Встаньте на его сторону или бросьте вызов королевской власти — что бы вы ни выбрали, приготовьтесь к одним из самых яростных сражений в истории ГВИНТА. Переживите битву при Бренне, узнайте секреты «Саламандры» или присоединитесь к компании благородных преступников Гаскона — возможностей ввязаться в бой в «ГВИНТ: Железное правосудие» предостаточно.",
    price: 12.99,
    reliz: "Oct 02, 2019",
    platforms: "Xbox One",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1r5n.png",
  },
  {
    title: "HITMAN 3 Access Pass: HITMAN 1 GOTY Edition",
    category: "Adventure, Shooter, Tactical",
    desc: "Экспериментируйте и получайте удовольствие на непревзойденной игровой площадке в роли Агента 47, чтобы стать мастером-убийцей. Путешествуйте по миру в экзотических местах и ​​уничтожайте цели с помощью всего, от катаны и снайперской винтовки до взрывающегося мяча для гольфа или соуса для спагетти с истекшим сроком годности.",
    price: 15.99,
    reliz: "Nov 07, 2017",
    platforms: "Xbox One, PlayStation 4, PC (Microsoft Windows)",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co24wx.png",
  },
  {
    title: "The Stanley Parable: Ultra Deluxe",
    category: "Adventure, Simulator",
    desc: "The Stanley Parable: Ultra Deluxe — это расширенное переосмысление The Stanley Parable 2013 года. Вы будете играть за Стэнли, и вы не будете играть за Стэнли. Ты сделаешь выбор и станешь бессильным. Вы здесь не для того, чтобы побеждать. The Stanley Parable — это игра, в которую вы играете.",
    price: 12.49,
    reliz: "Apr 27, 2022",
    platforms:
      "Xbox One, PlayStation 4, Linux, Mac, PlayStation 5, PC (Microsoft Windows), Nintendo Switch, Xbox Series X|S",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4p71.png",
  },
  {
    title: "Elden Ring",
    category: "Adventure, Role-playing (RPG)",
    desc: "Elden Ring — это фэнтезийная игра в жанре экшн с открытым миром и элементами RPG, такими как статистика, оружие и заклинания. Восстань, Запятнанный, и следуй благодати, чтобы раскрыть силу Древнего Кольца и стать Древним Лордом в Промежуточных Землях.",
    price: 34.99,
    reliz: "Feb 25, 2022",
    platforms:
      "Xbox One, PlayStation 4, PlayStation 5, PC (Microsoft Windows), Xbox Series X|S",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.png",
  },
  {
    title: "Persona 5 Royal",
    category: "Adventure, Role-playing (RPG), Turn-based strategy (TBS)",
    desc: "Наденьте маску, присоединитесь к Призрачным похитителям сердец и крадите злые помыслы у порочных людей, принуждая их изменить свою жизнь!",
    price: 59.99,
    reliz: "Oct 31, 2019",
    platforms:
      "Xbox One, PlayStation 4, PlayStation 5, PC (Microsoft Windows), Nintendo Switch, Xbox Series X|S",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1nic.png",
  },
  {
    title: "Steins;Gate",
    category: "Adventure, Visual Novel",
    desc: "Steins;Gate — японский визуальный роман, разработанный 5pb. и Нитроплюс. Это вторая игра в серии Science Adventure после Chaos;Head. Команда разработчиков описывает игру как «гипотетический научный ADV» и исследует время и путешествия во времени в Акихабаре 2010 года. Геймплей следует нелинейным сюжетным линиям, которые предлагают ветвящиеся сценарии с курсами взаимодействия.",
    price: 14.49,
    reliz: "Oct 15, 2009",
    platforms:
      "Android, PlayStation 4, Xbox 360, PlayStation Portable, iOS, PlayStation Vita, PC (Microsoft Windows), PlayStation 3",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5ff7.png",
  },
  {
    title: "Disco Elysium",
    category: "Adventure, Role-playing (RPG)",
    desc: "CRPG, в которой, проснувшись в гостиничном номере полным амнезиаком с весьма самоуверенными голосами в голове, детектив средних лет, расследующий дело об убийстве, непреднамеренно оказывается вовлеченным в политический спор между местным профсоюзом и более крупным международным профсоюзом. тело, все время пытаясь собрать воедино свое прошлое, диагностировать природу окружающей его реальности и смириться с указанной реальностью.",
    price: 18.49,
    reliz: "Oct 15, 2019",
    platforms: "Mac, PC (Microsoft Windows)",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1sfj.png",
  },
  {
    title: "Mass Effect Legendary Edition",
    category: "Adventure, Role-playing (RPG), Shooter, Strategy",
    desc: "Один человек — это все, что стоит между человечеством и величайшей угрозой, с которой оно когда-либо сталкивалось. Оживите легенду о коммандере Шепарде в знаменитой трилогии Mass Effect с легендарным изданием Mass Effect. Включает в себя базовый контент для одиночной игры и более 40 загружаемых материалов для игр Mass Effect, Mass Effect 2 и Mass Effect 3, включая промо-оружие, доспехи и наборы. Испытайте удивительно богатую и детализированную вселенную, где ваши решения имеют глубокие последствия для действия и результата.",
    price: 14.99,
    reliz: "May 14, 2021",
    platforms: "Xbox One, PlayStation 4, PC (Microsoft Windows)",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2k5h.png",
  },
  {
    title: "The Last of Us",
    category: "Adventure, Shooter",
    desc: "Гибрид шутера/стелса/выживания от третьего лица, в котором через двадцать лет после вспышки паразитического грибка, захватившего нервные функции людей, Джоэл, техасец с трагическим семейным прошлым, оказывается ответственным за контрабанду четырнадцатилетней девочки. назвал Элли группе ополченцев под названием «Светлячки», избегая при этом строгих и смертоносных властей, инфицированных грибковых хозяев и других жестоких выживших.",
    price: 15.99,
    reliz: "Jun 14, 2013",
    platforms: "PlayStation 3",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1r7f.png",
  },
  {
    title: "The Last of Us Remastered",
    category: "Adventure, Shooter",
    desc: "The Last of Us Remastered — это обновленная версия игры The Last of Us для PS3. Он идентичен версии для PS3, но работает с разрешением 1080p и включает модели персонажей с более высоким разрешением. Также есть улучшенные тени и освещение, модернизированные текстуры, 60 кадров в секунду и другие виды улучшений. В дополнение к основной игре включены два набора карт и дополнение The Last of Us: Left Behind.",
    price: 22.79,
    reliz: "Jul 26, 2014",
    platforms: "PlayStation 4",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5zks.png",
  },
  {
    title: "God of War Ragnarök",
    category: "Adventure, Hack and slash/Beat 'em up",
    desc: "God of War: Ragnarok — девятая игра в серии God of War и продолжение God of War 2018 года. Продолжая тему скандинавской мифологии, действие игры происходит в древней Норвегии, и в ней представлены главные герои сериала Кратос, бывший греческий бог войны, и его маленький сын Атрей. Ожидается, что в игре начнутся события Рагнарёка, где Кратос и Атрей должны отправиться в каждое из Девяти миров в поисках ответов, готовясь к предсказанной битве, которая положит конец миру.",
    price: 56.94,
    reliz: "Nov 09, 2022",
    platforms: "PlayStation 4, PlayStation 5",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5s5v.png",
  },
  {
    title: "Chrono Trigger",
    category: "Adventure, Role-playing (RPG)",
    desc: "В этой пошаговой японской ролевой игре юный Кроно должен путешествовать во времени через неисправный телепорт, чтобы спасти своего несчастного товарища и принять участие в запутанной паутине опасностей прошлого и настоящего. Приключение, которое следует вскоре, раскрывает злую силу, настроенную уничтожить мир, запуская гонку Кроно со временем, чтобы изменить ход истории и создать светлое будущее.",
    price: 11.43,
    reliz: "Mar 11, 1995",
    platforms:
      "Super Nintendo Entertainment System, Super Famicom, Wii, Satellaview, PlayStation, PlayStation 3",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3plw.png",
  },
  {
    title: "Red Dead Redemption 2",
    category: "Adventure, Role-playing (RPG), Shooter",
    desc: "Red Dead Redemption 2 — это эпическая история о преступнике Артуре Моргане и печально известной банде Ван дер Линде, бегущих по Америке на заре современности.",
    price: 11.54,
    reliz: "Oct 26, 2018",
    platforms: "Xbox One, PlayStation 4, PC (Microsoft Windows), Google Stadia",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1q1f.png",
  },
  {
    title: "Hollow Knight",
    category: "Adventure, Indie, Platform",
    desc: "2D-метроидвания с упором на ближний бой и исследование, в которой игрок попадает в когда-то процветающее ныне безрадостное королевство насекомых Халлоунест, путешествует по его различным районам, встречает дружелюбных жителей, сражается с враждебными и раскрывает историю королевства, улучшая свои боевые действия. способности и арсенал движений, сражаясь с боссами и получая доступ к отдаленным областям.",
    price: 8.49,
    reliz: "Feb 24, 2017",
    platforms:
      "Xbox One, PlayStation 4, Linux, Mac, PC (Microsoft Windows), Nintendo Switch",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1rgi.png",
  },
  {
    title: "Hades",
    category:
      "Adventure, Hack and slash/Beat 'em up, Indie, Role-playing (RPG)",
    desc: "Мошенническая игра в жанре rogue-lite, в которой Загрей, сын Аида, греческого бога мертвых, пытается сбежать из своего дома и своего деспотичного отца, сражаясь с душами мертвых в различных слоях постоянно меняющегося подземного мира. знакомясь и налаживая отношения с его жителями.",
    price: 8.49,
    reliz: "Dec 07, 2018",
    platforms:
      "Xbox One, PlayStation 4, Mac, PlayStation 5, PC (Microsoft Windows), Nintendo Switch, Xbox Series X|S",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co39vc.png",
  },
  {
    title: "NieR: Automata",
    category: "Hack and slash/Beat 'em up, Role-playing (RPG)",
    desc: "NieR: Automata рассказывает историю андроидов 2B, 9S и A2 и их битв за восстановление управляемой машинами антиутопии, захваченной мощными машинами.",
    price: 18.7,
    reliz: "Feb 23, 2017",
    platforms: "PlayStation 4, PC (Microsoft Windows)",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5pcj.png",
  },
  {
    title: "Mass Effect 2",
    category: "Adventure, Role-playing (RPG), Shooter",
    desc: "Готовы ли вы потерять все, чтобы спасти галактику? Вам придется им стать, коммандер Шепард. Пришло время собрать вместе ваших лучших союзников и завербовать боевую элиту галактики, чтобы продолжить сопротивление вторжению Жнецов. Так что готовьтесь, потому что это астрономическая миссия, в которой нужно идти на жертвы. Вы столкнетесь с более сложным выбором и новыми, более смертоносными врагами. Вооружитесь и приготовьтесь к незабываемому межгалактическому приключению.",
    price: 14.99,
    reliz: "Feb 24, 2017",
    platforms: "Xbox 360, PC (Microsoft Windows), PlayStation 3",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co20ac.png",
  },
  {
    title: "Outer Wilds",
    category: "Adventure, Indie, Puzzle, Simulator",
    desc: "Outer Wilds — получившая признание критиков и отмеченная наградами детективная игра с открытым миром о солнечной системе, пойманной в бесконечную петлю времени. Новый участник космической программы в маленькой деревне на планете Тимбер-Харт, игрок управляет космическим челноком и путешествует по их солнечной системе, чтобы добраться до сути ее тайн, исследуя космос и собирая знания, скрытые в каждом из них. планеты системы, оставленные другой цивилизацией в далеком прошлом.",
    price: 13.49,
    reliz: "May 28, 2019",
    platforms:
      "Xbox One, PlayStation 4, PlayStation 5, PC (Microsoft Windows), Nintendo Switch, Xbox Series X|S",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co65ac.png",
  },
  {
    title: "Tetris Effect: Connected",
    category: "Arcade, Indie, Music, Puzzle",
    desc: "Tetris Effect: Connected добавляет совершенно новое надежное многопользовательское расширение к огромному разнообразию захватывающих и инновационных однопользовательских режимов, которыми известен Tetris Effect. Объединяйтесь и играйте друг с другом или против друг друга в совершенно новых режимах, таких как «Зональная битва», которая встряхивает традиционный геймплей тетриса 1 на 1 с помощью механики зоны, останавливающей время, или попробуйте инновационный совместный режим «Подключенный». , где до трех игроков могут буквально соединить свои игровые поля Tetris вместе и играть как один, поскольку они работают вместе, чтобы победить серию все более сложных боссов, управляемых процессором.",
    price: 18.49,
    reliz: "May 14, 2020",
    platforms:
      "Xbox One, Meta Quest 2, PlayStation 4, Oculus Quest, PlayStation VR2, PlayStation 5, PC (Microsoft Windows), Nintendo Switch, Xbox Series X|S",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2krv.png",
  },
  {
    title: "Ghost of Tsushima",
    category: "Adventure, Hack and slash/Beat 'em up, Role-playing (RPG)",
    desc: "Раскройте скрытые чудеса Цусимы в этом приключенческом боевике с открытым миром. Проложите новый путь и ведите нетрадиционную войну за свободу Цусимы. Бросьте вызов противникам с помощью катаны, освойте лук, чтобы устранить удаленные угрозы, разработайте тактику скрытности, чтобы устраивать засады на врагов, чтобы победить монголов.",
    price: 24.12,
    reliz: "Jul 17, 2020",
    platforms: "PlayStation 4, PlayStation 5",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2crj.png",
  },
  {
    title: "Black Mesa",
    category: "Adventure, Indie, Platform",
    desc: "Black Mesa — это переосмысление классического научно-фантастического шутера от первого лица Half-Life от Valve Software. Работая на движке Source, вы снова побываете в первой роли Гордона Фримена и в его незабываемом путешествии по Исследовательскому центру Черной Мезы. Вас ждут детально проработанные среды для исследования, огромное количество персонажей и экспериментальное оружие. Абсолютно новая музыка, озвучка, хореография и добавленные диалоги уступают место более обширному и захватывающему опыту, чем когда-либо прежде.",
    price: 2.62,
    reliz: "Mar 06, 2020 ",
    platforms: "Linux, PC (Microsoft Windows)",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co20n4.png",
  },
  {
    title: "Catan Universe",
    category: "Quiz/Trivia, Strategy",
    desc: "После долгого и полного трудностей путешествия вы достигли побережья неизвестного острова! Однако на Катан высадились и другие исследователи: гонка за колонизацию началась! Стройте дороги и города, умело торгуйте и станьте правителем Катана!",
    price: 0,
    reliz: "Apr 25, 2017",
    platforms: "Mac, iOS, PC (Microsoft Windows), Nintendo Switch",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co22ve.png",
  },
  {
    title: "Linelight",
    category: "Adventure, Indie, Platform, Puzzle, Strategy",
    desc: "Linelight — это элегантная игра-головоломка, действие которой происходит в мире линий.",
    price: 6.29,
    reliz: "Jan 30, 2017",
    platforms:
      "PlayStation 4, Oculus Quest, Linux, Mac, PC (Microsoft Windows), Nintendo Switch",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co23vg.png",
  },
];

// ! content

//! dom connect
let pushBtn = document.querySelector("#push-btn");
let getBtn = document.querySelector("#get-btn");
let contentDiv = document.querySelector("#content__div");
let registerModal = document.querySelector("#registerUser-modal");
let registerAdminModal = document.querySelector("#registerAdmin-modal");

let regBtn = document.querySelector("#register-modal-btn");
let loginBtn = document.querySelector("#login-modal-btn");

let loginUserModalBtn = document.querySelector("#loginUser-modal");
let logoutUserBtn = document.querySelector("#logoutUser-btn");

let searchInp = document.querySelector("#search-inp");
let searchForm = document.querySelector("form");
let searchBtn = document.querySelector("#search-btn");

let cartModalBtn = document.querySelector("#cartModal-btn");
let closeCartBtn = document.querySelector(".btn-close-cart");
let cartTable = document.querySelector("table");
let createCartOrderBtn = document.querySelector("#create-cart-order-btn");
let cleanCartBtn = document.querySelector("#clean-cart-btn");
let cartTotalCost = document.querySelector("#cart-total-cost");

//* admin reg connect
let regAdminNameInp = document.querySelector("#reg-admin-name");
let regAdminAgeInp = document.querySelector("#reg-admin-age");
let regAdminEmailInp = document.querySelector("#reg-admin-email");
let regAdminPasswordInp = document.querySelector("#reg-admin-password");
let regAdminPasswordConfirmInp = document.querySelector(
  "#reg-admin-password-confirm"
);
let regAdminBtn = document.querySelector("#register-admin-modal");
let adminPanel = document.querySelector("#admin-panel");
//* inputs connect
let regNameInp = document.querySelector("#reg-name");
let regAgeInp = document.querySelector("#reg-age");
let regEmailInp = document.querySelector("#reg-email");
let regPasswordInp = document.querySelector("#reg-password");
let regPasswordConfirmInp = document.querySelector("#reg-password-confirm");

let loginNameInp = document.querySelector("#login-name");
let loginPasswordInp = document.querySelector("#login-password");

// game inputs
let gameImage = document.querySelector("#game-image");
let gameTitle = document.querySelector("#game-title");
let gameDesc = document.querySelector("#game-desc");
let gameCategory = document.querySelector("#game-category");
let gamePrice = document.querySelector("#game-price");
let gameReliz = document.querySelector("#game-reliz");
let gamePlatforms = document.querySelector("#game-platforms");
let addGameBtn = document.querySelector(".add-game-btn");
let saveChangesBtn = document.querySelector(".save-changes-btn");
//! АДРЕСЫ
const GAME_API = "http://localhost:1111/games";
const USERS_API = "http://localhost:1111/users";

//! pushing to db
//! ФУНКЦИЯ ДЛЯ ПУША НА СЕРВЕР
registerAdminModal.setAttribute("style", "display: none");

async function addAllGamesToDB() {
  for (let game of games) {
    await fetch(GAME_API, {
      method: "POST",
      body: JSON.stringify(game),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
  }
}
pushBtn.addEventListener("click", addAllGamesToDB);

//! registration ADMIN
//* РЕГИСТРАЦИЯ АДМИНА

//* ФУНЦИЯ ОЧИСТКИ ИНПУТОВ
function cleanRegAdminInps() {
  regAdminNameInp.value = "";
  regAdminAgeInp.value = "";
  regAdminEmailInp.value = "";
  regAdminPasswordInp.value = "";
  regAdminPasswordConfirmInp.value = "";
}

async function registerAdminFunc() {
  if (
    !regAdminNameInp.value.trim() ||
    !regAdminAgeInp.value.trim() ||
    !regAdminEmailInp.value.trim() ||
    !regAdminPasswordInp.value.trim() ||
    !regAdminPasswordConfirmInp.value.trim()
  ) {
    alert("Some inputs are empty!");
    return;
  }
  let uniqueName = await checkUniqueUsername(regAdminNameInp.value);
  if (uniqueName) {
    alert("User with this name is exists");
    cleanRegAdminInps();
    return;
  }
  if (regAdminPasswordInp.value !== regAdminPasswordConfirmInp.value) {
    alert("eror pass");
    cleanRegAdminInps();
    return;
  }
  checkUniqueUsername();

  //* СОЗДАЕМ НОВЫЙ ОБЬЕКТ КОТОРЫЙ ЗАПУШИМ В БД
  let adminObj = {
    name: regAdminNameInp.value,
    age: regAdminAgeInp.value,
    email: regAdminEmailInp.value,
    password: regAdminPasswordInp.value,
    isAdmin: true,
  };

  //* ПУШИМ
  fetch(USERS_API, {
    method: "POST",
    body: JSON.stringify(adminObj),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  cleanRegAdminInps();
}

regAdminBtn.addEventListener("click", registerAdminFunc);

//! registration

//* ЗДЕСЬ ПРОВЕРКА НА ТО ЧТО ЕСТЬ ЛИ У ПОЛЬЗОВАТЕЛСЯ АДМИНКА
function checkAddAdmin() {
  let user = JSON.parse(localStorage.getItem("user"));

  if (user) return user.isAdmin;
  return false;
}

//* ЗДЕСЬ КНОПКА ДОБАВЛЕНИЯ АДМИНОВ. ЕСЛИ У ПОЛЬЗОАВАТЕЛСЯ ЕСТЬ АДМИНКА ТО ОН ВИДИТ ЭТУ КНОПКУ
function addAdmin() {
  if (!checkAddAdmin()) {
    registerAdminModal.setAttribute("style", "display: none !important");
  } else {
    registerAdminModal.setAttribute("style", "display: block !important");
  }
}
//* ОЧИШЕНИЕ ИНПУТОВ
function cleanRegInps() {
  regNameInp.value = "";
  regAgeInp.value = "";
  regEmailInp.value = "";
  regPasswordInp.value = "";
  regPasswordConfirmInp.value = "";
}

//* ПРОВЕРКА НА УНИКАЛЬНОЕ ИМЯ
async function checkUniqueUsername(name) {
  let res = await fetch(USERS_API);
  let users = await res.json();
  return users.some((item) => item.name == name);
}

//* РЕГИСТРАЦИЯ ОБЫЧНОГО ПОЛЬЗОВАТЕЛЯ
async function registerUserFunc() {
  if (
    !regNameInp.value.trim() ||
    !regAgeInp.value.trim() ||
    !regEmailInp.value.trim() ||
    !regPasswordInp.value.trim() ||
    !regPasswordConfirmInp.value.trim()
  ) {
    alert("Some inputs are empty!");
    return;
  }
  let uniqueName = await checkUniqueUsername(regNameInp.value);
  if (uniqueName) {
    alert("User with this name is exists");
    cleanRegInps();
    return;
  }
  if (regPasswordInp.value !== regPasswordConfirmInp.value) {
    alert("eror pass");
    cleanRegInps();
    return;
  }
  checkUniqueUsername();

  //* СОБИРАЕМ ПОЛЬЗОВАТЕЛЯ
  let userObj = {
    name: regNameInp.value,
    age: regAgeInp.value,
    email: regEmailInp.value,
    password: regPasswordInp.value,
    isAdmin: false, //! АДМИНКИ НЕТ, ТАК КАК ЭТО ОБЫЧНЫЙ ПОЛЬЗОВАТЕЛЬ
  };
  //* ПУШИМ ПОЛЬЗОВАТЕЛЯ
  fetch(USERS_API, {
    method: "POST",
    body: JSON.stringify(userObj),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  cleanRegInps();
}

regBtn.addEventListener("click", registerUserFunc);

//! login
//! ДЕЛАЕМ АВТОРИЗАЦИЮ

//* ЗДЕСЬ ПРОВЕРЯЕМ АВТОРИЗОВАН ЛИ ПОЛЬЗОВАТЕЛЬ,
//* ЕСЛИ ДА ТО УБИРАЕМ КНОПКУ LOGIN И СТАВИМ LOGOUT.
//* ЕСЛИ НЕТ ТО НАОБОРОТ
function checkLoginLoogoutStatus() {
  let user = localStorage.getItem("user");
  if (!user) {
    loginUserModalBtn.parentNode.style.display = "block";
    logoutUserBtn.parentNode.style.display = "none";
    showUsername.innerText = "";
  } else {
    loginUserModalBtn.parentNode.style.display = "none";
    logoutUserBtn.parentNode.style.display = "block";
    showUsername.innerText = JSON.parse(user).name;
  }
  //* ЗДЕСЬ ЖЕ ВЫЗЫВАЕМ ФУНКЦИЮ КНОПКИ АДМИНА.
  showAdminPanel();
  render();
}
checkLoginLoogoutStatus();

//* ПРОВЕРЯЕМ ЕСТЬ ЛИ ТАКОЙ ПОЛЬЗОВАТЕЛЬ В БД
function checkUserInUsers(name, users) {
  return users.some((item) => item.name === name);
}

//* ПРОВЕРЯЕМ СОВПАДЕНИЕ ПАРОЛЕЙ
function checkUserPassword(user, password) {
  return user.password === password;
}

//* ПУШИМ ГОТОВОГО ПОЛЬЗОВАТЕЛЯ В LOCAL STORAGE
function setUserToStorage(name, isAdmin) {
  localStorage.setItem(
    "user",
    JSON.stringify({
      name,
      isAdmin,
    })
  );
}

//* ОЧИСТКА ИНПУТОВ
function cleanLogInps() {
  loginNameInp.value = "";
  loginPasswordInp.value = "";
}

//* АВТОРИЗАЦИЯ
async function loginUserFunc() {
  //* ПРОВЕРКА НА ЗАПОЛНЕНИЕ ИНПУТОВ
  if (!loginNameInp.value.trim() || !loginPasswordInp.value.trim()) {
    alert("SOME INP ARE EMPTY");
    cleanLogInps();
    return;
  }

  let res = await fetch(USERS_API);
  let users = await res.json();
  if (!checkUserInUsers(loginNameInp.value, users)) {
    alert("User not found!");
    cleanLogInps();
    return;
  }

  let userObj = users.find((user) => user.name === loginNameInp.value);

  //* ПРОВЕРКА НА ПАРОЛЬ
  if (!checkUserPassword(userObj, loginPasswordInp.value)) {
    alert("Wrong password");
    cleanLogInps();
    return;
  }
  //* ЗДЕСЬ ПУШИМ В LOCAL STORAGE
  setUserToStorage(userObj.name, userObj.isAdmin);
  //* СРАЗУ ПРОВЕРЯЕМ, ЕСЛИ АВТОРИЗОВАЛСЯ ТО КНОПКУ LOGIN УБРАТЬ
  checkLoginLoogoutStatus();
  //* ОЧИСТКА ИНПУТОВ
  cleanLogInps();
}

loginBtn.addEventListener("click", loginUserFunc);

//! logout
//* ПРИ НАЖАТИИ НА КНОПКУ LOGOUT ИЗ LOCAL STORAGE УДАЛЯЕТСЯ ЮЗЕР.
logoutUserBtn.addEventListener("click", () => {
  localStorage.removeItem("user");
  checkLoginLoogoutStatus();
  render();
});

//! product login

//! добавление всех книг на страницу
//* НАДО ДОБАВИТЬ РЕНДЕР ВЕЗДЕ ГДЕ ОБНОВЛЕНИЕ ИДЕТ

let category = "";
let search = "";
let currentPage = 1;

async function render() {
  let requestAPI = `${GAME_API}?q=${search}&_page=${currentPage}&_limit=6`;
  if (category && category !== "all") {
    requestAPI += `&category_like=${category}`;
  }
  contentDiv.innerHTML = "";
  let res = await fetch(requestAPI);
  let data = await res.json();
  data.forEach((game) => {
    const categories = game.category
      .split(",")
      .map((cat) => cat.trim())
      .join(", ");
    contentDiv.innerHTML += `
      <div class="card mb-3 m-3" style="max-width: 540px; width: 40%;" id="card-div">
              <div class="row g-0">
                  <div class="col-md-4">
                      <img
                          src="${game.image}"
                          class="img-fluid rounded-start"
                          alt="eror"
                          style="height: auto; width: 100%"
                      />
                  </div>
                  <div class="col-md-8">
                      <div class="card-body">
                          <h5 class="card-title">${game.title}</h5>
                          <p class="card-text">Релиз: ${game.reliz}</p>
                          <p class="card-text">Жанр: ${categories}</p> <!-- Display categories here -->
                          <p class="card-text">Описание:<br> ${game.desc}</p>
                          <p class="card-text">Платформы: ${game.platforms}</p>
                          <p class="card-text">Стоимость: ${game.price} $</p>
                          ${
                            checkUserForGameCreate()
                              ? `<a href="#" class="btn btn-dark btn-edit" id="edit-${game.id}">EDIT</a>
                              <a href="#" class="btn btn-danger btn-delete" id="del-${game.id}">DELETE</a>`
                              : ""
                          }
                          ${
                            checkLoginUser()
                              ? `
                              <a href="#" class="btn btn-success btn-cart" id="cart-${game.id}">TO CART</a>
                              `
                              : ""
                          }     
                      </div>
                  </div>
              </div>
          </div>
      `;
  });

  if (data.length === 0) return;
  addDeleteEvent();
  addEditEvent();
  addCategoryToDropdownMenu();
  addCartEvent();
}
render();

// product logic
function checkUserForGameCreate() {
  let user = JSON.parse(localStorage.getItem("user"));
  if (user) return user.isAdmin;
  return false;
}

function showAdminPanel() {
  if (!checkUserForGameCreate()) {
    adminPanel.setAttribute("style", "display: none !important;");
  } else {
    adminPanel.setAttribute("style", "display: flex !important;");
  }
  addAdmin();
}

// create

function cleanAdminForm() {
  gameImage.value = "";
  gameTitle.value = "";
  gameDesc.value = "";
  gameCategory.value = "";
  gamePrice.value = "";
  gameReliz.value = "";
  gamePlatforms.value = "";
}

async function createProduct() {
  if (
    !gameImage.value.trim() ||
    !gameTitle.value.trim() ||
    !gameDesc.value.trim() ||
    !gameCategory.value.trim() ||
    !gamePrice.value.trim() ||
    !gameReliz.value.trim() ||
    !gamePlatforms.value.trim()
  ) {
    alert("Some inputs are empty!");
    return;
  }

  let gameObj = {
    image: gameImage.value,
    title: gameTitle.value,
    desc: gameDesc.value,
    category: gameCategory.value,
    price: gamePrice.value,
    reliz: gameReliz.value,
    platforms: gamePlatforms.value,
  };

  await fetch(GAME_API, {
    method: "POST",
    body: JSON.stringify(gameObj),
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });

  cleanAdminForm();

  render();
}

addGameBtn.addEventListener("click", createProduct);

// delete
async function deleteProduct(e) {
  let gameId = e.currentTarget.id.split("-")[1];

  await fetch(`${GAME_API}/${gameId}`, {
    method: "DELETE",
  });

  render();
}

function addDeleteEvent() {
  let deleteGameBtns = document.querySelectorAll(".btn-delete");
  deleteGameBtns.forEach((btn) => btn.addEventListener("click", deleteProduct));
}

// update
function checkCreateAndSaveBtn() {
  if (saveChangesBtn.id) {
    addGameBtn.setAttribute("style", "display: none;");
    saveChangesBtn.setAttribute("style", "display: block;");
  } else {
    addGameBtn.setAttribute("style", "display: block;");
    saveChangesBtn.setAttribute("style", "display: none;");
  }
}
checkCreateAndSaveBtn();

async function addProductDataToForm(e) {
  let gameId = e.currentTarget.id.split("-")[1];
  let res = await fetch(`${GAME_API}/${gameId}`);
  let gameObj = await res.json();

  gameTitle.value = gameObj.title;
  gamePrice.value = gameObj.price;
  gameDesc.value = gameObj.desc;
  gameImage.value = gameObj.image;
  gameCategory.value = gameObj.category;
  gameReliz.value = gameObj.reliz;
  gamePlatforms.value = gameObj.platforms;

  saveChangesBtn.setAttribute("id", gameObj.id);

  checkCreateAndSaveBtn();
}

function addEditEvent() {
  let editProductBtns = document.querySelectorAll(".btn-edit");
  editProductBtns.forEach((btn) =>
    btn.addEventListener("click", addProductDataToForm)
  );
}

async function saveChanges(e) {
  let updatedProductObj = {
    id: e.target.id,
    title: gameTitle.value,
    price: gamePrice.value,
    desc: gameDesc.value,
    image: gameImage.value,
    category: gameCategory.value,
    reliz: gameReliz.value,
    platforms: gamePlatforms.value,
  };

  await fetch(`${GAME_API}/${e.target.id}`, {
    method: "PUT",
    body: JSON.stringify(updatedProductObj),
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });

  cleanAdminForm();

  saveChangesBtn.removeAttribute("id");

  render();
}

saveChangesBtn.addEventListener("click", saveChanges);

// ! filtering
let categoriesList = document.querySelector(".dropdown-menu");

async function addCategoryToDropdownMenu() {
  let res = await fetch(GAME_API);
  let data = await res.json();
  let categoriesSet = new Set();
  data.forEach((product) => {
    product.category.split(",").forEach((category) => {
      categoriesSet.add(category.trim());
    });
  });

  categoriesList.innerHTML =
    '<li><a class="dropdown-item" href="#">all</a></li>';
  let uniqueCategories = Array.from(categoriesSet).sort();
  uniqueCategories.forEach((category) => {
    categoriesList.innerHTML += `
      <li><a class="dropdown-item" href="#">${category}</a></li>
    `;
  });

  addClickEventOnDropdownItem();
}

function filterOnCategory(e) {
  let categoryText = e.target.innerText;
  if (categoryText === "all") {
    category = "";
  } else {
    category = categoryText;
  }
  render();
}

function addClickEventOnDropdownItem() {
  let categoryItems = document.querySelectorAll(".dropdown-item");
  categoryItems.forEach((item) =>
    item.addEventListener("click", filterOnCategory)
  );
}

addCategoryToDropdownMenu();

//! search
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  search = searchInp.value;
  render();
});
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  search = searchInp.value.trim();
  render();
});

//! pagination
let prevPageBtn = document.querySelector("#prev-page-btn");
let nextPageBtn = document.querySelector("#next-page-btn");

async function getPagesCount() {
  let res = await fetch(GAME_API);
  let products = await res.json();
  let pagesCount = Math.ceil(products.length / 2);
  return pagesCount;
}

async function checkPages() {
  let maxPagesNum = await getPagesCount();
  if (currentPage === 1) {
    prevPageBtn.setAttribute("style", "display: none;");
    nextPageBtn.setAttribute("style", "display: block;");
  } else if (currentPage === maxPagesNum) {
    prevPageBtn.setAttribute("style", "display: block;");
    nextPageBtn.setAttribute("style", "display: none;");
  } else {
    prevPageBtn.setAttribute("style", "display: block;");
    nextPageBtn.setAttribute("style", "display: block;");
  }
}
checkPages();

prevPageBtn.addEventListener("click", () => {
  currentPage--;
  checkPages();
  render();
});

nextPageBtn.addEventListener("click", () => {
  currentPage++;
  checkPages();
  render();
});

// cart logic
function checkLoginUser() {
  let user = JSON.parse(localStorage.getItem("user"));
  return user;
}

// add product to cart
async function getProductObjectById(productId) {
  let res = await fetch(`${GAME_API}/${productId}`);
  let productObj = await res.json();
  return productObj;
}

function countCartTotalCost(products) {
  let cartTotalCost = products.reduce((acc, currentItem) => {
    return acc + currentItem.totalCost;
  }, 0);
  return cartTotalCost;
}

function addNewProductToCart(productCartObj) {
  let cartObj = JSON.parse(localStorage.getItem("cart"));
  cartObj.products.push(productCartObj);
  cartObj.totalCost = countCartTotalCost(cartObj.products);
  localStorage.setItem("cart", JSON.stringify(cartObj));
}

function addCartObjToLocalStorage() {
  let cartOwner = JSON.parse(localStorage.getItem("user"));
  let cartObj = {
    id: Date.now(),
    owner: cartOwner.username,
    totalCost: 0,
    products: [],
  };
  localStorage.setItem("cart", JSON.stringify(cartObj));
}

async function addProductToCart(e) {
  let productId = e.target.id.split("-")[1];
  let productObj = await getProductObjectById(productId);
  let cartProductCount = +prompt("Enter product count for cart");
  let productCartObj = {
    count: cartProductCount,
    totalCost: +productObj.price * cartProductCount,
    productItem: productObj,
  };
  let cartObj = JSON.parse(localStorage.getItem("cart"));
  if (cartObj) {
    addNewProductToCart(productCartObj);
  } else {
    addCartObjToLocalStorage();
    addNewProductToCart(productCartObj);
  }
}

function addCartEvent() {
  let cartBtns = document.querySelectorAll(".btn-cart");
  cartBtns.forEach((btn) => btn.addEventListener("click", addProductToCart));
}

// render cart
function cartRender() {
  let cartObj = JSON.parse(localStorage.getItem("cart"));
  if (!cartObj) {
    cartTable.innerHTML = "<h3>No products in cart!</h3>";
    cartTotalCost.innerText = "Total cost: 0$";
    return;
  }
  cartTable.innerHTML = `
        <tr>
            <th class="border border-dark">Image</th>
            <th class="border border-dark">Title</th>
            <th class="border border-dark">Count</th>
            <th class="border border-dark">Price</th>
            <th class="border border-dark">Total</th>
            <th class="border border-dark">Delete</th>
        </tr>
    `;
  cartObj.products.forEach((cartProduct) => {
    cartTable.innerHTML += `
        <tr>
            <td class="border border-dark">
            <img src=${cartProduct.productItem.image} alt="error:(" width="50" height="50">
            </td>
            <td class="border border-dark">${cartProduct.productItem.title}</td>
            <td class="border border-dark">${cartProduct.count}</td>
            <td class="border border-dark">${cartProduct.productItem.price}</td>
            <td class="border border-dark">${cartProduct.totalCost}</td>
            <td class="border border-dark">
            <button class="btn btn-danger del-cart-btn" id="cart-product-${cartProduct.productItem.id}">DELETE</button>
            </td>
        </tr>
        `;
  });
  cartTotalCost.innerText = `Total cost: ${cartObj.totalCost}$`;
  addDeleteEventForCartProduct();
}

cartModalBtn.addEventListener("click", cartRender);

// remove product from cart
function deleteProductFromCart(e) {
  let productId = e.target.id.split("-");
  productId = productId[productId.length - 1];
  let cartObj = JSON.parse(localStorage.getItem("cart"));
  cartObj.products = cartObj.products.filter(
    (cartProduct) => cartProduct.productItem.id != productId
  );
  cartObj.totalCost = countCartTotalCost(cartObj.products);
  if (cartObj.products.length === 0) {
    localStorage.removeItem("cart");
  } else {
    localStorage.setItem("cart", JSON.stringify(cartObj));
  }
  cartRender();
}

function addDeleteEventForCartProduct() {
  let delCartProductBtns = document.querySelectorAll(".del-cart-btn");
  delCartProductBtns.forEach((btn) =>
    btn.addEventListener("click", deleteProductFromCart)
  );
}

// create order
const ORDERS_API = "http://localhost:1111/orders";

async function sendOrder(cartObj) {
  await fetch(ORDERS_API, {
    method: "POST",
    body: JSON.stringify(cartObj),
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
}

async function createOrder() {
  let cartObj = JSON.parse(localStorage.getItem("cart"));
  if (!cartObj) {
    alert("No products in cart!");
    return;
  }
  await sendOrder(cartObj);
  localStorage.removeItem("cart");
  cartRender();
}

createCartOrderBtn.addEventListener("click", createOrder);

// clean cart
cleanCartBtn.addEventListener("click", () => {
  localStorage.removeItem("cart");
  cartRender();
});
