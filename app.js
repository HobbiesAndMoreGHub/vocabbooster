// ============================================================
// Italian Learning Center - Main Application
// ============================================================

// ---------- Built-in Italian-English Dictionary ----------
// Common words for instant offline translation.
// Unknown words fall back to MyMemory API, then show "?" for manual entry.
const DICTIONARY = {
    // --- Articles ---
    'il': 'the', 'lo': 'the', 'la': 'the', 'i': 'the', 'gli': 'the',
    'le': 'the', "l'": 'the', 'un': 'a/one', 'uno': 'a/one', 'una': 'a/one',
    "un'": 'a/one',

    // --- Demonstratives ---
    'questo': 'this', 'questa': 'this', 'questi': 'these', 'queste': 'these',
    'quello': 'that', 'quella': 'that', 'quelli': 'those', 'quelle': 'those',
    "quell'": 'that', "quest'": 'this',

    // --- Pronouns ---
    'io': 'I', 'tu': 'you', 'lui': 'he', 'lei': 'she', 'noi': 'we',
    'voi': 'you (pl)', 'loro': 'they', 'me': 'me', 'te': 'you',
    'ce': 'us/there', 'ci': 'us/there', 'vi': 'you (pl)',
    'si': 'oneself', 'ne': 'of it/some', 'mi': 'me/my', 'ti': 'you/your',
    'lo': 'him/it', 'li': 'them (m)', 'che': 'that/which/what',
    'chi': 'who', 'cui': 'whom/which', 'cosa': 'thing/what',
    'tutto': 'everything/all', 'tutti': 'everyone/all', 'tutta': 'all',
    'tutte': 'all', 'niente': 'nothing', 'nulla': 'nothing',
    'qualcosa': 'something', 'qualcuno': 'someone', 'ognuno': 'each one',
    'altro': 'other', 'altra': 'other', 'altri': 'others', 'altre': 'others',
    'stesso': 'same/self', 'stessa': 'same/self',
    'proprio': 'own/really', 'propria': 'own',

    // --- Prepositions ---
    'di': 'of', 'a': 'to/at', 'da': 'from/by', 'in': 'in', 'con': 'with',
    'su': 'on', 'per': 'for', 'tra': 'between/among', 'fra': 'between/among',
    'verso': 'toward', 'senza': 'without', 'dopo': 'after', 'prima': 'before',
    'durante': 'during', 'contro': 'against', 'oltre': 'beyond',
    'sotto': 'under', 'sopra': 'above/on', 'dentro': 'inside',
    'fuori': 'outside', 'vicino': 'near', 'lontano': 'far',
    'lungo': 'along', 'intorno': 'around', 'attraverso': 'through',
    'fino': 'until/up to', 'secondo': 'according to',

    // --- Contracted prepositions ---
    'del': 'of the', 'dello': 'of the', 'della': 'of the',
    'dei': 'of the', 'degli': 'of the', 'delle': 'of the',
    "dell'": 'of the',
    'al': 'to the', 'allo': 'to the', 'alla': 'to the',
    'ai': 'to the', 'agli': 'to the', 'alle': 'to the',
    "all'": 'to the',
    'dal': 'from the', 'dallo': 'from the', 'dalla': 'from the',
    'dai': 'from the', 'dagli': 'from the', 'dalle': 'from the',
    "dall'": 'from the',
    'nel': 'in the', 'nello': 'in the', 'nella': 'in the',
    'nei': 'in the', 'negli': 'in the', 'nelle': 'in the',
    "nell'": 'in the',
    'sul': 'on the', 'sullo': 'on the', 'sulla': 'on the',
    'sui': 'on the', 'sugli': 'on the', 'sulle': 'on the',
    "sull'": 'on the',
    'col': 'with the', 'coi': 'with the',

    // --- Conjunctions ---
    'e': 'and', 'ed': 'and', 'o': 'or', 'ma': 'but', 'però': 'however',
    'anche': 'also/too', 'né': 'neither/nor', 'oppure': 'or else',
    'perché': 'because/why', 'quando': 'when', 'come': 'how/like/as',
    'dove': 'where', 'se': 'if', 'mentre': 'while', 'quindi': 'therefore',
    'dunque': 'so/then', 'infatti': 'in fact', 'invece': 'instead',
    'eppure': 'yet/and yet', 'anzi': 'rather/on the contrary',
    'cioè': 'that is', 'ovvero': 'or rather',

    // --- Adverbs ---
    'non': 'not', 'no': 'no', 'sì': 'yes', 'molto': 'very/much',
    'più': 'more/most', 'meno': 'less', 'troppo': 'too much',
    'poco': 'little/few', 'bene': 'well', 'male': 'badly',
    'meglio': 'better', 'peggio': 'worse', 'sempre': 'always',
    'mai': 'never/ever', 'spesso': 'often', 'ancora': 'still/again',
    'già': 'already', 'ora': 'now', 'adesso': 'now', 'poi': 'then/after',
    'prima': 'first/before', 'qui': 'here', 'qua': 'here',
    'là': 'there', 'lì': 'there', 'su': 'up', 'giù': 'down',
    'avanti': 'forward', 'indietro': 'back', 'subito': 'immediately',
    'presto': 'soon/early', 'tardi': 'late', 'appena': 'just/barely',
    'quasi': 'almost', 'davvero': 'really', 'veramente': 'truly',
    'solamente': 'only', 'solo': 'only/alone', 'soltanto': 'only',
    'insieme': 'together', 'forse': 'maybe/perhaps', 'circa': 'about',
    'abbastanza': 'enough', 'così': 'so/thus', 'assai': 'very/quite',

    // --- essere (to be) ---
    'essere': 'to be', 'sono': 'am/are', 'sei': 'are (you)',
    'è': 'is', 'siamo': 'are (we)', 'siete': 'are (you pl)',
    'era': 'was', 'ero': 'was (I)', 'eri': 'were (you)',
    'eravamo': 'were (we)', 'eravate': 'were (you pl)', 'erano': 'were',
    'sarò': 'will be', 'sarai': 'will be', 'sarà': 'will be',
    'saremo': 'will be', 'sarete': 'will be', 'saranno': 'will be',
    'stato': 'been', 'stata': 'been', 'stati': 'been', 'state': 'been',
    'sia': 'be (subj)', 'siano': 'be (subj)',
    'sarebbe': 'would be', 'sarebbero': 'would be',
    'fu': 'was', 'furono': 'were',

    // --- avere (to have) ---
    'avere': 'to have', 'ho': 'have (I)', 'hai': 'have (you)',
    'ha': 'has', 'abbiamo': 'have (we)', 'avete': 'have (you pl)',
    'hanno': 'have (they)', 'aveva': 'had', 'avevo': 'had (I)',
    'avevi': 'had (you)', 'avevamo': 'had (we)', 'avevano': 'had (they)',
    'avrò': 'will have', 'avrà': 'will have', 'avranno': 'will have',
    'avuto': 'had (pp)', 'abbia': 'have (subj)',
    'avrebbe': 'would have', 'avrebbero': 'would have',
    'ebbe': 'had', 'ebbero': 'had',

    // --- fare (to do/make) ---
    'fare': 'to do/make', 'faccio': 'do/make (I)', 'fai': 'do/make (you)',
    'fa': 'does/makes', 'facciamo': 'do/make (we)', 'fanno': 'do/make (they)',
    'faceva': 'was doing', 'facevo': 'was doing (I)',
    'fatto': 'done/made', 'farà': 'will do/make',
    'faccia': 'do/make (subj)', 'farebbe': 'would do/make',
    'fece': 'did/made', 'fecero': 'did/made',

    // --- andare (to go) ---
    'andare': 'to go', 'vado': 'go (I)', 'vai': 'go (you)',
    'va': 'goes', 'andiamo': 'go (we)', 'vanno': 'go (they)',
    'andava': 'was going', 'andavo': 'was going (I)',
    'andato': 'gone', 'andata': 'gone', 'andati': 'gone',
    'andrà': 'will go', 'andrebbe': 'would go',
    'andò': 'went',

    // --- venire (to come) ---
    'venire': 'to come', 'vengo': 'come (I)', 'vieni': 'come (you)',
    'viene': 'comes', 'veniamo': 'come (we)', 'vengono': 'come (they)',
    'veniva': 'was coming', 'venuto': 'come (pp)', 'venuta': 'come (pp)',
    'verrà': 'will come', 'verrebbe': 'would come',
    'venne': 'came', 'vennero': 'came',

    // --- dire (to say/tell) ---
    'dire': 'to say/tell', 'dico': 'say (I)', 'dici': 'say (you)',
    'dice': 'says', 'diciamo': 'say (we)', 'dicono': 'say (they)',
    'diceva': 'was saying', 'dicevo': 'was saying (I)',
    'detto': 'said', 'dirà': 'will say',
    'disse': 'said', 'dissero': 'said',

    // --- potere (can/to be able) ---
    'potere': 'to be able', 'posso': 'can (I)', 'puoi': 'can (you)',
    'può': 'can (he/she)', 'possiamo': 'can (we)', 'possono': 'can (they)',
    'poteva': 'could', 'potevo': 'could (I)',
    'potuto': 'been able', 'potrà': 'will be able',
    'potrebbe': 'could/might', 'potrebbero': 'could/might',

    // --- volere (to want) ---
    'volere': 'to want', 'voglio': 'want (I)', 'vuoi': 'want (you)',
    'vuole': 'wants', 'vogliamo': 'want (we)', 'vogliono': 'want (they)',
    'voleva': 'wanted', 'volevo': 'wanted (I)',
    'voluto': 'wanted (pp)', 'vorrà': 'will want',
    'vorrebbe': 'would want', 'vorrebbero': 'would want',
    'volle': 'wanted',

    // --- dovere (must/to have to) ---
    'dovere': 'to have to', 'devo': 'must (I)', 'devi': 'must (you)',
    'deve': 'must', 'dobbiamo': 'must (we)', 'devono': 'must (they)',
    'doveva': 'had to', 'dovevo': 'had to (I)',
    'dovuto': 'had to (pp)', 'dovrà': 'will have to',
    'dovrebbe': 'should', 'dovrebbero': 'should',

    // --- sapere (to know) ---
    'sapere': 'to know', 'so': 'know (I)', 'sai': 'know (you)',
    'sa': 'knows', 'sappiamo': 'know (we)', 'sanno': 'know (they)',
    'sapeva': 'knew', 'sapevo': 'knew (I)',
    'saputo': 'known', 'saprà': 'will know',
    'saprebbe': 'would know',
    'seppe': 'knew',

    // --- vedere (to see) ---
    'vedere': 'to see', 'vedo': 'see (I)', 'vedi': 'see (you)',
    'vede': 'sees', 'vediamo': 'see (we)', 'vedono': 'see (they)',
    'vedeva': 'was seeing', 'vedevo': 'was seeing (I)',
    'visto': 'seen', 'veduto': 'seen', 'vedrà': 'will see',
    'vide': 'saw', 'videro': 'saw',

    // --- dare (to give) ---
    'dare': 'to give', 'do': 'give (I)', 'dai': 'give (you)',
    'dà': 'gives', 'diamo': 'give (we)', 'danno': 'give (they)',
    'dava': 'was giving', 'dato': 'given',
    'darà': 'will give', 'darebbe': 'would give',
    'diede': 'gave', 'diedero': 'gave',

    // --- stare (to stay/be) ---
    'stare': 'to stay/be', 'sto': 'am (staying)', 'stai': 'are (staying)',
    'sta': 'is (staying)', 'stiamo': 'are (staying)', 'stanno': 'are (staying)',
    'stava': 'was (staying)', 'stavo': 'was (staying)',
    'stette': 'stayed', 'stettero': 'stayed',

    // --- parlare (to speak) ---
    'parlare': 'to speak', 'parlo': 'speak (I)', 'parli': 'speak (you)',
    'parla': 'speaks', 'parliamo': 'speak (we)', 'parlano': 'speak (they)',
    'parlava': 'was speaking', 'parlato': 'spoken',

    // --- mangiare (to eat) ---
    'mangiare': 'to eat', 'mangio': 'eat (I)', 'mangi': 'eat (you)',
    'mangia': 'eats', 'mangiamo': 'eat (we)', 'mangiano': 'eat (they)',
    'mangiava': 'was eating', 'mangiato': 'eaten',

    // --- bere (to drink) ---
    'bere': 'to drink', 'bevo': 'drink (I)', 'bevi': 'drink (you)',
    'beve': 'drinks', 'beviamo': 'drink (we)', 'bevono': 'drink (they)',
    'beveva': 'was drinking', 'bevuto': 'drunk (pp)',

    // --- dormire (to sleep) ---
    'dormire': 'to sleep', 'dormo': 'sleep (I)', 'dormi': 'sleep (you)',
    'dorme': 'sleeps', 'dormiamo': 'sleep (we)', 'dormono': 'sleep (they)',
    'dormiva': 'was sleeping', 'dormito': 'slept',

    // --- leggere (to read) ---
    'leggere': 'to read', 'leggo': 'read (I)', 'leggi': 'read (you)',
    'legge': 'reads', 'leggiamo': 'read (we)', 'leggono': 'read (they)',
    'leggeva': 'was reading', 'letto': 'read/bed',

    // --- scrivere (to write) ---
    'scrivere': 'to write', 'scrivo': 'write (I)', 'scrivi': 'write (you)',
    'scrive': 'writes', 'scriviamo': 'write (we)', 'scrivono': 'write (they)',
    'scriveva': 'was writing', 'scritto': 'written',

    // --- capire (to understand) ---
    'capire': 'to understand', 'capisco': 'understand (I)',
    'capisci': 'understand (you)', 'capisce': 'understands',
    'capiamo': 'understand (we)', 'capiscono': 'understand (they)',
    'capiva': 'was understanding', 'capito': 'understood',

    // --- vivere (to live) ---
    'vivere': 'to live', 'vivo': 'live (I)', 'vivi': 'live (you)',
    'vive': 'lives', 'viviamo': 'live (we)', 'vivono': 'live (they)',
    'viveva': 'was living', 'vissuto': 'lived',
    'visse': 'lived',

    // --- prendere (to take) ---
    'prendere': 'to take', 'prendo': 'take (I)', 'prendi': 'take (you)',
    'prende': 'takes', 'prendiamo': 'take (we)', 'prendono': 'take (they)',
    'prendeva': 'was taking', 'preso': 'taken',
    'prese': 'took', 'presero': 'took',

    // --- mettere (to put) ---
    'mettere': 'to put', 'metto': 'put (I)', 'metti': 'put (you)',
    'mette': 'puts', 'mettiamo': 'put (we)', 'mettono': 'put (they)',
    'metteva': 'was putting', 'messo': 'put (pp)',
    'mise': 'put', 'misero': 'put',

    // --- trovare (to find) ---
    'trovare': 'to find', 'trovo': 'find (I)', 'trovi': 'find (you)',
    'trova': 'finds', 'troviamo': 'find (we)', 'trovano': 'find (they)',
    'trovava': 'was finding', 'trovato': 'found',
    'trovò': 'found',

    // --- pensare (to think) ---
    'pensare': 'to think', 'penso': 'think (I)', 'pensi': 'think (you)',
    'pensa': 'thinks', 'pensiamo': 'think (we)', 'pensano': 'think (they)',
    'pensava': 'was thinking', 'pensato': 'thought',
    'pensò': 'thought',

    // --- credere (to believe) ---
    'credere': 'to believe', 'credo': 'believe (I)', 'credi': 'believe (you)',
    'crede': 'believes', 'crediamo': 'believe (we)', 'credono': 'believe (they)',
    'credeva': 'was believing', 'creduto': 'believed',

    // --- sentire (to hear/feel) ---
    'sentire': 'to hear/feel', 'sento': 'hear/feel (I)',
    'senti': 'hear/feel (you)', 'sente': 'hears/feels',
    'sentiamo': 'hear/feel (we)', 'sentono': 'hear/feel (they)',
    'sentiva': 'was hearing', 'sentito': 'heard/felt',
    'sentì': 'heard/felt',

    // --- tenere (to hold/keep) ---
    'tenere': 'to hold/keep', 'tengo': 'hold (I)', 'tieni': 'hold (you)',
    'tiene': 'holds', 'teniamo': 'hold (we)', 'tengono': 'hold (they)',
    'teneva': 'was holding', 'tenuto': 'held',
    'tenne': 'held',

    // --- portare (to bring/carry/wear) ---
    'portare': 'to bring/carry', 'porto': 'bring (I)', 'porti': 'bring (you)',
    'porta': 'brings/door', 'portiamo': 'bring (we)', 'portano': 'bring (they)',
    'portava': 'was bringing', 'portato': 'brought',
    'portò': 'brought',

    // --- chiamare (to call) ---
    'chiamare': 'to call', 'chiamo': 'call (I)', 'chiami': 'call (you)',
    'chiama': 'calls', 'chiamiamo': 'call (we)', 'chiamano': 'call (they)',
    'chiamava': 'was calling', 'chiamato': 'called',
    'chiamò': 'called',

    // --- lavorare (to work) ---
    'lavorare': 'to work', 'lavoro': 'work (I)/work (n)', 'lavori': 'work (you)',
    'lavora': 'works', 'lavoriamo': 'work (we)', 'lavorano': 'work (they)',
    'lavorava': 'was working', 'lavorato': 'worked',

    // --- guardare (to look/watch) ---
    'guardare': 'to look/watch', 'guardo': 'look (I)', 'guardi': 'look (you)',
    'guarda': 'looks', 'guardiamo': 'look (we)', 'guardano': 'look (they)',
    'guardava': 'was looking', 'guardato': 'looked',
    'guardò': 'looked',

    // --- aspettare (to wait) ---
    'aspettare': 'to wait', 'aspetto': 'wait (I)', 'aspetti': 'wait (you)',
    'aspetta': 'waits', 'aspettiamo': 'wait (we)', 'aspettano': 'wait (they)',
    'aspettava': 'was waiting', 'aspettato': 'waited',

    // --- amare (to love) ---
    'amare': 'to love', 'amo': 'love (I)', 'ami': 'love (you)',
    'ama': 'loves', 'amiamo': 'love (we)', 'amano': 'love (they)',
    'amava': 'was loving', 'amato': 'loved',

    // --- camminare (to walk) ---
    'camminare': 'to walk', 'cammino': 'walk (I)', 'cammini': 'walk (you)',
    'cammina': 'walks', 'camminiamo': 'walk (we)', 'camminano': 'walk (they)',
    'camminava': 'was walking', 'camminato': 'walked',

    // --- entrare (to enter) ---
    'entrare': 'to enter', 'entro': 'enter (I)', 'entri': 'enter (you)',
    'entra': 'enters', 'entriamo': 'enter (we)', 'entrano': 'enter (they)',
    'entrava': 'was entering', 'entrato': 'entered',
    'entrò': 'entered',

    // --- uscire (to go out) ---
    'uscire': 'to go out', 'esco': 'go out (I)', 'esci': 'go out (you)',
    'esce': 'goes out', 'usciamo': 'go out (we)', 'escono': 'go out (they)',
    'usciva': 'was going out', 'uscito': 'gone out',
    'uscì': 'went out',

    // --- tornare (to return) ---
    'tornare': 'to return', 'torno': 'return (I)', 'torni': 'return (you)',
    'torna': 'returns', 'torniamo': 'return (we)', 'tornano': 'return (they)',
    'tornava': 'was returning', 'tornato': 'returned',
    'tornò': 'returned',

    // --- passare (to pass/spend time) ---
    'passare': 'to pass/spend', 'passo': 'pass (I)', 'passi': 'pass (you)',
    'passa': 'passes', 'passiamo': 'pass (we)', 'passano': 'pass (they)',
    'passava': 'was passing', 'passato': 'passed/past',
    'passò': 'passed',

    // --- restare/rimanere (to stay/remain) ---
    'restare': 'to stay', 'resto': 'stay (I)', 'resta': 'stays',
    'restava': 'was staying', 'restato': 'stayed',
    'rimanere': 'to remain', 'rimango': 'remain (I)', 'rimane': 'remains',
    'rimaneva': 'was remaining', 'rimasto': 'remained',
    'rimase': 'remained',

    // --- aprire (to open) ---
    'aprire': 'to open', 'apro': 'open (I)', 'apri': 'open (you)',
    'apre': 'opens', 'apriamo': 'open (we)', 'aprono': 'open (they)',
    'apriva': 'was opening', 'aperto': 'open/opened',
    'aprì': 'opened',

    // --- chiudere (to close) ---
    'chiudere': 'to close', 'chiudo': 'close (I)', 'chiudi': 'close (you)',
    'chiude': 'closes', 'chiudiamo': 'close (we)', 'chiudono': 'close (they)',
    'chiudeva': 'was closing', 'chiuso': 'closed',
    'chiuse': 'closed',

    // --- ridere (to laugh) ---
    'ridere': 'to laugh', 'rido': 'laugh (I)', 'ride': 'laughs',
    'rideva': 'was laughing', 'riso': 'laughed/rice',
    'rise': 'laughed',

    // --- piangere (to cry) ---
    'piangere': 'to cry', 'piango': 'cry (I)', 'piange': 'cries',
    'piangeva': 'was crying', 'pianto': 'cried/crying (n)',
    'pianse': 'cried',

    // --- correre (to run) ---
    'correre': 'to run', 'corro': 'run (I)', 'corri': 'run (you)',
    'corre': 'runs', 'corriamo': 'run (we)', 'corrono': 'run (they)',
    'correva': 'was running', 'corso': 'run (pp)/course',
    'corse': 'ran',

    // --- cadere (to fall) ---
    'cadere': 'to fall', 'cado': 'fall (I)', 'cade': 'falls',
    'cadeva': 'was falling', 'caduto': 'fallen',
    'cadde': 'fell',

    // --- morire (to die) ---
    'morire': 'to die', 'muoio': 'die (I)', 'muore': 'dies',
    'moriva': 'was dying', 'morto': 'dead/died', 'morta': 'dead/died',
    'morì': 'died',

    // --- nascere (to be born) ---
    'nascere': 'to be born', 'nasce': 'is born',
    'nasceva': 'was being born', 'nato': 'born', 'nata': 'born',
    'nacque': 'was born',

    // --- conoscere (to know/meet) ---
    'conoscere': 'to know', 'conosco': 'know (I)', 'conosci': 'know (you)',
    'conosce': 'knows', 'conosciamo': 'know (we)', 'conoscono': 'know (they)',
    'conosceva': 'knew', 'conosciuto': 'known',
    'conobbe': 'knew/met',

    // --- chiedere (to ask) ---
    'chiedere': 'to ask', 'chiedo': 'ask (I)', 'chiedi': 'ask (you)',
    'chiede': 'asks', 'chiediamo': 'ask (we)', 'chiedono': 'ask (they)',
    'chiedeva': 'was asking', 'chiesto': 'asked',
    'chiese': 'asked',

    // --- rispondere (to answer) ---
    'rispondere': 'to answer', 'rispondo': 'answer (I)',
    'risponde': 'answers', 'rispondeva': 'was answering', 'risposto': 'answered',
    'rispose': 'answered',

    // --- seguire (to follow) ---
    'seguire': 'to follow', 'seguo': 'follow (I)', 'segui': 'follow (you)',
    'segue': 'follows', 'seguiamo': 'follow (we)', 'seguono': 'follow (they)',
    'seguiva': 'was following', 'seguito': 'followed',
    'seguì': 'followed',

    // --- giocare (to play) ---
    'giocare': 'to play', 'gioco': 'play (I)', 'giochi': 'play (you)',
    'gioca': 'plays', 'giochiamo': 'play (we)', 'giocano': 'play (they)',
    'giocava': 'was playing', 'giocato': 'played',

    // --- Common nouns ---
    'uomo': 'man', 'donna': 'woman', 'bambino': 'child (m)',
    'bambina': 'child (f)', 'ragazzo': 'boy', 'ragazza': 'girl',
    'persona': 'person', 'persone': 'people', 'gente': 'people',
    'amico': 'friend (m)', 'amica': 'friend (f)',
    'amici': 'friends (m)', 'amiche': 'friends (f)',
    'padre': 'father', 'madre': 'mother', 'figlio': 'son',
    'figlia': 'daughter', 'fratello': 'brother', 'sorella': 'sister',
    'marito': 'husband', 'moglie': 'wife', 'famiglia': 'family',
    'casa': 'house/home', 'porta': 'door', 'finestra': 'window',
    'stanza': 'room', 'camera': 'room/bedroom', 'cucina': 'kitchen',
    'tavolo': 'table', 'sedia': 'chair', 'letto': 'bed',
    'città': 'city', 'paese': 'country/town', 'strada': 'street/road',
    'via': 'street/way', 'piazza': 'square', 'chiesa': 'church',
    'scuola': 'school', 'università': 'university',
    'acqua': 'water', 'pane': 'bread', 'vino': 'wine',
    'cibo': 'food', 'carne': 'meat', 'pesce': 'fish',
    'frutta': 'fruit', 'latte': 'milk', 'caffè': 'coffee',
    'tempo': 'time/weather', 'anno': 'year', 'anni': 'years',
    'mese': 'month', 'mesi': 'months', 'settimana': 'week',
    'giorno': 'day', 'giorni': 'days', 'notte': 'night',
    'mattina': 'morning', 'sera': 'evening', 'pomeriggio': 'afternoon',
    'ora': 'hour/now', 'minuto': 'minute', 'momento': 'moment',
    'volta': 'time (instance)', 'volte': 'times',
    'vita': 'life', 'morte': 'death', 'mondo': 'world',
    'terra': 'earth/land', 'mare': 'sea', 'cielo': 'sky',
    'sole': 'sun', 'luna': 'moon', 'stella': 'star', 'stelle': 'stars',
    'albero': 'tree', 'fiore': 'flower', 'giardino': 'garden',
    'animale': 'animal', 'cane': 'dog', 'gatto': 'cat',
    'cavallo': 'horse', 'uccello': 'bird',
    'libro': 'book', 'lettera': 'letter', 'parola': 'word',
    'nome': 'name', 'storia': 'story/history',
    'parte': 'part', 'fine': 'end', 'inizio': 'beginning',
    'problema': 'problem', 'idea': 'idea', 'modo': 'way/manner',
    'tipo': 'type/kind', 'cosa': 'thing', 'punto': 'point',
    'fatto': 'fact/done', 'caso': 'case/chance', 'esempio': 'example',
    'lavoro': 'work/job', 'soldi': 'money', 'mano': 'hand',
    'mani': 'hands', 'testa': 'head', 'occhi': 'eyes',
    'occhio': 'eye', 'bocca': 'mouth', 'cuore': 'heart',
    'corpo': 'body', 'voce': 'voice', 'faccia': 'face',
    'braccio': 'arm', 'braccia': 'arms', 'piede': 'foot',
    'piedi': 'feet', 'capelli': 'hair',
    'signore': 'sir/Mr.', 'signora': 'madam/Mrs.',

    // --- Common adjectives ---
    'grande': 'big/great', 'piccolo': 'small', 'piccola': 'small',
    'bello': 'beautiful', 'bella': 'beautiful', 'belli': 'beautiful',
    'belle': 'beautiful', 'brutto': 'ugly', 'brutta': 'ugly',
    'buono': 'good', 'buona': 'good', 'cattivo': 'bad', 'cattiva': 'bad',
    'nuovo': 'new', 'nuova': 'new', 'vecchio': 'old', 'vecchia': 'old',
    'giovane': 'young', 'alto': 'tall/high', 'alta': 'tall/high',
    'basso': 'short/low', 'bassa': 'short/low',
    'lungo': 'long', 'lunga': 'long', 'corto': 'short', 'corta': 'short',
    'largo': 'wide', 'stretto': 'narrow/tight',
    'forte': 'strong', 'debole': 'weak',
    'bianco': 'white', 'bianca': 'white', 'nero': 'black', 'nera': 'black',
    'rosso': 'red', 'rossa': 'red', 'verde': 'green',
    'blu': 'blue', 'azzurro': 'light blue', 'giallo': 'yellow',
    'grigio': 'gray', 'marrone': 'brown',
    'caldo': 'hot/warm', 'calda': 'hot/warm',
    'freddo': 'cold', 'fredda': 'cold',
    'pieno': 'full', 'vuoto': 'empty',
    'aperto': 'open', 'chiuso': 'closed',
    'facile': 'easy', 'difficile': 'difficult',
    'possibile': 'possible', 'impossibile': 'impossible',
    'importante': 'important', 'necessario': 'necessary',
    'vero': 'true/real', 'vera': 'true/real', 'falso': 'false',
    'sicuro': 'sure/safe', 'sicura': 'sure/safe',
    'felice': 'happy', 'triste': 'sad', 'contento': 'happy/content',
    'contenta': 'happy/content', 'arrabbiato': 'angry', 'arrabbiata': 'angry',
    'stanco': 'tired', 'stanca': 'tired',
    'primo': 'first', 'prima': 'first/before',
    'secondo': 'second', 'terzo': 'third', 'ultimo': 'last', 'ultima': 'last',
    'ogni': 'every/each', 'qualche': 'some', 'alcuni': 'some (m pl)',
    'alcune': 'some (f pl)', 'nessuno': 'no one/none', 'nessuna': 'no/none',
    'stesso': 'same', 'stessa': 'same',
    'certo': 'certain/sure', 'certa': 'certain',
    'solo': 'alone/only', 'sola': 'alone',
    'intero': 'whole/entire', 'intera': 'whole',
    'italiano': 'Italian', 'italiana': 'Italian',
    'interessante': 'interesting', 'diverso': 'different', 'diversa': 'different',

    // --- Numbers ---
    'zero': 'zero', 'due': 'two', 'tre': 'three', 'quattro': 'four',
    'cinque': 'five', 'sei': 'six', 'sette': 'seven', 'otto': 'eight',
    'nove': 'nine', 'dieci': 'ten', 'undici': 'eleven', 'dodici': 'twelve',
    'tredici': 'thirteen', 'venti': 'twenty', 'trenta': 'thirty',
    'cento': 'hundred', 'mille': 'thousand', 'milione': 'million',

    // --- Question words ---
    'perché': 'why/because', 'come': 'how/like', 'dove': 'where',
    'quando': 'when', 'quanto': 'how much', 'quanta': 'how much',
    'quanti': 'how many', 'quante': 'how many', 'quale': 'which',
    'quali': 'which (pl)',

    // --- Other common words ---
    'sì': 'yes', 'no': 'no', 'non': 'not', 'più': 'more/most/no longer',
    'meno': 'less', 'già': 'already', 'ancora': 'still/again/yet',
    'ecco': 'here is/behold', 'grazie': 'thank you', 'prego': "you're welcome",
    'ciao': 'hello/bye', 'buongiorno': 'good morning',
    'buonasera': 'good evening', 'arrivederci': 'goodbye',
    'scusa': 'sorry/excuse me', 'piacere': 'pleasure/to like',
    'benissimo': 'very well',
};

// ---------- Application State ----------
let wordBank = [];
let translationCache = {};
let flashcardDeck = [];
let currentFlashcardIndex = 0;
let sortColumn = null;
let sortDirection = 'asc';
let apiKey = '';
let openaiApiKey = '';
let ttsEngine = 'browser'; // 'browser' or 'openai'
let openaiTTSVoice = 'nova';
let selectedModel = 'claude-haiku-4-5-20251001';
let flashcardMode = 'italian-first'; // or 'english-first'
let wordBankLetterFilter = ''; // empty = all
let highRotationMultiplier = 5;
let dailyGoal = 25;
let flashcardHistory = []; // tracks last viewed cards
let autoplayTimer = null;
let autoplayRunning = false;
let importAborted = false;
let srsBatches = []; // spaced repetition batches
let srsTodayWords = []; // words loaded for today's session (new + reviews)

// ---------- Initialize ----------
document.addEventListener('DOMContentLoaded', () => {
    loadFromLocalStorage();
    setupEventListeners();
    renderDashboard();
    renderWordBank();
    updateFlashcards();
    updateApiStatus();
    renderSRS();
    // Restore TTS engine UI state
    document.getElementById('audio-tts-engine').value = ttsEngine;
    document.getElementById('tts-browser-voices').style.display = ttsEngine === 'browser' ? '' : 'none';
    document.getElementById('tts-openai-voices').style.display = ttsEngine === 'openai' ? '' : 'none';
    document.getElementById('openai-voice-select').value = openaiTTSVoice;
});

function setupEventListeners() {
    // Tab navigation
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => switchTab(tab.dataset.tab));
    });

    // Daily goal
    document.getElementById('dash-save-goal').addEventListener('click', () => {
        const input = document.getElementById('dash-daily-goal');
        dailyGoal = Math.max(1, parseInt(input.value) || 25);
        input.value = dailyGoal;
        saveToLocalStorage();
        renderDashboard();
        showToast(`Daily goal set to ${dailyGoal} words per day.`);
    });

    // Settings
    document.getElementById('settings-toggle').addEventListener('click', () => {
        document.getElementById('settings-panel').classList.toggle('hidden');
    });
    document.getElementById('save-api-key').addEventListener('click', saveApiKey);
    document.getElementById('clear-api-key').addEventListener('click', clearApiKey);
    document.getElementById('model-select').addEventListener('change', (e) => {
        selectedModel = e.target.value;
        saveToLocalStorage();
    });
    document.getElementById('save-openai-key').addEventListener('click', saveOpenAIKey);
    document.getElementById('clear-openai-key').addEventListener('click', clearOpenAIKey);
    document.getElementById('audio-tts-engine').addEventListener('change', (e) => {
        ttsEngine = e.target.value;
        document.getElementById('tts-browser-voices').style.display = ttsEngine === 'browser' ? '' : 'none';
        document.getElementById('tts-openai-voices').style.display = ttsEngine === 'openai' ? '' : 'none';
        saveToLocalStorage();
    });
    document.getElementById('openai-voice-select').addEventListener('change', (e) => {
        openaiTTSVoice = e.target.value;
        saveToLocalStorage();
    });

    // Word Bank
    document.getElementById('wordbank-search').addEventListener('input', renderWordBank);

    // Letter filter buttons
    document.querySelectorAll('.wb-letter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            wordBankLetterFilter = btn.dataset.letter;
            document.querySelectorAll('.wb-letter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderWordBank();
        });
    });
    document.getElementById('add-word-btn').addEventListener('click', toggleAddWordForm);
    document.getElementById('cancel-new-word').addEventListener('click', toggleAddWordForm);
    document.getElementById('save-new-word').addEventListener('click', saveManualWord);
    document.getElementById('export-btn').addEventListener('click', exportWordBank);
    document.getElementById('import-csv-file').addEventListener('change', importWordBankCSV);
    document.getElementById('export-data-btn').addEventListener('click', exportAllData);
    document.getElementById('import-data-file').addEventListener('change', importAllData);
    document.getElementById('clear-wordbank-btn').addEventListener('click', clearWordBank);

    // Allow Enter to save manual word
    document.getElementById('add-word-form').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') saveManualWord();
    });

    // Sortable columns
    document.querySelectorAll('#wordbank-table th[data-sort]').forEach(th => {
        th.addEventListener('click', () => sortWordBank(th.dataset.sort));
    });

    // Flashcards
    document.getElementById('fc-flip').addEventListener('click', flipCard);
    document.getElementById('fc-next').addEventListener('click', nextCard);
    document.getElementById('fc-prev').addEventListener('click', prevCard);
    document.getElementById('fc-shuffle').addEventListener('click', shuffleDeck);
    document.getElementById('fc-restart').addEventListener('click', restartDeck);
    document.getElementById('fc-mark-hard').addEventListener('click', toggleHighRotation);
    document.getElementById('fc-mark-easy').addEventListener('click', toggleEasy);
    document.getElementById('flashcard-container').addEventListener('click', handleFlashcardClick);

    // Mode toggle (Italian first vs English first)
    document.getElementById('fc-mode-toggle').addEventListener('click', () => {
        flashcardMode = flashcardMode === 'italian-first' ? 'english-first' : 'italian-first';
        document.getElementById('fc-mode-toggle').innerHTML =
            flashcardMode === 'italian-first' ? 'Italian &#8594; English' : 'English &#8594; Italian';
        saveToLocalStorage();
        showCurrentCard();
    });

    // Hard rotation multiplier
    document.getElementById('fc-multiplier').addEventListener('change', (e) => {
        highRotationMultiplier = Math.max(2, Math.min(20, parseInt(e.target.value) || 5));
        e.target.value = highRotationMultiplier;
        saveToLocalStorage();
    });

    // Enrich grammar info button
    document.getElementById('fc-enrich-btn').addEventListener('click', enrichAllWords);

    // Quick Import
    document.getElementById('import-btn').addEventListener('click', bulkImportWords);
    document.getElementById('import-stop-btn').addEventListener('click', stopImport);
    document.getElementById('import-dict-btn').addEventListener('click', loadBuiltInDictionary);
    document.getElementById('import-cleanup-btn').addEventListener('click', cleanupUntranslated);
    document.getElementById('import-direction').addEventListener('change', (e) => {
        const label = document.getElementById('import-words-label');
        const textarea = document.getElementById('import-words-input');
        if (e.target.value === 'en-it') {
            label.textContent = 'Paste English words (one per line, or comma-separated):';
            textarea.placeholder = 'house\ncat\nto eat\nbeautiful\nto run';
        } else {
            label.textContent = 'Paste Italian words (one per line, or comma-separated):';
            textarea.placeholder = 'mangiare\ndormire\ncasa\nbellissimo\ncorrere';
        }
    });
    document.getElementById('import-clear-btn').addEventListener('click', () => {
        document.getElementById('import-words-input').value = '';
        document.getElementById('import-results').classList.add('hidden');
        document.getElementById('import-results-list').innerHTML = '';
        bulkImportData = [];
    });
    document.getElementById('import-save-all').addEventListener('click', () => saveBulkImport(false));
    document.getElementById('import-save-selected').addEventListener('click', () => saveBulkImport(true));

    // Flashcard filter
    document.getElementById('fc-filter').addEventListener('change', applyFlashcardFilter);

    // Send last 50 to memory game
    document.getElementById('fc-send-to-memory').addEventListener('click', sendLast50ToMemory);

    // Autoplay
    document.getElementById('fc-autoplay').addEventListener('change', (e) => {
        document.getElementById('fc-autoplay-btn').disabled = !e.target.checked;
        if (!e.target.checked) stopAutoplay();
    });
    document.getElementById('fc-autoplay-btn').addEventListener('click', toggleAutoplay);

    // Replay last 50
    document.getElementById('fc-replay50').addEventListener('click', replayLast50);

    // Spaced Repetition
    document.getElementById('srs-load-new').addEventListener('click', srsLoadNewBatch);
    document.getElementById('srs-load-extra-batch').addEventListener('click', srsLoadExtraBatch);
    document.getElementById('clear-srs-btn').addEventListener('click', clearDailyWords);
    // SRS study buttons removed — use filter dropdowns in other tabs instead

    // Memory Game
    document.getElementById('memory-load').addEventListener('click', loadMemoryWords);
    document.getElementById('memory-start').addEventListener('click', replayMemoryGame);
    document.getElementById('memory-replay-btn').addEventListener('click', replayMemoryGame);
    document.getElementById('memory-new-btn').addEventListener('click', loadMemoryWords);
    document.getElementById('memory-sidebar-view').addEventListener('change', renderMemorySidebar);

    // Audio Scripts
    document.getElementById('audio-generate').addEventListener('click', generateAudioScript);
    document.getElementById('audio-reshuffle').addEventListener('click', reshuffleAudioScript);
    document.getElementById('audio-play').addEventListener('click', playAudioScript);
    document.getElementById('audio-pause-btn').addEventListener('click', pauseAudioScript);
    document.getElementById('audio-stop').addEventListener('click', stopAudioScript);
    document.getElementById('audio-export').addEventListener('click', exportAudioScript);
    document.getElementById('audio-record').addEventListener('click', recordAudioScript);
    document.getElementById('audio-generate-file').addEventListener('click', generateAudioFile);
    document.getElementById('audio-speed').addEventListener('input', (e) => {
        document.getElementById('audio-speed-label').textContent = e.target.value + 'x';
    });
    document.getElementById('audio-slowdown').addEventListener('input', (e) => {
        document.getElementById('audio-slowdown-label').textContent = e.target.value + '%';
    });

    // Load available TTS voices
    loadTTSVoices();
    if (window.speechSynthesis) {
        window.speechSynthesis.onvoiceschanged = loadTTSVoices;
    }

    // Keyboard shortcuts for flashcards
    document.addEventListener('keydown', (e) => {
        const activeTab = document.querySelector('.tab-content.active');
        if (!activeTab || activeTab.id !== 'flashcards') return;
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;

        if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); handleFlashcardClick(); }
        else if (e.key === 'ArrowRight') nextCard();
        else if (e.key === 'ArrowLeft') prevCard();
        else if (e.key === 'Control') { e.preventDefault(); toggleHighRotation(); }
        else if (e.key === 'h' || e.key === 'H') toggleHighRotation();
        else if (e.key === '0') toggleEasy();
    });
}

// ---------- Tab Navigation ----------
function switchTab(tabId) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));

    document.querySelector(`.tab[data-tab="${tabId}"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');

    if (tabId === 'dashboard') renderDashboard();
    if (tabId === 'flashcards') updateFlashcards();
    if (tabId === 'wordbank') renderWordBank();
    if (tabId === 'srs') renderSRS();
    if (tabId === 'memory') {
        const empty = document.getElementById('memory-empty');
        const area = document.getElementById('memory-area');
        if (wordBank.length >= 6) {
            empty.classList.add('hidden');
            area.classList.remove('hidden');
        } else {
            empty.classList.remove('hidden');
            area.classList.add('hidden');
        }
    }
    if (tabId === 'audio') {
        const empty = document.getElementById('audio-empty');
        const area = document.getElementById('audio-area');
        if (wordBank.length > 0) {
            empty.classList.add('hidden');
            area.classList.remove('hidden');
        } else {
            empty.classList.remove('hidden');
            area.classList.add('hidden');
        }
    }
}

// ---------- Dashboard ----------
function renderDashboard() {
    const total = wordBank.length;
    const easy = wordBank.filter(w => w.isEasy).length;
    const hard = wordBank.filter(w => w.isHighRotation).length;
    const normal = total - easy - hard;

    // Time calculations
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const weekStart = new Date(todayStart);
    weekStart.setDate(weekStart.getDate() - weekStart.getDay()); // Sunday
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);

    const learnedToday = wordBank.filter(w => w.isEasy && w.easyDate && new Date(w.easyDate) >= todayStart).length;
    const learnedWeek = wordBank.filter(w => w.isEasy && w.easyDate && new Date(w.easyDate) >= weekStart).length;
    const learnedMonth = wordBank.filter(w => w.isEasy && w.easyDate && new Date(w.easyDate) >= monthStart).length;

    const remaining = total - easy;
    const perDay = remaining > 0 ? Math.ceil(remaining / 365) : 0;
    const pct = total > 0 ? ((easy / total) * 100) : 0;

    document.getElementById('dash-total').textContent = total.toLocaleString();
    document.getElementById('dash-easy').textContent = easy.toLocaleString();
    document.getElementById('dash-hard').textContent = hard.toLocaleString();
    document.getElementById('dash-normal').textContent = normal.toLocaleString();
    document.getElementById('dash-today').textContent = learnedToday.toLocaleString();
    document.getElementById('dash-week').textContent = learnedWeek.toLocaleString();
    document.getElementById('dash-month').textContent = learnedMonth.toLocaleString();
    document.getElementById('dash-remaining').textContent = remaining.toLocaleString();
    document.getElementById('dash-per-day').textContent = perDay;
    document.getElementById('dash-per-day-sub').textContent =
        remaining > 0 ? `${remaining.toLocaleString()} words ÷ 365 days` : 'All words learned!';
    document.getElementById('dash-progress-bar').style.width = pct + '%';
    document.getElementById('dash-progress-label').textContent =
        `${pct.toFixed(2)}% — ${easy.toLocaleString()} of ${total.toLocaleString()} words learned`;

    // Daily goal and pace
    document.getElementById('dash-daily-goal').value = dailyGoal;
    const paceDays = remaining > 0 ? Math.ceil(remaining / dailyGoal) : 0;
    document.getElementById('dash-pace-days').textContent = paceDays > 0 ? `${paceDays} days` : 'Done!';
    if (paceDays > 0) {
        const finishDate = new Date();
        finishDate.setDate(finishDate.getDate() + paceDays);
        const months = Math.floor(paceDays / 30);
        const daysLeft = paceDays % 30;
        const timeLabel = months > 0 ? `${months} month${months !== 1 ? 's' : ''} ${daysLeft} days` : `${paceDays} days`;
        document.getElementById('dash-pace-sub').textContent =
            `${remaining.toLocaleString()} words ÷ ${dailyGoal}/day = finish by ${finishDate.toLocaleDateString()}`;
    } else {
        document.getElementById('dash-pace-sub').textContent = 'All words learned!';
    }

    // Daily Tasks
    renderDailyTasks(easy, hard);
}

function renderDailyTasks(easyCount, hardCount) {
    const today = getToday();
    const todayBatches = srsBatches.filter(b => b.dateCreated.startsWith(today));
    const todayBatch = todayBatches.length > 0 ? todayBatches[0] : null;
    const dueReviews = srsGetDueReviews();

    // Task 1: New Words
    const newWordsDone = todayBatches.length > 0;
    const newWordsCount = todayBatches.reduce((sum, b) => sum + b.words.length, 0);

    // Task 2: Review Words (any due reviews)
    const reviewsDue = dueReviews.length;
    const reviewWordCount = new Set();
    for (const r of dueReviews) {
        for (const w of r.batch.words) reviewWordCount.add(w.italian);
    }

    // Check if any overdue (due before today)
    const hasOverdue = dueReviews.some(r => r.daysLate > 0);

    // Task 3: Easy Review - only if there are easy words
    const easyWords = wordBank.filter(w => w.isEasy);

    // Task 4: Hard Review - only if there are hard words
    const hardWords = wordBank.filter(w => w.isHighRotation);

    let tasks = '';

    // 1. New Words
    if (newWordsDone) {
        tasks += buildTask('done', '📗', 'New Words', `${newWordsCount} words loaded today`, 'Done');
    } else {
        tasks += buildTask('pending', '📘', 'New Words', 'Load your daily batch in Spaced Repetition', 'To Do');
    }

    // 2. Review Words
    if (reviewsDue === 0) {
        tasks += buildTask('done', '📖', 'Review Words', 'No reviews due today', 'Clear');
    } else if (hasOverdue) {
        tasks += buildTask('overdue', '📕', 'Review Words', `${reviewWordCount.size} words across ${reviewsDue} overdue review${reviewsDue !== 1 ? 's' : ''}`, 'Overdue!');
    } else {
        tasks += buildTask('pending', '📙', 'Review Words', `${reviewWordCount.size} words across ${reviewsDue} review${reviewsDue !== 1 ? 's' : ''} due`, 'Due Today');
    }

    // 3. Easy Review (only show if easy words exist)
    if (easyCount > 0) {
        tasks += buildTask('pending', '💚', 'Easy Review', `${easyCount} easy words — quick refresh to keep them sharp`, 'Optional');
    }

    // 4. Hard Review (only show if hard words exist)
    if (hardCount > 0) {
        tasks += buildTask('overdue', '🔥', 'Hard Review', `${hardCount} hard words — extra practice needed`, 'Priority');
    }

    document.getElementById('dash-task-list').innerHTML = tasks;
}

function buildTask(state, icon, title, desc, statusText) {
    return `<div class="dash-task ${state}">
        <span class="dash-task-icon">${icon}</span>
        <div class="dash-task-info">
            <div class="dash-task-title">${title}</div>
            <div class="dash-task-desc">${desc}</div>
        </div>
        <span class="dash-task-status">${statusText}</span>
    </div>`;
}

// ---------- API Key Management ----------
function saveApiKey() {
    const input = document.getElementById('api-key-input');
    const key = input.value.trim();
    if (!key) {
        showToast('Please enter an API key.');
        return;
    }
    apiKey = key;
    saveToLocalStorage();
    updateApiStatus();
    input.value = '';
    showToast('API key saved! Translations will now use Claude AI.');
}

function clearApiKey() {
    apiKey = '';
    document.getElementById('api-key-input').value = '';
    saveToLocalStorage();
    updateApiStatus();
    showToast('API key removed. Using dictionary + free API fallback.');
}

function saveOpenAIKey() {
    const input = document.getElementById('openai-key-input');
    const key = input.value.trim();
    if (!key) {
        showToast('Please enter an OpenAI API key.');
        return;
    }
    openaiApiKey = key;
    saveToLocalStorage();
    updateApiStatus();
    input.value = '';
    // Auto-switch to OpenAI TTS
    ttsEngine = 'openai';
    document.getElementById('audio-tts-engine').value = 'openai';
    document.getElementById('tts-browser-voices').style.display = 'none';
    document.getElementById('tts-openai-voices').style.display = '';
    saveToLocalStorage();
    showToast('OpenAI key saved! Audio will now use natural-sounding voices.');
}

function clearOpenAIKey() {
    openaiApiKey = '';
    document.getElementById('openai-key-input').value = '';
    ttsEngine = 'browser';
    document.getElementById('audio-tts-engine').value = 'browser';
    document.getElementById('tts-browser-voices').style.display = '';
    document.getElementById('tts-openai-voices').style.display = 'none';
    saveToLocalStorage();
    updateApiStatus();
    showToast('OpenAI key removed. Using browser TTS.');
}

function updateApiStatus() {
    const status = document.getElementById('api-status');
    if (apiKey) {
        status.textContent = 'Claude AI active';
        status.className = 'api-status connected';
    } else {
        status.textContent = 'No API key — using dictionary';
        status.className = 'api-status disconnected';
    }
    // Sync model selector
    document.getElementById('model-select').value = selectedModel;
}

// ---------- Story Translator ----------
async function translateStory() {
    const text = document.getElementById('story-input').value.trim();
    if (!text) {
        showToast('Please paste some Italian text first.');
        return;
    }

    const output = document.getElementById('translation-output');
    const loading = document.getElementById('loading-indicator');
    const btn = document.getElementById('translate-btn');

    output.innerHTML = '';
    loading.classList.remove('hidden');
    btn.disabled = true;
    btn.textContent = 'Translating...';

    try {
        const sentences = splitIntoSentences(text);

        if (apiKey) {
            // --- Claude AI path: translate each sentence with full context ---
            for (const sentence of sentences) {
                const aiResult = await translateViaClaude(sentence);
                // Store AI word translations in cache
                if (aiResult && aiResult.words) {
                    for (const [word, translation] of Object.entries(aiResult.words)) {
                        translationCache[word.toLowerCase()] = translation;
                    }
                }
                const naturalTranslation = aiResult ? aiResult.natural : null;
                const block = createSentenceBlock(sentence, naturalTranslation);
                output.appendChild(block);
            }
            saveToLocalStorage();
        } else {
            // --- Fallback path: dictionary + MyMemory API ---
            const allWords = new Set();
            for (const sentence of sentences) {
                const tokens = tokenize(sentence);
                for (const token of tokens) {
                    if (!token.isPunctuation) {
                        allWords.add(token.clean);
                    }
                }
            }
            await translateBatch([...allWords]);

            for (const sentence of sentences) {
                const block = createSentenceBlock(sentence, null);
                output.appendChild(block);
            }
        }
    } catch (err) {
        console.error('Translation error:', err);
        showToast('Error during translation. Please try again.');
    } finally {
        loading.classList.add('hidden');
        btn.disabled = false;
        btn.textContent = 'Translate Word by Word';
    }
}

// ---------- Claude AI Translation ----------
async function translateViaClaude(sentence) {
    try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01',
                'anthropic-dangerous-direct-browser-access': 'true',
            },
            body: JSON.stringify({
                model: selectedModel,
                max_tokens: 1024,
                messages: [{
                    role: 'user',
                    content: `You are a literal Italian-to-English word-by-word translator for language learners.

Given this Italian sentence, provide:
1. A word-by-word literal translation (preserving Italian word order — do NOT rearrange into natural English)
2. A natural English translation

Return ONLY valid JSON in this exact format, no other text:
{
  "words": {"italian_word": "literal_english", ...},
  "natural": "Natural English translation here"
}

Rules for the "words" object:
- Every word from the sentence must appear as a key (lowercase)
- Translate each word literally as it stands in context
- For contractions like "dell'" or "nell'", keep the full contraction as the key
- For conjugated verbs, give the English equivalent in the same tense/person (e.g., "dorme" → "sleeps", "mangiava" → "was eating")
- Preserve the order of keys to match word order in the sentence
- If a word could mean multiple things, pick the meaning that fits THIS sentence's context

Italian sentence: "${sentence.replace(/"/g, '\\"')}"`,
                }],
            }),
        });

        if (!response.ok) {
            const err = await response.json().catch(() => ({}));
            console.error('Claude API error:', response.status, err);
            if (response.status === 401) {
                showToast('Invalid API key. Check your key in Settings.');
            } else {
                showToast(`API error (${response.status}). Falling back to dictionary.`);
            }
            return null;
        }

        const data = await response.json();
        const text = data.content?.[0]?.text;
        if (!text) return null;

        return extractJSON(text);
    } catch (err) {
        console.error('Claude translation error:', err);
        showToast('AI translation failed for a sentence. Using dictionary fallback.');
        return null;
    }
}

function splitIntoSentences(text) {
    // Split on sentence-ending punctuation, keeping the punctuation
    const raw = text.split(/(?<=[.!?…])\s+/);
    return raw.map(s => s.trim()).filter(s => s.length > 0);
}

function tokenize(sentence) {
    // Tokenize handling apostrophes (Italian contractions like l', dell', un')
    const tokens = [];
    // Match: word with trailing apostrophe (l', dell'), regular words, or punctuation
    const regex = /([a-zA-ZàáâãäåèéêëìíîïòóôõöùúûüýÿñçÀÁÂÃÄÅÈÉÊËÌÍÎÏÒÓÔÕÖÙÚÛÜÝŸÑÇ]+'?[a-zA-ZàáâãäåèéêëìíîïòóôõöùúûüýÿñçÀÁÂÃÄÅÈÉÊËÌÍÎÏÒÓÔÕÖÙÚÛÜÝŸÑÇ]*)|([.!?,;:…\-–—"«»""''\(\)])/g;
    let match;
    while ((match = regex.exec(sentence)) !== null) {
        if (match[1]) {
            // Word (possibly with apostrophe like l', dell')
            const word = match[1];
            const clean = word.toLowerCase();
            tokens.push({ original: word, clean, isPunctuation: false });
        } else if (match[2]) {
            tokens.push({ original: match[2], clean: match[2], isPunctuation: true });
        }
    }
    return tokens;
}

function createSentenceBlock(sentence, naturalTranslation) {
    const block = document.createElement('div');
    block.className = 'sentence-block';

    const original = document.createElement('div');
    original.className = 'sentence-original';
    original.textContent = sentence;
    block.appendChild(original);

    const wordsContainer = document.createElement('div');
    wordsContainer.className = 'sentence-words';

    const tokens = tokenize(sentence);
    for (const token of tokens) {
        if (token.isPunctuation) {
            const card = document.createElement('div');
            card.className = 'word-card punctuation';
            card.innerHTML = `<span class="word-italian">${escapeHtml(token.original)}</span><span class="word-english">&nbsp;</span>`;
            wordsContainer.appendChild(card);
        } else {
            const translation = getTranslation(token.clean);
            const isSaved = isWordInBank(token.clean);
            const card = document.createElement('div');
            card.className = 'word-card' + (isSaved ? ' saved' : '');
            card.innerHTML = `
                <span class="word-italian">${escapeHtml(token.original)}</span>
                <span class="word-english">${escapeHtml(translation)}</span>
                <span class="word-add-indicator">${isSaved ? '✓ saved' : '+ save'}</span>
            `;
            card.addEventListener('click', () => handleWordClick(token.original, token.clean, translation, card));
            // Double-click to edit translation
            const englishSpan = card.querySelector('.word-english');
            englishSpan.addEventListener('dblclick', (e) => {
                e.stopPropagation();
                editTranslation(token.clean, englishSpan, card);
            });
            wordsContainer.appendChild(card);
        }
    }

    block.appendChild(wordsContainer);

    // Natural translation line (when available from Claude AI)
    if (naturalTranslation) {
        const naturalDiv = document.createElement('div');
        naturalDiv.className = 'sentence-natural';
        naturalDiv.innerHTML = `<strong>Natural:</strong> ${escapeHtml(naturalTranslation)}`;
        block.appendChild(naturalDiv);
    }

    return block;
}

function handleWordClick(original, clean, translation, card) {
    if (isWordInBank(clean)) {
        showToast(`"${original}" is already in your word bank.`);
        return;
    }
    addToWordBank(clean, translation);
    card.classList.add('saved');
    card.querySelector('.word-add-indicator').textContent = '✓ saved';
    showToast(`Added "${original}" to word bank.`);
}

function editTranslation(cleanWord, spanElement, card) {
    const currentText = spanElement.textContent;
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'edit-input';
    input.value = currentText;
    spanElement.replaceWith(input);
    input.focus();
    input.select();

    const finish = () => {
        const newVal = input.value.trim() || currentText;
        // Update cache
        translationCache[cleanWord] = newVal;
        saveToLocalStorage();
        // Also update word bank if it's there
        const bankEntry = wordBank.find(w => w.italian === cleanWord);
        if (bankEntry) bankEntry.english = newVal;
        saveToLocalStorage();

        const newSpan = document.createElement('span');
        newSpan.className = 'word-english';
        newSpan.textContent = newVal;
        input.replaceWith(newSpan);
        newSpan.addEventListener('dblclick', (e) => {
            e.stopPropagation();
            editTranslation(cleanWord, newSpan, card);
        });
    };

    input.addEventListener('blur', finish);
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') { e.preventDefault(); input.blur(); }
        if (e.key === 'Escape') { input.value = currentText; input.blur(); }
    });
}

// ---------- Translation Logic ----------
function getTranslation(word) {
    const lower = word.toLowerCase();
    // Check cache first
    if (translationCache[lower]) return translationCache[lower];
    // Check built-in dictionary
    if (DICTIONARY[lower]) return DICTIONARY[lower];
    return '?';
}

async function translateBatch(words) {
    const unknown = words.filter(w => !DICTIONARY[w] && !translationCache[w]);

    // Translate unknown words via API (with rate limiting)
    const batchSize = 5;
    for (let i = 0; i < unknown.length; i += batchSize) {
        const batch = unknown.slice(i, i + batchSize);
        const promises = batch.map(word => translateViaAPI(word));
        await Promise.all(promises);
    }

    saveToLocalStorage();
}

async function translateViaAPI(word) {
    if (translationCache[word]) return translationCache[word];
    if (DICTIONARY[word]) {
        translationCache[word] = DICTIONARY[word];
        return DICTIONARY[word];
    }

    try {
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=it|en`;
        const response = await fetch(url);
        if (!response.ok) throw new Error('API error');
        const data = await response.json();

        if (data.responseData && data.responseData.translatedText) {
            let translation = data.responseData.translatedText.toLowerCase();
            // If API just returns the same word, mark as unknown
            if (translation === word.toLowerCase()) {
                translation = '?';
            }
            translationCache[word] = translation;
            return translation;
        }
    } catch (err) {
        console.warn(`Could not translate "${word}":`, err.message);
    }

    translationCache[word] = '?';
    return '?';
}

// ---------- Word Bank ----------
function addToWordBank(italian, english, notes = '') {
    if (isWordInBank(italian)) return;
    wordBank.push({
        italian: italian.toLowerCase(),
        english,
        notes,
        dateAdded: new Date().toISOString(),
        isHighRotation: false,
        isEasy: false,
        grammarInfo: null,
        conjugation: null,
    });
    saveToLocalStorage();
    renderWordBank();
}

function clearDailyWords() {
    if (srsBatches.length === 0 && srsTodayWords.length === 0) {
        showToast('Daily words are already empty.');
        return;
    }
    const confirmed = confirm(`Are you sure you want to clear all ${srsBatches.length} batches and today's session? This cannot be undone.`);
    if (!confirmed) return;
    srsBatches = [];
    srsTodayWords = [];
    saveToLocalStorage();
    renderSRS();
    showToast('Daily words cleared.');
}

function clearWordBank() {
    if (wordBank.length === 0) {
        showToast('Word bank is already empty.');
        return;
    }
    const confirmed = confirm(`Are you sure you want to clear all ${wordBank.length} words from the word bank? This cannot be undone.`);
    if (!confirmed) return;
    wordBank = [];
    saveToLocalStorage();
    renderWordBank();
    updateFlashcards();
    showToast('Word bank cleared.');
}

function removeFromWordBank(index) {
    wordBank.splice(index, 1);
    saveToLocalStorage();
    renderWordBank();
    updateFlashcards();
}

function isWordInBank(word) {
    return wordBank.some(w => w.italian === word.toLowerCase());
}

function renderWordBank() {
    const searchQuery = document.getElementById('wordbank-search').value.toLowerCase();
    const tbody = document.getElementById('wordbank-body');
    const emptyState = document.getElementById('wordbank-empty');
    const countEl = document.getElementById('word-count');

    let filtered = wordBank;

    // Letter filter
    if (wordBankLetterFilter) {
        filtered = filtered.filter(w => w.italian.charAt(0).toLowerCase() === wordBankLetterFilter);
    }

    // Search filter
    if (searchQuery) {
        filtered = filtered.filter(w =>
            w.italian.includes(searchQuery) ||
            w.english.includes(searchQuery) ||
            (w.notes && w.notes.toLowerCase().includes(searchQuery))
        );
    }

    const filterLabel = wordBankLetterFilter ? ` (${wordBankLetterFilter.toUpperCase()}: ${filtered.length})` : '';
    countEl.textContent = `${wordBank.length} word${wordBank.length !== 1 ? 's' : ''} saved${filterLabel}`;

    if (wordBank.length === 0) {
        tbody.innerHTML = '';
        emptyState.classList.remove('hidden');
        document.getElementById('wordbank-table').classList.add('hidden');
        return;
    }

    emptyState.classList.add('hidden');
    document.getElementById('wordbank-table').classList.remove('hidden');

    tbody.innerHTML = filtered.map((word, idx) => {
        const realIndex = wordBank.indexOf(word);
        const date = new Date(word.dateAdded).toLocaleDateString();
        const easyClass = word.isEasy ? ' wb-btn-active-easy' : '';
        const hardClass = word.isHighRotation ? ' wb-btn-active-hard' : '';
        return `<tr>
            <td class="italian-cell">
                <button class="wb-easy-btn${easyClass}" onclick="toggleWordBankEasy(${realIndex})" title="Toggle easy">E</button>
                ${escapeHtml(word.italian)}
                <button class="wb-hard-btn${hardClass}" onclick="toggleWordBankHard(${realIndex})" title="Toggle hard">H</button>
            </td>
            <td class="english-cell">${escapeHtml(word.english)}</td>
            <td class="notes-cell">
                <span class="note-text" data-index="${realIndex}">${escapeHtml(word.notes || '—')}</span>
            </td>
            <td class="date-cell">${date}</td>
            <td class="actions-cell">
                <button onclick="editWordNote(${realIndex})" title="Edit notes">Edit</button>
                <button class="delete-btn" onclick="removeFromWordBank(${realIndex})" title="Delete word">Delete</button>
            </td>
        </tr>`;
    }).join('');
}

function editWordNote(index) {
    const word = wordBank[index];
    const newItalian = prompt('Edit Italian word:', word.italian || '');
    if (newItalian === null) return;
    const newEnglish = prompt('Edit English translation:', word.english || '');
    if (newEnglish === null) return;
    const newNote = prompt('Edit notes:', word.notes || '');
    if (newNote === null) return;
    word.italian = newItalian.trim().toLowerCase() || word.italian;
    word.english = newEnglish.trim() || word.english;
    word.notes = newNote;
    saveToLocalStorage();
    renderWordBank();
    showToast('Updated "' + word.italian + '"');
}

function toggleAddWordForm() {
    const form = document.getElementById('add-word-form');
    form.classList.toggle('hidden');
    if (!form.classList.contains('hidden')) {
        document.getElementById('new-italian').value = '';
        document.getElementById('new-english').value = '';
        document.getElementById('new-notes').value = '';
        document.getElementById('new-italian').focus();
    }
}

function saveManualWord() {
    const italian = document.getElementById('new-italian').value.trim().toLowerCase();
    const english = document.getElementById('new-english').value.trim().toLowerCase();
    const notes = document.getElementById('new-notes').value.trim();

    if (!italian || !english) {
        showToast('Please enter both Italian and English.');
        return;
    }

    if (isWordInBank(italian)) {
        showToast(`"${italian}" is already in your word bank.`);
        return;
    }

    addToWordBank(italian, english, notes);
    toggleAddWordForm();
    showToast(`Added "${italian}" to word bank.`);
}

function sortWordBank(column) {
    if (sortColumn === column) {
        sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        sortColumn = column;
        sortDirection = 'asc';
    }

    wordBank.sort((a, b) => {
        let valA, valB;
        if (column === 'italian') { valA = a.italian; valB = b.italian; }
        else if (column === 'english') { valA = a.english; valB = b.english; }
        else if (column === 'date') { valA = a.dateAdded; valB = b.dateAdded; }
        else return 0;

        if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
        if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
        return 0;
    });

    // Update sort arrows
    document.querySelectorAll('#wordbank-table th .sort-arrow').forEach(a => a.textContent = '');
    const arrow = document.querySelector(`#wordbank-table th[data-sort="${column}"] .sort-arrow`);
    if (arrow) arrow.textContent = sortDirection === 'asc' ? ' ▲' : ' ▼';

    saveToLocalStorage();
    renderWordBank();
}

function exportWordBank() {
    if (wordBank.length === 0) {
        showToast('No words to export.');
        return;
    }
    const csv = 'Italian,English,Notes,Date Added\n' +
        wordBank.map(w =>
            `"${w.italian}","${w.english}","${(w.notes || '').replace(/"/g, '""')}","${new Date(w.dateAdded).toLocaleDateString()}"`
        ).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'italian_word_bank.csv';
    a.click();
    URL.revokeObjectURL(url);
    showToast('Word bank exported as CSV.');
}

function importWordBankCSV(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
        const text = event.target.result;
        const lines = text.split('\n').filter(l => l.trim());

        // Check if first line is a header
        const firstLine = lines[0].toLowerCase();
        const startIdx = (firstLine.includes('italian') && firstLine.includes('english')) ? 1 : 0;

        let added = 0;
        let skipped = 0;
        for (let i = startIdx; i < lines.length; i++) {
            // Parse CSV line (handle quoted fields)
            const fields = parseCSVLine(lines[i]);
            if (fields.length < 2) continue;

            const italian = fields[0].trim().toLowerCase();
            const english = fields[1].trim();
            const notes = fields.length > 2 ? fields[2].trim() : '';

            if (!italian || !english) continue;
            if (italian === english) continue; // skip untranslated

            if (isWordInBank(italian)) {
                skipped++;
                continue;
            }

            wordBank.push({
                italian,
                english,
                notes,
                dateAdded: new Date().toISOString(),
                isHighRotation: false,
                isEasy: false,
                grammarInfo: null,
                conjugation: null,
            });
            added++;
        }

        saveToLocalStorage();
        renderWordBank();
        showToast(`Imported ${added} words (${skipped} duplicates skipped).`);
    };
    reader.readAsText(file);
    // Reset so the same file can be imported again
    e.target.value = '';
}

function parseCSVLine(line) {
    const fields = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
        const ch = line[i];
        if (inQuotes) {
            if (ch === '"' && line[i + 1] === '"') {
                current += '"';
                i++;
            } else if (ch === '"') {
                inQuotes = false;
            } else {
                current += ch;
            }
        } else {
            if (ch === '"') {
                inQuotes = true;
            } else if (ch === ',') {
                fields.push(current);
                current = '';
            } else {
                current += ch;
            }
        }
    }
    fields.push(current);
    return fields;
}

// ---------- Quick Import ----------
let bulkImportData = [];

function stopImport() {
    importAborted = true;
    document.getElementById('import-stop-btn').classList.add('hidden');
    showToast('Stopping after current batch...');
}

function exportAllData() {
    const data = {
        version: 1,
        exportDate: new Date().toISOString(),
        wordBank,
        translationCache,
        apiKey,
        openaiApiKey,
        ttsEngine,
        openaiTTSVoice,
        selectedModel,
        flashcardMode,
        highRotationMultiplier,
        srsBatches,
        dailyGoal,
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `italian_learner_backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast(`Backup saved: ${wordBank.length} words with all settings.`);
}

function importAllData(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            const data = JSON.parse(event.target.result);

            if (!data.wordBank || !Array.isArray(data.wordBank)) {
                showToast('Invalid backup file — no word bank found.');
                return;
            }

            const mergeChoice = wordBank.length > 0
                ? confirm(`You have ${wordBank.length} words already.\n\nOK = Merge (keep existing, add new)\nCancel = Replace all with backup`)
                : false;

            if (mergeChoice) {
                // Merge: add words not already in bank
                let added = 0;
                for (const w of data.wordBank) {
                    if (w.isHighRotation === undefined) w.isHighRotation = false;
                    if (w.isEasy === undefined) w.isEasy = false;
                    if (w.grammarInfo === undefined) w.grammarInfo = null;
                    if (w.conjugation === undefined) w.conjugation = null;

                    if (!isWordInBank(w.italian)) {
                        wordBank.push(w);
                        added++;
                    } else {
                        // Update easy/hard marks from backup if the word exists
                        const existing = wordBank.find(e => e.italian === w.italian);
                        if (existing) {
                            if (w.isHighRotation) existing.isHighRotation = true;
                            if (w.isEasy) existing.isEasy = true;
                            if (w.grammarInfo && !existing.grammarInfo) existing.grammarInfo = w.grammarInfo;
                            if (w.conjugation && !existing.conjugation) existing.conjugation = w.conjugation;
                            if (w.notes && !existing.notes) existing.notes = w.notes;
                        }
                    }
                }
                showToast(`Merged: ${added} new words added, existing marks updated.`);
            } else {
                // Replace
                wordBank = data.wordBank;
                wordBank.forEach(w => {
                    if (w.isHighRotation === undefined) w.isHighRotation = false;
                    if (w.isEasy === undefined) w.isEasy = false;
                    if (w.grammarInfo === undefined) w.grammarInfo = null;
                    if (w.conjugation === undefined) w.conjugation = null;
                });
                showToast(`Restored ${wordBank.length} words from backup.`);
            }

            // Restore settings
            if (data.translationCache) translationCache = data.translationCache;
            if (data.apiKey) apiKey = data.apiKey;
            if (data.openaiApiKey) openaiApiKey = data.openaiApiKey;
            if (data.ttsEngine) ttsEngine = data.ttsEngine;
            if (data.openaiTTSVoice) openaiTTSVoice = data.openaiTTSVoice;
            if (data.selectedModel) selectedModel = data.selectedModel;
            if (data.flashcardMode) flashcardMode = data.flashcardMode;
            if (data.highRotationMultiplier) highRotationMultiplier = data.highRotationMultiplier;
            if (data.srsBatches) srsBatches = data.srsBatches;
            if (data.dailyGoal) dailyGoal = data.dailyGoal;

            saveToLocalStorage();
            renderWordBank();
            updateFlashcards();
            updateApiStatus();
        } catch (err) {
            console.error('Import error:', err);
            showToast('Error reading backup file: ' + err.message);
        }
    };
    reader.readAsText(file);
    e.target.value = '';
}

function cleanupUntranslated() {
    const before = wordBank.length;
    // Remove entries where Italian and English are the same (case-insensitive)
    // or where English is '?' — these are failed translations
    wordBank = wordBank.filter(w => {
        const it = w.italian.toLowerCase().trim();
        const en = w.english.toLowerCase().trim();
        // Keep if they're different and not '?'
        if (en === '?' || en === 'pending...') return false;
        if (it === en) return false;
        // Also remove if English is just "to " + italian (e.g., "alter" → "to alter")
        if (en === 'to ' + it) return false;
        return true;
    });
    const removed = before - wordBank.length;
    saveToLocalStorage();
    renderWordBank();
    showToast(`Removed ${removed} untranslated/duplicate entries. ${wordBank.length} words remaining.`);
}

function loadBuiltInDictionary() {
    if (typeof window.EXTENDED_DICTIONARY === 'undefined') {
        showToast('Dictionary file not found. Make sure dictionary-5000.js is present.');
        return;
    }

    const dict = window.EXTENDED_DICTIONARY;
    const entries = Object.entries(dict);
    let added = 0;
    for (const [italian, english] of entries) {
        if (!isWordInBank(italian)) {
            wordBank.push({
                italian: italian.toLowerCase(),
                english,
                notes: '',
                dateAdded: new Date().toISOString(),
                isHighRotation: false,
                isEasy: false,
                grammarInfo: null,
                conjugation: null,
            });
            added++;
        }
    }
    saveToLocalStorage();
    renderWordBank();
    showToast(`Loaded ${added} new words from built-in dictionary (${entries.length} total, ${entries.length - added} already in bank).`);
}

async function bulkImportWords() {
    const raw = document.getElementById('import-words-input').value.trim();
    const direction = document.getElementById('import-direction').value;
    if (!raw) {
        showToast('Please paste some words first.');
        return;
    }

    if (!apiKey) {
        showToast('Add your Anthropic API key in Settings (Story Translator tab) first.');
        return;
    }

    // Parse words: split by newlines, commas, or semicolons
    const words = raw
        .split(/[\n,;]+/)
        .map(w => w.trim().toLowerCase())
        .filter(w => w.length > 0);

    const unique = [...new Set(words)];
    if (unique.length === 0) return;

    const loading = document.getElementById('import-loading');
    const loadingText = document.getElementById('import-loading-text');
    const results = document.getElementById('import-results');
    const btn = document.getElementById('import-btn');
    const stopBtn = document.getElementById('import-stop-btn');

    loading.classList.remove('hidden');
    results.classList.add('hidden');
    stopBtn.classList.remove('hidden');
    btn.disabled = true;
    btn.textContent = 'Importing...';
    bulkImportData = [];
    importAborted = false;

    const pendingWords = [...unique];
    const isEnToIt = direction === 'en-it';

    try {
        const batchSize = 40;
        for (let i = 0; i < unique.length; i += batchSize) {
            if (importAborted) break;

            const batch = unique.slice(i, i + batchSize);
            loadingText.textContent = `Translating... (${Math.min(i + batchSize, unique.length)}/${unique.length})`;

            let batchResult = null;
            try {
                batchResult = await fetchBulkTranslation(batch, direction);
            } catch (fetchErr) {
                console.error('Bulk import fetch threw:', fetchErr);
            }

            if (batchResult && typeof batchResult === 'object' && !Array.isArray(batchResult)) {
                const normalized = {};
                const keys = Object.keys(batchResult);
                for (let k = 0; k < keys.length; k++) {
                    normalized[keys[k].toLowerCase().trim()] = batchResult[keys[k]];
                }

                for (const word of batch) {
                    const data = normalized[word] || normalized[word.toLowerCase().trim()];
                    if (data) {
                        const italian = isEnToIt ? (data.italian || '?') : word;
                        const english = isEnToIt ? word : (data.english || '?');
                        const ok = italian !== '?' && english !== '?';
                        bulkImportData.push({
                            italian,
                            english,
                            grammarInfo: data.grammarInfo || null,
                            conjugation: null,
                            isDuplicate: ok ? isWordInBank(italian) : false,
                        });
                    } else {
                        bulkImportData.push({
                            italian: isEnToIt ? '?' : word,
                            english: isEnToIt ? word : '?',
                            grammarInfo: null,
                            conjugation: null, isDuplicate: false,
                        });
                    }
                    // Remove from pending
                    const pi = pendingWords.indexOf(word);
                    if (pi !== -1) pendingWords.splice(pi, 1);
                }
            } else {
                showToast('API call failed for a batch. Check console (F12).');
                for (const word of batch) {
                    bulkImportData.push({
                        italian: word, english: '?', grammarInfo: null,
                        conjugation: null, isDuplicate: isWordInBank(word),
                    });
                    const pi = pendingWords.indexOf(word);
                    if (pi !== -1) pendingWords.splice(pi, 1);
                }
            }
        }

        // If stopped early, add remaining words as pending
        if (importAborted && pendingWords.length > 0) {
            for (const word of pendingWords) {
                bulkImportData.push({
                    italian: word, english: 'pending...', grammarInfo: null,
                    conjugation: null, isDuplicate: isWordInBank(word), isPending: true,
                });
            }
            showToast(`Stopped. ${pendingWords.length} words still pending.`);
        }

        renderBulkImportResults();
    } catch (err) {
        console.error('Bulk import error:', err);
        showToast('Error during import. Please try again.');
    } finally {
        loading.classList.add('hidden');
        stopBtn.classList.add('hidden');
        btn.disabled = false;
        btn.textContent = 'Translate & Import All';
        importAborted = false;
    }
}

// OPTIMIZED: translation + type only, no conjugation. ~8x faster.
async function fetchBulkTranslation(words, direction) {
    const isEnToIt = direction === 'en-it';
    try {
        const wordListStr = words.join(', ');
        let prompt;
        if (isEnToIt) {
            prompt = `Translate these English words to Italian. Return ONLY a JSON object keyed by each English word (lowercase, exactly as given).

Value format: {"italian": "italian_translation", "grammarInfo": {"type": "verb|noun|adjective|adverb|other", "plural": "italian_plural_form_or_null"}}

For verbs: give the Italian infinitive form, set type to "verb", plural to null.
For nouns/adjectives: give the Italian word and include its Italian plural form.
For other: set plural to null.

Words: ${wordListStr}`;
        } else {
            prompt = `Translate these Italian words to English. Return ONLY a JSON object keyed by each Italian word (lowercase, exactly as given).

Value format: {"english": "translation", "grammarInfo": {"type": "verb|noun|adjective|adverb|other", "plural": "plural_form_or_null"}}

For verbs: set type to "verb", plural to null.
For nouns/adjectives: include the plural form.
For other: set plural to null.

Words: ${wordListStr}`;
        }

        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01',
                'anthropic-dangerous-direct-browser-access': 'true',
            },
            body: JSON.stringify({
                model: selectedModel,
                max_tokens: 4096,
                messages: [{ role: 'user', content: prompt }],
            }),
        });

        if (!response.ok) {
            const errBody = await response.text().catch(() => '');
            console.error('Bulk import API error:', response.status, errBody);
            if (response.status === 401) showToast('API key invalid. Check Settings.');
            else if (response.status === 429) showToast('Rate limited. Wait and try again.');
            else showToast(`API error ${response.status}. Check console (F12).`);
            return null;
        }

        const data = await response.json();
        const text = data.content?.[0]?.text;
        if (!text) {
            console.error('Empty API response:', JSON.stringify(data).substring(0, 500));
            return null;
        }
        return extractJSON(text);
    } catch (err) {
        console.error('Bulk translation error:', err);
        showToast('Import error: ' + err.message);
        return null;
    }
}

// Robust JSON extractor — finds the outermost { } in any text
function extractJSON(text) {
    // Find the first '{' in the response
    const start = text.indexOf('{');
    if (start === -1) {
        console.error('No JSON object found in response:', text.substring(0, 200));
        return null;
    }

    // Find the matching closing brace
    let depth = 0;
    let end = -1;
    for (let i = start; i < text.length; i++) {
        if (text[i] === '{') depth++;
        else if (text[i] === '}') {
            depth--;
            if (depth === 0) { end = i; break; }
        }
    }

    if (end === -1) {
        // Truncated — find the last point where depth returned to 1
        // and close it there
        console.warn('JSON appears truncated, attempting partial parse...');
        depth = 0;
        let lastGoodEnd = -1;
        for (let i = start; i < text.length; i++) {
            if (text[i] === '{') depth++;
            else if (text[i] === '}') {
                depth--;
                if (depth === 0) { lastGoodEnd = i; break; }
                if (depth === 1) { lastGoodEnd = i; }
            }
        }
        if (lastGoodEnd > start) {
            // Close any open braces
            let attempt = text.substring(start, lastGoodEnd + 1);
            // Count unclosed braces and close them
            let open = 0;
            for (const ch of attempt) {
                if (ch === '{') open++;
                else if (ch === '}') open--;
            }
            while (open > 0) { attempt += '}'; open--; }
            try {
                const result = JSON.parse(attempt);
                console.log('Partial parse recovered', Object.keys(result).length, 'entries');
                return result;
            } catch (e) {
                console.error('Partial parse failed:', e.message);
            }
        }
        console.error('Could not extract JSON from response');
        return null;
    }

    const jsonStr = text.substring(start, end + 1);
    try {
        return JSON.parse(jsonStr);
    } catch (e) {
        console.error('JSON parse failed:', e.message, 'Input:', jsonStr.substring(0, 200));
        return null;
    }
}

function renderBulkImportResults() {
    const results = document.getElementById('import-results');
    const list = document.getElementById('import-results-list');
    const count = document.getElementById('import-results-count');

    const successCount = bulkImportData.filter(d => !d.isDuplicate && d.english !== '?').length;
    const failedCount = bulkImportData.filter(d => d.english === '?').length;
    const dupCount = bulkImportData.filter(d => d.isDuplicate).length;
    let countParts = [];
    if (successCount > 0) countParts.push(`${successCount} ready`);
    if (failedCount > 0) countParts.push(`${failedCount} failed`);
    if (dupCount > 0) countParts.push(`${dupCount} already in bank`);
    count.textContent = `— ${countParts.join(', ')}`;

    list.innerHTML = bulkImportData.map((item, idx) => {
        const isFailed = item.english === '?' || item.italian === '?';
        const isPending = item.isPending;
        const isDisabled = item.isDuplicate || isFailed || isPending;
        const checked = !isDisabled ? 'checked' : '';
        const dupClass = isDisabled ? ' duplicate' : '';
        const selectedClass = !isDisabled ? ' selected' : '';
        const statusLabel = item.isDuplicate
            ? '<span class="import-card-duplicate">already saved</span>'
            : isPending ? '<span class="import-card-duplicate">pending (stopped)</span>'
            : isFailed ? '<span class="import-card-duplicate">translation failed</span>' : '';

        let conjugationHtml = '';
        if (item.conjugation) {
            const tenses = ['presente', 'passato_prossimo', 'imperfetto', 'futuro', 'condizionale'];
            const tenseLabels = {
                presente: 'Present',
                passato_prossimo: 'Past (Passato Prossimo)',
                imperfetto: 'Imperfect',
                futuro: 'Future',
                condizionale: 'Conditional',
            };
            const persons = ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'];

            let tenseBlocks = '';
            for (const tense of tenses) {
                if (item.conjugation[tense]) {
                    const rows = persons.map(p => {
                        const form = item.conjugation[tense][p] || '—';
                        return `<div class="import-conj-row"><span class="import-conj-person">${escapeHtml(p)}</span> <span class="import-conj-form">${escapeHtml(form)}</span></div>`;
                    }).join('');
                    tenseBlocks += `<div class="import-conj-tense-group"><div class="import-conj-tense-name">${tenseLabels[tense] || tense}</div><div class="import-conj-table">${rows}</div></div>`;
                }
            }

            if (tenseBlocks) {
                const inf = item.conjugation.infinitive ? ` — <em>${escapeHtml(item.conjugation.infinitive)}</em>` : '';
                conjugationHtml = `<div class="import-card-conjugation"><div class="import-conj-label">Conjugation${inf}</div>${tenseBlocks}</div>`;
            }
        } else if (item.grammarInfo) {
            // Non-verb grammar info
            let grammarText = '';
            if (item.grammarInfo.type === 'noun' && item.grammarInfo.plural) {
                grammarText = `Noun — plural: ${item.grammarInfo.plural}`;
            } else if (item.grammarInfo.type === 'adjective' && item.grammarInfo.plural) {
                grammarText = `Adjective — plural: ${item.grammarInfo.plural}`;
            } else if (item.grammarInfo.type) {
                grammarText = item.grammarInfo.type.charAt(0).toUpperCase() + item.grammarInfo.type.slice(1);
            }
            if (grammarText) {
                conjugationHtml = `<div class="import-card-conjugation"><span class="import-card-grammar">${escapeHtml(grammarText)}</span></div>`;
            }
        }

        return `<div class="import-word-card${dupClass}${selectedClass}" data-index="${idx}">
            <div class="import-card-header">
                <input type="checkbox" class="import-checkbox" data-index="${idx}" ${checked} ${isDisabled ? 'disabled' : ''}>
                <span class="import-card-italian">${escapeHtml(item.italian)}</span>
                <span class="import-card-arrow">→</span>
                <span class="import-card-english">${escapeHtml(item.english)}</span>
                ${statusLabel}
            </div>
            ${conjugationHtml}
        </div>`;
    }).join('');

    // Checkbox toggles selection styling
    list.querySelectorAll('.import-checkbox').forEach(cb => {
        cb.addEventListener('change', (e) => {
            const card = e.target.closest('.import-word-card');
            card.classList.toggle('selected', e.target.checked);
        });
    });

    results.classList.remove('hidden');
}

function saveBulkImport(selectedOnly) {
    let toSave;
    if (selectedOnly) {
        const checkboxes = document.querySelectorAll('.import-checkbox:checked');
        const indices = [...checkboxes].map(cb => parseInt(cb.dataset.index));
        toSave = indices.map(i => bulkImportData[i]).filter(d => d && !d.isDuplicate && d.english !== '?' && d.italian !== '?');
    } else {
        toSave = bulkImportData.filter(d => !d.isDuplicate && d.english !== '?' && d.italian !== '?');
    }

    if (toSave.length === 0) {
        showToast('No new words to save.');
        return;
    }

    let added = 0;
    for (const item of toSave) {
        if (!isWordInBank(item.italian)) {
            wordBank.push({
                italian: item.italian,
                english: item.english,
                notes: '',
                dateAdded: new Date().toISOString(),
                isHighRotation: false,
                isEasy: false,
                grammarInfo: item.grammarInfo || null,
                conjugation: item.conjugation || null,
            });
            // Also cache the translation
            translationCache[item.italian] = item.english;
            added++;
        }
    }

    saveToLocalStorage();
    renderWordBank();
    showToast(`Added ${added} word${added !== 1 ? 's' : ''} to word bank.`);

    // Mark saved items as duplicates in the UI
    for (const item of toSave) {
        item.isDuplicate = true;
    }
    renderBulkImportResults();
}

// ---------- Flashcards ----------
function updateFlashcards() {
    const emptyState = document.getElementById('flashcard-empty');
    const area = document.getElementById('flashcard-area');

    if (wordBank.length === 0) {
        emptyState.classList.remove('hidden');
        area.classList.add('hidden');
        return;
    }

    emptyState.classList.add('hidden');
    area.classList.remove('hidden');

    // Sync UI state
    document.getElementById('fc-mode-toggle').innerHTML =
        flashcardMode === 'italian-first' ? 'Italian &#8594; English' : 'English &#8594; Italian';
    document.getElementById('fc-multiplier').value = highRotationMultiplier;

    // Build deck from word bank (plain, no weighting — shuffle applies weighting)
    flashcardDeck = [...wordBank];
    currentFlashcardIndex = 0;
    showCurrentCard();
}

function showCurrentCard() {
    if (flashcardDeck.length === 0) return;

    const card = flashcardDeck[currentFlashcardIndex];
    const isItalianFirst = flashcardMode === 'italian-first';

    // Determine the base/infinitive form for verbs
    const hasInfinitive = card.grammarInfo && card.grammarInfo.infinitive;
    const baseItalian = hasInfinitive ? card.grammarInfo.infinitive : card.italian;

    // Front / back content based on mode
    const frontLabel = isItalianFirst ? 'Italian' : 'English';
    const backLabel = isItalianFirst ? 'English' : 'Italian';
    const frontWord = isItalianFirst ? baseItalian : card.english;
    const backWord = isItalianFirst ? card.english : baseItalian;

    document.getElementById('fc-front-label').textContent = frontLabel;
    document.getElementById('fc-back-label').textContent = backLabel;
    document.getElementById('fc-front-word').textContent = frontWord;
    document.getElementById('fc-back-word').textContent = backWord;
    document.getElementById('fc-back-notes').textContent = card.notes || '';

    // Grammar info — show on the Italian side
    // For verbs: show the conjugated form if different from base, plus tense info
    let grammarText = '';
    if (hasInfinitive && card.italian !== card.grammarInfo.infinitive) {
        // Show the original conjugated form + tense
        const parts = [card.italian];
        if (card.grammarInfo.tense) parts.push(card.grammarInfo.tense);
        if (card.grammarInfo.person) parts.push(card.grammarInfo.person);
        grammarText = parts.join(' — ');
    } else {
        grammarText = formatGrammarInfo(card.grammarInfo);
    }

    const conjHtml = formatConjugationCard(card.conjugation);
    if (isItalianFirst) {
        document.getElementById('fc-front-grammar').textContent = grammarText;
        document.getElementById('fc-front-conjugation').innerHTML = conjHtml;
        document.getElementById('fc-back-grammar').textContent = '';
        document.getElementById('fc-back-conjugation').innerHTML = '';
    } else {
        document.getElementById('fc-front-grammar').textContent = '';
        document.getElementById('fc-front-conjugation').innerHTML = '';
        document.getElementById('fc-back-grammar').textContent = grammarText;
        document.getElementById('fc-back-conjugation').innerHTML = conjHtml;
    }

    // High rotation badge
    const isHard = card.isHighRotation;
    document.getElementById('fc-hard-badge-front').classList.toggle('hidden', !isHard);
    document.getElementById('fc-hard-badge-back').classList.toggle('hidden', !isHard);

    // Reset flip state instantly (no animation) so next word isn't visible during flip-back
    const flashcardEl = document.getElementById('flashcard');
    flashcardEl.style.transition = 'none';
    flashcardEl.classList.remove('flipped');
    // Force reflow so the transition:none takes effect before restoring
    flashcardEl.offsetHeight;
    flashcardEl.style.transition = '';

    // Update hard/easy buttons
    updateHighRotationButton();
    updateEasyButton();

    // Track history (avoid consecutive duplicates)
    if (flashcardHistory.length === 0 || flashcardHistory[flashcardHistory.length - 1].italian !== card.italian) {
        flashcardHistory.push(card);
        if (flashcardHistory.length > 200) flashcardHistory.shift();
    }

    // Update progress
    document.getElementById('fc-progress-text').textContent =
        `${currentFlashcardIndex + 1} / ${flashcardDeck.length}`;
    document.getElementById('fc-progress-bar').style.width =
        `${((currentFlashcardIndex + 1) / flashcardDeck.length) * 100}%`;
}

function formatGrammarInfo(info) {
    if (!info) return '';
    if (info.type === 'verb') {
        const parts = [];
        if (info.infinitive) parts.push(info.infinitive);
        if (info.tense) parts.push(info.tense);
        if (info.person) parts.push(info.person);
        return parts.length ? parts.join(' — ') : '';
    }
    // Non-verb: show plural
    if (info.plural) return `(pl. ${info.plural})`;
    return '';
}

function handleFlashcardClick() {
    if (autoplayRunning) { stopAutoplay(); return; }
    if (flashcardDeck.length === 0) return;
    const card = document.getElementById('flashcard');
    if (card.classList.contains('flipped')) {
        nextCard();
    } else {
        flipCard();
    }
}

function flipCard() {
    if (flashcardDeck.length === 0) return;
    document.getElementById('flashcard').classList.toggle('flipped');
}

function nextCard() {
    if (flashcardDeck.length === 0) return;
    currentFlashcardIndex = (currentFlashcardIndex + 1) % flashcardDeck.length;
    showCurrentCard();
}

function prevCard() {
    if (flashcardDeck.length === 0) return;
    currentFlashcardIndex = (currentFlashcardIndex - 1 + flashcardDeck.length) % flashcardDeck.length;
    showCurrentCard();
}

function getFilteredWords() {
    const filter = document.getElementById('fc-filter').value;
    if (filter === 'hard') return wordBank.filter(w => w.isHighRotation);
    if (filter === 'easy') return wordBank.filter(w => w.isEasy);
    if (filter === 'normal') return wordBank.filter(w => !w.isHighRotation && !w.isEasy);
    if (filter === 'srs-new') return srsGetTodayNewWords();
    if (filter === 'srs-review') return srsGetTodayReviewWords();
    if (filter === 'srs-all') return srsGetTodayAllWords();
    if (filter === 'srs-not-easy') return srsGetDailyNotEasy();
    if (filter === 'srs-easy-review') return srsGetEasyReview();
    return [...wordBank];
}

function shuffleDeck() {
    const source = getFilteredWords();
    if (source.length === 0) {
        showToast('No words match the current filter.');
        return;
    }

    const filter = document.getElementById('fc-filter').value;
    const mult = highRotationMultiplier;
    let weighted;

    if (filter !== 'all') {
        // When a specific filter is active, just shuffle those words evenly
        weighted = [...source];
    } else {
        // "All" mode: apply weighting
        weighted = [];
        const hasEasy = source.some(w => w.isEasy);
        for (const card of source) {
            if (card.isHighRotation) {
                for (let i = 0; i < mult; i++) weighted.push(card);
            } else if (card.isEasy) {
                weighted.push(card);
            } else {
                const copies = hasEasy ? mult : 1;
                for (let i = 0; i < copies; i++) weighted.push(card);
            }
        }
    }

    // Fisher-Yates shuffle
    for (let i = weighted.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [weighted[i], weighted[j]] = [weighted[j], weighted[i]];
    }

    flashcardDeck = weighted;
    currentFlashcardIndex = 0;
    showCurrentCard();

    const filterLabel = filter === 'all' ? '' : ` (${filter} only)`;
    showToast(`Shuffled ${source.length} words${filterLabel}!`);
}

function restartDeck() {
    flashcardDeck = getFilteredWords();
    if (flashcardDeck.length === 0) {
        showToast('No words match the current filter.');
        return;
    }
    currentFlashcardIndex = 0;
    showCurrentCard();
    showToast('Restarted from beginning.');
}

// ---------- High Rotation ----------
function toggleHighRotation() {
    if (flashcardDeck.length === 0) return;
    const deckEntry = flashcardDeck[currentFlashcardIndex];
    // Find matching word bank entry
    const bankEntry = wordBank.find(w => w.italian === deckEntry.italian);
    if (!bankEntry) return;

    bankEntry.isHighRotation = !bankEntry.isHighRotation;
    deckEntry.isHighRotation = bankEntry.isHighRotation;
    // If marking hard, remove easy (mutually exclusive)
    if (bankEntry.isHighRotation && bankEntry.isEasy) {
        bankEntry.isEasy = false;
        deckEntry.isEasy = false;
        updateEasyButton();
    }
    saveToLocalStorage();
    updateHighRotationButton();

    // Update badges
    document.getElementById('fc-hard-badge-front').classList.toggle('hidden', !bankEntry.isHighRotation);
    document.getElementById('fc-hard-badge-back').classList.toggle('hidden', !bankEntry.isHighRotation);

    showToast(bankEntry.isHighRotation
        ? `"${bankEntry.italian}" marked hard — will appear ${highRotationMultiplier}x more in shuffle.`
        : `"${bankEntry.italian}" removed from hard list.`);
}

function updateHighRotationButton() {
    if (flashcardDeck.length === 0) return;
    const card = flashcardDeck[currentFlashcardIndex];
    const btn = document.getElementById('fc-mark-hard');
    if (card.isHighRotation) {
        btn.textContent = 'Unmark Hard';
        btn.classList.add('active');
    } else {
        btn.textContent = 'Mark Hard';
        btn.classList.remove('active');
    }
}

// ---------- Easy Rotation ----------
function toggleEasy() {
    if (flashcardDeck.length === 0) return;
    const deckEntry = flashcardDeck[currentFlashcardIndex];
    const bankEntry = wordBank.find(w => w.italian === deckEntry.italian);
    if (!bankEntry) return;

    bankEntry.isEasy = !bankEntry.isEasy;
    deckEntry.isEasy = bankEntry.isEasy;
    // Track when it was marked easy
    if (bankEntry.isEasy) {
        bankEntry.easyDate = new Date().toISOString();
    } else {
        bankEntry.easyDate = null;
    }
    // If marking easy, remove hard (they're mutually exclusive)
    if (bankEntry.isEasy && bankEntry.isHighRotation) {
        bankEntry.isHighRotation = false;
        deckEntry.isHighRotation = false;
        updateHighRotationButton();
        document.getElementById('fc-hard-badge-front').classList.add('hidden');
        document.getElementById('fc-hard-badge-back').classList.add('hidden');
    }
    saveToLocalStorage();
    updateEasyButton();

    showToast(bankEntry.isEasy
        ? `"${bankEntry.italian}" marked easy — will appear ${highRotationMultiplier}x less in shuffle.`
        : `"${bankEntry.italian}" removed from easy list.`);
}

function updateEasyButton() {
    if (flashcardDeck.length === 0) return;
    const card = flashcardDeck[currentFlashcardIndex];
    const btn = document.getElementById('fc-mark-easy');
    if (card.isEasy) {
        btn.textContent = 'Unmark Easy';
        btn.classList.add('active');
    } else {
        btn.textContent = 'Mark Easy';
        btn.classList.remove('active');
    }
}

// ---------- Conjugation on Flashcard ----------
function formatConjugationCard(conjugation) {
    if (!conjugation) return '';

    const tenses = ['presente', 'passato_prossimo', 'imperfetto', 'futuro', 'condizionale'];
    const tenseLabels = {
        presente: 'Present',
        passato_prossimo: 'Passato Prossimo',
        imperfetto: 'Imperfect',
        futuro: 'Future',
        condizionale: 'Conditional',
    };
    const persons = ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'];

    let html = '';
    for (const tense of tenses) {
        if (!conjugation[tense]) continue;
        const cells = persons.map(p => {
            const form = conjugation[tense][p] || '—';
            return `<div><span class="fc-conj-person">${escapeHtml(p)}</span><br><span class="fc-conj-form">${escapeHtml(form)}</span></div>`;
        }).join('');
        html += `<div class="fc-conj-tense"><div class="fc-conj-tense-name">${tenseLabels[tense] || tense}</div><div class="fc-conj-grid">${cells}</div></div>`;
    }

    return html;
}

// ---------- Grammar Enrichment via Claude ----------
async function enrichAllWords() {
    if (!apiKey) {
        showToast('Add your Anthropic API key in Settings first.');
        return;
    }

    const wordsToEnrich = wordBank.filter(w => !w.grammarInfo);
    if (wordsToEnrich.length === 0) {
        showToast('All words already have grammar info.');
        return;
    }

    const btn = document.getElementById('fc-enrich-btn');
    btn.disabled = true;
    btn.textContent = 'Loading...';

    try {
        // Batch words into groups of 20 for efficiency
        const batchSize = 20;
        for (let i = 0; i < wordsToEnrich.length; i += batchSize) {
            const batch = wordsToEnrich.slice(i, i + batchSize);
            const wordList = batch.map(w => w.italian);
            btn.textContent = `Loading... (${i + batch.length}/${wordsToEnrich.length})`;

            const result = await fetchGrammarBatch(wordList);
            if (result) {
                for (const w of batch) {
                    const info = result[w.italian] || result[w.italian.toLowerCase()];
                    if (info) w.grammarInfo = info;
                }
                saveToLocalStorage();
            }
        }

        showToast(`Grammar info loaded for ${wordsToEnrich.length} words.`);
        showCurrentCard();
    } catch (err) {
        console.error('Enrichment error:', err);
        showToast('Error loading grammar info. Try again.');
    } finally {
        btn.disabled = false;
        btn.textContent = 'Load Grammar Info';
    }
}

async function fetchGrammarBatch(words) {
    try {
        const wordListStr = words.map(w => `"${w}"`).join(', ');
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01',
                'anthropic-dangerous-direct-browser-access': 'true',
            },
            body: JSON.stringify({
                model: selectedModel,
                max_tokens: 2048,
                messages: [{
                    role: 'user',
                    content: `For each Italian word below, determine its grammar info. Return ONLY valid JSON — an object keyed by the Italian word (lowercase).

For conjugated verbs, return:
{ "type": "verb", "infinitive": "dormire", "tense": "presente", "person": "3rd sing.", "plural": null }

For nouns, return:
{ "type": "noun", "infinitive": null, "tense": null, "person": null, "plural": "gatti" }

For adjectives, return:
{ "type": "adjective", "infinitive": null, "tense": null, "person": null, "plural": "neri" }

For other words (prepositions, articles, adverbs, etc.), return:
{ "type": "other", "infinitive": null, "tense": null, "person": null, "plural": null }

Use short labels for tense (presente, imperfetto, passato prossimo, futuro, condizionale, congiuntivo, passato remoto) and person (1st sing., 2nd sing., 3rd sing., 1st pl., 2nd pl., 3rd pl.).

Words: [${wordListStr}]`,
                }],
            }),
        });

        if (!response.ok) {
            console.error('Grammar API error:', response.status);
            return null;
        }

        const data = await response.json();
        const text = data.content?.[0]?.text;
        if (!text) return null;

        return extractJSON(text);
    } catch (err) {
        console.error('Grammar fetch error:', err);
        return null;
    }
}

// ---------- Flashcard Filter & Replay ----------
function applyFlashcardFilter() {
    const filtered = getFilteredWords();
    const filter = document.getElementById('fc-filter').value;

    if (filtered.length === 0) {
        showToast(`No ${filter} words found.`);
        return;
    }

    flashcardDeck = filtered;
    currentFlashcardIndex = 0;
    showCurrentCard();
    showToast(`Showing ${filtered.length} ${filter} word${filtered.length !== 1 ? 's' : ''}.`);
}

function replayLast50() {
    if (flashcardHistory.length === 0) {
        showToast('No card history yet. Start reviewing first.');
        return;
    }
    const last50 = flashcardHistory.slice(-50);
    // Deduplicate by italian word
    const seen = new Set();
    const unique = [];
    for (const card of last50) {
        if (!seen.has(card.italian)) {
            seen.add(card.italian);
            unique.push(card);
        }
    }
    flashcardDeck = unique;
    currentFlashcardIndex = 0;
    showCurrentCard();
    showToast(`Replaying last ${unique.length} reviewed word${unique.length !== 1 ? 's' : ''}.`);
}

// ---------- Spaced Repetition System ----------
function getToday() {
    return new Date().toISOString().slice(0, 10); // YYYY-MM-DD
}

function addDays(dateStr, days) {
    // Handle batch IDs like "2026-03-25 #2" — extract just the date part
    const datePart = dateStr.slice(0, 10);
    const d = new Date(datePart);
    d.setDate(d.getDate() + days);
    return d.toISOString().slice(0, 10);
}

function srsGetWordsAlreadyInBatches() {
    const used = new Set();
    for (const batch of srsBatches) {
        for (const w of batch.words) {
            used.add(w.italian);
        }
    }
    return used;
}

function srsGetDueReviews() {
    const today = getToday();
    const due = [];
    for (const batch of srsBatches) {
        const intervals = [
            { key: 'day1', days: 1 },
            { key: 'day5', days: 5 },
            { key: 'day25', days: 25 },
        ];
        for (const iv of intervals) {
            const dueDate = addDays(batch.dateCreated, iv.days);
            if (dueDate <= today && !batch.reviews[iv.key]) {
                due.push({
                    batch,
                    reviewKey: iv.key,
                    dueDate,
                    daysLate: Math.floor((new Date(today) - new Date(dueDate)) / 86400000),
                });
            }
        }
    }
    return due;
}

function renderSRS() {
    const empty = document.getElementById('srs-empty');
    const area = document.getElementById('srs-area');
    if (wordBank.length === 0) {
        empty.classList.remove('hidden');
        area.classList.add('hidden');
        return;
    }
    empty.classList.add('hidden');
    area.classList.remove('hidden');

    const today = getToday();
    const usedWords = srsGetWordsAlreadyInBatches();
    const available = wordBank.filter(w => !usedWords.has(w.italian));
    const dueReviews = srsGetDueReviews();

    // Collect all review words
    const reviewWords = [];
    for (const r of dueReviews) {
        for (const w of r.batch.words) {
            if (!reviewWords.some(rw => rw.italian === w.italian)) {
                reviewWords.push(w);
            }
        }
    }

    // Today's batches (including extra batches)
    const todayBatches = srsBatches.filter(b => b.dateCreated.startsWith(today));
    const newWords = [];
    for (const b of todayBatches) {
        for (const w of b.words) {
            if (!newWords.some(nw => nw.italian === w.italian)) newWords.push(w);
        }
    }

    // Easy review — random selection of easy words for daily refresh
    const easyReviewSize = parseInt(document.getElementById('srs-easy-review-size').value) || 50;
    const easyWords = wordBank.filter(w => w.isEasy);
    let easyReviewWords = [];
    if (easyWords.length > 0) {
        const shuffledEasy = [...easyWords];
        for (let i = shuffledEasy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledEasy[i], shuffledEasy[j]] = [shuffledEasy[j], shuffledEasy[i]];
        }
        easyReviewWords = shuffledEasy.slice(0, Math.min(easyReviewSize, easyWords.length));
    }

    // Build today's session (new + reviews, not including easy review)
    srsTodayWords = [...newWords, ...reviewWords];

    // Stats
    const statsEl = document.getElementById('srs-today-stats');
    statsEl.innerHTML = `
        <strong>${available.length}</strong> words available for new batches |
        <strong>${srsBatches.length}</strong> total batches |
        <strong>${dueReviews.length}</strong> review${dueReviews.length !== 1 ? 's' : ''} due today |
        <strong>${newWords.length}</strong> new words today |
        <strong>${easyReviewWords.length}</strong> easy review
    `;

    // Always show today's words section
    const todaySection = document.getElementById('srs-today-words');
    todaySection.classList.remove('hidden');

    // New words
    document.getElementById('srs-new-count').textContent = newWords.length;
    if (newWords.length > 0) {
        document.getElementById('srs-new-label').textContent = 'New Words';
        document.getElementById('srs-new-list').innerHTML = newWords.map(w =>
            `<span class="srs-word-chip">${escapeHtml(w.italian)}<span class="srs-chip-en">${escapeHtml(w.english)}</span></span>`
        ).join('');
    } else {
        document.getElementById('srs-new-label').textContent = 'New Words \u2014 click "Load New Words" to start';
        document.getElementById('srs-new-list').innerHTML = '';
    }

    // Review words
    document.getElementById('srs-review-count').textContent = reviewWords.length;
    const reviewHeader = document.getElementById('srs-review-header');
    if (reviewWords.length > 0) {
        reviewHeader.style.display = '';
        document.getElementById('srs-review-list').innerHTML = reviewWords.map(w =>
            `<span class="srs-word-chip">${escapeHtml(w.italian)}<span class="srs-chip-en">${escapeHtml(w.english)}</span></span>`
        ).join('');
    } else {
        reviewHeader.style.display = 'none';
        document.getElementById('srs-review-list').innerHTML = '';
    }

    // Easy review words
    const easyReviewHeader = document.getElementById('srs-easy-review-header');
    document.getElementById('srs-easy-review-count').textContent = easyReviewWords.length;
    if (easyReviewWords.length > 0) {
        easyReviewHeader.style.display = '';
        document.getElementById('srs-easy-review-list').innerHTML = easyReviewWords.map(w =>
            `<span class="srs-word-chip">${escapeHtml(w.italian)}<span class="srs-chip-en">${escapeHtml(w.english)}</span></span>`
        ).join('');
    } else {
        easyReviewHeader.style.display = 'none';
        document.getElementById('srs-easy-review-list').innerHTML = '';
    }

    // Store easy review for filter access
    window._srsEasyReview = easyReviewWords;

    // Render batch history
    renderSRSBatchHistory();
}

function renderSRSBatchHistory() {
    const list = document.getElementById('srs-batch-list');
    const today = getToday();

    if (srsBatches.length === 0) {
        list.innerHTML = '<p class="settings-hint">No batches yet. Click "Load 25 New Words" to start.</p>';
        return;
    }

    // Show newest first
    const sorted = [...srsBatches].reverse();

    list.innerHTML = sorted.map((batch, i) => {
        const realIdx = srsBatches.length - 1 - i;
        const intervals = [
            { key: 'day1', days: 1, label: 'Day 1' },
            { key: 'day5', days: 5, label: 'Day 5' },
            { key: 'day25', days: 25, label: 'Day 25' },
        ];

        const dots = intervals.map(iv => {
            const dueDate = addDays(batch.dateCreated, iv.days);
            if (batch.reviews[iv.key]) return `<span class="srs-review-dot done" title="${iv.label}: Done"></span>`;
            if (dueDate <= today) return `<span class="srs-review-dot overdue" title="${iv.label}: Due!"></span>`;
            if (dueDate === addDays(today, 1)) return `<span class="srs-review-dot due" title="${iv.label}: Tomorrow"></span>`;
            return `<span class="srs-review-dot pending" title="${iv.label}: ${dueDate}"></span>`;
        }).join('');

        const reviewDetails = intervals.map(iv => {
            const dueDate = addDays(batch.dateCreated, iv.days);
            if (batch.reviews[iv.key]) {
                return `<span class="done">${iv.label} review: Done (${batch.reviews[iv.key]})</span>`;
            }
            if (dueDate <= today) {
                return `<span class="overdue">${iv.label} review: OVERDUE (was due ${dueDate})</span>`;
            }
            return `<span class="pending">${iv.label} review: ${dueDate}</span>`;
        }).join('<br>');

        const words = batch.words.map(w =>
            `<span class="srs-word-chip">${escapeHtml(w.italian)}<span class="srs-chip-en">${escapeHtml(w.english)}</span></span>`
        ).join('');

        // Mark due reviews button
        const hasDue = intervals.some(iv => {
            const dueDate = addDays(batch.dateCreated, iv.days);
            return dueDate <= today && !batch.reviews[iv.key];
        });

        const markBtn = hasDue
            ? `<button class="btn-secondary" onclick="srsMarkReviewed(${realIdx})" style="font-size:0.75rem;">Mark Reviews Done</button>`
            : '';

        // Undo button — show if any review has been completed
        const hasCompleted = intervals.some(iv => batch.reviews[iv.key]);
        const undoBtn = hasCompleted
            ? `<button class="btn-secondary" onclick="srsUndoReviews(${realIdx})" style="font-size:0.75rem;">Undo Reviews</button>`
            : '';

        return `<div class="srs-batch">
            <div class="srs-batch-header" onclick="srsToggleBatch(this)">
                <span class="srs-batch-date">${batch.dateCreated} — ${batch.words.length} words</span>
                <span class="srs-batch-info">${dots}</span>
            </div>
            <div class="srs-batch-body">
                <div class="srs-batch-reviews">${reviewDetails}</div>
                <div class="srs-word-list">${words}</div>
                <div class="srs-batch-actions">${markBtn} ${undoBtn}</div>
            </div>
        </div>`;
    }).join('');
}

function srsLoadNewBatch() {
    const today = getToday();
    const batchSize = parseInt(document.getElementById('srs-batch-size').value) || 25;

    const usedWords = srsGetWordsAlreadyInBatches();
    // Only pick normal words (not easy/hard) that haven't been in a batch before
    const available = wordBank.filter(w => !usedWords.has(w.italian) && !w.isHighRotation && !w.isEasy);

    if (available.length === 0) {
        showToast('All normal words have been assigned to batches! Great progress.');
        return;
    }

    // Pick random words
    const shuffled = [...available];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    const picked = shuffled.slice(0, Math.min(batchSize, available.length));

    // Check if there's already a batch for today — if so, add to it
    const existingBatch = srsBatches.find(b => b.dateCreated.startsWith(today) && !b.dateCreated.includes('#'));
    if (existingBatch) {
        for (const w of picked) {
            existingBatch.words.push({ italian: w.italian, english: w.english });
        }
        saveToLocalStorage();
        renderSRS();
        autoBackup();
        showToast(`Added ${picked.length} more words to today's batch (now ${existingBatch.words.length} total). Auto-backup saved.`);
    } else {
        const batch = {
            dateCreated: today,
            words: picked.map(w => ({ italian: w.italian, english: w.english })),
            reviews: { day1: null, day5: null, day25: null },
        };
        srsBatches.push(batch);
        saveToLocalStorage();
        renderSRS();
        autoBackup();
        showToast(`Loaded ${picked.length} new words for today! Auto-backup saved.`);
    }
}

function srsLoadExtraBatch() {
    const today = getToday();
    const batchSize = parseInt(document.getElementById('srs-batch-size').value) || 25;

    const usedWords = srsGetWordsAlreadyInBatches();
    const available = wordBank.filter(w => !usedWords.has(w.italian) && !w.isHighRotation && !w.isEasy);

    if (available.length === 0) {
        showToast('All normal words have been assigned to batches!');
        return;
    }

    const shuffled = [...available];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    const picked = shuffled.slice(0, Math.min(batchSize, available.length));

    // Always create a NEW batch — use a unique ID by appending a counter
    const todayBatches = srsBatches.filter(b => b.dateCreated.startsWith(today));
    const batchId = todayBatches.length > 0 ? `${today} #${todayBatches.length + 1}` : today;

    const batch = {
        dateCreated: batchId,
        words: picked.map(w => ({ italian: w.italian, english: w.english })),
        reviews: { day1: null, day5: null, day25: null },
    };

    srsBatches.push(batch);
    saveToLocalStorage();
    renderSRS();
    autoBackup();
    showToast(`Extra batch loaded: ${picked.length} words with separate review schedule. Auto-backup saved.`);
}

function srsMarkReviewed(batchIdx) {
    const batch = srsBatches[batchIdx];
    if (!batch) return;
    const today = getToday();

    const intervals = [
        { key: 'day1', days: 1 },
        { key: 'day5', days: 5 },
        { key: 'day25', days: 25 },
    ];

    let marked = 0;
    for (const iv of intervals) {
        const dueDate = addDays(batch.dateCreated, iv.days);
        if (dueDate <= today && !batch.reviews[iv.key]) {
            batch.reviews[iv.key] = today;
            marked++;
        }
    }

    saveToLocalStorage();
    renderSRS();
    showToast(`Marked ${marked} review${marked !== 1 ? 's' : ''} as done.`);
}

function srsToggleBatch(headerEl) {
    const body = headerEl.nextElementSibling;
    body.classList.toggle('expanded');
}

function srsLoadToFlashcards() {
    if (srsTodayWords.length === 0) {
        showToast('No words in today\'s session.');
        return;
    }
    // Find matching word bank entries
    flashcardDeck = srsTodayWords.map(sw =>
        wordBank.find(w => w.italian === sw.italian) || sw
    );
    currentFlashcardIndex = 0;
    switchTab('flashcards');
    showCurrentCard();
    showToast(`Loaded ${flashcardDeck.length} SRS words into flashcards.`);
}

function srsLoadToMemory() {
    if (srsTodayWords.length === 0) {
        showToast('No words in today\'s session.');
        return;
    }
    memoryFlashcardPool = srsTodayWords.map(sw =>
        wordBank.find(w => w.italian === sw.italian) || sw
    );
    document.getElementById('memory-source').value = 'flashcard';
    switchTab('memory');
    showToast(`${memoryFlashcardPool.length} SRS words loaded. Click "Load Words" to start a game.`);
}

function srsLoadToAudio() {
    if (srsTodayWords.length === 0) {
        showToast('No words in today\'s session.');
        return;
    }
    switchTab('audio');
    showToast(`Switch to Audio tab. Your SRS words will be included when you generate a script with the appropriate filter.`);
}

function srsGetTodayNewWords() {
    const today = getToday();
    // Find all batches created today (including extra batches like "2026-03-25 #2")
    const todayBatches = srsBatches.filter(b => b.dateCreated.startsWith(today));
    const words = [];
    for (const batch of todayBatches) {
        for (const sw of batch.words) {
            const match = wordBank.find(w => w.italian === sw.italian) || sw;
            if (!words.some(w => w.italian === match.italian)) words.push(match);
        }
    }
    return words;
}

function srsGetTodayReviewWords() {
    const dueReviews = srsGetDueReviews();
    const words = [];
    const seen = new Set();
    for (const r of dueReviews) {
        for (const w of r.batch.words) {
            if (!seen.has(w.italian)) {
                seen.add(w.italian);
                words.push(wordBank.find(bw => bw.italian === w.italian) || w);
            }
        }
    }
    return words;
}

function srsGetTodayAllWords() {
    const newW = srsGetTodayNewWords();
    const revW = srsGetTodayReviewWords();
    const easyW = srsGetEasyReview();
    const seen = new Set();
    const merged = [];
    for (const list of [newW, revW, easyW]) {
        for (const w of list) {
            if (!seen.has(w.italian)) {
                seen.add(w.italian);
                merged.push(w);
            }
        }
    }
    return merged;
}

function srsUndoReviews(batchIdx) {
    const batch = srsBatches[batchIdx];
    if (!batch) return;

    batch.reviews = { day1: null, day5: null, day25: null };
    saveToLocalStorage();
    renderSRS();
    showToast(`Reviews reset for batch ${batch.dateCreated}. They will show as due again.`);
}

function srsGetDailyNotEasy() {
    // All of today's new + review words that are NOT marked easy
    const all = srsGetTodayAllWords();
    return all.filter(w => !w.isEasy);
}

function srsGetEasyReview() {
    return window._srsEasyReview || [];
}

window.srsMarkReviewed = srsMarkReviewed;
window.srsToggleBatch = srsToggleBatch;
window.srsUndoReviews = srsUndoReviews;

// ---------- Flashcard Autoplay ----------
function toggleAutoplay() {
    if (autoplayRunning) {
        stopAutoplay();
    } else {
        startAutoplay();
    }
}

function startAutoplay() {
    if (flashcardDeck.length === 0) return;
    autoplayRunning = true;
    document.getElementById('fc-autoplay-btn').textContent = 'Stop Autoplay';
    autoplayStep();
}

function stopAutoplay() {
    autoplayRunning = false;
    clearTimeout(autoplayTimer);
    autoplayTimer = null;
    document.getElementById('fc-autoplay-btn').textContent = 'Start Autoplay';
}

function autoplayStep() {
    if (!autoplayRunning || flashcardDeck.length === 0) {
        stopAutoplay();
        return;
    }

    const frontTime = parseFloat(document.getElementById('fc-auto-front').value) * 1000;
    const backTime = parseFloat(document.getElementById('fc-auto-back').value) * 1000;
    const flashcardEl = document.getElementById('flashcard');
    const isFlipped = flashcardEl.classList.contains('flipped');

    if (!isFlipped) {
        // Show front — wait frontTime then flip
        autoplayTimer = setTimeout(() => {
            if (!autoplayRunning) return;
            flipCard();
            // Now wait backTime then advance
            autoplayTimer = setTimeout(() => {
                if (!autoplayRunning) return;
                // Advance to next card
                currentFlashcardIndex = (currentFlashcardIndex + 1) % flashcardDeck.length;
                showCurrentCard();
                // Continue
                autoplayStep();
            }, backTime);
        }, frontTime);
    } else {
        // Already flipped (shouldn't normally happen), advance
        currentFlashcardIndex = (currentFlashcardIndex + 1) % flashcardDeck.length;
        showCurrentCard();
        autoplayStep();
    }
}

function sendLast50ToMemory() {
    if (flashcardHistory.length === 0) {
        showToast('No card history yet. Review some flashcards first.');
        return;
    }
    const last50 = flashcardHistory.slice(-50);
    const seen = new Set();
    const unique = [];
    for (const card of last50) {
        if (!seen.has(card.italian)) {
            seen.add(card.italian);
            unique.push(card);
        }
    }
    memoryFlashcardPool = unique;
    showToast(`${unique.length} words sent to Memory Game. Select "Flashcard Last 50" in the Memory Game to use them.`);
}

// ---------- Memory Game ----------
let memoryCards = [];
let memoryFlipped = [];
let memoryMatched = 0;
let memoryMoves = 0;
let memoryPairs = 0;
let memoryLocked = false;
let memoryStartTime = 0;
let memoryWordSet = []; // the current loaded word set
let memoryFlashcardPool = []; // words sent from flashcard last 50

function loadMemoryWords() {
    const pairCount = parseInt(document.getElementById('memory-pairs').value);
    const source = document.getElementById('memory-source').value;

    // Get available words based on source
    let available;
    if (source === 'hard') {
        available = wordBank.filter(w => w.isHighRotation);
    } else if (source === 'easy') {
        available = wordBank.filter(w => w.isEasy);
    } else if (source === 'normal') {
        available = wordBank.filter(w => !w.isHighRotation && !w.isEasy);
    } else if (source === 'flashcard') {
        if (memoryFlashcardPool.length === 0) {
            showToast('No flashcard words loaded. Use "Send Last 50 to Memory Game" on the Flashcards tab first.');
            return;
        }
        available = [...memoryFlashcardPool];
    } else if (source === 'srs-new') {
        available = srsGetTodayNewWords();
    } else if (source === 'srs-review') {
        available = srsGetTodayReviewWords();
    } else if (source === 'srs-all') {
        available = srsGetTodayAllWords();
    } else if (source === 'srs-not-easy') {
        available = srsGetDailyNotEasy();
    } else if (source === 'srs-easy-review') {
        available = srsGetEasyReview();
    } else {
        available = [...wordBank];
    }

    if (available.length < pairCount) {
        showToast(`Need at least ${pairCount} ${source} words. You have ${available.length}.`);
        return;
    }

    // Pick random words
    const shuffled = [...available];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    memoryWordSet = shuffled.slice(0, pairCount);

    renderMemorySidebar();
    startMemoryGameWithSet();
}

function replayMemoryGame() {
    if (memoryWordSet.length === 0) {
        loadMemoryWords();
        return;
    }
    startMemoryGameWithSet();
}

function startMemoryGameWithSet() {
    if (memoryWordSet.length === 0) return;

    memoryPairs = memoryWordSet.length;
    memoryMatched = 0;
    memoryMoves = 0;
    memoryLocked = false;
    memoryFlipped = [];

    document.getElementById('memory-win').classList.add('hidden');
    updateMemoryStats();

    // Create card pairs from the word set
    memoryCards = [];
    memoryWordSet.forEach((word, idx) => {
        memoryCards.push({
            id: idx * 2,
            text: word.italian,
            lang: 'it',
            pairId: idx,
            isFlipped: false,
            isMatched: false,
        });
        memoryCards.push({
            id: idx * 2 + 1,
            text: word.english,
            lang: 'en',
            pairId: idx,
            isFlipped: false,
            isMatched: false,
        });
    });

    // Shuffle cards
    for (let i = memoryCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [memoryCards[i], memoryCards[j]] = [memoryCards[j], memoryCards[i]];
    }

    // Determine grid columns
    const total = memoryCards.length;
    let cols;
    if (total <= 12) cols = 4;
    else if (total <= 20) cols = 5;
    else if (total <= 30) cols = 6;
    else if (total <= 40) cols = 8;
    else cols = 10;

    const board = document.getElementById('memory-board');
    board.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    board.innerHTML = memoryCards.map((card, i) => `
        <div class="memory-card" data-index="${i}">
            <div class="memory-card-inner">
                <div class="memory-card-face memory-card-back">?</div>
                <div class="memory-card-face memory-card-front lang-${card.lang}">${escapeHtml(card.text)}</div>
            </div>
        </div>
    `).join('');

    // Add click handlers
    board.querySelectorAll('.memory-card').forEach(el => {
        el.addEventListener('click', () => handleMemoryCardClick(parseInt(el.dataset.index)));
    });

    memoryStartTime = Date.now();
}

function renderMemorySidebar() {
    const list = document.getElementById('memory-word-list');
    const view = document.getElementById('memory-sidebar-view').value;

    // Build sorted index for alphabetical display
    const sortedIndices = memoryWordSet.map((w, i) => i);
    sortedIndices.sort((a, b) => memoryWordSet[a].italian.localeCompare(memoryWordSet[b].italian));

    list.innerHTML = sortedIndices.map(idx => {
        const word = memoryWordSet[idx];
        const bankEntry = wordBank.find(w => w.italian === word.italian);
        const isEasy = bankEntry && bankEntry.isEasy;
        const isHard = bankEntry && bankEntry.isHighRotation;

        let wordDisplay = '';
        if (view === 'italian') {
            wordDisplay = `<span class="memory-word-italian">${escapeHtml(word.italian)}</span>`;
        } else if (view === 'english') {
            wordDisplay = `<span class="memory-word-english" style="font-size:0.8rem;">${escapeHtml(word.english)}</span>`;
        } else {
            wordDisplay = `<span class="memory-word-italian">${escapeHtml(word.italian)}</span><br><span class="memory-word-english">${escapeHtml(word.english)}</span>`;
        }

        const itemClass = isEasy ? ' easy' : (isHard ? ' hard' : '');
        return `<div class="memory-word-item${itemClass}" data-index="${idx}">
            <div>${wordDisplay}</div>
            <div class="memory-word-actions">
                <button class="memory-hard-btn${isHard ? ' hard-active' : ''}" data-index="${idx}" title="Toggle hard">Hard</button>
                <button class="memory-easy-btn${isEasy ? ' easy-active' : ''}" data-index="${idx}" title="Mark easy &amp; replace">Easy</button>
            </div>
        </div>`;
    }).join('');

    // Add click handlers
    list.querySelectorAll('.memory-easy-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            markMemoryWordEasy(parseInt(btn.dataset.index));
        });
    });
    list.querySelectorAll('.memory-hard-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMemoryWordHard(parseInt(btn.dataset.index));
        });
    });
}

function markMemoryWordEasy(idx) {
    const word = memoryWordSet[idx];
    if (!word) return;

    // Mark as easy in word bank
    const bankEntry = wordBank.find(w => w.italian === word.italian);
    if (bankEntry) {
        bankEntry.isEasy = true;
        bankEntry.easyDate = new Date().toISOString();
        bankEntry.isHighRotation = false;
        saveToLocalStorage();
    }

    // Find a replacement word that's not in the current set and not easy
    const currentItalians = new Set(memoryWordSet.map(w => w.italian));
    const available = wordBank.filter(w => !w.isEasy && !currentItalians.has(w.italian));

    if (available.length > 0) {
        // Pick a random replacement
        const replacement = available[Math.floor(Math.random() * available.length)];
        memoryWordSet[idx] = replacement;
        showToast(`"${word.italian}" marked easy, replaced with "${replacement.italian}".`);
    } else {
        // No replacement available, just remove
        memoryWordSet.splice(idx, 1);
        showToast(`"${word.italian}" marked easy and removed. No replacement available.`);
    }

    renderMemorySidebar();
}

function toggleMemoryWordHard(idx) {
    const word = memoryWordSet[idx];
    if (!word) return;

    const bankEntry = wordBank.find(w => w.italian === word.italian);
    if (!bankEntry) return;

    bankEntry.isHighRotation = !bankEntry.isHighRotation;
    if (bankEntry.isHighRotation && bankEntry.isEasy) {
        bankEntry.isEasy = false;
        bankEntry.easyDate = null;
    }
    saveToLocalStorage();
    renderMemorySidebar();

    showToast(bankEntry.isHighRotation
        ? `"${word.italian}" marked hard.`
        : `"${word.italian}" unmarked hard.`);
}

function handleMemoryCardClick(index) {
    if (memoryLocked) return;
    const card = memoryCards[index];
    if (card.isFlipped || card.isMatched) return;

    // Flip this card
    card.isFlipped = true;
    const el = document.querySelectorAll('.memory-card')[index];
    el.classList.add('flipped');
    memoryFlipped.push(index);

    if (memoryFlipped.length === 2) {
        memoryMoves++;
        updateMemoryStats();

        const [i1, i2] = memoryFlipped;
        const c1 = memoryCards[i1];
        const c2 = memoryCards[i2];

        if (c1.pairId === c2.pairId) {
            // Match!
            c1.isMatched = true;
            c2.isMatched = true;
            document.querySelectorAll('.memory-card')[i1].classList.add('matched');
            document.querySelectorAll('.memory-card')[i2].classList.add('matched');
            memoryMatched++;
            memoryFlipped = [];
            updateMemoryStats();

            if (memoryMatched === memoryPairs) {
                // Win!
                const elapsed = Math.round((Date.now() - memoryStartTime) / 1000);
                const mins = Math.floor(elapsed / 60);
                const secs = elapsed % 60;
                document.getElementById('memory-win-stats').textContent =
                    `${memoryMoves} moves in ${mins > 0 ? mins + 'm ' : ''}${secs}s`;
                document.getElementById('memory-win').classList.remove('hidden');
            }
        } else {
            // No match — flip back after delay
            memoryLocked = true;
            setTimeout(() => {
                c1.isFlipped = false;
                c2.isFlipped = false;
                document.querySelectorAll('.memory-card')[i1].classList.remove('flipped');
                document.querySelectorAll('.memory-card')[i2].classList.remove('flipped');
                memoryFlipped = [];
                memoryLocked = false;
            }, 800);
        }
    }
}

function updateMemoryStats() {
    document.getElementById('memory-stats').textContent =
        `Moves: ${memoryMoves} | Matched: ${memoryMatched}/${memoryPairs}`;
}

// ---------- Audio Scripts ----------
let audioScript = [];
let audioPlaying = false;
let audioPaused = false;
let audioIndex = 0;
let audioRepeatCount = 0; // tracks current repeat for current word
let audioPhase = 'words'; // 'words' or 'sentences'

function loadTTSVoices() {
    if (!window.speechSynthesis) return;
    const voices = window.speechSynthesis.getVoices();
    if (voices.length === 0) return;

    const itSelect = document.getElementById('audio-voice-it');
    const enSelect = document.getElementById('audio-voice-en');

    // Italian voices
    const itVoices = voices.filter(v => v.lang.startsWith('it'));
    // English voices
    const enVoices = voices.filter(v => v.lang.startsWith('en'));

    // Sort: prefer Neural/Natural/Online voices first (they sound more human)
    const scoreVoice = (v) => {
        const name = v.name.toLowerCase();
        if (name.includes('neural') || name.includes('natural')) return 0;
        if (name.includes('online') || name.includes('premium')) return 1;
        if (v.localService === false) return 2; // cloud voices
        return 3;
    };

    itVoices.sort((a, b) => scoreVoice(a) - scoreVoice(b));
    enVoices.sort((a, b) => scoreVoice(a) - scoreVoice(b));

    // Populate Italian dropdown
    if (itSelect.options.length === 0 || itSelect.options[0].value === '') {
        itSelect.innerHTML = itVoices.map((v, i) => {
            const label = `${v.name} (${v.lang})`;
            return `<option value="${i}">${label}</option>`;
        }).join('');
        if (itVoices.length === 0) {
            itSelect.innerHTML = '<option value="">No Italian voice found</option>';
        }
    }

    // Populate English dropdown
    if (enSelect.options.length === 0 || enSelect.options[0].value === '') {
        enSelect.innerHTML = enVoices.map((v, i) => {
            const label = `${v.name} (${v.lang})`;
            return `<option value="${i}">${label}</option>`;
        }).join('');
        if (enVoices.length === 0) {
            enSelect.innerHTML = '<option value="">No English voice found</option>';
        }
    }

    // Store voice arrays for later use
    window._itVoices = itVoices;
    window._enVoices = enVoices;
}

let audioSentences = []; // sentences appended after word repetitions

async function generateAudioScript() {
    const order = document.getElementById('audio-order').value;
    const filter = document.getElementById('audio-filter').value;
    const limit = parseInt(document.getElementById('audio-count').value);
    const wantSentences = document.getElementById('audio-sentences').checked;

    // Filter words
    let words;
    if (filter === 'hard') words = wordBank.filter(w => w.isHighRotation);
    else if (filter === 'easy') words = wordBank.filter(w => w.isEasy);
    else if (filter === 'normal') words = wordBank.filter(w => !w.isHighRotation && !w.isEasy);
    else if (filter === 'srs-new') words = srsGetTodayNewWords();
    else if (filter === 'srs-review') words = srsGetTodayReviewWords();
    else if (filter === 'srs-all') words = srsGetTodayAllWords();
    else if (filter === 'srs-not-easy') words = srsGetDailyNotEasy();
    else if (filter === 'srs-easy-review') words = srsGetEasyReview();
    else words = [...wordBank];

    // Letter range filter
    const letterStart = document.getElementById('audio-letter-start').value;
    const letterEnd = document.getElementById('audio-letter-end').value;
    if (letterStart || letterEnd) {
        const from = letterStart || 'a';
        const to = letterEnd || 'z';
        words = words.filter(w => {
            const first = w.italian.charAt(0).toLowerCase();
            return first >= from && first <= to;
        });
    }

    if (words.length === 0) {
        showToast('No words match the selected filters.');
        return;
    }

    // Read repeat settings
    const repeatHard = parseInt(document.getElementById('audio-repeat-hard').value) || 3;
    const repeatNormal = parseInt(document.getElementById('audio-repeat-normal').value) || 2;
    const repeatEasy = parseInt(document.getElementById('audio-repeat-easy').value) || 1;

    // Deduplicate by base form and determine repeat count
    const seen = new Set();
    const deduped = [];
    for (const w of words) {
        const base = (w.grammarInfo && w.grammarInfo.infinitive) ? w.grammarInfo.infinitive : w.italian;
        if (!seen.has(base)) {
            seen.add(base);
            let repeats = repeatNormal;
            if (w.isHighRotation) repeats = repeatHard;
            else if (w.isEasy) repeats = repeatEasy;
            deduped.push({ italian: base, english: w.english, repeats });
        }
    }

    // Order
    if (order === 'alphabetical') {
        deduped.sort((a, b) => a.italian.localeCompare(b.italian));
    } else {
        for (let i = deduped.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deduped[i], deduped[j]] = [deduped[j], deduped[i]];
        }
    }

    // Limit
    audioScript = limit > 0 ? deduped.slice(0, limit) : deduped;

    // Cap at 100 for sentence generation
    const sentenceWords = audioScript.slice(0, 100);

    // Generate sentences if requested
    audioSentences = [];
    if (wantSentences) {
        if (!apiKey) {
            showToast('API key needed for sentence generation. Add it in Quick Import > API Settings.');
        } else {
            const btn = document.getElementById('audio-generate');
            btn.disabled = true;
            btn.textContent = 'Generating sentences...';

            const sentenceRepeats = parseInt(document.getElementById('audio-sentence-repeats').value) || 2;

            // Batch 25 words per API call
            for (let i = 0; i < sentenceWords.length; i += 25) {
                const batch = sentenceWords.slice(i, i + 25);
                btn.textContent = `Generating sentences... (${Math.min(i + 25, sentenceWords.length)}/${sentenceWords.length})`;
                const result = await fetchSentences(batch.map(w => w.italian));
                if (result) {
                    for (const w of batch) {
                        const sent = result[w.italian] || result[w.italian.toLowerCase()];
                        if (sent) {
                            audioSentences.push({
                                italian: sent.italian || '',
                                english: sent.english || '',
                                word: w.italian,
                                repeats: sentenceRepeats,
                                isSentence: true,
                            });
                        }
                    }
                }
            }

            btn.disabled = false;
            btn.textContent = 'Generate Script';
        }
    }

    // Render script
    renderAudioScriptList();

    document.getElementById('audio-script-area').classList.remove('hidden');
    document.getElementById('audio-play').disabled = false;
    document.getElementById('audio-reshuffle').disabled = false;
    document.getElementById('audio-record').disabled = false;
    document.getElementById('audio-export').disabled = false;
    document.getElementById('audio-generate-file').disabled = false;

    const sentMsg = audioSentences.length > 0 ? ` + ${audioSentences.length} sentences` : '';
    showToast(`Script generated: ${audioScript.length} words${sentMsg}.`);
}

function audioEasyHardBtns(italian) {
    const bankEntry = wordBank.find(w => w.italian === italian);
    const isEasy = bankEntry && bankEntry.isEasy;
    const isHard = bankEntry && bankEntry.isHighRotation;
    const easyClass = isEasy ? ' wb-btn-active-easy' : '';
    const hardClass = isHard ? ' wb-btn-active-hard' : '';
    return `<button class="wb-easy-btn${easyClass}" onclick="toggleAudioWordEasy('${italian.replace(/'/g, "\\'")}')" title="Toggle easy">E</button><button class="wb-hard-btn${hardClass}" onclick="toggleAudioWordHard('${italian.replace(/'/g, "\\'")}')" title="Toggle hard">H</button>`;
}

window.toggleAudioWordEasy = function(italian) {
    const w = wordBank.find(e => e.italian === italian);
    if (!w) return;
    w.isEasy = !w.isEasy;
    if (w.isEasy) { w.easyDate = new Date().toISOString(); w.isHighRotation = false; }
    else { w.easyDate = null; }
    saveToLocalStorage();
    renderAudioScriptList();
};

window.toggleAudioWordHard = function(italian) {
    const w = wordBank.find(e => e.italian === italian);
    if (!w) return;
    w.isHighRotation = !w.isHighRotation;
    if (w.isHighRotation) { w.isEasy = false; w.easyDate = null; }
    saveToLocalStorage();
    renderAudioScriptList();
};

function renderAudioScriptList() {
    const list = document.getElementById('audio-script-list');
    const totalPlays = audioScript.reduce((sum, item) => sum + item.repeats, 0);
    const sentencePlays = audioSentences.reduce((sum, s) => sum + s.repeats, 0);

    let html = audioScript.map((item, i) => {
        const repeatTag = item.repeats > 1
            ? `<span class="audio-script-repeat">\u00d7${item.repeats}</span>` : '';
        const btns = audioEasyHardBtns(item.italian);
        return `<div class="audio-script-row" data-index="${i}">
            <span class="audio-script-num">${i + 1}.</span>
            ${btns}
            <span class="audio-script-it">${escapeHtml(item.italian)}</span>
            <span class="audio-script-arrow">\u2192</span>
            <span class="audio-script-en">${escapeHtml(item.english)}</span>
            ${repeatTag}
        </div>`;
    }).join('');

    if (audioSentences.length > 0) {
        html += `<div class="audio-script-divider">Sentences (${audioSentences.length})</div>`;
        html += audioSentences.map((s, i) => {
            const idx = audioScript.length + i;
            const repeatTag = s.repeats > 1
                ? `<span class="audio-script-repeat">\u00d7${s.repeats}</span>` : '';
            return `<div class="audio-script-row" data-index="${idx}">
                <span class="audio-script-num">${i + 1}.</span>
                <span class="audio-script-it">${escapeHtml(s.italian)}</span>
                <span class="audio-script-arrow">\u2192</span>
                <span class="audio-script-sentence">${escapeHtml(s.english)}</span>
                ${repeatTag}
            </div>`;
        }).join('');
    }

    list.innerHTML = html;
    const allPlays = totalPlays + sentencePlays;

    // Estimate recording time
    const speed = parseFloat(document.getElementById('audio-speed').value) || 1.0;
    const wordPause = parseFloat(document.getElementById('audio-pause').value) || 1.5;
    const itEnGap = parseFloat(document.getElementById('audio-sentence-pause').value) || 1.5;
    const slowdown = parseFloat(document.getElementById('audio-slowdown').value) / 100 || 0;

    // Each play: ~1 sec Italian at speed + gap + ~1 sec English at speed + pause
    // Speed < 1 means slower = longer. Base word duration ~1 sec, adjusted by 1/speed
    let totalSec = 0;
    for (const item of audioScript) {
        const reps = item.repeats || 1;
        for (let r = 0; r < reps; r++) {
            let repSpeed = speed;
            if (reps > 1) {
                const stepsFromEnd = (reps - 1) - r;
                repSpeed = speed * (1 - slowdown * stepsFromEnd);
                repSpeed = Math.max(repSpeed, 0.3);
            }
            totalSec += (1 / repSpeed) + itEnGap + (1 / speed) + (r < reps - 1 ? wordPause * 0.5 : wordPause);
        }
    }
    for (const s of audioSentences) {
        const reps = s.repeats || 1;
        // Sentences ~3 sec base
        for (let r = 0; r < reps; r++) {
            totalSec += (3 / speed) + itEnGap + (3 / speed) + (r < reps - 1 ? wordPause * 0.5 : wordPause);
        }
    }

    const estMins = Math.floor(totalSec / 60);
    const estSecs = Math.round(totalSec % 60);
    const estLabel = estMins > 0 ? `~${estMins}m ${estSecs}s` : `~${estSecs}s`;

    document.getElementById('audio-script-count').textContent =
        `\u2014 ${audioScript.length} words${audioSentences.length > 0 ? ' + ' + audioSentences.length + ' sentences' : ''}, ${allPlays} plays, ${estLabel} estimated`;
}

async function fetchSentences(italianWords) {
    try {
        const wordList = italianWords.join(', ');
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01',
                'anthropic-dangerous-direct-browser-access': 'true',
            },
            body: JSON.stringify({
                model: selectedModel,
                max_tokens: 4096,
                messages: [{
                    role: 'user',
                    content: `For each Italian word below, create a short, simple Italian sentence (5-8 words) using that word, plus its English translation. Return ONLY valid JSON keyed by the Italian word (lowercase).

Format: {"word": {"italian": "Italian sentence here.", "english": "English translation here."}}

Keep sentences simple and natural — suitable for a beginner/intermediate learner.

Words: ${wordList}`,
                }],
            }),
        });

        if (!response.ok) {
            console.error('Sentence API error:', response.status);
            return null;
        }

        const data = await response.json();
        const text = data.content?.[0]?.text;
        if (!text) return null;
        return extractJSON(text);
    } catch (err) {
        console.error('Sentence fetch error:', err);
        return null;
    }
}

function reshuffleAudioScript() {
    if (audioScript.length === 0) return;

    // Fisher-Yates shuffle
    for (let i = audioScript.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [audioScript[i], audioScript[j]] = [audioScript[j], audioScript[i]];
    }

    renderAudioScriptList();
    showToast('Script reshuffled!');
}

function playAudioScript() {
    if (audioScript.length === 0) return;

    if (ttsEngine === 'openai' && !openaiApiKey) {
        showToast('Please add your OpenAI API key in API Settings first.');
        return;
    }

    if (ttsEngine === 'browser' && !window.speechSynthesis) {
        showToast('Your browser does not support text-to-speech.');
        return;
    }

    if (audioPaused && ttsEngine === 'browser') {
        // Resume (browser TTS only — OpenAI doesn't support pause/resume)
        window.speechSynthesis.resume();
        audioPaused = false;
        document.getElementById('audio-pause-btn').textContent = 'Pause';
        document.getElementById('audio-pause-btn').disabled = false;
        return;
    }

    // Start from beginning
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    audioPlaying = true;
    audioPaused = false;
    audioIndex = 0;
    audioRepeatCount = 0;
    audioPhase = 'words';

    document.getElementById('audio-play').disabled = true;
    document.getElementById('audio-pause-btn').disabled = false;
    document.getElementById('audio-stop').disabled = false;
    document.getElementById('audio-now-playing').classList.remove('hidden');

    speakNextWord();
}

// ---------- OpenAI TTS ----------
let openaiAudioElement = null;

async function speakWithOpenAI(text, lang, speed) {
    const voice = document.getElementById('openai-voice-select').value || 'nova';
    if (!speed) speed = parseFloat(document.getElementById('audio-speed').value) || 1.0;

    // Add language hint so OpenAI pronounces Italian words correctly
    // Without this, short Italian words get pronounced as English
    let input = text;
    if (lang === 'it') {
        input = `[Italian] ${text}`;
    }

    const response = await fetch('https://api.openai.com/v1/audio/speech', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${openaiApiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: 'tts-1',
            input: input,
            voice: voice,
            speed: Math.max(0.25, Math.min(4.0, speed)),
            response_format: 'mp3',
        }),
    });

    if (!response.ok) {
        const err = await response.text();
        throw new Error(`OpenAI TTS error: ${response.status} — ${err}`);
    }

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    return new Promise((resolve, reject) => {
        if (openaiAudioElement) {
            openaiAudioElement.pause();
            openaiAudioElement.src = '';
        }
        openaiAudioElement = new Audio(url);
        openaiAudioElement.onended = () => {
            URL.revokeObjectURL(url);
            resolve();
        };
        openaiAudioElement.onerror = (e) => {
            URL.revokeObjectURL(url);
            reject(new Error('Audio playback failed'));
        };
        openaiAudioElement.play().catch(err => {
            URL.revokeObjectURL(url);
            reject(err);
        });
    });
}

// ---------- Generate Full Audio File via OpenAI ----------
async function generateAudioFile() {
    if (audioScript.length === 0) {
        showToast('Generate a script first.');
        return;
    }
    if (!openaiApiKey) {
        showToast('Please add your OpenAI API key in API Settings first.');
        return;
    }

    const btn = document.getElementById('audio-generate-file');
    const targetSpeed = parseFloat(document.getElementById('audio-speed').value) || 1.0;
    const slowdownPct = parseFloat(document.getElementById('audio-slowdown').value) / 100;
    const wordPause = parseFloat(document.getElementById('audio-pause').value) || 1.5;

    btn.disabled = true;
    btn.textContent = 'Preparing script...';

    // Build expanded list: each entry = { italian, english, speed }
    // For repeats: speed ramps from slow to target speed
    const expanded = [];
    for (const item of audioScript) {
        const totalRepeats = item.repeats || 1;
        for (let r = 0; r < totalRepeats; r++) {
            let speed;
            if (totalRepeats <= 1) {
                speed = targetSpeed;
            } else {
                const stepsFromEnd = (totalRepeats - 1) - r;
                speed = targetSpeed * (1 - slowdownPct * stepsFromEnd);
                speed = Math.max(speed, 0.25);
            }
            // Round to 1 decimal to group similar speeds
            speed = Math.round(speed * 10) / 10;
            expanded.push({ italian: item.italian, english: item.english, speed });
        }
    }

    // Group consecutive entries with the same speed into chunks
    // Each chunk becomes one API call. Also respect ~3500 char limit per call.
    const chunks = [];
    let currentChunk = { speed: expanded[0].speed, text: '', count: 0 };

    for (const entry of expanded) {
        // Build text for this entry: "Italian word ... English translation ..."
        // The "..." creates a natural pause in TTS output
        const pauseDots = wordPause >= 3 ? '......' : wordPause >= 2 ? '....' : '...';
        const entryText = `[Italian] ${entry.italian} ${pauseDots} ${entry.english} ${pauseDots} `;

        // Start new chunk if speed changes or text would exceed limit
        if (entry.speed !== currentChunk.speed || (currentChunk.text.length + entryText.length) > 3500) {
            if (currentChunk.text) chunks.push(currentChunk);
            currentChunk = { speed: entry.speed, text: '', count: 0 };
        }
        currentChunk.text += entryText;
        currentChunk.count++;
    }
    if (currentChunk.text) chunks.push(currentChunk);

    // Make API calls and collect MP3 blobs
    const mp3Parts = [];
    let processed = 0;
    const totalEntries = expanded.length;

    for (let i = 0; i < chunks.length; i++) {
        const chunk = chunks[i];
        processed += chunk.count;
        btn.textContent = `Generating audio... ${processed}/${totalEntries} words`;

        try {
            const voice = document.getElementById('openai-voice-select').value || 'nova';
            const response = await fetch('https://api.openai.com/v1/audio/speech', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${openaiApiKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: 'tts-1',
                    input: chunk.text,
                    voice: voice,
                    speed: Math.max(0.25, Math.min(4.0, chunk.speed)),
                    response_format: 'mp3',
                }),
            });

            if (!response.ok) {
                const err = await response.text();
                throw new Error(`API error ${response.status}: ${err}`);
            }

            const blob = await response.blob();
            mp3Parts.push(blob);
        } catch (err) {
            console.error('OpenAI TTS chunk error:', err);
            showToast(`Error generating audio chunk ${i + 1}: ${err.message}`);
            btn.disabled = false;
            btn.textContent = 'Generate Audio File (OpenAI)';
            return;
        }
    }

    // Concatenate all MP3 blobs into one file
    btn.textContent = 'Finalizing...';
    const finalBlob = new Blob(mp3Parts, { type: 'audio/mpeg' });
    const url = URL.createObjectURL(finalBlob);

    // Show player and download link
    const player = document.getElementById('audio-file-player');
    player.src = url;

    const downloadLink = document.getElementById('audio-file-download');
    downloadLink.href = url;
    const wordCount = audioScript.length;
    const today = new Date().toISOString().slice(0, 10);
    downloadLink.download = `italian_audio_${wordCount}words_${today}.mp3`;

    const sizeMB = (finalBlob.size / (1024 * 1024)).toFixed(1);
    document.getElementById('audio-file-info').textContent =
        `${wordCount} words, ${chunks.length} chunks, ${sizeMB} MB`;

    document.getElementById('audio-file-area').classList.remove('hidden');

    btn.disabled = false;
    btn.textContent = 'Generate Audio File (OpenAI)';
    showToast(`Audio file ready! ${wordCount} words, ${sizeMB} MB. Play or download below.`);
}

function speakNextWord() {
    if (!audioPlaying) { finishAudio(); return; }

    // Check if we need to transition from words to sentences
    if (audioPhase === 'words' && audioIndex >= audioScript.length) {
        if (audioSentences.length > 0) {
            audioPhase = 'sentences';
            audioIndex = 0;
            audioRepeatCount = 0;
            speakNextWord();
            return;
        } else {
            finishAudio();
            return;
        }
    }
    if (audioPhase === 'sentences' && audioIndex >= audioSentences.length) {
        finishAudio();
        return;
    }

    const currentList = audioPhase === 'words' ? audioScript : audioSentences;

    const item = currentList[audioIndex];
    const targetSpeed = parseFloat(document.getElementById('audio-speed').value);
    const slowdownPct = parseFloat(document.getElementById('audio-slowdown').value) / 100;
    const wordPause = parseFloat(document.getElementById('audio-pause').value) * 1000;
    const itEnPause = parseFloat(document.getElementById('audio-sentence-pause').value) * 1000;
    const totalRepeats = item.repeats || 1;

    // Speed ramp: last repeat = target speed, earlier repeats are slower
    // For 3 repeats at 25% slowdown: steps are 50%, 75%, 100% of target
    // For 1 repeat: always target speed
    let speed;
    if (totalRepeats <= 1) {
        speed = targetSpeed;
    } else {
        const stepsFromEnd = (totalRepeats - 1) - audioRepeatCount; // 2,1,0 for 3 repeats
        speed = targetSpeed * (1 - slowdownPct * stepsFromEnd);
        speed = Math.max(speed, 0.3); // floor so it's never inaudibly slow
    }

    // Update UI
    const phaseLabel = audioPhase === 'sentences' ? ' [sentence]' : '';
    const repeatLabel = totalRepeats > 1 ? ` (${audioRepeatCount + 1}/${totalRepeats} @ ${speed.toFixed(2)}x)` : '';
    document.getElementById('audio-now-word').textContent = `${item.italian}  →  ${item.english}${repeatLabel}${phaseLabel}`;

    const totalItems = audioScript.length + audioSentences.length;
    const currentPos = audioPhase === 'words' ? audioIndex + 1 : audioScript.length + audioIndex + 1;
    document.getElementById('audio-progress-text').textContent = `${currentPos} / ${totalItems}`;
    document.getElementById('audio-progress-bar').style.width =
        `${(currentPos / totalItems) * 100}%`;

    // Highlight current row
    document.querySelectorAll('.audio-script-row').forEach(r => r.classList.remove('playing'));
    const rowIndex = audioPhase === 'words' ? audioIndex : audioScript.length + audioIndex;
    const currentRow = document.querySelector(`.audio-script-row[data-index="${rowIndex}"]`);
    if (currentRow) {
        currentRow.classList.add('playing');
        currentRow.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Advance to next repeat or next word
    function onWordDone() {
        if (!audioPlaying) return;
        audioRepeatCount++;
        if (audioRepeatCount < totalRepeats) {
            setTimeout(() => speakNextWord(), wordPause * 0.5);
        } else {
            audioRepeatCount = 0;
            audioIndex++;
            setTimeout(() => speakNextWord(), wordPause);
        }
    }

    // --- OpenAI TTS path ---
    if (ttsEngine === 'openai' && openaiApiKey) {
        const enNormalSpeed = document.getElementById('audio-en-normal-speed').checked;
        const enSpeed = enNormalSpeed ? 1.0 : speed;
        (async () => {
            try {
                await speakWithOpenAI(item.italian, 'it', speed);
                if (!audioPlaying) return;
                await new Promise(r => setTimeout(r, itEnPause));
                if (!audioPlaying) return;
                await speakWithOpenAI(item.english, 'en', enSpeed);
                if (!audioPlaying) return;
                onWordDone();
            } catch (err) {
                console.error('OpenAI TTS error:', err);
                if (!audioPlaying) return;
                // Show error but try to continue with next word instead of crashing
                showToast('OpenAI TTS error on "' + item.italian + '" — skipping. ' + err.message);
                onWordDone();
            }
        })();
        return;
    }

    // --- Browser TTS path ---
    const itVoices = window._itVoices || [];
    const enVoices = window._enVoices || [];
    const itVoiceIdx = parseInt(document.getElementById('audio-voice-it').value) || 0;
    const enVoiceIdx = parseInt(document.getElementById('audio-voice-en').value) || 0;
    const italianVoice = itVoices[itVoiceIdx] || null;
    const englishVoice = enVoices[enVoiceIdx] || null;

    // Speak one utterance at a time — cancel queue to prevent overlap
    window.speechSynthesis.cancel();

    const itUtterance = new SpeechSynthesisUtterance(item.italian);
    itUtterance.lang = 'it-IT';
    if (italianVoice) itUtterance.voice = italianVoice;
    itUtterance.rate = speed;

    let itFinished = false;
    itUtterance.onend = () => {
        if (itFinished) return; // guard against double-fire
        itFinished = true;
        if (!audioPlaying) return;
        setTimeout(() => {
            if (!audioPlaying) return;

            window.speechSynthesis.cancel();
            const enUtterance = new SpeechSynthesisUtterance(item.english);
            enUtterance.lang = 'en-US';
            if (englishVoice) enUtterance.voice = englishVoice;
            const enNormalSpeed = document.getElementById('audio-en-normal-speed').checked;
            enUtterance.rate = enNormalSpeed ? 1.0 : speed;

            let enFinished = false;
            enUtterance.onend = () => {
                if (enFinished) return; // guard against double-fire
                enFinished = true;
                onWordDone();
            };

            window.speechSynthesis.speak(enUtterance);
        }, itEnPause);
    };

    window.speechSynthesis.speak(itUtterance);
}

function pauseAudioScript() {
    if (ttsEngine === 'openai' && openaiAudioElement) {
        if (audioPaused) {
            openaiAudioElement.play();
            audioPaused = false;
            document.getElementById('audio-pause-btn').textContent = 'Pause';
        } else {
            openaiAudioElement.pause();
            audioPaused = true;
            document.getElementById('audio-pause-btn').textContent = 'Resume';
        }
        return;
    }
    if (audioPaused) {
        window.speechSynthesis.resume();
        audioPaused = false;
        document.getElementById('audio-pause-btn').textContent = 'Pause';
    } else {
        window.speechSynthesis.pause();
        audioPaused = true;
        document.getElementById('audio-pause-btn').textContent = 'Resume';
    }
}

function stopAudioScript() {
    audioPlaying = false;
    audioPaused = false;
    window.speechSynthesis.cancel();
    if (openaiAudioElement) {
        openaiAudioElement.pause();
        openaiAudioElement.src = '';
        openaiAudioElement = null;
    }
    finishAudio();
}

function finishAudio() {
    audioPlaying = false;
    audioPaused = false;
    document.getElementById('audio-play').disabled = false;
    document.getElementById('audio-pause-btn').disabled = true;
    document.getElementById('audio-pause-btn').textContent = 'Pause';
    document.getElementById('audio-stop').disabled = true;
    document.getElementById('audio-now-playing').classList.add('hidden');
    document.querySelectorAll('.audio-script-row').forEach(r => r.classList.remove('playing'));
}

function exportAudioScript() {
    if (audioScript.length === 0) return;

    // Generate a script optimized for TTS processing
    let text = 'Italian Language Learning - Audio Script\n';
    text += '==========================================\n\n';
    text += `Words: ${audioScript.length}\n`;
    text += `Generated: ${new Date().toLocaleDateString()}\n\n`;
    text += '---\n\n';

    for (let i = 0; i < audioScript.length; i++) {
        const item = audioScript[i];
        const repeats = item.repeats || 1;
        const repeatNote = repeats > 1 ? ` [×${repeats}]` : '';
        text += `${i + 1}. ${item.italian} ... ${item.english}${repeatNote}\n`;
    }

    if (audioSentences.length > 0) {
        text += '\n--- SENTENCES ---\n\n';
        for (let i = 0; i < audioSentences.length; i++) {
            const s = audioSentences[i];
            const repeats = s.repeats || 1;
            const repeatNote = repeats > 1 ? ` [×${repeats}]` : '';
            text += `${i + 1}. ${s.italian} ... ${s.english}${repeatNote}\n`;
        }
    }

    text += '\n---\n';
    text += '\nTTS Instructions: Read Italian words with Italian pronunciation, ';
    text += 'then pause, then read the English translation in English.\n';

    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'italian_audio_script.txt';
    a.click();
    URL.revokeObjectURL(url);
    showToast('Script exported as text file.');
}

// ---------- Audio Recording ----------
let audioRecorder = null;
let audioRecordChunks = [];

async function recordAudioScript() {
    if (audioScript.length === 0) return;

    if (!window.speechSynthesis) {
        showToast('Your browser does not support text-to-speech.');
        return;
    }

    if (!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia) {
        showToast('Your browser does not support audio recording. Try Chrome.');
        return;
    }

    showToast('A dialog will appear — select this tab and check "Share audio" or "Share tab audio".');

    try {
        // Request screen/tab capture with system audio
        // Note: SpeechSynthesis on Windows routes through system audio, not tab audio.
        // We request system audio capture which works in newer Chrome versions.
        const stream = await navigator.mediaDevices.getDisplayMedia({
            video: true,
            audio: {
                suppressLocalAudioPlayback: false,
            },
            preferCurrentTab: true,
            systemAudio: 'include',
        });

        // Keep only the audio track
        const audioTracks = stream.getAudioTracks();
        if (audioTracks.length === 0) {
            showToast('No audio track captured. Make sure "Share tab audio" is checked.');
            stream.getTracks().forEach(t => t.stop());
            return;
        }

        const audioStream = new MediaStream(audioTracks);
        // Stop video track
        stream.getVideoTracks().forEach(t => t.stop());

        // Set up MediaRecorder
        let mimeType = 'audio/webm;codecs=opus';
        if (!MediaRecorder.isTypeSupported(mimeType)) {
            mimeType = 'audio/webm';
        }
        if (!MediaRecorder.isTypeSupported(mimeType)) {
            mimeType = 'audio/ogg;codecs=opus';
        }

        audioRecordChunks = [];
        audioRecorder = new MediaRecorder(audioStream, { mimeType });

        audioRecorder.ondataavailable = (e) => {
            if (e.data.size > 0) audioRecordChunks.push(e.data);
        };

        audioRecorder.onstop = () => {
            const ext = mimeType.includes('webm') ? 'webm' : 'ogg';
            const blob = new Blob(audioRecordChunks, { type: mimeType });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `italian_audio_${audioScript.length}words.${ext}`;
            a.click();
            URL.revokeObjectURL(url);
            audioStream.getTracks().forEach(t => t.stop());
            audioRecorder = null;
            if (blob.size < 1000) {
                showToast('Warning: File may be silent. On Windows, try sharing "Entire Screen" instead of a tab, or use Audacity with WASAPI loopback to record.');
            } else {
                showToast(`Audio file saved! (${ext.toUpperCase()} format — plays in VLC, Chrome, most apps)`);
            }
        };

        // Disable buttons during recording
        document.getElementById('audio-record').disabled = true;
        document.getElementById('audio-record').textContent = 'Recording...';
        document.getElementById('audio-play').disabled = true;

        // Start recording
        audioRecorder.start();

        // Small delay to let the recorder initialize
        await new Promise(r => setTimeout(r, 300));

        // Play the TTS and wait for it to finish
        await playAudioScriptForRecording();

        // Add a small tail of silence
        await new Promise(r => setTimeout(r, itEnPause));

        // Stop recording
        audioRecorder.stop();

    } catch (err) {
        console.error('Recording error:', err);
        if (err.name === 'NotAllowedError') {
            showToast('Permission denied. You need to share this tab with audio to record.');
        } else {
            showToast('Recording failed: ' + err.message);
        }
    } finally {
        document.getElementById('audio-record').disabled = false;
        document.getElementById('audio-record').textContent = 'Record as Audio File';
        document.getElementById('audio-play').disabled = false;
    }
}

// Plays the entire script and returns a Promise that resolves when done
function playAudioScriptForRecording() {
    return new Promise((resolve) => {
        if (audioScript.length === 0) { resolve(); return; }

        window.speechSynthesis.cancel();
        audioPlaying = true;
        audioPaused = false;
        audioIndex = 0;
        audioRepeatCount = 0;
        audioPhase = 'words';

        document.getElementById('audio-pause-btn').disabled = false;
        document.getElementById('audio-stop').disabled = false;
        document.getElementById('audio-now-playing').classList.remove('hidden');

        // Override finish to resolve the promise
        const origFinish = finishAudio;
        const recordingFinish = () => {
            origFinish();
            resolve();
        };

        speakNextWordForRecording(recordingFinish);
    });
}

function speakNextWordForRecording(onComplete) {
    if (!audioPlaying) { onComplete(); return; }

    if (audioPhase === 'words' && audioIndex >= audioScript.length) {
        if (audioSentences.length > 0) {
            audioPhase = 'sentences';
            audioIndex = 0;
            audioRepeatCount = 0;
            speakNextWordForRecording(onComplete);
            return;
        } else {
            onComplete();
            return;
        }
    }
    if (audioPhase === 'sentences' && audioIndex >= audioSentences.length) {
        onComplete();
        return;
    }

    const currentList = audioPhase === 'words' ? audioScript : audioSentences;
    const item = currentList[audioIndex];
    const targetSpeed = parseFloat(document.getElementById('audio-speed').value);
    const slowdownPct = parseFloat(document.getElementById('audio-slowdown').value) / 100;
    const wordPause = parseFloat(document.getElementById('audio-pause').value) * 1000;
    const itEnPause = parseFloat(document.getElementById('audio-sentence-pause').value) * 1000;
    const totalRepeats = item.repeats || 1;

    // Speed ramp: last repeat = target speed, earlier repeats are slower
    // For 3 repeats at 25% slowdown: steps are 50%, 75%, 100% of target
    // For 1 repeat: always target speed
    let speed;
    if (totalRepeats <= 1) {
        speed = targetSpeed;
    } else {
        const stepsFromEnd = (totalRepeats - 1) - audioRepeatCount; // 2,1,0 for 3 repeats
        speed = targetSpeed * (1 - slowdownPct * stepsFromEnd);
        speed = Math.max(speed, 0.3); // floor so it's never inaudibly slow
    }

    // Update UI
    const phaseLabel = audioPhase === 'sentences' ? ' [sentence]' : '';
    const repeatLabel = totalRepeats > 1 ? ` (${audioRepeatCount + 1}/${totalRepeats} @ ${speed.toFixed(2)}x)` : '';
    document.getElementById('audio-now-word').textContent = `${item.italian}  →  ${item.english}${repeatLabel}${phaseLabel}`;

    const totalItems = audioScript.length + audioSentences.length;
    const currentPos = audioPhase === 'words' ? audioIndex + 1 : audioScript.length + audioIndex + 1;
    document.getElementById('audio-progress-text').textContent = `${currentPos} / ${totalItems}`;
    document.getElementById('audio-progress-bar').style.width =
        `${(currentPos / totalItems) * 100}%`;

    // Highlight current row
    document.querySelectorAll('.audio-script-row').forEach(r => r.classList.remove('playing'));
    const rowIndex = audioPhase === 'words' ? audioIndex : audioScript.length + audioIndex;
    const currentRow = document.querySelector(`.audio-script-row[data-index="${rowIndex}"]`);
    if (currentRow) {
        currentRow.classList.add('playing');
        currentRow.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Get selected voices
    const itVoices = window._itVoices || [];
    const enVoices = window._enVoices || [];
    const itVoiceIdx = parseInt(document.getElementById('audio-voice-it').value) || 0;
    const enVoiceIdx = parseInt(document.getElementById('audio-voice-en').value) || 0;
    const italianVoice = itVoices[itVoiceIdx] || null;
    const englishVoice = enVoices[enVoiceIdx] || null;

    // Speak one utterance at a time — cancel queue to prevent overlap
    window.speechSynthesis.cancel();

    const itUtterance = new SpeechSynthesisUtterance(item.italian);
    itUtterance.lang = 'it-IT';
    if (italianVoice) itUtterance.voice = italianVoice;
    itUtterance.rate = speed;

    let itFinished = false;
    itUtterance.onend = () => {
        if (itFinished) return;
        itFinished = true;
        if (!audioPlaying) { onComplete(); return; }
        setTimeout(() => {
            if (!audioPlaying) { onComplete(); return; }

            window.speechSynthesis.cancel();
            const enUtterance = new SpeechSynthesisUtterance(item.english);
            enUtterance.lang = 'en-US';
            if (englishVoice) enUtterance.voice = englishVoice;
            const enNormalSpeed = document.getElementById('audio-en-normal-speed').checked;
            enUtterance.rate = enNormalSpeed ? 1.0 : speed;

            let enFinished = false;
            enUtterance.onend = () => {
                if (enFinished) return;
                enFinished = true;
                if (!audioPlaying) { onComplete(); return; }
                audioRepeatCount++;
                if (audioRepeatCount < totalRepeats) {
                    setTimeout(() => speakNextWordForRecording(onComplete), wordPause * 0.5);
                } else {
                    audioRepeatCount = 0;
                    audioIndex++;
                    setTimeout(() => speakNextWordForRecording(onComplete), wordPause);
                }
            };

            window.speechSynthesis.speak(enUtterance);
        }, itEnPause);
    };

    window.speechSynthesis.speak(itUtterance);
}

// ---------- Persistence ----------
function saveToLocalStorage() {
    try {
        localStorage.setItem('italianLearner_wordBank', JSON.stringify(wordBank));
        localStorage.setItem('italianLearner_translationCache', JSON.stringify(translationCache));
        localStorage.setItem('italianLearner_apiKey', apiKey);
        localStorage.setItem('italianLearner_openaiApiKey', openaiApiKey);
        localStorage.setItem('italianLearner_ttsEngine', ttsEngine);
        localStorage.setItem('italianLearner_openaiTTSVoice', openaiTTSVoice);
        localStorage.setItem('italianLearner_model', selectedModel);
        localStorage.setItem('italianLearner_flashcardMode', flashcardMode);
        localStorage.setItem('italianLearner_highRotationMultiplier', highRotationMultiplier.toString());
        localStorage.setItem('italianLearner_srsBatches', JSON.stringify(srsBatches));
        localStorage.setItem('italianLearner_dailyGoal', dailyGoal.toString());
    } catch (e) {
        console.warn('Could not save to localStorage:', e);
    }
}

function loadFromLocalStorage() {
    try {
        const wb = localStorage.getItem('italianLearner_wordBank');
        if (wb) {
            wordBank = JSON.parse(wb);
            // Migrate older entries that lack new fields
            wordBank.forEach(w => {
                if (w.isHighRotation === undefined) w.isHighRotation = false;
                if (w.isEasy === undefined) w.isEasy = false;
                if (w.grammarInfo === undefined) w.grammarInfo = null;
                if (w.conjugation === undefined) w.conjugation = null;
            });
        }
        const tc = localStorage.getItem('italianLearner_translationCache');
        if (tc) translationCache = JSON.parse(tc);
        const key = localStorage.getItem('italianLearner_apiKey');
        if (key) apiKey = key;
        const oaiKey = localStorage.getItem('italianLearner_openaiApiKey');
        if (oaiKey) openaiApiKey = oaiKey;
        const ttsEng = localStorage.getItem('italianLearner_ttsEngine');
        if (ttsEng) ttsEngine = ttsEng;
        const oaiVoice = localStorage.getItem('italianLearner_openaiTTSVoice');
        if (oaiVoice) openaiTTSVoice = oaiVoice;
        const model = localStorage.getItem('italianLearner_model');
        if (model) selectedModel = model;
        const mode = localStorage.getItem('italianLearner_flashcardMode');
        if (mode) flashcardMode = mode;
        const mult = localStorage.getItem('italianLearner_highRotationMultiplier');
        if (mult) highRotationMultiplier = parseInt(mult) || 5;
        const srs = localStorage.getItem('italianLearner_srsBatches');
        if (srs) srsBatches = JSON.parse(srs);
        const dg = localStorage.getItem('italianLearner_dailyGoal');
        if (dg) dailyGoal = parseInt(dg) || 25;
    } catch (e) {
        console.warn('Could not load from localStorage:', e);
    }
}

// ---------- Auto Backup ----------
function autoBackup() {
    const data = {
        version: 1,
        exportDate: new Date().toISOString(),
        wordBank,
        translationCache,
        apiKey,
        openaiApiKey,
        ttsEngine,
        openaiTTSVoice,
        selectedModel,
        flashcardMode,
        highRotationMultiplier,
        srsBatches,
        dailyGoal,
    };

    const today = new Date().toISOString().slice(0, 10);
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `vocab_booster_backup_${today}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

// ---------- Utilities ----------
function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.remove('hidden');
    toast.classList.add('visible');

    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
        toast.classList.remove('visible');
        setTimeout(() => toast.classList.add('hidden'), 300);
    }, 2500);
}

// Make functions available globally for inline onclick handlers
window.removeFromWordBank = removeFromWordBank;
window.editWordNote = editWordNote;
window.toggleWordBankEasy = function(index) {
    const w = wordBank[index];
    if (!w) return;
    w.isEasy = !w.isEasy;
    if (w.isEasy) {
        w.easyDate = new Date().toISOString();
        w.isHighRotation = false;
    } else {
        w.easyDate = null;
    }
    saveToLocalStorage();
    renderWordBank();
};
window.toggleWordBankHard = function(index) {
    const w = wordBank[index];
    if (!w) return;
    w.isHighRotation = !w.isHighRotation;
    if (w.isHighRotation) {
        w.isEasy = false;
        w.easyDate = null;
    }
    saveToLocalStorage();
    renderWordBank();
};
