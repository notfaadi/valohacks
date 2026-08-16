import type { LocaleCode } from './locales';

export type GalleryUi = {
	eyebrow: string;
	title: string;
	subtitle: string;
	lead: string;
	highlights: { title: string; copy: string }[];
	updatesLabel: string;
	updatesShort: string;
};

export const galleryUi: Record<LocaleCode, GalleryUi> = {
	en: {
		eyebrow: 'valorant hacks',
		title: 'valorant hacks gallery',
		subtitle: 'Simple valorant hacks visuals — ESP, wallhack, aimbot, and radar for Valorant on PC.',
		lead: 'Valorant Hacks helps you spot enemies with ESP, aimbot, and radar in one license.',
		highlights: [
			{ title: 'valorant hacks esp', copy: 'See players through walls with valorant hacks esp and wallhack overlays.' },
			{ title: 'valorant hacks radar', copy: 'Track nearby threats with valorant hacks radar before you push.' },
			{ title: 'valorant hacks aimbot', copy: 'Use soft aim and aimbot controls tuned for Valorant on Windows PC.' },
		],
		updatesLabel: 'valorant hacks updates',
		updatesShort: 'Updates',
	},
	es: {
		eyebrow: 'Valorant Hacks',
		title: 'Galería Valorant',
		subtitle: 'Visuales de Valorant con loadouts, peleas de escuadrón y combate match — junto a herramientas ESP, radar y Aimbot.',
		lead: 'Valorant Hacks está pensado para el loop BR de Valorant: leer el mapa, rastrear escuadrones enemigos, lootear y sobrevivir al spike.',
		highlights: [
			{ title: 'ESP de players y escuadrones', copy: 'Detecta players enemigos y contornos de escuadrón en Ascent y unrated para elegir peleas con mejor información.' },
			{ title: 'Marcadores de loot y cofres', copy: 'Resalta loadouts, cofres y loot de alto nivel sin saturar la pantalla en plena partida.' },
			{ title: 'Controles Aimbot Valorant', copy: 'Ajusta suavidad, prioridad de objetivo y teclas para AR, SMG y francotirador antes de comprar.' },
		],
		updatesLabel: 'Actualizaciones Valorant Hacks',
		updatesShort: 'Updates',
	},
	fr: {
		eyebrow: 'Valorant Hacks',
		title: 'Galerie Valorant',
		subtitle: 'Visuels Valorant — loadouts, combats d\'escouade et match — avec ESP, radar et Aimbot.',
		lead: 'Valorant Hacks suit la boucle BR de Valorant : lire la carte, suivre les escouades, loot et survivre au spike.',
		highlights: [
			{ title: 'ESP players & escouades', copy: 'Repérez les players ennemis sur Ascent et unrated pour choisir vos engagements.' },
			{ title: 'Marqueurs loot & coffres', copy: 'Mettez en évidence loadouts, coffres et loot haut niveau sans encombrer l\'écran.' },
			{ title: 'Réglages Aimbot Valorant', copy: 'Ajustez fluidité, priorité cible et raccourcis pour AR, SMG et sniper.' },
		],
		updatesLabel: 'Mises à jour Valorant Hacks',
		updatesShort: 'Updates',
	},
	de: {
		eyebrow: 'Valorant Hacks',
		title: 'Valorant Galerie',
		subtitle: 'Valorant-Bilder zu Loadouts, Squad-Kämpfen und match — mit ESP, Radar und Aimbot.',
		lead: 'Valorant Hacks passt zur Raid-Schleife von Valorant: Karte lesen, Gegner-Trupps tracken, looten und Spike überleben.',
		highlights: [
			{ title: 'Player- & Squad-ESP', copy: 'Erkenne feindliche Playeren auf Ascent und unrated für bessere Rotationsentscheidungen.' },
			{ title: 'Loot- & Vertragsmarker', copy: 'Hebe Loadout-Drops, Verträge und High-Tier-Loot hervor ohne Screen-Spam.' },
			{ title: 'Valorant Aimbot Steuerung', copy: 'Feinjustiere Glätte, Zielpriorität und Hotkeys für AR, SMG und Sniper.' },
		],
		updatesLabel: 'Valorant Hacks Updates',
		updatesShort: 'Updates',
	},
	pt: {
		eyebrow: 'Valorant Hacks',
		title: 'Galeria Valorant',
		subtitle: 'Visuais de Valorant com loadouts, combates de esquadrão e match — com ESP, radar e Aimbot.',
		lead: 'Valorant Hacks segue o loop BR do Valorant: ler o mapa, rastrear esquadrões, lootar e sobreviver ao spike.',
		highlights: [
			{ title: 'ESP de players e esquadrões', copy: 'Detecte players inimigos em Ascent e unrated para escolher lutas com melhor intel.' },
			{ title: 'Marcadores de loot e cofres', copy: 'Destaque loadouts, cofres e loot de alto nível sem poluir a tela.' },
			{ title: 'Controles Aimbot Valorant', copy: 'Ajuste suavidade, prioridade de alvo e atalhos para AR, SMG e sniper.' },
		],
		updatesLabel: 'Atualizações Valorant Hacks',
		updatesShort: 'Updates',
	},
	it: {
		eyebrow: 'Valorant Hacks',
		title: 'Galleria Valorant',
		subtitle: 'Immagini Valorant — loadout, scontri di squadra e match — con ESP, radar e Aimbot.',
		lead: 'Valorant Hacks è pensato per il loop BR di Valorant: leggere la mappa, tracciare squadre nemiche, loot e sopravvivere al spike.',
		highlights: [
			{ title: 'ESP playeri e squadre', copy: 'Individua playeri nemici su Ascent e unrated per scegliere i fight con più intel.' },
			{ title: 'Marker loot e coffreti', copy: 'Evidenzia loadout, coffreti e loot di alto livello senza riempire lo schermo.' },
			{ title: 'Controlli Aimbot Valorant', copy: 'Regola smoothness, priorità bersaglio e hotkey per AR, SMG e sniper.' },
		],
		updatesLabel: 'Aggiornamenti Valorant Hacks',
		updatesShort: 'Updates',
	},
	nl: {
		eyebrow: 'Valorant Hacks',
		title: 'Valorant galerij',
		subtitle: 'Valorant-beelden van loadouts, squadgevechten en match — met ESP, radar en Aimbot.',
		lead: 'Valorant Hacks volgt de match-loop van Valorant: kaart lezen, vijandelijke squads volgen, looten en de spike overleven.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spot vijandelijke players op Ascent en unrated voor betere rotatiebeslissingen.' },
			{ title: 'Loot- & chestmarkers', copy: 'Markeer loadout-drops, chesten en high-tier loot zonder schermoverlast.' },
			{ title: 'Valorant Aimbot instellingen', copy: 'Stel smoothness, doelprioriteit en hotkeys af voor AR, SMG en sniper.' },
		],
		updatesLabel: 'Valorant Hacks updates',
		updatesShort: 'Updates',
	},
	pl: {
		eyebrow: 'Valorant Hacks',
		title: 'Galeria Valorant',
		subtitle: 'Grafiki Valorant — loadouty, walki drużynowe i match — z ESP, radar i Aimbot.',
		lead: 'Valorant Hacks pasuje do pętli BR Valorant: czytaj mapę, śledź wrogie drużyny, lootuj i przeżyj spike.',
		highlights: [
			{ title: 'ESP players i drużyn', copy: 'Wykrywaj wrogich players na Ascent i unrated dla lepszych decyzji rotacyjnych.' },
			{ title: 'Markery lootu i skrzyń', copy: 'Podświetlaj loadouty, petity i wysokiej klasy loot bez zaśmiecania ekranu.' },
			{ title: 'Sterowanie Aimbot Valorant', copy: 'Dostosuj płynność, priorytet celu i skróty dla AR, SMG i snajperki.' },
		],
		updatesLabel: 'Aktualizacje Valorant Hacks',
		updatesShort: 'Updates',
	},
	ru: {
		eyebrow: 'Valorant Hacks',
		title: 'Галерея Valorant',
		subtitle: 'Визуалы Valorant — лоадауты, бои отрядов и match — с ESP, радаром и Aimbot.',
		lead: 'Valorant Hacks создан для рейд-циклу Valorant: читать карту, отслеживать вражеские отряды, лут и выживать в spike.',
		highlights: [
			{ title: 'ESP игроков и отрядов', copy: 'Замечайте вражеских игроков на Ascent и unrated для лучших решений по ротации.' },
			{ title: 'Маркеры лута и сундуков', copy: 'Подсвечивайте loadout, сундуки и высокий лут без перегрузки экрана.' },
			{ title: 'Настройки Aimbot Valorant', copy: 'Настройте плавность, приоритет цели и горячие клавиши для AR, SMG и снайперки.' },
		],
		updatesLabel: 'Обновления Valorant Hacks',
		updatesShort: 'Updates',
	},
	tr: {
		eyebrow: 'Valorant Hacks',
		title: 'Valorant galerisi',
		subtitle: 'Loadout, takım savaşları ve match görselleri — ESP, radar ve Aimbot ile.',
		lead: 'Valorant Hacks, Valorant BR döngüsü için: haritayı oku, düşman takımları izle, loot al ve spike\'da hayatta kal.',
		highlights: [
			{ title: 'Player ve takım ESP', copy: 'Ascent ve unrated\'da düşman playerleri görerek daha iyi rotasyon kararları alın.' },
			{ title: 'Loot ve kontrat işaretleri', copy: 'Loadout, kontrat ve üst seviye loot\'u ekranı doldurmadan vurgulayın.' },
			{ title: 'Valorant Aimbot kontrolleri', copy: 'AR, SMG ve sniper için yumuşaklık, hedef önceliği ve kısayolları ayarlayın.' },
		],
		updatesLabel: 'Valorant Hacks güncellemeleri',
		updatesShort: 'Updates',
	},
	ar: {
		eyebrow: 'Valorant Hacks',
		title: 'معرض Valorant',
		subtitle: 'صور Valorant — loadouts ومعارك الفرق وmatch — مع ESP ورادار وAimbot.',
		lead: 'Valorant Hacks مبني لحلقة BR في Valorant: قراءة الخريطة، تتبع الفرق، جمع اللوت والنجاة في spike.',
		highlights: [
			{ title: 'ESP للمشغلين والفرق', copy: 'اكتشف players المعادين على Ascent وunrated لاختيار القتالات بذكاء.' },
			{ title: 'علامات اللوت والصناديق', copy: 'أبرز loadouts والصناديق واللوت العالي دون ازدحام الشاشة.' },
			{ title: 'تحكم Aimbot Valorant', copy: 'اضبط النعومة وأولوية الهدف والاختصارات للـ AR وSMG والقناص.' },
		],
		updatesLabel: 'تحديثات Valorant Hacks',
		updatesShort: 'Updates',
	},
	ja: {
		eyebrow: 'Valorant Hacks',
		title: 'Valorant ギャラリー',
		subtitle: 'ロードアウト、スクワッド戦、BRコンバットのValorantビジュアル — ESP、レーダー、エイムボット付き。',
		lead: 'Valorant HacksはValorantのBRループ向け：マップを読み、敵スクワッドを追跡し、ルートしてspikeを生き延びる。',
		highlights: [
			{ title: 'players＆スクワッドESP', copy: 'Ascentとunratedで敵playersを把握し、ローテ判断を改善。' },
			{ title: 'ルート＆チェストマーカー', copy: 'ロードアウト、チェスト、高ティアルートを画面を埋めずに表示。' },
			{ title: 'Valorantエイムボット設定', copy: 'AR、SMG、スナイパー向けにスムーズさ、ターゲット優先度、ホットキーを調整。' },
		],
		updatesLabel: 'Valorant Hacks更新',
		updatesShort: 'Updates',
	},
	ko: {
		eyebrow: 'Valorant Hacks',
		title: 'Valorant 갤러리',
		subtitle: '로드아웃, 스쿼드 전투, BR 컴뱃 Valorant 비주얼 — ESP, 레이더, 에임봇 포함.',
		lead: 'Valorant Hacks는 Valorant BR 루프용: 맵 읽기, 적 스쿼드 추적, 루트 수집, spike 생존.',
		highlights: [
			{ title: 'players & 스쿼드 ESP', copy: 'Ascent와 unrated에서 적 players를 파악해 로테이션 결정을 개선.' },
			{ title: '루트 & 상자 마커', copy: '로드아웃, 상자, 고티어 루트를 화면을 가리지 않고 강조.' },
			{ title: 'Valorant 에임봇 컨트롤', copy: 'AR, SMG, 스나이퍼용 부드러움, 타겟 우선순위, 단축키 조정.' },
		],
		updatesLabel: 'Valorant Hacks 업데이트',
		updatesShort: 'Updates',
	},
	zh: {
		eyebrow: 'Valorant Hacks',
		title: 'Valorant 图库',
		subtitle: 'Valorant 视觉 — 配装、小队战斗和大逃杀 — 配合 ESP、雷达和自瞄。',
		lead: 'Valorant Hacks 为 Valorant BR 循环设计：读图、追踪敌方小队、搜刮并在 spike 存活。',
		highlights: [
			{ title: 'players与小队 ESP', copy: '在 Ascent 和 unrated 发现敌方players，做出更好的转点决策。' },
			{ title: '物资与宝箱标记', copy: '高亮配装、宝箱和高级物资，不遮挡屏幕。' },
			{ title: 'Valorant 自瞄控制', copy: '调整 AR、SMG 和狙击的平滑度、目标优先级和热键。' },
		],
		updatesLabel: 'Valorant Hacks 更新',
		updatesShort: 'Updates',
	},
	hi: {
		eyebrow: 'Valorant Hacks',
		title: 'Valorant गैलरी',
		subtitle: 'Loadout, squad fights और match visuals — ESP, radar और Aimbot के साथ।',
		lead: 'Valorant Hacks Valorant BR loop के लिए: map पढ़ें, enemy squads track करें, loot करें और spike survive करें।',
		highlights: [
			{ title: 'Player & Squad ESP', copy: 'Ascent और unrated पर enemy players spot करें बेहतर rotation decisions के लिए।' },
			{ title: 'Loot & Chest Markers', copy: 'Loadout drops, chests और high-tier loot highlight करें screen clutter के बिना।' },
			{ title: 'Valorant Aimbot Controls', copy: 'AR, SMG और sniper के लिए smoothness, target priority और hotkeys tune करें।' },
		],
		updatesLabel: 'Valorant Hacks updates',
		updatesShort: 'Updates',
	},
	id: {
		eyebrow: 'Valorant Hacks',
		title: 'Galeri Valorant',
		subtitle: 'Visual Valorant — loadout, pertempuran squad, dan match — dengan ESP, radar, dan Aimbot.',
		lead: 'Valorant Hacks untuk loop BR Valorant: baca peta, lacak squad musuh, loot, dan selamat di spike.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Deteksi player musuh di Ascent dan unrated untuk keputusan rotasi lebih baik.' },
			{ title: 'Marker loot & peti', copy: 'Sorot loadout, peti, dan loot tier tinggi tanpa membanjiri layar.' },
			{ title: 'Kontrol Aimbot Valorant', copy: 'Atur smoothness, prioritas target, dan hotkey untuk AR, SMG, dan sniper.' },
		],
		updatesLabel: 'Update Valorant Hacks',
		updatesShort: 'Updates',
	},
	th: {
		eyebrow: 'Valorant Hacks',
		title: 'แกลเลอรี Valorant',
		subtitle: 'ภาพ Valorant — loadout การต่อสู้ทีม และ match — พร้อม ESP เรดาร์และ Aimbot',
		lead: 'Valorant Hacks สำหรับลูป BR ของ Valorant: อ่านแผนที่ ติดตามทีมศัตรู เก็บ loot และรอด spike',
		highlights: [
			{ title: 'ESP ผู้เล่นและทีม', copy: 'มองเห็นศัตรูบน Ascent และ unrated เพื่อตัดสินใจหมุนเวียนได้ดีขึ้น' },
			{ title: 'มาร์กเกอร์ loot และหีบ', copy: 'เน้น loadout หีบและ loot ระดับสูงโดยไม่รกหน้าจอ' },
			{ title: 'ควบคุม Aimbot Valorant', copy: 'ปรับความนุ่ม ลำดับเป้าหมาย และ hotkey สำหรับ AR SMG และ sniper' },
		],
		updatesLabel: 'อัปเดต Valorant Hacks',
		updatesShort: 'Updates',
	},
	vi: {
		eyebrow: 'Valorant Hacks',
		title: 'Thư viện Valorant',
		subtitle: 'Hình ảnh Valorant — loadout, chiến đấu squad và match — với ESP, radar và Aimbot.',
		lead: 'Valorant Hacks cho vòng BR Valorant: đọc bản đồ, theo dõi squad địch, loot và sống sót spike.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Phát hiện player địch trên Ascent và unrated để quyết định rotate tốt hơn.' },
			{ title: 'Đánh dấu loot & rương', copy: 'Làm nổi bật loadout, rương và loot cao cấp mà không che màn hình.' },
			{ title: 'Điều khiển Aimbot Valorant', copy: 'Tinh chỉnh độ mượt, ưu tiên mục tiêu và phím tắt cho AR, SMG và sniper.' },
		],
		updatesLabel: 'Cập nhật Valorant Hacks',
		updatesShort: 'Updates',
	},
	uk: {
		eyebrow: 'Valorant Hacks',
		title: 'Галерея Valorant',
		subtitle: 'Візуали Valorant — loadout, бої загонів і match — з ESP, радаром і Aimbot.',
		lead: 'Valorant Hacks для рейд-циклу Valorant: читати карту, відстежувати ворожі загони, лут і виживати в spike.',
		highlights: [
			{ title: 'ESP гравців і загонів', copy: 'Помічайте ворожих гравців на Ascent і unrated для кращих ротацій.' },
			{ title: 'Маркери луту й скринь', copy: 'Підсвічуйте loadout, контракти та високий лут без перевантаження екрана.' },
			{ title: 'Налаштування Aimbot Valorant', copy: 'Налаштуйте плавність, пріоритет цілі та гарячі клавіші для AR, SMG і снайперки.' },
		],
		updatesLabel: 'Оновлення Valorant Hacks',
		updatesShort: 'Updates',
	},
	cs: {
		eyebrow: 'Valorant Hacks',
		title: 'Galerie Valorant',
		subtitle: 'Valorant vizuály — loadouty, squad souboje a match — s ESP, radarem a Aimbot.',
		lead: 'Valorant Hacks pro BR smyčku Valorant: číst mapu, sledovat nepřátelské squady, loot a přežít spike.',
		highlights: [
			{ title: 'ESP players a squadů', copy: 'Spozorujte nepřátelské operátory na Ascent a unrated pro lepší rotační rozhodnutí.' },
			{ title: 'Markery lootu a petitů', copy: 'Zvýrazněte loadouty, petity a high-tier loot bez přeplnění obrazovky.' },
			{ title: 'Ovládání Aimbot Valorant', copy: 'Nastavte smoothness, prioritu cíle a hotkeys pro AR, SMG a sniper.' },
		],
		updatesLabel: 'Aktualizace Valorant Hacks',
		updatesShort: 'Updates',
	},
	ro: {
		eyebrow: 'Valorant Hacks',
		title: 'Galerie Valorant',
		subtitle: 'Vizualuri Valorant — loadout, lupte de squad și match — cu ESP, radar și Aimbot.',
		lead: 'Valorant Hacks pentru bucla BR Valorant: citește harta, urmărește squad-uri inamice, loot și supraviețuiește spike.',
		highlights: [
			{ title: 'ESP playeri și squad-uri', copy: 'Detectează playeri inamici pe Ascent și unrated pentru decizii de rotație mai bune.' },
			{ title: 'Markere loot și cheste', copy: 'Evidențiază loadout-uri, cheste și loot de nivel înalt fără a aglomera ecranul.' },
			{ title: 'Controale Aimbot Valorant', copy: 'Ajustează smoothness, prioritate țintă și hotkeys pentru AR, SMG și sniper.' },
		],
		updatesLabel: 'Actualizări Valorant Hacks',
		updatesShort: 'Updates',
	},
	sv: {
		eyebrow: 'Valorant Hacks',
		title: 'Valorant galleri',
		subtitle: 'Valorant-bilder — loadouts, squadstrider och match — med ESP, radar och Aimbot.',
		lead: 'Valorant Hacks för Valorant:s match-loop: läs kartan, spåra fiendesquads, loota och överlev spike.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spotta fiendeplayerer på Ascent och unrated för bättre rotationsbeslut.' },
			{ title: 'Loot- & petitsmarkörer', copy: 'Markera loadout-drops, petit och high-tier loot utan skärmklutter.' },
			{ title: 'Valorant Aimbot-kontroller', copy: 'Justera smoothness, målprioritet och snabbtangenter för AR, SMG och sniper.' },
		],
		updatesLabel: 'Valorant Hacks uppdateringar',
		updatesShort: 'Updates',
	},
};

export function getGalleryUi(locale: LocaleCode): GalleryUi {
	return galleryUi[locale];
}
