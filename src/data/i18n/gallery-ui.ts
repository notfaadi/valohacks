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
		eyebrow: 'Valorant Cheats',
		title: 'Valorant gallery',
		subtitle:
			'Valorant visuals from loadout builds, squad fights, and battle royale combat — paired with cheat tools that help players stay aware on the map.',
		lead:
			'Valorant Cheats is built for Valorant\'s BR loop: read the map, track enemy squads, grab loot, and survive the clutch before the final circle closes in.',
		highlights: [
			{ title: 'Player & Squad ESP', copy: 'Spot enemy players and squad outlines across Bind and Competitive so you can choose fights and rotation routes with better intel.' },
			{ title: 'Loot & Chest Markers', copy: 'Highlight loadout drops, chests, and high-tier loot without flooding the screen mid-match.' },
			{ title: 'Valorant Aimbot Controls', copy: 'Tune smoothness, target priority, and hotkeys for AR, SMG, and sniper fights before you commit to a license.' },
		],
		updatesLabel: 'Valorant cheat updates',
		updatesShort: 'Updates',
	},
	es: {
		eyebrow: 'Valorant Cheats',
		title: 'Galería Valorant',
		subtitle: 'Visuales de Valorant con loadouts, peleas de escuadrón y combate battle royale — junto a herramientas ESP, radar y Aimbot.',
		lead: 'Valorant Cheats está pensado para el loop BR de Valorant: leer el mapa, rastrear escuadrones enemigos, lootear y sobrevivir al clutch.',
		highlights: [
			{ title: 'ESP de players y escuadrones', copy: 'Detecta players enemigos y contornos de escuadrón en Bind y Competitive para elegir peleas con mejor información.' },
			{ title: 'Marcadores de loot y cofres', copy: 'Resalta loadouts, cofres y loot de alto nivel sin saturar la pantalla en plena partida.' },
			{ title: 'Controles Aimbot Valorant', copy: 'Ajusta suavidad, prioridad de objetivo y teclas para AR, SMG y francotirador antes de comprar.' },
		],
		updatesLabel: 'Actualizaciones Valorant Cheats',
		updatesShort: 'Updates',
	},
	fr: {
		eyebrow: 'Valorant Cheats',
		title: 'Galerie Valorant',
		subtitle: 'Visuels Valorant — loadouts, combats d\'escouade et battle royale — avec ESP, radar et Aimbot.',
		lead: 'Valorant Cheats suit la boucle BR de Valorant : lire la carte, suivre les escouades, loot et survivre au clutch.',
		highlights: [
			{ title: 'ESP players & escouades', copy: 'Repérez les players ennemis sur Bind et Competitive pour choisir vos engagements.' },
			{ title: 'Marqueurs loot & coffres', copy: 'Mettez en évidence loadouts, coffres et loot haut niveau sans encombrer l\'écran.' },
			{ title: 'Réglages Aimbot Valorant', copy: 'Ajustez fluidité, priorité cible et raccourcis pour AR, SMG et sniper.' },
		],
		updatesLabel: 'Mises à jour Valorant Cheats',
		updatesShort: 'Updates',
	},
	de: {
		eyebrow: 'Valorant Cheats',
		title: 'Valorant Galerie',
		subtitle: 'Valorant-Bilder zu Loadouts, Squad-Kämpfen und Unrated — mit ESP, Radar und Aimbot.',
		lead: 'Valorant Cheats passt zur BR-Schleife von Valorant: Karte lesen, Gegner-Trupps tracken, looten und Reboot van überleben.',
		highlights: [
			{ title: 'Player- & Squad-ESP', copy: 'Erkenne feindliche Playeren auf Bind und Competitive für bessere Rotationsentscheidungen.' },
			{ title: 'Loot- & Vertragsmarker', copy: 'Hebe Loadout-Drops, Verträge und High-Tier-Loot hervor ohne Screen-Spam.' },
			{ title: 'Valorant Aimbot Steuerung', copy: 'Feinjustiere Glätte, Zielpriorität und Hotkeys für AR, SMG und Sniper.' },
		],
		updatesLabel: 'Valorant Cheats Updates',
		updatesShort: 'Updates',
	},
	pt: {
		eyebrow: 'Valorant Cheats',
		title: 'Galeria Valorant',
		subtitle: 'Visuais de Valorant com loadouts, combates de esquadrão e battle royale — com ESP, radar e Aimbot.',
		lead: 'Valorant Cheats segue o loop BR do Valorant: ler o mapa, rastrear esquadrões, lootar e sobreviver ao clutch.',
		highlights: [
			{ title: 'ESP de players e esquadrões', copy: 'Detecte players inimigos em Bind e Competitive para escolher lutas com melhor intel.' },
			{ title: 'Marcadores de loot e cofres', copy: 'Destaque loadouts, cofres e loot de alto nível sem poluir a tela.' },
			{ title: 'Controles Aimbot Valorant', copy: 'Ajuste suavidade, prioridade de alvo e atalhos para AR, SMG e sniper.' },
		],
		updatesLabel: 'Atualizações Valorant Cheats',
		updatesShort: 'Updates',
	},
	it: {
		eyebrow: 'Valorant Cheats',
		title: 'Galleria Valorant',
		subtitle: 'Immagini Valorant — loadout, scontri di squadra e battle royale — con ESP, radar e Aimbot.',
		lead: 'Valorant Cheats è pensato per il loop BR di Valorant: leggere la mappa, tracciare squadre nemiche, loot e sopravvivere al clutch.',
		highlights: [
			{ title: 'ESP playeri e squadre', copy: 'Individua playeri nemici su Bind e Competitive per scegliere i fight con più intel.' },
			{ title: 'Marker loot e coffreti', copy: 'Evidenzia loadout, coffreti e loot di alto livello senza riempire lo schermo.' },
			{ title: 'Controlli Aimbot Valorant', copy: 'Regola smoothness, priorità bersaglio e hotkey per AR, SMG e sniper.' },
		],
		updatesLabel: 'Aggiornamenti Valorant Cheats',
		updatesShort: 'Updates',
	},
	nl: {
		eyebrow: 'Valorant Cheats',
		title: 'Valorant galerij',
		subtitle: 'Valorant-beelden van loadouts, squadgevechten en battle royale — met ESP, radar en Aimbot.',
		lead: 'Valorant Cheats volgt de BR-loop van Valorant: kaart lezen, vijandelijke squads volgen, looten en de clutch overleven.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spot vijandelijke players op Bind en Competitive voor betere rotatiebeslissingen.' },
			{ title: 'Loot- & chestmarkers', copy: 'Markeer loadout-drops, chesten en high-tier loot zonder schermoverlast.' },
			{ title: 'Valorant Aimbot instellingen', copy: 'Stel smoothness, doelprioriteit en hotkeys af voor AR, SMG en sniper.' },
		],
		updatesLabel: 'Valorant Cheats updates',
		updatesShort: 'Updates',
	},
	pl: {
		eyebrow: 'Valorant Cheats',
		title: 'Galeria Valorant',
		subtitle: 'Grafiki Valorant — loadouty, walki drużynowe i battle royale — z ESP, radar i Aimbot.',
		lead: 'Valorant Cheats pasuje do pętli BR Valorant: czytaj mapę, śledź wrogie drużyny, lootuj i przeżyj clutch.',
		highlights: [
			{ title: 'ESP players i drużyn', copy: 'Wykrywaj wrogich players na Bind i Competitive dla lepszych decyzji rotacyjnych.' },
			{ title: 'Markery lootu i skrzyń', copy: 'Podświetlaj loadouty, petity i wysokiej klasy loot bez zaśmiecania ekranu.' },
			{ title: 'Sterowanie Aimbot Valorant', copy: 'Dostosuj płynność, priorytet celu i skróty dla AR, SMG i snajperki.' },
		],
		updatesLabel: 'Aktualizacje Valorant Cheats',
		updatesShort: 'Updates',
	},
	ru: {
		eyebrow: 'Valorant Cheats',
		title: 'Галерея Valorant',
		subtitle: 'Визуалы Valorant — лоадауты, бои отрядов и battle royale — с ESP, радаром и Aimbot.',
		lead: 'Valorant Cheats создан для BR-цикла Valorant: читать карту, отслеживать вражеские отряды, лут и выживать в clutch.',
		highlights: [
			{ title: 'ESP игроков и отрядов', copy: 'Замечайте вражеских игроков на Bind и Competitive для лучших решений по ротации.' },
			{ title: 'Маркеры лута и сундуков', copy: 'Подсвечивайте loadout, сундуки и высокий лут без перегрузки экрана.' },
			{ title: 'Настройки Aimbot Valorant', copy: 'Настройте плавность, приоритет цели и горячие клавиши для AR, SMG и снайперки.' },
		],
		updatesLabel: 'Обновления Valorant Cheats',
		updatesShort: 'Updates',
	},
	tr: {
		eyebrow: 'Valorant Cheats',
		title: 'Valorant galerisi',
		subtitle: 'Loadout, takım savaşları ve battle royale görselleri — ESP, radar ve Aimbot ile.',
		lead: 'Valorant Cheats, Valorant BR döngüsü için: haritayı oku, düşman takımları izle, loot al ve clutch\'da hayatta kal.',
		highlights: [
			{ title: 'Player ve takım ESP', copy: 'Bind ve Competitive\'da düşman playerleri görerek daha iyi rotasyon kararları alın.' },
			{ title: 'Loot ve kontrat işaretleri', copy: 'Loadout, kontrat ve üst seviye loot\'u ekranı doldurmadan vurgulayın.' },
			{ title: 'Valorant Aimbot kontrolleri', copy: 'AR, SMG ve sniper için yumuşaklık, hedef önceliği ve kısayolları ayarlayın.' },
		],
		updatesLabel: 'Valorant Cheats güncellemeleri',
		updatesShort: 'Updates',
	},
	ar: {
		eyebrow: 'Valorant Cheats',
		title: 'معرض Valorant',
		subtitle: 'صور Valorant — loadouts ومعارك الفرق وbattle royale — مع ESP ورادار وAimbot.',
		lead: 'Valorant Cheats مبني لحلقة BR في Valorant: قراءة الخريطة، تتبع الفرق، جمع اللوت والنجاة في clutch.',
		highlights: [
			{ title: 'ESP للمشغلين والفرق', copy: 'اكتشف players المعادين على Bind وCompetitive لاختيار القتالات بذكاء.' },
			{ title: 'علامات اللوت والصناديق', copy: 'أبرز loadouts والصناديق واللوت العالي دون ازدحام الشاشة.' },
			{ title: 'تحكم Aimbot Valorant', copy: 'اضبط النعومة وأولوية الهدف والاختصارات للـ AR وSMG والقناص.' },
		],
		updatesLabel: 'تحديثات Valorant Cheats',
		updatesShort: 'Updates',
	},
	ja: {
		eyebrow: 'Valorant Cheats',
		title: 'Valorant ギャラリー',
		subtitle: 'ロードアウト、スクワッド戦、BRコンバットのValorantビジュアル — ESP、レーダー、エイムボット付き。',
		lead: 'Valorant CheatsはValorantのBRループ向け：マップを読み、敵スクワッドを追跡し、ルートしてclutchを生き延びる。',
		highlights: [
			{ title: 'players＆スクワッドESP', copy: 'BindとCompetitiveで敵playersを把握し、ローテ判断を改善。' },
			{ title: 'ルート＆チェストマーカー', copy: 'ロードアウト、チェスト、高ティアルートを画面を埋めずに表示。' },
			{ title: 'Valorantエイムボット設定', copy: 'AR、SMG、スナイパー向けにスムーズさ、ターゲット優先度、ホットキーを調整。' },
		],
		updatesLabel: 'Valorant Cheats更新',
		updatesShort: 'Updates',
	},
	ko: {
		eyebrow: 'Valorant Cheats',
		title: 'Valorant 갤러리',
		subtitle: '로드아웃, 스쿼드 전투, BR 컴뱃 Valorant 비주얼 — ESP, 레이더, 에임봇 포함.',
		lead: 'Valorant Cheats는 Valorant BR 루프용: 맵 읽기, 적 스쿼드 추적, 루트 수집, clutch 생존.',
		highlights: [
			{ title: 'players & 스쿼드 ESP', copy: 'Bind와 Competitive에서 적 players를 파악해 로테이션 결정을 개선.' },
			{ title: '루트 & 상자 마커', copy: '로드아웃, 상자, 고티어 루트를 화면을 가리지 않고 강조.' },
			{ title: 'Valorant 에임봇 컨트롤', copy: 'AR, SMG, 스나이퍼용 부드러움, 타겟 우선순위, 단축키 조정.' },
		],
		updatesLabel: 'Valorant Cheats 업데이트',
		updatesShort: 'Updates',
	},
	zh: {
		eyebrow: 'Valorant Cheats',
		title: 'Valorant 图库',
		subtitle: 'Valorant 视觉 — 配装、小队战斗和大逃杀 — 配合 ESP、雷达和自瞄。',
		lead: 'Valorant Cheats 为 Valorant BR 循环设计：读图、追踪敌方小队、搜刮并在 clutch 存活。',
		highlights: [
			{ title: 'players与小队 ESP', copy: '在 Bind 和 Competitive 发现敌方players，做出更好的转点决策。' },
			{ title: '物资与宝箱标记', copy: '高亮配装、宝箱和高级物资，不遮挡屏幕。' },
			{ title: 'Valorant 自瞄控制', copy: '调整 AR、SMG 和狙击的平滑度、目标优先级和热键。' },
		],
		updatesLabel: 'Valorant Cheats 更新',
		updatesShort: 'Updates',
	},
	hi: {
		eyebrow: 'Valorant Cheats',
		title: 'Valorant गैलरी',
		subtitle: 'Loadout, squad fights और battle royale visuals — ESP, radar और Aimbot के साथ।',
		lead: 'Valorant Cheats Valorant BR loop के लिए: map पढ़ें, enemy squads track करें, loot करें और clutch survive करें।',
		highlights: [
			{ title: 'Player & Squad ESP', copy: 'Bind और Competitive पर enemy players spot करें बेहतर rotation decisions के लिए।' },
			{ title: 'Loot & Chest Markers', copy: 'Loadout drops, chests और high-tier loot highlight करें screen clutter के बिना।' },
			{ title: 'Valorant Aimbot Controls', copy: 'AR, SMG और sniper के लिए smoothness, target priority और hotkeys tune करें।' },
		],
		updatesLabel: 'Valorant Cheats updates',
		updatesShort: 'Updates',
	},
	id: {
		eyebrow: 'Valorant Cheats',
		title: 'Galeri Valorant',
		subtitle: 'Visual Valorant — loadout, pertempuran squad, dan battle royale — dengan ESP, radar, dan Aimbot.',
		lead: 'Valorant Cheats untuk loop BR Valorant: baca peta, lacak squad musuh, loot, dan selamat di clutch.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Deteksi player musuh di Bind dan Competitive untuk keputusan rotasi lebih baik.' },
			{ title: 'Marker loot & peti', copy: 'Sorot loadout, peti, dan loot tier tinggi tanpa membanjiri layar.' },
			{ title: 'Kontrol Aimbot Valorant', copy: 'Atur smoothness, prioritas target, dan hotkey untuk AR, SMG, dan sniper.' },
		],
		updatesLabel: 'Update Valorant Cheats',
		updatesShort: 'Updates',
	},
	th: {
		eyebrow: 'Valorant Cheats',
		title: 'แกลเลอรี Valorant',
		subtitle: 'ภาพ Valorant — loadout การต่อสู้ทีม และ battle royale — พร้อม ESP เรดาร์และ Aimbot',
		lead: 'Valorant Cheats สำหรับลูป BR ของ Valorant: อ่านแผนที่ ติดตามทีมศัตรู เก็บ loot และรอด clutch',
		highlights: [
			{ title: 'ESP ผู้เล่นและทีม', copy: 'มองเห็นศัตรูบน Bind และ Competitive เพื่อตัดสินใจหมุนเวียนได้ดีขึ้น' },
			{ title: 'มาร์กเกอร์ loot และหีบ', copy: 'เน้น loadout หีบและ loot ระดับสูงโดยไม่รกหน้าจอ' },
			{ title: 'ควบคุม Aimbot Valorant', copy: 'ปรับความนุ่ม ลำดับเป้าหมาย และ hotkey สำหรับ AR SMG และ sniper' },
		],
		updatesLabel: 'อัปเดต Valorant Cheats',
		updatesShort: 'Updates',
	},
	vi: {
		eyebrow: 'Valorant Cheats',
		title: 'Thư viện Valorant',
		subtitle: 'Hình ảnh Valorant — loadout, chiến đấu squad và battle royale — với ESP, radar và Aimbot.',
		lead: 'Valorant Cheats cho vòng BR Valorant: đọc bản đồ, theo dõi squad địch, loot và sống sót clutch.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Phát hiện player địch trên Bind và Competitive để quyết định rotate tốt hơn.' },
			{ title: 'Đánh dấu loot & rương', copy: 'Làm nổi bật loadout, rương và loot cao cấp mà không che màn hình.' },
			{ title: 'Điều khiển Aimbot Valorant', copy: 'Tinh chỉnh độ mượt, ưu tiên mục tiêu và phím tắt cho AR, SMG và sniper.' },
		],
		updatesLabel: 'Cập nhật Valorant Cheats',
		updatesShort: 'Updates',
	},
	uk: {
		eyebrow: 'Valorant Cheats',
		title: 'Галерея Valorant',
		subtitle: 'Візуали Valorant — loadout, бої загонів і battle royale — з ESP, радаром і Aimbot.',
		lead: 'Valorant Cheats для BR-циклу Valorant: читати карту, відстежувати ворожі загони, лут і виживати в clutch.',
		highlights: [
			{ title: 'ESP гравців і загонів', copy: 'Помічайте ворожих гравців на Bind і Competitive для кращих ротацій.' },
			{ title: 'Маркери луту й скринь', copy: 'Підсвічуйте loadout, контракти та високий лут без перевантаження екрана.' },
			{ title: 'Налаштування Aimbot Valorant', copy: 'Налаштуйте плавність, пріоритет цілі та гарячі клавіші для AR, SMG і снайперки.' },
		],
		updatesLabel: 'Оновлення Valorant Cheats',
		updatesShort: 'Updates',
	},
	cs: {
		eyebrow: 'Valorant Cheats',
		title: 'Galerie Valorant',
		subtitle: 'Valorant vizuály — loadouty, squad souboje a battle royale — s ESP, radarem a Aimbot.',
		lead: 'Valorant Cheats pro BR smyčku Valorant: číst mapu, sledovat nepřátelské squady, loot a přežít clutch.',
		highlights: [
			{ title: 'ESP players a squadů', copy: 'Spozorujte nepřátelské operátory na Bind a Competitive pro lepší rotační rozhodnutí.' },
			{ title: 'Markery lootu a petitů', copy: 'Zvýrazněte loadouty, petity a high-tier loot bez přeplnění obrazovky.' },
			{ title: 'Ovládání Aimbot Valorant', copy: 'Nastavte smoothness, prioritu cíle a hotkeys pro AR, SMG a sniper.' },
		],
		updatesLabel: 'Aktualizace Valorant Cheats',
		updatesShort: 'Updates',
	},
	ro: {
		eyebrow: 'Valorant Cheats',
		title: 'Galerie Valorant',
		subtitle: 'Vizualuri Valorant — loadout, lupte de squad și battle royale — cu ESP, radar și Aimbot.',
		lead: 'Valorant Cheats pentru bucla BR Valorant: citește harta, urmărește squad-uri inamice, loot și supraviețuiește clutch.',
		highlights: [
			{ title: 'ESP playeri și squad-uri', copy: 'Detectează playeri inamici pe Bind și Competitive pentru decizii de rotație mai bune.' },
			{ title: 'Markere loot și cheste', copy: 'Evidențiază loadout-uri, cheste și loot de nivel înalt fără a aglomera ecranul.' },
			{ title: 'Controale Aimbot Valorant', copy: 'Ajustează smoothness, prioritate țintă și hotkeys pentru AR, SMG și sniper.' },
		],
		updatesLabel: 'Actualizări Valorant Cheats',
		updatesShort: 'Updates',
	},
	sv: {
		eyebrow: 'Valorant Cheats',
		title: 'Valorant galleri',
		subtitle: 'Valorant-bilder — loadouts, squadstrider och battle royale — med ESP, radar och Aimbot.',
		lead: 'Valorant Cheats för Valorant:s BR-loop: läs kartan, spåra fiendesquads, loota och överlev clutch.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spotta fiendeplayerer på Bind och Competitive för bättre rotationsbeslut.' },
			{ title: 'Loot- & petitsmarkörer', copy: 'Markera loadout-drops, petit och high-tier loot utan skärmklutter.' },
			{ title: 'Valorant Aimbot-kontroller', copy: 'Justera smoothness, målprioritet och snabbtangenter för AR, SMG och sniper.' },
		],
		updatesLabel: 'Valorant Cheats uppdateringar',
		updatesShort: 'Updates',
	},
};

export function getGalleryUi(locale: LocaleCode): GalleryUi {
	return galleryUi[locale];
}
