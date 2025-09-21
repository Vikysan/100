export const data = [
    {
      task: 'Rozdělení el. zařízení podle napětí mezi vodičem a zemí v uzemněné soustavě je:',
      options: [{
        text:'mn do 50 V, nn 50 - 600 V, vn 0,6 - 30 kV',
        isTrue:true
      },
      {
        text:'mn do 50 V, nn 50 - 1000 V, vn 1 - 35 kV',
        isTrue:false
      },
      {
        text:'mn do 50 V, nn 50 - 400 V, vn 0,4 - 22 kV',
        isTrue:false
      }
    ]
     
    }, {
        task: 'Rozdělení el. zařízení podle napětí mezi vodiči v uzemněné AC soustavě je:',
        options: [{
          text:'mn do 50 V, nn 50 - 1000 V, vn 1 - 52 kV',
          isTrue:true
        },
        {
          text:'mn do 50 V, nn 50 - 1000 V, vn 1 - 35 kV',
          isTrue:false
        },
        {
          text:'mn do 50 V, nn 50 - 400 V, vn 0,4 - 22 kV',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Podle účelu se el. zařízení dělí na:',
        options: [{
          text:'silová, sdělovací a řídící',
          isTrue:true
        },
        {
          text:'silnoproudá, slaboproudá, sdělovací',
          isTrue:false
        },
        {
          text:'drážní, báňská, vojenská',
          isTrue:false
        }
      ]
       
      }, {
        task: 'K řízení činnosti v blízkosti přívodní kolejnice metra pod napětím musí mít pracovník minimální kvalifikaci:',
        options: [{
          text:'Osoba poučená dle vyhlášky 100/1995 Sb. a musí být pro tuto činnost určen',
          isTrue:true
        },
        {
          text:'Osoba poučená dle vyhlášky 50/1978 Sb. a musí být pro tuto činnost určen',
          isTrue:false
        },
        {
          text:'Osoba poučená dle vyhlášky 101/1995 Sb. a musí být pro tuto činnost určen',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Zkratování přívodní kolejnice pevně namontovanými zkratovači pro zajištění pracoviště v celkové přepravní výluce nebo při částečné výluce mohou provádět pracovníci s kvalifikací minimálně:',
        options: [{
          text:'Osoba poučená dle vyhl. 100/1995 Sb.',
          isTrue:true
        },
        {
          text:'Osoba znalá dle vyhl. 100/1995 Sb.',
          isTrue:false
        },
        {
          text:'Osoba znalá s vyšší kvalifikací dle vyhl. 100/1995 Sb.',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Při práci v blízkosti přívodní kolejnice metra se mohou pracovníci s kvalifikací pracovník znalý přiblížit k přívodní kolejnici pod napětím, je-li práce prováděna pod dohledem, na vzdálenost:',
        options: [{
          text:'nejblíže 40 centimetrů',
          isTrue:true
        },
        {
          text:'nejblíže 20 centimetrů',
          isTrue:false
        },
        {
          text:'nejblíže 1 metr',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Při práci v blízkosti trakčního vedení (sběrač vozidla, přívodní kolejnice, trolejový vodič, napájecí vlečný kabel) se mohou pracovníci s kvalifikací pracovník znalý přiblížit k živým částem pod napětím, je-li práce prováděna pod dohledem, na vzdálenost:',
        options: [{
          text:'nejblíže 40 centimetrů',
          isTrue:true
        },
        {
          text:'nejblíže 20 centimetrů',
          isTrue:false
        },
        {
          text:'nejblíže 1 metr',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Při práci v blízkosti trakčního vedení (sběrač vozidla, přívodní kolejnice, trolejový vodič, napájecí vlečný kabel) se mohou pracovníci s kvalifikací pracovník znalý přiblížit k živým částem pod napětím, je-li práce prováděna pod dozorem,na vzdálenost:',
        options: [{
          text:'nejblíže 20cm',
          isTrue:true
        },
        {
          text:'nejblíže 1m',
          isTrue:false
        },
        {
          text:'nejblíže 40cm',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Určená lhůta revize elektrických zařízení ve zděných obytných a kancelářských budovách je:',
        options: [{
          text:'5 roků',
          isTrue:true
        },
        {
          text:'3 roky',
          isTrue:false
        },
        {
          text:'2 roky',
          isTrue:false
        }
      ]
       
      }, {
        task: 'O stanovení prostředí z hlediska působení na el. zařízení:',
        options: [{
          text:'musí být písemný doklad',
          isTrue:true
        },
        {
          text:'se nemusí vyplňovat doklad, pokud je prostředí určeno v revizní zprávě',
          isTrue:false
        },
        {
          text:'nemusí být písemný doklad',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Elektrická síť, ve které určitý bod pracovního obvodu je bezprostředně uzemněn se nazývá síť :',
        options: [{
          text:'TN',
          isTrue:true
        },
        {
          text:'IT',
          isTrue:false
        },
        {
          text:'TT',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Ochrana před nebezpečným dotykem musí splňovat (mimo jiné) tyto požadavky:',
        options: [{
          text:'kombinace ochrany základní a opatření pro zajištění ochrany při poruše',
          isTrue:true
        },
        {
          text:'kombinace ochrany doplňkové a proudového chrániče',
          isTrue:false
        },
        {
          text:'kombinace ochrany nulováním a uzemněním',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Mohou se různá ochranná opatření ve stejné instalaci vzájemně ovlivňovat?',
        options: [{
          text:'nesmí',
          isTrue:true
        },
        {
          text:'musí aby byla zajištěna správná funkce proudových chráničů',
          isTrue:false
        },
        {
          text:'nesmí, výjímkou jsou jistící prvky umístěné za společným proudovým chráničem ve směru napájení',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Neživé vodivé části se nemusí chránit před nebezpečným dotykem v případě, že:',
        options: [{
          text:'se jedná o malé části (do rozměru 50x50 mm)',
          isTrue:true
        },
        {
          text:'se jedná o části opatřené výstražným označením (výstražná tabulka, značka blesku ap.)',
          isTrue:false
        },
        {
          text:'se jedná o části umístěné v prostoru nepřístupném osobám bez elektrotechnické kvalifikace',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Ochrana automatickým odpojením od zdroje je zajištěna:',
        options: [{
          text:'základní izolací a ochranným pospojováním, které zajišťuje automatické odpojení od zdroje',
          isTrue:true
        },
        {
          text:'základní izolací a ochranným pospojováním pomocí vodiče N, který zajišťuje automatické odpojení od zdroje',
          isTrue:false
        },
        {
          text:'základní izolací a nadproudovou ochranou, která zajišťuje automatické odpojení od zdroje',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Obvody SELV :',
        options: [{
          text:'živé části nesmějí být spojeny se zemí nebo s jinými živými částmi',
          isTrue:true
        },
        {
          text:'živé části mohou být spojeny se zemí nebo s jinými živými částmi',
          isTrue:false
        },
        {
          text:'živé části musí být uzemněné',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Ochranné uzemnění elektrických předmětů musí být provedeno takto:',
        options: [{
          text:'každá neživá část musí být spojena se stejnou uzemňovací soustavou',
          isTrue:true
        },
        {
          text:'každá neživá část musí být spojena s vlastním uzemněním',
          isTrue:false
        },
        {
          text:'každá neživá část musí být spojena s ostatními neživým částmi',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Ochranné pospojování něživých částí musí být provedeno takto:',
        options: [{
          text:'jednotlivé neživé části se pospojí navzájem a se všemi vodivými předměty přístupnými dotyku',
          isTrue:true
        },
        {
          text:'jednotlivé neživé části se pospojí navzájem ochranným vodičem',
          isTrue:false
        },
        {
          text:'jednotlivé neživé části se pospojí s nejbližšími vodivými předměty',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Použití proudového chrániče s I vyp = 30 mA je předepsáno pro:',
        options: [{
          text:'zásuvky 230V do 32 A určené pro všeobecné použití',
          isTrue:true
        },
        {
          text:'pro zásuvky 230V do 20 A určené pro výpočetní techniku',
          isTrue:false
        },
        {
          text:'pro zásuvky 400V do 20 A pro všeobecné použití',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Použití proudového chrániče s I vyp = 30 mA v zásuvkových obvodech je předepsáno',
        options: [{
          text:'v případech, kdy jsou zásuvky používány osobami bez elektrotechnické kvalifikace',
          isTrue:true
        },
        {
          text:'ve všech případech',
          isTrue:false
        },
        {
          text:'v případech, kdy to technologické zařízení vyžaduje',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Maximální doba odpojení na konci obvodu 230 V AC při instalaci zásuvky 32 A je',
        options: [{
          text:'0,2 s',
          isTrue:true
        },
        {
          text:'0,2 ms',
          isTrue:false
        },
        {
          text:'0,4 h',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Ochranný vodič PE (příp. PEN) musí být proveden tak, aby:',
        options: [{
          text:'v jeho obvodu nebylo spínací, odpojovací nebo jistící zařízení',
          isTrue:true
        },
        {
          text:'v jeho obvodu bylo pouze odpojovací zařízení',
          isTrue:false
        },
        {
          text:'v jeho obvodu bylo odpovídající jistící zařízení',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Charakteristiky ochranných přístrojů a impedancí musí splňovat tento požadavek:',
        options: [{
          text:'Zs × Ia ≤ Uo',
          isTrue:true
        },
        {
          text:'R = U / I',
          isTrue:false
        },
        {
          text:'P = U x I',
          isTrue:false
        }
      ]
       
      }, {
        task: 'V sítích TN mohou být pro ochranu při poruše (ochranu před nepřímým dotykem) použity následující ochranné přístroje:',
        options: [{
          text:'nadproudové ochranné přístroje; proudové chrániče (RCD) s nadproudovou ochranou',
          isTrue:true
        },
        {
          text:'nadproudové ochranné přístroje nebo proudové chrániče (RCD)',
          isTrue:false
        },
        {
          text:'pouze chrániče',
          isTrue:false
        }
      ]
       
      }, {
        task: 'V sítích IT musí být živé části:',
        options: [{
          text:'izolovány od země nebo spojeny se zemí přes dostatečně vysokou impedanci',
          isTrue:true
        },
        {
          text:'izolovány od vodivých předmětů',
          isTrue:false
        },
        {
          text:'být alespoň jedním vodičem spojeny se zemí',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Zásuvky v obvodech s ochranou FELV musí být provedeny tak, aby:',
        options: [{
          text:'byly nezáměnné s jinými systémy a měly ochranný kontakt',
          isTrue:true
        },
        {
          text:'byly stejného provedení s jinými systémy a měly ochranný kontakt',
          isTrue:false
        },
        {
          text:'byly nezáměnné s jinými systémy a bez ochranného kontaktu',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Pro kryty zařízení třídy ochrany II platí:',
        options: [{
          text:'kryt nesmí obsahovat šrouby nebo jiné upevňovací prostředky, které by mohly narušit izolaci',
          isTrue:true
        },
        {
          text:'kryt může obsahovat malé vodivé součásti (šroubky nebo nýty pro upevnění štítků ap.) procházející krytem',
          isTrue:false
        },
        {
          text:'krytem smějí procházet vodivé části které mohou přenášet napětí',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Při ochraně použitím zařízení třídy ochrany II :',
        options: [{
          text:'nesmějí izolačním krytem procházet vodivá zařízení',
          isTrue:true
        },
        {
          text:'musí kryt obsahovat svorku pro připojení PE vodiče',
          isTrue:false
        },
        {
          text:'musí být maximální napětí do 50 V AC a 120 V DC',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Vodivé části uvnitř předmětu třídy ochrany II se:',
        options: [{
          text:'nesmí spojit s ochranným vodičem',
          isTrue:true
        },
        {
          text:'musí spojit s ochranným vodičem',
          isTrue:false
        },
        {
          text:'musí spojit s ochranným pospojováním',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Zařízení třídy ochrany I, doplněné při montáži přídavnou izolací tak, aby provedení odpovídalo třídě ochrany II musí být označeno:',
        options: [{
          text:'značkou přeškrtnutá značka uzemnění',
          isTrue:true
        },
        {
          text:'značkou dva čtverečky v sobě (označ. třídy II)',
          isTrue:false
        },
        {
          text:'výstražným bleskem',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Proudový chránič se pro ochranu před nebezpečným dotykem smí použít jako:',
        options: [{
          text:'ochrana doplňková',
          isTrue:true
        },
        {
          text:'ochrana základní',
          isTrue:false
        },
        {
          text:'ochrana zvýšená',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Doplňující ochranné pospojování musí zahrnovat:',
        options: [{
          text:'spojení všech neživých částí upevněných zařízení, cizích vodivých částí spojených se zemí a s ochrannými vodiči včetně zásuvek',
          isTrue:true
        },
        {
          text:'spojení všech neživých částí upevněných zařízení, cizích vodivých částí spojených se zemí a s nulovými a ochrannými vodiči v daném prostoru',
          isTrue:false
        },
        {
          text:'spojení všech neživých částí upevněných zařízení a spojení s hlavním ochranným vodičem',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Přepážky nebo kryty zabraňující nebezpečnému dotyku:',
        options: [{
          text:'mohou být odejmuty pouze nástrojem nebo klíčem',
          isTrue:true
        },
        {
          text:'mohou být odejmuty bez nástroje nebo klíče jen za předpokladu, že jsou označeny výstražnou tabulkou "přístup jen osobám pověřeným"',
          isTrue:false
        },
        {
          text:'mohou být odejmuty jen po souhlasu vydaným oprávněnou osobou',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Zábrany musí bránit:',
        options: [{
          text:'nahodilému dotyku živých částí během činnosti zařízení pod napětím v běžném provozu',
          isTrue:true
        },
        {
          text:'úmyslnému dotyku živých částí během činnosti zařízení pod napětím v běžném provozu',
          isTrue:false
        },
        {
          text:'nahodilému dotyku neživých částí během činnosti zařízení pod napětím v běžném provozu',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Při ochraně polohou u zařízení do 1000V musí být živé části vzdáleny od stanoviště nejméně:',
        options: [{
          text:'2,5 metru',
          isTrue:true
        },
        {
          text:'5,5 metru',
          isTrue:false
        },
        {
          text:'1,3 metru',
          isTrue:false
        }
      ]
       
      }, {
        task: 'V síti TN-C:',
        options: [{
          text:'nesmí být vodič PEN ani odpojován ani spínán',
          isTrue:true
        },
        {
          text:'nemusí být vodič PEN ani odpojován ani spínán',
          isTrue:false
        },
        {
          text:'musí být vodič PEN odpojován a spínán',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Musí se chránit každé zařízení před nechtěným nebo neúmyslným uvedením do provozu?',
        options: [{
          text:'musí',
          isTrue:true
        },
        {
          text:'nemusí',
          isTrue:false
        },
        {
          text:'rozhodující je stanovisko osoby odpovědné za zařízení',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Zařízení nouzového spínání musí být provedeno tak:',
        options: [{
          text:'aby jeho působení nevyvolalo další nebezpečí nebo aby nezabraňovalo úplnému provedení zásahu potřebnému k odstranění nebezpečí',
          isTrue:true
        },
        {
          text:'aby celá instalace byla bez napětí',
          isTrue:false
        },
        {
          text:'aby celá instalace byla pod napětím',
          isTrue:false
        }
      ]
       
      }, {
        task: 'U pohyblivého přívodu bez ochranného vodiče s vidlicí bez ochranného kontaktu pro spotřebiče třídy II :',
        options: [{
          text:'musí být vidlice neoddělitelně spojena s pohyblivým přívodem',
          isTrue:true
        },
        {
          text:'při výměně vidlice se propojí kolíček s ochranným vodičem',
          isTrue:false
        },
        {
          text:'při výměně vidlice se musí odstranit kolíček',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Vedení musí být zvolena a zřízena tak:',
        options: [{
          text:'aby se během provádění instalace, jejího používání nebo údržby zabránilo poškození kabelů, izolovaných vodičů a jejich zakončení',
          isTrue:true
        },
        {
          text:'aby byly dodrženy pouze poždavky provozovatele',
          isTrue:false
        },
        {
          text:'aby byly dodrženy pouze poždavky architekta',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Vodič vedení v AC systémech ČERNÁ, HNĚDÁ a ŠEDÁ',
        options: [{
          text:'pořadí barev není stanoveno - v DP platí L1 - černá; L2 - hnědá; L3 - šedá',
          isTrue:true
        },
        {
          text:'pořadí barev není stanoveno',
          isTrue:false
        },
        {
          text:'pořadí barev určuje projektant',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Barevné značení vodičů DC soustavy',
        options: [{
          text:'kladný pól červená barva, záporný pól bílá barva (dříve modrá barva)',
          isTrue:true
        },
        {
          text:'kladný pól červená barva, záporný pól modrá barva',
          isTrue:false
        },
        {
          text:'není definováno',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Barva holých vodičů a přípojnic trojfázové soustavy je:',
        options: [{
          text:'není požadováno',
          isTrue:true
        },
        {
          text:'růžová',
          isTrue:false
        },
        {
          text:'šedá',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Ochranný vodič se značí:',
        options: [{
          text:'PE',
          isTrue:true
        },
        {
          text:'N',
          isTrue:false
        },
        {
          text:'L',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Svorky (svorkovnice) vodičů střídavé rozvodné soustavy u elektrických předmětů se značí:',
        options: [{
          text:'U, V, W, N, PE',
          isTrue:true
        },
        {
          text:'A, B, C, D, E',
          isTrue:false
        },
        {
          text:'A1, B1, C1, D1, E1',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Kvalifikace osob z hlediska elektrotechnické kvalifikace se dělí na:',
        options: [{
          text:'laiky, osoby seznámené, osoby poučené, osoby znalé a osoby znalé s vyšší kvalifikací',
          isTrue:true
        },
        {
          text:'osoby neznalé, osoby seznámené, osoby poučené, osoby znalé a osoby znalé s vyšší kvalifikací',
          isTrue:false
        },
        {
          text:'laiky, osoby poučené, osoby znalé a osoby znalé s vyšší kvalifikací',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Osoba pověřená kontrolou elektrického zařízení během pracovních činností je:',
        options: [{
          text:'osoba odpovědná za bezpečný stav elektrického zařízení během pracovních činností na něm nebo v jeho blízkosti',
          isTrue:true
        },
        {
          text:'osoba odpovědná za bezporuchový stav elektrického zařízení během pracovních činností',
          isTrue:false
        },
        {
          text:'osoba odpovědná za plynulý provoz',
          isTrue:false
        }
      ]
       
      }, {
      task: 'Funkci vedoucí práce může vykonávat:',
      options: [{
        text:'pracovník znalý s vyšší kvalifikací pověřený osobou zodpovědnou za provoz zařízení',
        isTrue:true
      },
      {
        text:'pracovník znalý pověřený osobou zodpovědnou za provoz zařízení',
        isTrue:false
      },
      {
        text:'mistr pověřený osobou zodpovědnou za provoz zařízení',
        isTrue:false
      }
    ]
     
    }, {
        task: 'Zóna přiblížení k živým částem pod napětím je definována jako:',
        options: [{
          text:'prostor vymezený vzdáleností od ochranného prostoru do vzdálenosti určené s ohledem na výši napětí',
          isTrue:true
        },
        {
          text:'prostor vymezený vzdáleností od živých částí do vzdálenosti určené s ohledem na výši napětí',
          isTrue:false
        },
        {
          text:'prostor vymezený vzdáleností od živých částí do vzdálenosti určené rozsahem pracoviště',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Ochranný prostor okolo živých částí pod napětím je:',
        options: [{
          text:'prostor kde není zajištěna izolační hladina k odvrácení elektrického nebezpečí',
          isTrue:true
        },
        {
          text:'prostor, kde je možnost přiblížení k živým částem pod napětím',
          isTrue:false
        },
        {
          text:'prostor, kde je možnost dotyku na živou část pod napětím',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Práce pod napětím je (mimo jiné) práce při níž:',
        options: [{
          text:'pracovník zasahuje do ochranného prostoru okolo živých částí pod napětím',
          isTrue:true
        },
        {
          text:'se pracovník nevědomě dotýká živých částí pod napětím',
          isTrue:false
        },
        {
          text:'pracovník zasahuje do prostoru zóny přiblížení okolo živých částí pod napětím',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Práce v blízkosti živých částí je práce, při níž:',
        options: [{
          text:'osoba zasahuje do zóny přiblížení bez zásahu do ochranného prostoru',
          isTrue:true
        },
        {
          text:'osoba zasahuje do vzdálenosti menší než je bezpečná vzdálenost od živých částí',
          isTrue:false
        },
        {
          text:'osoba zasahuje do elektrického zařízení po odstranění krytu',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Zábrana je:',
        options: [{
          text:'zařízení, které může nebo nemusí mít izolaci, používané k zamezení přiblížení se k elektrickému zařízení nebo části elektrického zařízení, které představuje elektrické nebezpečí',
          isTrue:true
        },
        {
          text:'část zajišťující ochranu před přímým dotykem z každého obvyklého směru přístupu',
          isTrue:false
        },
        {
          text:'pevný nebo pružný kryt z izolačního materiálu',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Přepážka je:',
        options: [{
          text:'část zajišťující ochranu před přímým dotykem z každého obvyklého směru přístupu',
          isTrue:true
        },
        {
          text:'zařízení, které může nebo nemusí mít izolaci, používané k zamezení přiblížení se k elektrickému zařízení nebo části elektrického zařízení, které představuje elektrické nebezpečí',
          isTrue:false
        },
        {
          text:'pevný nebo pružný kryt z izolačního materiálu',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Pracovníci znalí s vyšší kvalifikací smějí na elektrickém zařízení vykonávat:',
        options: [{
          text:'obsluhu a práce mimo prací zakázaných',
          isTrue:true
        },
        {
          text:'jen obsluhu na vn a nn',
          isTrue:false
        },
        {
          text:'jen obsluhu a práce na vn',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Při práci pod napětím nebo v jeho blízkosti je používání oděvů s vyhrnutými rukávy:',
        options: [{
          text:'je zakázáno',
          isTrue:true
        },
        {
          text:'je omezeno podle výše napětí',
          isTrue:false
        },
        {
          text:'je dovoleno',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Pracovník, který obdrží příkaz odporující pracovním postupům, bezpečnostním normám, předpisům a směrnicím musí:',
        options: [{
          text:'tuto skutečnost oznámit vedoucímu práce',
          isTrue:true
        },
        {
          text:'nemusí provést přikázaný úkon',
          isTrue:false
        },
        {
          text:'uposlechnut příkazu vedoucího práce',
          isTrue:false
        }
      ]
       
      }, {
      task: 'Ústní příkazy při práci na elektrickém zařízení mohou být vydávány:',
      options: [{
        text:'při bezprostředním styku',
        isTrue:true
      },
      {
        text:'voláním a znamením',
        isTrue:false
      },
      {
        text:'voláním a máváním',
        isTrue:false
      }
    ]
     
    }, {
      task: 'Při práci na venkovním elektrickém zařízení pod napětím, je-li hustá mlha, se:',
      options: [{
        text:'musí práce přerušit',
        isTrue:true
      },
      {
        text:'může pracovat pod dozorem',
        isTrue:false
      },
      {
        text:'smí pracovat podle rozhodnutí vedoucího práce',
        isTrue:false
      }
    ]
     
    }, {
      task: 'Pro zajištění pracoviště pro práci bez napětí musí být provedeny postupně následující úkony:',
      options: [{
        text:'úplné odpojení ze všech stran možného napájení + ověření, že je zařízení bez napětí + uzemnění a zkratování + ochranné opatření proti živým částem pod napětím',
        isTrue:true
      },
      {
        text:'úplné odpojení ze všech stran možného napájení + ověření, že je zařízení bez napětí + uzemnění a zkratování + vymezení pracoviště',
        isTrue:false
      },
      {
        text:'úplné odpojení ze všech stran možného napájení + ověření, že je zařízení bez napětí + uzemnění a zkratování + vymezení pracoviště + vypsání příkazu B',
        isTrue:false
      }
    ]
     
    }, {
        task: 'Postup při použití zkratovacího zařízení (např. připojování zkratovací soupravy) je:',
        options: [{
          text:'po ověření beznapěťového stavu se připojí nejdříve uzemňovací vodič na uzemnění a poté se připojí ostatní fázové vodiče',
          isTrue:true
        },
        {
          text:'po ověření beznapěťového stavu se připojí uzemňovací vodič a alespoň jeden z fázových vodičů',
          isTrue:false
        },
        {
          text:'po ověření beznapěťového stavu se připojí - zkratují nejdříve fázové vodiče a poté se připojí uzemňovací vodič',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Pracovníci znalí mohou pracovat na zařízeních nn v blízkosti živých částí pod napětím:',
        options: [{
          text:'sami',
          isTrue:true
        },
        {
          text:'s dohledem osoby znalé s vyšší kvalifikací',
          isTrue:false
        },
        {
          text:'pod dozorem osoby znalé s vyšší kvalifikací',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Na živých částech pod napětím na zařízení nn pracovníci poučení a speciálně vyškolení:',
        options: [{
          text:'mohou samostatně pracovat',
          isTrue:true
        },
        {
          text:'mohou pracovat pod dohledem',
          isTrue:false
        },
        {
          text:'nesmějí pracovat',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Vedoucí práce musí před zahájením práce na zařízení vn provést, (mimo jiné), postupně následující úkony:',
        options: [{
          text:'musí informovat osobu pověřenou kontrolou elektrického zařízení během pracovní činnosti, o jakou práci se jedná a o zařízení, na kterém se bude práce konat',
          isTrue:true
        },
        {
          text:'seznámit podřízené se způsobem a rozsahem práce, vydat pracovní skupině povolení k zahájení práce a informovat osobu zodpovědnou za elektrické zařízení o zamýšleném rozsahu prací',
          isTrue:false
        },
        {
          text:'informovat osobu zodpovědnou za elektrické zařízení o zamýšleném rozsahu prací, vydat pracovní skupině povolení k zahájení práce a seznámit podřízené se způsobem a rozsahem práce',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Ochrana zábranou se smí používat v prostorách přístupných pouze osobám s kvalifikací nejméně:',
        options: [{
          text:'osoba seznámená pod dozorem',
          isTrue:true
        },
        {
          text:'osoba poučená pod dozorem',
          isTrue:false
        },
        {
          text:'osoba znalá samostatně',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Výměnu pojistek u zařízení vn, v případech, kdy není vyloučen dotyk na živou část, smí provádět osoba s kvalifikací nejméně:',
        options: [{
          text:'osoba znalá nebo poučená podle pracovních postupů',
          isTrue:true
        },
        {
          text:'osoba poučená',
          isTrue:false
        },
        {
          text:'osoba seznámená podle pracovních postupů',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Výměnu pojistek nn smí provádět:',
        options: [{
          text:'osoba nejméně seznámená jen v případech, když jsou pojistky provedeny tak, že je vyloučen přímý dotyk na živou část',
          isTrue:true
        },
        {
          text:'osoba nejméně seznámená',
          isTrue:false
        },
        {
          text:'osoba nejméně poučená',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Při pracích pod napětím na zařízeních nn (do 1 kV AC) musí pracovník dodržovat vzdálenost k živým částem:',
        options: [{
          text:'tak, aby zůstal bez dotyku na živou část',
          isTrue:true
        },
        {
          text:'tak, aby se nepřiblížil blíže než 75 cm',
          isTrue:false
        },
        {
          text:'tak, aby se nepřiblížil blíže než 30 cm',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Minimální bezpečná vzdálenost od živých částí při pracích na zařízení 22 kV je:',
        options: [{
          text:'26 cm',
          isTrue:true
        },
        {
          text:'70 cm',
          isTrue:false
        },
        {
          text:'35 cm',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Přiblížení k živým částem s napětím trakčního zařízení (0,6kV DC - 0,75kV DC) pracovníků poučených',
        options: [{
          text:'1 m',
          isTrue:true
        },
        {
          text:'od 0,2 m do 1,0 m',
          isTrue:false
        },
        {
          text:'od 1 m do 5,5 m',
          isTrue:false
        }
      ]
       
      }, {
        task: 'V případě, kdy dochází k propojení sítě nn dráhy a sítě nn mimo obvod dráhy se:',
        options: [{
          text:'musí oddělit tyto sítě použitím oddělovacího transformátoru',
          isTrue:true
        },
        {
          text:'nemusí provádět žádná další opatření',
          isTrue:false
        },
        {
          text:'musí v místě dělení použít proudový chránič',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Pojížděné koleje jako součást zpětného trakčního vedení',
        options: [{
          text:'se nesmějí spojovat s okolními uzemněnými vodivými částmi',
          isTrue:true
        },
        {
          text:'se smějí spojovat s okolními uzemněnými vodivými částmi',
          isTrue:false
        },
        {
          text:'se smějí spojovat s okolními vodivými uzemněnými částmi jen v prostoru dráhy',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Dovolené barvy signálek nebo ovladačů jsou:',
        options: [{
          text:'bílá, šedá, černá, žlutá, zelená, červená a modrá',
          isTrue:true
        },
        {
          text:'červená, modrá, zeleno/žlutá, šedá, bílá a černá',
          isTrue:false
        },
        {
          text:'červená, modrá, zelená, žlutá, bílá, šedá, černá, fialová a rudá',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Žlutá barva světelného signálu znamená:',
        options: [{
          text:'varování, výstrahu, nenormální stav (ale ještě v provozu)',
          isTrue:true
        },
        {
          text:'nebezpečí, porucha, stav nouze',
          isTrue:false
        },
        {
          text:'vypnutý stav zařízení',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Signální barva (signálka) červená znamená:',
        options: [{
          text:'poruchu, stav nouze, nebezpečí',
          isTrue:true
        },
        {
          text:'zařízení je v provozu',
          isTrue:false
        },
        {
          text:'zařízení je mimo provoz',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Červená barva světelného signálu znamená:',
        options: [{
          text:'nebezpečí, porucha, stav nouze',
          isTrue:true
        },
        {
          text:'vypnutý stav zařízení',
          isTrue:false
        },
        {
          text:'dosažení požadovaného stavu zařízení',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Zelená barva světelného signálu znamená:',
        options: [{
          text:'bezpečí, normální stav zařízení, zařízení v normálním provozu',
          isTrue:true
        },
        {
          text:'zařízení je mimo provoz, ale je připravené k zapnutí',
          isTrue:false
        },
        {
          text:'vypnutý stav zařízení',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Signální barva (signálka) zelená znamená:',
        options: [{
          text:'zařízení je v provozu',
          isTrue:true
        },
        {
          text:'zařízení je mimo provoz',
          isTrue:false
        },
        {
          text:'zařízení je vypnuté a zajištěné',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Signální barva (signálka) žlutá znamená:',
        options: [{
          text:'výstrahu, varování, že zařízení je v kritickém stavu',
          isTrue:true
        },
        {
          text:'varování, výstrahu, že zařízení bude uvedeno do klidu',
          isTrue:false
        },
        {
          text:'varování, výstrahu před následujícím uvedením do provozu',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Bezpečnostní barva červená znamená:',
        options: [{
          text:'zákaz - stůj - zastavení osob nebo zařízení',
          isTrue:true
        },
        {
          text:'označení nebezpečného prostoru - místa',
          isTrue:false
        },
        {
          text:'výstrahu před nebezpečím',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Bezpečnostní barva zelená znamená:',
        options: [{
          text:'bezpečí - bezpečné konání - normální provoz',
          isTrue:true
        },
        {
          text:'označení nebezpečného prostoru',
          isTrue:false
        },
        {
          text:'označení bezpečného prostoru - místa',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Bezpečnostní barva žlutá znamená:',
        options: [{
          text:'výstrahu - riziko - nebezpečí',
          isTrue:true
        },
        {
          text:'označení nebezpečného prostoru',
          isTrue:false
        },
        {
          text:'označení nebezpečné překážky',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Výstražná tabulka zákazu má tvar:',
        options: [{
          text:'kruhový',
          isTrue:true
        },
        {
          text:'čtvercový',
          isTrue:false
        },
        {
          text:'trojúhelníkový',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Výstražná tabulka vyjadřující výstrahu má podobu:',
        options: [{
          text:'žlutý trojúhelník s černým orámováním a symbolem',
          isTrue:true
        },
        {
          text:'žlutý trojúhelník se symbolem vyjadřujícím druh nebezpečí',
          isTrue:false
        },
        {
          text:'obdélníková zelená se symbolem a textem',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Výstražná tabulka modrá s vyznačeným symbolem vyjadřuje:',
        options: [{
          text:'příkaz',
          isTrue:true
        },
        {
          text:'zákaz',
          isTrue:false
        },
        {
          text:'doporučení',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Pro vypínací ovládače nesmí být použita barva:',
        options: [{
          text:'zelená',
          isTrue:true
        },
        {
          text:'žlutá',
          isTrue:false
        },
        {
          text:'černá',
          isTrue:false
        }
      ]
       
      }, {
        task: 'Pro zapínací ovládače, je doporučená barva:',
        options: [{
          text:'bílá, šedá, černá',
          isTrue:true
        },
        {
          text:'červená',
          isTrue:false
        },
        {
          text:'žlutá',
          isTrue:false
        }
      ]   
    }]
      // export default data