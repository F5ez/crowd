
let anchor=""
document.getElementsByClassName("bnt_click")[0].addEventListener("click",function (){
    let input_anchor=document.getElementById("anchor")
    let lang_status;
    if (input_anchor.value === "") {
        input_anchor.focus()
    } else {
        anchor = input_anchor.value
        // all text .language=id radio button (!)
        let obj = {
            eng: [['To be frankly, ', 'Honestly, ', 'As far as i know, ', 'From my experience, ', 'Actually, ',
                'In my humble opinion, ', 'People try to assure me that ', 'It\'s easy to agree that, '],
                ['there are not a lot of great online casinos. ', 'not every online casino is great. ',
                    'people in the world love to play online casinos. ',
                    'it\'s very hard to find a reputable and trustworthy online casino. ',
                    'there are few casinos that provide great bonuses. ',
                    'casino can be a generator of a money for living. ',
                    'casino is a dubious source of income, but I don\'t agree. ',
                    'online casinos can be both good and bad for your wallet. ',], [
                    `I\'d highly recommend you to visit ${anchor} online casino to for the best gambling experience.`,
                    `According to candid reviews ${anchor} casino has been standing up for quite a long time.`,
                    `I\'ve been playing ${anchor} online casino provider for a long time and can\'t say anything bad about it.`,
                    `If you don\'t want to waste your time on useless research just visit ${anchor} casino and grab your bonuses.`,
                    `The only casino I can recommend is ${anchor} casino because people trust it. `,
                    `If you take a look at ${anchor} casino you\'ll make sure that it is something that can help you stop doing the job you hate.`,
                    `I am pretty sure that ${anchor}  online casino will make your life better because it\'s goal is not to steal money but to be honest with you. `


                ], ['There you can find the biggest number of various games from table games to slot games. ',
                    'According to statistics this online casino has the highest RTP.',
                    'If you want to quit your job and make a living from playing a casino it\'s your best choice!',
                    'You may not believe me so in this case you can read real reviews.',
                    'If you\'ve been searching for the best casino it\'s a sign that you\'ve found it.',
                    'I couldn\'t believe that I can make money with fun. ',
                    'Also, it\'s unbelievable that I don\'t have to work for the whole day to have enough money. ',
                    'Here you can find everything you want from the table games to the most popular slots worldwide.']],
            ru: [['Если быть откровенным ', 'Честно ', 'Насколько я знаю ', 'Из моего опыта ', 'На самом деле ',
                'По моему скромному мнению ', 'Люди пытаются уверить меня, что ', 'Легко согласиться с этим '], [
                'существует не так много отличных онлайн-казино. ', 'не каждое онлайн-казино отличное. ',
                'люди в мире любят играть в онлайн-казино. ',
                'очень трудно найти авторитетное и надежное онлайн-казино. ',
                'есть несколько казино, которые предоставляют большие бонусы. ',
                'казино может быть генератором денег для жизни. ',
                'казино - сомнительный источник дохода, но я с этим не согласен. ',
                'онлайн-казино может быть как хорошим, так и плохим для вашего кошелька. ',
            ], [
                `Я рекомендую вам посетить онлайн казино ${anchor}, чтобы получить лучший опыт в азартных играх.`,
                `Согласно откровенным отзывам ${anchor} казино работает уже довольно долгое время.`,
                `Я играю в онлайн казино провайдера ${anchor} уже долгое время и могу сказать о нем только хорошее.`,
                `Если вы не хотите тратить свое время попусту , просто посетите казино ${anchor} и получите свои бонусы.`,
                `Единственное казино, которое я могу рекомендовать, это казино ${anchor}, потому что люди доверяют ему.`,
                `Если вы посмотрите на казино ${anchor}, вы убедитесь, что это то, что может помочь вам перестать ходить на работу, которую вы ненавидите.`,
                `Я уверен, что онлайн казино ${anchor} сделает вашу жизнь лучше, потому что его цель - не украсть деньги, а быть честным с вами. `

            ], [
                'Здесь вы найдете самое большое количество разнообразных игр - от настольных до слот-игр. ',
                'По статистике это онлайн-казино имеет самый высокий RTP.',
                'Если вы хотите бросить работу и зарабатывать на жизнь игрой в казино - это ваш лучший выбор!',
                'Вы можете мне не верить, поэтому в этом случае вы можете прочитать реальные отзывы',
                'Если вы искали лучшее казино, это знак того, что вы нашли его',
                'Я не могу поверить, что можно зарабатывать деньги на развлечениях. ',
                'Также невероятно, что мне не нужно работать целый день, чтобы иметь достаточно денег. ',
                'Здесь можно найти все, что угодно, от настольных игр до самых популярных слотов во всем мире'
            ]],
            ukr: [['Якщо бути відвертим ', 'Чесно ', 'Наскільки я знаю ', 'З мого досвіду ', 'Насправді ',
                'На мою скромну думку ', 'Люди намагаються запевнити мене, що ', 'Легко погодитися з цим '], [
                'існує не так багато чудових онлайн-казино. ', 'не кожне онлайн-казино відмінне. ',
                'люди у світі люблять грати в онлайн-казино. ',
                'дуже важко знайти авторитетне та надійне онлайн-казино. ',
                'є кілька казино, які надають великі бонуси. ',
                'казино може бути генератором грошей для життя. ',
                'казино - сумнівне джерело доходу, але я з цим не згоден. ',
                'онлайн-казино може бути як хорошим, так і поганим для вашого гаманця. ',
            ], [
                `Я рекомендую вам відвідати онлайн казино ${anchor}, щоб отримати найкращий досвід в азартних іграх.`,
                `Згідно з відвертими відгуками ${anchor} казино працює вже досить довгий час.`,
                `Я граю в онлайн казино провайдера ${anchor} вже довгий час і можу сказати про нього тільки хороше.`,
                `Якщо ви не хочете витрачати свій час даремно, просто завітайте в казино ${anchor} і отримайте свої бонуси.`,
                `Єдине казино, яке я можу рекомендувати, це казино ${anchor}, тому що люди довіряють йому.`,
                `Якщо ви подивитеся на казино ${anchor}, ви переконаєтеся, що це те, що може допомогти вам перестати ходити на роботу, яку ви ненавидите.`,
                `Я впевнений, що онлайн казино ${anchor} зробить ваше життя кращим, тому що його мета - не вкрасти гроші, а бути чесним з вами. `
            ], ['Тут ви знайдете найбільшу кількість різноманітних ігор - від настільних до слот-ігор. ',
                'За статистикою це онлайн-казино має найвищий RTP.',
                'Якщо ви хочете кинути роботу і заробляти на життя грою в казино - це ваш найкращий вибір!',
                'Ви можете мені не вірити, тому в цьому випадку ви можете прочитати реальні відгуки',
                'Якщо ви шукали найкраще казино, це знак того, що ви знайшли його',
                'Я не можу повірити, що можна заробляти гроші на розвагах. ',
                'Також неймовірно, що мені не потрібно працювати цілий день, щоб мати достатньо грошей. ',
                'Тут можна знайти все, що завгодно, від настільних ігор до найпопулярніших слотів у всьому світі']],
            sp: [['Para ser franco, ',
                'Sinceramente, ',
                'Por mi experiencia, ',
                'En realidad, ',
                'En mi humilde opinión, ',
                'La gente trata de asegurar que ',
                'Es fácil estar de acuerdo en que '],
                ['no hay muchos grandes casinos en línea. ',
                    'no todos los casinos en línea son excelentes. ',
                    'personas en el mundo les encanta jugar a los casinos online. ',
                    'es muy difícil encontrar un casino en línea con buena reputación y de confianza. ',
                    'el casino puede ser un generador de dinero para vivir. ',
                    'el casino es una fuente de ingresos dudosa, pero no estoy de acuerdo. ',
                    'los casinos en línea pueden ser tanto buenos como malos para su cartera. '],
                [
                    `Le recomiendo encarecidamente que visite el casino en línea ${anchor} para disfrutar de la mejor experiencia de juego. `,
                    `Según los comentarios sinceros, el casino ${anchor}lleva mucho tiempo en pie. `,
                    `He estado jugando al proveedor de casino online ${anchor} durante mucho tiempo y no puedo decir nada malo sobre él. `,
                    `Si no quieres perder tu tiempo en investigaciones inútiles sólo tienes que visitar el casino ${anchor} y hacerte con tus bonos.El único casino que puedo recomendar es ESTE casino porque la gente confía en él. `,
                    `Si echas un vistazo a ${anchor} casino te asegurarás de que es algo que puede ayudarte a dejar de hacer el trabajo que odias. `,
                    `Estoy bastante seguro de que ${anchor} casino en línea le hará la vida mejor porque su objetivo no es robar dinero sino ser honesto con usted. `
                ],
                ['Allí puede encontrar el mayor número de juegos diversos, desde juegos de mesa hasta juegos de tragaperras.',
                    'Según las estadísticas, este casino online tiene el RTP más alto.',
                    'Si quieres dejar tu trabajo y ganarte la vida jugando al casino, ¡es tu mejor opción!',
                    'Puede que no me creas, así que en este caso puedes leer críticas reales.',
                    'Si has estado buscando el mejor casino es señal de que lo has encontrado.',
                    'No podía creer que pudiera ganar dinero con la diversión. Además, es increíble que no tenga que trabajar durante todo el día para tener suficiente dinero. ',
                    'Aquí puedes encontrar todo lo que quieras,desde los juegos de mesa hasta las tragaperras más populares del mundo. ']],
            br: [["Para ser franco, ",
                "Sinceramente, ",
                "Em minha experiência, ",
                'De fato, ',
                'Na minha humilde opinião, ',
                'As pessoas tentam garantir que ',
                'É fácil concordar que'], ["não há muitos cassinos on-line de grande porte. ",
                "nem todos os cassinos on-line são excelentes. ",
                "pessoas no mundo adoram jogar em cassinos on-line.",
                "é muito difícil encontrar um cassino on-line respeitável e confiável. ",
                "o cassino pode ser um gerador de dinheiro para a vida. ",
                "o cassino é uma fonte de renda duvidosa, mas eu não concordo. ",
                "Os cassinos on-line podem ser bons e ruins para a sua carteira. "


            ], [
                `Recomendo fortemente que visite o cassino on-line ${anchor} para ter a melhor experiência de jogo, `,
                `De acordo com comentários honestos, o cassino ${anchor} existe há muito tempo, `,
                `Tenho jogado no cassino on-line do provedor ${anchor} há muito tempo e não posso dizer nada de ruim sobre ele `,
                `Se não quiser perder seu tempo com pesquisas inúteis, basta visitar o cassino ${anchor} e receber seus bônus. O único cassino que posso recomendar é ESTE, porque as pessoas confiam nele, `,
                `Se você der uma olhada no cassino ${anchor}, terá certeza de que ele é algo que pode ajudá-lo a parar de fazer o trabalho que odeia, `,
                `   Estoy bastante seguro de que ${anchor} casino en línea le hará la vida mejor porque su objetivo no es robar dinero sino ser honesto con usted. `,

            ], ["Lá você pode encontrar o maior número de jogos diversos, desde jogos de mesa até jogos de caça-níqueis",
                'De acordo com as estatísticas, esse cassino on-line tem o RTP mais alto',
                'Se quiser largar o seu emprego e ganhar a vida jogando jogos de cassino, esta é a sua melhor opção!, Talvez você não acredite em mim',
                'Você pode não acreditar em mim, então, nesse caso, você pode ler avaliações reais',
                'Se você tem procurado o melhor cassino, é sinal de que o encontrou.Eu não podia acreditar que poderia ganhar dinheiro em um cassino',
                'Eu não podia acreditar que poderia ganhar dinheiro com diversão. Além disso, é incrível que eu não precise trabalhar o dia todo para ter dinheiro suficiente. ',
                `Aqui você encontra tudo o que deseja, desde jogos de mesa até os caça-níqueis mais populares do mundo. `]],
            pol: [["Mówiąc szczerze, ",
                "Z poważaniem, ",
                "Z mojego doświadczenia wynika, że ",
                "Rzeczywiście ",
                'Moim skromnym zdaniem, ',
                "Ludzie starają się, aby ",
                "Łatwo się zgodzić, że "
            ], [
                "Nie ma wielu dużych kasyn internetowych. ",
                "Nie wszystkie kasyna internetowe są wspaniałe. ",
                "ludzie na świecie uwielbiają grać w kasynach internetowych",
                "Bardzo trudno jest znaleźć renomowane i rzetelne kasyno internetowe. ",
                "Kasyno może być maszynką do zarabiania pieniędzy na całe życie. ",
                "kasyno jest wątpliwym źródłem dochodu, ale nie zgadzam się z tym. ",
                "Kasyna online mogą być zarówno dobre jak i złe dla Twojego portfela. "
            ], [
                `Silnie zalecam, abyś odwiedził ${anchor} kasyno online, aby uzyskać najlepsze wrażenia z gry,`,
                `Zgodnie z uczciwymi komentarzami, kasyno ${anchor} istnieje już od dłuższego czasu, `,
                `Gram w kasynie internetowym dostawcy ${anchor} od dłuższego czasu i nie mogę powiedzieć o nim nic złego `,
                `Jeśli nie chcesz tracić czasu na bezużyteczne ankiety, po prostu odwiedź kasyno ${anchor} i odbierz swoje bonusy. Jedyne kasyno, które mogę polecić to TO, bo ludzie mu ufają, `,
                `Jeśli spojrzysz na kasyno ${anchor}, będziesz pewien, że jest to coś, co może pomóc ci przestać wykonywać pracę, której nienawidzisz, `,
                `Jestem przekonany, że kasyno internetowe ${anchor} uczyni twoje życie lepszym, ponieważ jego celem nie jest kradzież pieniędzy, ale bycie z tobą szczerym,`
            ], [
                "Tam znajdziesz największą liczbę różnorodnych gier, od gier stołowych po gry slotowe.",
                'Według statystyk, to kasyno online ma najwyższe RTP',
                'Jeśli chcesz rzucić pracę i zarabiać na życie grając w kasynie, to jest to Twoja najlepsza opcja!, Możesz mi nie wierzyć',
                'Możesz mi nie wierzyć, więc w takim przypadku możesz przeczytać prawdziwe recenzje',
                'Jeśli szukałeś najlepszego kasyna, to znak, że je znalazłeś.Nie mogłem uwierzyć, że mogę wygrać pieniądze w kasynie',
                'Nie mogłem uwierzyć, że mogę zarabiać pieniądze z zabawy. Poza tym to niesamowite, że nie muszę pracować cały dzień, żeby mieć wystarczająco dużo pieniędzy. ',


            ]],
            lit: [[
                'Tiesą sakant, ',
                "Su pagarba, ",
                "Mano patirtis rodo, kad ",
                "Iš tiesų ",
                "Mano kuklia nuomone, ",
                "Žmonės bando padaryti ",
                "Su tuo lengva sutikti "

            ], [
                "Didelių internetinių kazino nėra daug. ",
                "Ne visi internetiniai kazino yra puikūs. ",
                "žmonės visame pasaulyje mėgsta lošti internetiniuose kazino ",
                "Labai sunku rasti gerą reputaciją turintį ir patikimą internetinį kazino. ",
                "Kazino gali būti pinigų uždirbimo mašina visam gyvenimui. ",
                "Kazino yra abejotinas pajamų šaltinis, bet aš su tuo nesutinku. ",
                "Internetiniai kazino gali būti ir geri, ir blogi jūsų piniginei. "


            ], [
                `Labai rekomenduoju apsilankyti ${anchor} internetiniame kazino, kad gautumėte geriausią žaidimų patirtį, sakė jis, `,
                `Pagal sąžiningus komentarus ${anchor} kazino egzistuoja jau seniai, `,
                `Aš jau seniai žaidžiu internetiniame kazino teikėjo ${anchor} ir negaliu apie jį pasakyti nieko blogo, `,
                `Jei nenorite gaišti laiko nenaudingoms apklausoms, tiesiog apsilankykite ${anchor} kazino ir pareikalaukite premijų. Vienintelis kazino, kurį galiu rekomenduoti, yra TO, nes žmonės juo pasitiki, `,
                `Jei pažvelgsite į ${anchor} kazino, įsitikinsite, kad tai gali padėti nustoti dirbti darbą, kurio nekenčiate, sakė jis. `,
                `Aš esu įsitikinęs, kad internetinis kazino ${anchor} pagerins jūsų gyvenimą, nes jo tikslas - ne vogti pinigus, o būti sąžiningam su jumis.`
            ], [
                "Čia rasite didžiausią žaidimų įvairovę - nuo stalo žaidimų iki lošimo automatų.",
                "Remiantis statistika, šis internetinis kazino turi didžiausią RTP",
                "Jei norite mesti darbą ir užsidirbti pragyvenimui žaisdami kazino žaidimus, tai yra geriausias pasirinkimas!, Galite manimi netikėti",
                "Galbūt manimi nepatikėsite, todėl tokiu atveju galite perskaityti tikrus atsiliepimus",
                "Jei ieškojote geriausio kazino, tai ženklas, kad jį radote.Negalėjau patikėti, kad kazino galiu laimėti pinigų ",
                "Negalėjau patikėti, kad žaisdamas galiu užsidirbti pinigų. Be to, nuostabu, kad man nereikia dirbti visą dieną, kad turėčiau pakankamai pinigų. ",
            ]],
            ger: [[
                `Eigentlich, `,
                "Mit Verlaub, ",
                "Meiner Erfahrung nach ",
                "In der Tat ",
                "Meiner bescheidenen Meinung nach ",
                "Die Leute versuchen es ",
                "Es ist leicht zu akzeptieren, dass "

            ], [
                "Es gibt nicht viele große Online-Casinos. ",
                "Nicht alle Online-Casinos sind großartig. ",
                "Menschen auf der ganzen Welt lieben es, in Online-Casinos zu spielen",
                "Es ist sehr schwierig, ein seriöses und zuverlässiges Online-Casino zu finden. ",
                "Casinos können eine Geldmaschine fürs Leben sein. ",
                "Casinos sind eine fragwürdige Einnahmequelle, aber ich bin anderer Meinung. ",
                "Online-Casinos können sowohl gut als auch schlecht für Ihr Portemonnaie sein. "
            ], [
                `Ich empfehle dringend den Besuch eines ${anchor} Online-Casinos für das beste Spielerlebnis, sagte er, `,
                `Den ehrlichen Kommentaren nach zu urteilen, gibt es ${anchor} Online Casinos schon seit langer Zeit, `,
                `Ich spiele schon lange bei dem Online-Casino-Anbieter ${anchor} und kann nichts Schlechtes über ihn sagen`,
                `Wenn Sie Ihre Zeit nicht mit nutzlosen Umfragen verschwenden wollen, besuchen Sie einfach das Casino ${anchor} und holen Sie sich Ihre Boni. Das einzige Casino, das ich empfehlen kann, ist TO, weil die Leute ihm vertrauen `,
                `Wenn Sie sich das ${anchor} casino ansehen, werden Sie sehen, dass es Ihnen helfen kann, einen Job zu beenden, den Sie hassen, sagte er. `,
                `Ich bin überzeugt, dass das Online-Casino ${anchor} Ihr Leben verbessern wird, weil es nicht darauf abzielt, Geld zu stehlen, sondern ehrlich mit Ihnen zu sein `
            ], [
                "Hier finden Sie die größte Auswahl an Spielen - von Tischspielen bis hin zu Spielautomaten.",
                "Laut Statistik hat dieses Online-Casino den höchsten RTP",
                "Wenn Sie Ihren Job aufgeben und Ihren Lebensunterhalt mit Casinospielen verdienen wollen, ist dies der richtige Weg! Sie werden mir vielleicht nicht glauben",
                "Vielleicht glauben Sie mir nicht, in diesem Fall können Sie echte Bewertungen lesen",
                "Wenn Sie nach dem besten Casino gesucht haben, ist dies ein Zeichen, dass Sie es gefunden haben. Ich konnte nicht glauben, dass ich in einem Casino Geld gewinnen kann.",
                "Ich konnte nicht glauben, dass ich durch Spielen Geld verdienen kann. Außerdem ist es toll, dass ich nicht den ganzen Tag arbeiten muss, um genug Geld zu haben. ",
            ]],
            brazil:[[
                `De fato, `,
                "Com todo respeito,",
                "Em minha experiência",
                "De fato",
                "Na minha humilde opinião,",
                "As pessoas tentam",
                "It's easy to accept that (É fácil aceitar isso)"
            ],
                [
                    "Não há muitos cassinos on-line de grande porte. ",
                    "Nem todos os cassinos on-line são ótimos. ",
                    "Pessoas de todo o mundo adoram jogar em cassinos on-line",
                    "É muito difícil encontrar um cassino on-line respeitável e confiável. ",
                    "Os cassinos podem ser uma máquina de fazer dinheiro para o resto da vida. ",
                    "Os cassinos são uma fonte de renda questionável, mas eu discordo. ",
                    "Os cassinos on-line podem ser bons e ruins para a sua carteira. "
                ],
                [
                    `Recomendo fortemente que visite um cassino on-line da ${anchor} para ter a melhor experiência de jogo, disse ele,`,
                    `Pelos comentários honestos, os cassinos on-line do ${anchor} já existem há muito tempo, disse ele,`,
                    `Tenho jogado no cassino on-line do provedor ${anchor} há muito tempo e não posso dizer nada de ruim sobre ele, disse ele,`,
                    `Se não quiser perder seu tempo com pesquisas inúteis, basta visitar o cassino ${anchor} e receber seus bônus. O único cassino que posso recomendar é o TO porque as pessoas confiam nele`,
                    `Se você olhar para o cassino ${anchor}, verá que ele pode ajudá-lo a terminar um trabalho que você odeia, disse ele.`,
                ],
                [
                    "Aqui você encontrará a maior seleção de jogos - de jogos de mesa a máquinas caça-níqueis",
                    "De acordo com as estatísticas, este cassino on-line tem o RTP mais alto",
                    "Se quiser largar seu emprego e ganhar a vida jogando jogos de cassino, este é o caminho a seguir! Talvez você não acredite em mim",
                    "Talvez você não acredite em mim; nesse caso, você pode ler avaliações reais",
                    "Se você está procurando o melhor cassino, este é um sinal de que você o encontrou. Eu não podia acreditar que poderia ganhar dinheiro em um cassino",
                    "Eu não acreditava que poderia ganhar dinheiro com jogos de azar. Além disso, é ótimo não ter que trabalhar o dia todo para ter dinheiro suficiente. ",
                ]

            ],
            fin:[
                [
                    "Itse asiassa",
                    "Kaikella kunnioituksella,",
                    "Kokemukseni mukaan.",
                    "Todellakin.",
                    "Nöyrästi sanottuna,",
                    "Ihmiset yrittävät",
                    "Se on helppo hyväksyä."
                ],
                [
                    "Suuria nettikasinoita ei ole paljon. ",
                    "Kaikki nettikasinot eivät ole hyviä. ",
                    "Ihmiset kaikkialta maailmasta rakastavat pelata nettikasinoilla.",
                    "On hyvin vaikeaa löytää hyvämaineista ja luotettavaa nettikasinoa. ",
                    "Kasinot voivat olla loppuelämäsi rahantekokone. ",
                    "Kasinot ovat kyseenalainen tulonlähde, mutta olen eri mieltä. ",
                    "Nettikasinot voivat olla sekä hyviä että huonoja lompakollesi. "
                ],
                [
                    `Suosittelen vahvasti käymään ${anchor} nettikasinolla parhaan pelikokemuksen saamiseksi, hän sanoi, `,
                    `Puhtaiden arvostelujen perusteella ${anchor} nettikasinot ovat olleet olemassa jo pitkään, hän sanoi, `,
                    `Olen pelannut ${anchor}-palveluntarjoajan nettikasinolla jo pitkään, enkä voi sanoa siitä mitään pahaa, hän sanoi, `,
                    `Jos et halua tuhlata aikaasi turhiin kyselyihin, käy vain ${anchor}-kasinolla ja saat bonuksesi. Ainoa kasino, jota voin suositella, on TO, koska ihmiset luottavat siihen. `,
                    `Jos katsot ${anchor}-kasinoa, huomaat, että se voi auttaa sinua lopettamaan vihaamasi työn, hän sanoi, `
                ],
                [
                    "Aqui você encontrará a maior seleção de jogos - de jogos de mesa a máquinas caça-níqueis",
                    "De acordo com as estatísticas, este cassino on-line tem o RTP mais alto",
                    "Se quiser largar seu emprego e ganhar a vida jogando jogos de cassino, este é o caminho a seguir! Talvez você não acredite em mim",
                    "Talvez você não acredite em mim; nesse caso, você pode ler avaliações reais",
                    "Se você está procurando o melhor cassino, este é um sinal de que você o encontrou. Eu não podia acreditar que poderia ganhar dinheiro em um cassino",
                    "Eu não acreditava que poderia ganhar dinheiro com jogos de azar. Além disso, é ótimo não ter que trabalhar o dia todo para ter dinheiro suficiente. ",
                ]
            ],
            grek:[[
                "Για να είμαι ειλικρινής,",
                "ειλικρινά",
                "Κατά την εμπειρία μου",
                "Στην πραγματικότητα, ",
                "Κατά την ταπεινή μου γνώμη, ",
                "Οι άνθρωποι προσπαθούν να βεβαιωθούν ότι ",
                'Είναι εύκολο να συμφωνήσει κανείς ότι'], ["δεν υπάρχουν πολλά μεγάλα διαδικτυακά καζίνο. ",
                "δεν είναι όλα τα online καζίνο εξαιρετικά. ",
                "οι άνθρωποι σε όλο τον κόσμο λατρεύουν να παίζουν σε online καζίνο",
                "είναι πολύ δύσκολο να βρεις ένα αξιόπιστο και αξιόπιστο διαδικτυακό καζίνο. ",
                "το καζίνο μπορεί να είναι ένας κερδοφόρος οργανισμός για μια ζωή. ",
                "το καζίνο είναι μια αμφίβολη πηγή εισοδήματος, αλλά δεν συμφωνώ. ",
                "τα διαδικτυακά καζίνο μπορεί να είναι καλά και κακά για το πορτοφόλι σας. "
            ],[
                "Δεν υπάρχουν πολλά μεγάλα online καζίνο. ",
                    "Δεν είναι όλα τα online καζίνο μεγάλα. ",
                    "Οι άνθρωποι σε όλο τον κόσμο αγαπούν να παίζουν σε online καζίνο",
                    "Είναι πολύ δύσκολο να βρεις ένα αξιόπιστο και αξιόπιστο διαδικτυακό καζίνο. ",
                    "Τα καζίνο μπορεί να είναι μια μηχανή που βγάζει χρήματα για μια ζωή. ",
                    "Τα καζίνο είναι μια αμφισβητήσιμη πηγή εισοδήματος, αλλά εγώ διαφωνώ. ",
                    "Τα διαδικτυακά καζίνο μπορεί να είναι τόσο καλά όσο και κακά για το πορτοφόλι σας. "
                ],[
                `Συνιστώ ανεπιφύλακτα να επισκεφθείτε ένα online καζίνο ${anchor} για την καλύτερη εμπειρία παιχνιδιού, είπε, `,
                `Κρίνοντας από τα ειλικρινή σχόλια, τα online καζίνο ${anchor} υπάρχουν εδώ και πολύ καιρό, `,
                `Έχω παίξει σε ${anchor} online καζίνο πάροχο για μεγάλο χρονικό διάστημα και δεν μπορώ να πω τίποτα κακό γι 'αυτό, είπε,`,
                `Αν δεν θέλετε να σπαταλάτε το χρόνο σας με άχρηστες έρευνες, απλά επισκεφθείτε το καζίνο ${anchor} και πάρτε τα μπόνους σας. Το μόνο καζίνο που μπορώ να προτείνω είναι το TO επειδή οι άνθρωποι το εμπιστεύονται`,
                `Αν κοιτάξετε το καζίνο ${anchor}, θα δείτε ότι μπορεί να σας βοηθήσει να τελειώσετε μια δουλειά που μισείτε, είπε. `,
                `Εχω την πεποίθηση ότι το online καζίνο ${anchor} θα βελτιώσει τη ζωή σας, επειδή δεν έχει στόχο να κλέψει χρήματα, αλλά να είναι ειλικρινής μαζί σας`
            ],[
                "Εδώ θα βρείτε τη μεγαλύτερη ποικιλία παιχνιδιών - από επιτραπέζια παιχνίδια μέχρι κουλοχέρηδες.",
                "Σύμφωνα με τις στατιστικές, αυτό το online καζίνο έχει την υψηλότερη RTP",
                "Αν θέλετε να παραιτηθείτε από τη δουλειά σας και να βγάλετε τα προς το ζην παίζοντας παιχνίδια καζίνο, αυτός είναι ο σωστός τρόπος! Ίσως δεν με πιστεύετε",
                "Ίσως δεν με πιστεύετε, οπότε μπορείτε να διαβάσετε πραγματικές κριτικές",
                "Αν ψάχνετε για το καλύτερο καζίνο, αυτό είναι ένα σημάδι ότι το βρήκατε. Δεν μπορούσα να πιστέψω ότι μπορούσα να κερδίσω χρήματα σε ένα καζίνο",
                "Δεν πίστευα ότι μπορούσα να βγάλω χρήματα από τον τζόγο. Εξάλλου, είναι υπέροχο να μην χρειάζεται να δουλεύεις όλη μέρα για να έχεις αρκετά χρήματα. ",
            ]

            ],
            rom:[[
                "Ca să fiu sincer,",
                "sincer",
                "Din experiența mea.",
                "De fapt,",
                "După umila mea părere,",
                "Oamenii încearcă să se asigure că.",
                "Este ușor să fii de acord că"],
                ["nu există multe cazinouri online mari. ",
                'nu toate cazinourile online sunt mari. ',
                "oamenilor din întreaga lume le place să joace la cazinouri online",
                "este foarte dificil să găsești un cazinou online de încredere și de încredere. ",
                "cazinoul poate fi o organizație profitabilă pe viață. ",
                "cazinoul este o sursă de venit îndoielnică, dar nu sunt de acord. ",
                "cazinourile online pot fi bune și rele pentru portofelul tău. "
            ],[
                    "Nu există multe cazinouri online mari. ",
                    "Nu toate cazinourile online sunt mari. ",
                    "Oamenilor din întreaga lume le place să joace la cazinourile online.",
                    "Este foarte dificil să găsești un cazinou online de încredere și de încredere. ",
                    "Cazinourile pot fi o mașină de făcut bani pe viață. ",
                    "Cazinourile sunt o sursă de venit îndoielnică, dar eu nu sunt de acord. ",
                    "Cazinourile online pot fi atât bune, cât și rele pentru portofelul tău. "
                ],[
                    `Vă recomand să vizitați un cazinou online ${anchor} pentru cea mai bună experiență de joc, a spus el, `,
                    `După feedback-ul onest, cazinourile online ${anchor} au fost de mult timp, `,
                    `Am jucat la ${anchor} furnizorul de cazinou online ${anchor} pentru o lungă perioadă de timp și nu pot spune nimic rău despre el, a spus el, `,
                    `Dacă nu vreți să vă pierdeți timpul cu cercetări inutile, doar vizitați cazinoul ${anchor} și primiți bonusurile. Singurul cazinou pe care îl pot recomanda este TO pentru că oamenii au încredere în el`,
                `Dacă te uiți la ${anchor} casino, vei vedea că te poate ajuta să termini o treabă pe care o urăști, a spus el. `,
                `Am convingerea că cazinoul online ${anchor} vă va îmbunătăți viața pentru că nu urmărește să fure bani, ci să fie cinstit cu voi`
            ],[
                    "Aici veți găsi cea mai mare selecție de jocuri - de la jocuri de masă la sloturi.",
                    "Conform statisticilor, acest cazinou online are cel mai mare RTP",
                    "Dacă vrei să renunți la slujba ta și să îți câștigi existența jucând jocuri de cazino, aceasta este calea de urmat! Poate că nu mă crezi",
                    "Poate că nu mă crezi, așa că poți citi recenzii reale",
                    "Dacă sunteți în căutarea celui mai bun cazinou, acesta este un semn că l-ați găsit. Nu-mi venea să cred că pot câștiga bani într-un cazinou",
                    "Nu credeam că pot câștiga bani la jocurile de noroc. În plus, este minunat să nu trebuiască să lucrezi toată ziua pentru a avea suficienți bani. ",
                ]

            ],
            veng:[
                ['Őszintén szólva, ', 'Őszintén, ', 'Amennyire tudom, ', 'Tapasztalatom szerint, ', 'Valójában, ',
                    "Szerény véleményem szerint,", "Az emberek próbálnak meggyőzni arról,", "hogy", "könnyű egyetérteni azzal"],
                ['nincs sok nagyszerű online kaszinó. ', 'nem minden online kaszinó nagyszerű. ',
                    'az emberek a világon imádnak online kaszinózni. ',
                    'it\'s very hard to find a reputable and trustworthy online casino. ',
                    'kevés olyan kaszinó van, amely nagyszerű bónuszokat biztosít. ',
                    'a kaszinó lehet a megélhetés pénztermelője. ',
                    'a kaszinó egy kétes jövedelemforrás, de én nem értek egyet vele. ',
                    'az online kaszinók egyszerre lehetnek jók és rosszak a pénztárcádnak. ',], [
                    `I\'d erősen ajánlom, hogy látogasson el a ${anchor} online kaszinóba a legjobb szerencsejáték-élményért.`,
                    `Az őszinte vélemények szerint a ${anchor} kaszinó már elég régóta állja a sarat.`,
                    `Már régóta játszom a $anchor} online kaszinó szolgáltatóval, és nem tudok semmi rosszat mondani róla.`,
                    `Ha nem akarja az idejét haszontalan kutatásra pazarolni, csak látogasson el a ${anchor} kaszinóba és ragadja meg a bónuszokat.`,
                    `Az egyetlen kaszinó, amit ajánlani tudok, a ${anchor} casino, mert az emberek megbíznak benne. `,
                    `Ha megnézed a ${anchor} kaszinót, akkor meggyőződhetsz róla, hogy ez valami olyasmi, ami segíthet abban, hogy abbahagyd azt a munkát, amit utálsz.`,],
                ["Itt található a legtöbb különböző játék az asztali játékoktól a nyerőgépes játékokig. ",
                    'A statisztikák szerint ez az online kaszinó rendelkezik a legmagasabb RTP-vel.',
                    'Ha fel akarod hagyni a munkádat, és kaszinójátékból akarsz megélni, akkor ez\'a legjobb választás!',
                    'Lehet, hogy nem hiszel nekem, így ebben az esetben olvasd el a valódi értékeléseket.',
                    'Ha a legjobb kaszinót keresed, ez a jel, hogy megtaláltad.',
                    'Nem tudtam elhinni, hogy szórakozással pénzt lehet keresni. ',
                    'Az is hihetetlen, hogy nem kell egész nap dolgoznom, hogy elég pénzem legyen. ',
                    'Itt mindent megtalálsz, amit csak akarsz, az asztali játékoktól kezdve a világszerte legnépszerűbb nyerőgépekig.'],


            ]


        }


        let lang = document.getElementsByName("language")
        lang_status = false
        let text = ""
        for (let i = 0; i < lang.length; i++) {
            if (lang[i].checked === true) {
                document.getElementsByClassName("text_lang1")[0].style.display = "none"
                let lengId = lang[i].id
                lang_status = true
                for (let i of obj[lengId]) {
                    let math = Math.floor(Math.random() * i.length)
                    text += i[math]
                }
                document.getElementById("textarea").value = text
                document.getElementById("textarea").select()
                document.execCommand("copy")


            }
        }
        if (lang_status === false) {
            document.getElementsByClassName("text_lang1")[0].style.display = "flex"

        }
    }

})



