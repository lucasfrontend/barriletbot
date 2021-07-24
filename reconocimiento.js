let output1 = document.getElementById("saludoInicial");
let output2 = document.getElementById("respuesta2");
let button = document.getElementById("button-enviar");
let clickEnInput = document.getElementById("question");
let lista = document.getElementById("chatlist");
let chatBox = document.querySelector('.chat');

const birra = RegExp ("(CERVEZA|BIRRA|BIRRITA|CERVECITA|CERVESITA)");
const queBus = RegExp ("(QUE BUSCAS|QUÉ BUSCAS|QUE TE VA?|QUÉ HACES EN LA APP?|QUÉ HACES POR ACA?|QUÉ HACÍAS?)");
const edad = RegExp ("(AÑOS|EDAD)");
const estudianding = RegExp ("(ESTUDIANDO|ESTUDIO|ESTUDIABA|ESTUDIAR|LEYENDO|TRABAJO PRACTICO|FACULTAD|UNIVERSIDAD)");
const series = RegExp ("(SERIE|SERIES|NETFLIX|MIRANDO DARK|VEO DARK|MIRABA DARK|DARK|MIRANDO TOY BOY|BREAKING BAD|SEX EDUCATION)");
const saludo = RegExp ("(BUENAS|TRANQUI|TRANKI|COMO ANDAS|CÓMO ANDAS|CÓMO VA|COMO VA|ORDEN|HOLA|HOLIS|BIEN Y VOS|BIEN, Y VOS?|TODO BIEN VOS?|BARRI|BARRILETE|TODO BIEN VOS|BIEN, VOS?|QUE ONDA?|BIEN VOS|BIEN VOS)");
const hot = RegExp ("(HOT|CALIENTE|TOCANDOME|ME ESTOY TOCANDO|TOCANDO|ME TOCO|PAJEANDOME|PAJEO|UNA PAJA|PAJITA|HACIENDOME UNA PAJA|MASTURBO|MASTURBAS|MASTURBANDO|MASTURBABA|CALENTON|CALENTURA)");
const rol = RegExp ("(ROL|ACT|VERSA|VESATIL|ACTIVO|PAS|PASIVO|QUE TE GUSTA|QUE TE VA|QUÉ TE VA)");
const lugar = RegExp ("(LUGAR|DONDE|DÓNDE|POR DONDE|POR DÓNDE|CON LUGAR|SIN LUGAR|DE QUE BARRIO SOS|VIVIS SOLO|DÓNDE VIVIS|DONDE VIVIS|DÓNDE VIVES|DONDE VIVES|DÓNDE ERES|DONDE ERES|DÓNDE SOS|DONDE SOS|DE QUE ZONA SOS?|DE QUE ZONA SOS|CON QUIEN VIVIS|CON QUIÉN VIVIS?|DE QUÉ ZONA)");
const nombre = RegExp ("(COMO TE LLAMAS|NOMBRE|ME LLAMO|LLAMAS)");
const barriosC = RegExp ("(RECOLETA|PALERMO|BARRIO NORTE|ABASTO|RETIRO|MICROCENTRO|ALMAGRO|BALVANERA|SAN NICOLAS|BELGRANO)");
const barriosL = RegExp ("(AGRONOMIA|BARRACAS|BOEDO|CABALLITO|COGHLAN|COLEGIALES|CONSTITUCION|CHACARITA|PARQUE CENTENARIO|CHACARITAS|FLORES|FLORESTA|LA BOCA|PATERNAL|LINIERS|MATADEROS|MONSERRAT|MONTE CASTRO|POMPEYA|NUÑEZ|CHACABUCO|AVELLANEDA|CHAS|PATRICIOS|MADERO|SAAVEDRA|SOLDATI|LUGANO|CRESPO|DEVOTO|LURO|ORTUZA|ORTUZAR|TELMO|SOLDATI|URQUIZA|LANUS|GERLI|TIGRE|ZONA NORTE|VICENTE LOPEZ|FLORIDA|MARTELLI|MAIPÚ|OLIVOS|LA LUCILA|BOULOGNE|LYNCH|ZONA SUR|LOMAS DE ZAMORA|BANFIELD|TEMPERLEY|ZONA OESTE|CASEROS|MATANZA|VILLA CELINA|CIUDADELA|VILLA DEL PARQUE|RAMOS MEJIA|LOMAS DEL MIRADOR|SAN JUSTO|MORON|MORÓN|CASANOVA|EL PALOMAR|VILLA BOSCH|BALLESTER|MUNRO|VILLA ADELINA|SAN MARTIN|LA TABLADA|LUZURIAGA|TAPIALES|BUDGE|VILLA FIORITO|ADROGUE|LA NORIA|VILLA SANTA RITA)");
const jeje = RegExp ("(JAJ|JAJA|JAJAJ|JAJAJA|JAJAJAJ|JAJAJAJA|JEJ|JEJE|JEJEJ|JEJEJE|JEJEJEJ|JEJEJEJE|JEJEJEJEJ|AAJAJA|AAAJAJAJJA)");
const pete = RegExp ("(PETE|PETES|CHUPAME|CHUPAMELA|CHUPALA|CHUPADA|CHUPADAS|CHUPAR|TIRAGOMA|TIRA GOMA|CHUPA VERGA|CHUPA PIJA|CHUPEN|CHUPES|CHUPAS|CHUPAS BIEN|CHUPARIAS|CHUPARÍAS|MAMAR|MAMARIA|MAMARIAS|MAMARLA|MAMAMELA|MAMADA)");
const garchar = RegExp ("(GARCHO|GARCHAR|GARCHAR?|GARCHAME|GARCHE|GARCHÉ|GARCHADO|GARCHARIA|GARCHARÍA|COGERIA|COGERÍA|COGER|COGERTE|COGEME|COGIDO|COJO|CULEO|CULEARIA|CULEAME|CULEARÍA|CULEADO|TE LA PONGO|TE LA METO|PONEMELA|PONEMELÁ|OJETE|OGETE)");
const taxi = RegExp ("(TAXIBOY|TAXI|MASAJISTA|MASAJISTAS|ME PROSTITUYO|CUÁNTO COBRAS?|ESCORT|CUANTO COBRAS)");
const bebidas = RegExp ("(CAFE|CAFÉ|TÉ|VINO|JUGO|MATE|SOPA)");
const merca = RegExp ("(MERCA|MK|MERKA|VICIO|FRULA|COCAINA)");
const popper = RegExp ("(POPPER|POPPERS|POPER|POPERS)");
const caca = RegExp ("(CACA|CACONA)");
const fisting = RegExp ("(FISTING|PUÑO)");
const trio = RegExp ("(TRIO|TRIOS|ORGIA|ORGÍA|ORGIAS)");
const verga = RegExp ("(VERGA|CHOTA|CHOTO|PIJA|PORONGO|PORONGA)");
const faso = RegExp ("(FASO|FASITO|PORRO|MARIHUANA|WEED|PORRITO|FUMAR UNO|FUMEMOS UNO|FUMAMOS UNO|FUMAMOS|FUMEMOS|FUMADO|FUMADITO|FUMANDO|CAÑO|PRENDER UNO|PRENDEMOS UNO|QUEMAR UNO|QUEMAMOS UNO|QUEMEMOS UNO|4.20|CHURRO|CHURRITO|420)");
const dedo = RegExp ("(DEDO|DEDOS|DEDITO|DEDITOS)");
const skydive = RegExp ("(PARACAIDISMO|PARACAIDISTA|SKYDIVE|SKYDIVER)");
const lifeguard = RegExp ("(RESPIRACION BOCA A BOCA|HACERME EL AHOGADO|HACER EL AHOGADO|HACER QUE ME AHOGO|FINGIR QUE ME AHOGO|HARE EL AHOGADO|HARÉ EL AHOGADO)");
const laburo = RegExp ("(QUÉ TRABAJAS|QUÉ LABURAS?|QUE LABURAS|QUE TRABAJAS|QUÉ TRABAJAS?|QUÉ TRABAJÁS|QUÉ HACES DE TU VIDA|QUE HACES DE TU VIDA|QUE TE DEDICAS|QUÉ TE DEDICAS|EN Q TRABAJAS|EN Q TRABAJAS?|LABURAS|QUÉ TE DEDICÁS)");
const hetero = RegExp ("(HETERO|PAKI|CURIOSO|NUEVO EN ESTO|CON NOVIA|TENGO NOVIA|SORETE)");
const embole = RegExp ("(EMBOLADO|ABURRIDO|AL PEDO|VIENDO QUE PINTA|NADA, VOS?)");
const cristina = RegExp ("(CRISTINA|KRISTINA|KIRCHNER|NESTOR KIRCHNER|PERONISMO|PERONISTA|PERONCHO|CHORIPAN|MACRI|MAURICIO MACRI|MACRISTA)");
const cumple = RegExp ("(CUMPLE|FELIZ CUMPLE|FELIZ CUMPLEAÑOS|CUMPLEAÑOS)");
const quebuscas = RegExp ("(QUE BUSCAS|QUÉ BUSCAS|QUÉ BUSCAS?|QUE BUSCAS?|QUÉ HACES EN LA APP|QUE HACES EN LA APP|BUSCAS EN LA APP|BUSCAS EN GRINDR)");
const incompatibles = RegExp ("(NO TOMO CERVEZA|NO ME GUSTA LA CERVEZA|NO TOMO ALCOHOL|NO TOMO BIRRA|NO ME GUSTA LA BIRRA|SOLO SOY PAS|SOLO SOY PASIVO|SOLAMENTE SOY PASIVO|NO ME DROGO|NO TOMO DROGAS|NO ME GUSTAN LAS DROGAS|NO ME VAN LAS DROGADAS|SOY DISCRETO)");
const lindo = RegExp ("(SOS LINDO|SOS RE LINDO|LINDO QUE SOS|SOS MUY LINDO|SOS FEO|QUE FEO QUE SOS|Q FEO SOS|Q FEO Q SOS|FEO QUE SOS|FEO Q SOS|SOS HERMOSO|QUE HERMOSO QUE SOS|SOS HORRIBLE|QUE HORRIBLE QUE SOS)");
const megusta = RegExp ("(JAVASCRIPT|JAVASCRPT|JAVASCRPIT|DIGWEED|MIRANDA|DROGAS|FEMINA|COGER|CULEAR|GARCHAR|FORNICAR|POLVO|POLVAZO|GARCHADA|COGIDA|PELUDO|PELUDOS|PELUDA|PASTIS|PEPAS|ÁCIDOS|ACIDOS|PENETRACION|PENETRO|PENETRARTE|POR EL CULO|EN EL CULO|ROMPO EL CULO|HAGO EL CULO|LA META|LA METAN|METERTELA|KETA|PASTIS|KETAMINA|BANCADOR|LA BANCAS|LA BANCÁS|PIJON|PIJUDO|DOTADO|SE ME PARO|LA TENGO DURA|RE PARADA|PITO|PENE|METÉMELA|METEMELA|METEMELÁ|HERZOG|PASTIS)");
const musica = RegExp ("(ESCUCHO MUSICA|ESCUCHABA MUSICA|ESCUCHANDO MUSICA|MUSICA)");
const sugar = RegExp ("(SUGARDADDY|SUGAR DADDY|SUGARDADY|SUGAR DADY)");
const instagram = RegExp ("(INSTAGRAM|INSTA)");
const cuarentena = RegExp ("(CUARENTENA|QUARENTIN|CUARENTINI)");
const lubri = RegExp ("(LUBRI|LUBRICANTE|GEL INTIMO|GEM ÍNTIMO|VASELINA|CULO ABIERTO|ORTO ABIERTO|COJERTE EL CULO|COJERTE EL ORTO|DILATADO|DILATAR|DILATAS|DILATARTE)");
const fotos = RegExp ("(FOTO|FOTOS|FOTITO|FOTITOS|PACK)");
const bombon = RegExp ("(BOMBON|BOMBONAZO|BOMBONASO)");
const pizza = RegExp ("(PIZZA|MUZZARELLA|MUZA|MUZZARELA)");
const puto = RegExp ("(PUTO|PUTITO|PUTITA|TROLO|TROLITO)");
const morbo = RegExp ("(MORBO|MORBOSO)");
const closet = RegExp ("(CLOSET|MI PRIMERA VEZ|VIRGEN|PALINDROMO|PALINDROMOS|PALÍNDROMO|PALÍNDROMOS|PALINDROMISTA|NUNCA FUI PASIVO|NO SOY PASIVO|NUEVO EN ESTO)");
const leche = RegExp ("(LECHITA|LECHE|GUASCA|WASCA|SEMEN|ACABADA|EYACULACION|LECHAZO|LECHERO|LECHERA|LECHONA|SEMENTAL)");
const love = RegExp ("(HACER EL AMOR|AMOR|SEX EXPRESS|SEXO EXPRESS|EXPRESS|CARIÑO)");
const somos = RegExp ("(ORGULLOSOS|ORGULLO)");
const paloma = RegExp ("(PALOMA|PALOMAS|PALOMITA|PALOMITAS)");
const yoga = RegExp ("(YOGGIS|YOGA|MEDITACION)");
const gemir = RegExp ("(GEMIR|GEMIDO|GEMIDOS|GIMIENDO|ALINA REYES)");
const mama = RegExp ("(TU MAMA|TU MADRE|CONCHA DE TU MADRE|MADRE|MAMÁ|MI VIEJA|TU VIEJA|MAMI)");
const sucio = RegExp ("(MUGRE|SUCIO|MUGRIENTO|ROÑA|ROÑOSO|SUCIA|MUGRIENTA|ROÑOSA|OLOROSO|OLOROSA|PIJA CON QUESO|QUESO DE PIJA|SMEGMA|ESMEGMA)");
const bi = RegExp ("(BISEXUAL|HOMBRES Y MUJERES)");
const vzl = RegExp ("(VENEZUELA|VENEZOLANO)");
const moral = RegExp ("(MORAL)");
const doy = RegExp ("(TE DOY|RE DOY|ME LA DAS|DAMELA|QUERES DAR|TE LA DOY)");
const roma = RegExp ("(ROMA)");
const ipa = RegExp ("(PALE ALE|LAGER|DE TRIGO|PORTER|STOUT|LAMBRIC|IPA|HONEY|CERVEZA ROJA|CERVEZA NEGRA)");
const rata = RegExp ("(RATA|RATON)");
const concha = RegExp ("(CONCHA|VAGINA|VULVA|CAJETA)");
const volar = RegExp ("(VOLAR|SALTAR|AVION|AVIONES|AVIONETA|AVIONETAS)");
const chino = RegExp ("(CHINO|SUPER)");
const yaTeRespondi = RegExp ("(YA ME PREGUNTASTE|YA TE DIJE|YA TE RESPONDI|YA TE RESPONDÍ|ME LO PREGUNTASTE)");
const vegan = RegExp ("(VEGAN|VEGANO|VEGANA)|VEGIIE|VEGUI|VEG|FEMINISMO|FEMINISTA");
const mapeo = RegExp ("(HACKER|MAPEO)");

console.log("Dejá de espiarme el código, paki de mierda");

document.onkeydown=function(){ 
	if(window.event.keyCode=='13'){ 
		chequeandoRespuesta(); 
	} 
}

clickEnInput.addEventListener("click", clickChat);
function clickChat(){
	chatBox.scrollTop = chatBox.scrollHeight;
	output1.style.display = "block"
	output1.innerHTML = "hola, cómo va? Todo bien?";
}

button.addEventListener("click", chequeandoRespuesta);

function chequeandoRespuesta(){
	let input = document.getElementById("question").value;
	//chequea espacios vacios
	if(!input.trim()){
		console.log("chat vacio");
		return;
	}
	let inputCampo = document.getElementById("question");
	nuevaRespuesta = document.createElement("li"),
	contenido = document.createTextNode(input);
	nuevaRespuesta.appendChild(contenido);
	lista.appendChild(nuevaRespuesta);
	nuevaRespuesta.classList.add("amarillo");
	inputCampo.value = "";
	
//COMPARACIONES DE PALABRAS
input = input.toUpperCase();
resultSaludo = saludo.test(input);
resultSeries = series.test(input);
resultRol = rol.test(input);
resultQueBus = queBus.test(input);
resultEdad = edad.test(input);
resultHot = hot.test(input);
resultLugar = lugar.test(input);
resultNombre = nombre.test(input);
resultbarriosCerca = barriosC.test(input);
resultbarriosLejos = barriosL.test(input);
resultEstudi = estudianding.test(input);
resultbirra = birra.test(input);
resultJaja = jeje.test(input);
resultPete = pete.test(input);
resultGarche = garchar.test(input);
resultTaxi = taxi.test(input);
resultBebidas = bebidas.test(input);
resultMerca = merca.test(input);
resultPopper = popper.test(input);
resultCaca = caca.test(input);
resultFisting = fisting.test(input);
resultTrio = trio.test(input);
resultVerga = verga.test(input);
resultFaso = faso.test(input);
resultDedo = dedo.test(input);
resultSkydive = skydive.test(input);
resultLifeguard = lifeguard.test(input);
resultLaburo = laburo.test(input);
resultHetero = hetero.test(input);
resultEmbole = embole.test(input);
resultCristina = cristina.test(input);
resultCumple = cumple.test(input);
resultQuebuscas = quebuscas.test(input);
resultIncompatibles = incompatibles.test(input);
resultLindo = lindo.test(input);
resultMegusta = megusta.test(input);
resultMusica = musica.test(input);
resultInstagram = instagram.test(input);
resultSugar = sugar.test(input);
resultCuarentena = cuarentena.test(input);
resultLubri = lubri.test(input);
resultFotos = fotos.test(input);
resultBombon = bombon.test(input);
resultPizza = pizza.test(input);
resultPuto = puto.test(input);
resultMorbo = morbo.test(input);
resultCloset = closet.test(input);
resultLeche = leche.test(input);
resultLove = love.test(input);
resultSomos = somos.test(input);
resultPaloma = paloma.test(input);
resultYoga = yoga.test(input);
resultGemir = gemir.test(input);
resultMadre = mama.test(input);
resultSucio = sucio.test(input);
resultBi = bi.test(input);
resultVzl = vzl.test(input);
resultMoral = moral.test(input);
resultDoy = doy.test(input);
resultRoma = roma.test(input);
resultIpa = ipa.test(input);
resultRata = rata.test(input);
resultConcha = concha.test(input);
resultVolar = volar.test(input);
resultChino = chino.test(input);
resultyaTeRespondi = yaTeRespondi.test(input);
resultVegan = vegan.test(input);

	if(resultSaludo == true){
		mensajeBot = "Todo bien acá, vos qué onda? q hacías?";
		setTimeout(imprimirRespuesta, 3000);
	} else if  ( resultSeries == true ){
		mensajeBot = "Q poco amor al cine, no sé cómo es que no se cansan de ver series de mierda.";
		setTimeout(imprimirRespuesta, 5000);
	} else if  ( resultBombon == true ){
		mensajeBot = "Bombon vos";
		setTimeout(imprimirRespuesta, 3000);
	} else if (resultPizza == true){
		mensajeBot = "Mmmmm... Q rico pizza!";
		setTimeout(imprimirRespuesta, 3000);
	} else if ( resultBebidas == true ){
		mensajeBot = "Mmm... prefiero cerveza";
		setTimeout(imprimirRespuesta, 3000);
	} else if ( resultCloset == true ){
		mensajeBot = "Por si te gustan los palíndromos t paso uno muy hermoso: O partes ese culo, o luces ese trapo";
		setTimeout(imprimirRespuesta, 3000);
	} else if (resultLeche == true){
		mensajeBot = "Mi segundo palíndromo favorito es: Échele leche";
		setTimeout(imprimirRespuesta, 3000);
	} else if (resultSucio == true){
		mensajeBot = "Añora la roña.";
		setTimeout(imprimirRespuesta, 3000);
	} else if (resultMoral == true){
		mensajeBot ='Lo podes leer de adelante para atras y de atras pa adelante: "la moral, claro, mal"';
		setTimeout(imprimirRespuesta, 3000);
	} else if (resultDoy == true){
		mensajeBot ='Un palíndromo muy simpático dice: yo de todo te doy.';
		setTimeout(imprimirRespuesta, 3000);
	} else if (resultConcha == true){
		mensajeBot = "Concha nunca. Se nace, no se hace";
		setTimeout(imprimirRespuesta, 3000);
	} else if (resultVolar == true){
		mensajeBot = '"Una vez hayas probado el vuelo siempre caminarás por la Tierra con la vista mirando al cielo, porque ya has estado allí y allí deseas volver”, Leonardo da Vinci.';
		setTimeout(imprimirRespuesta, 3000);
	}  else if (resultyaTeRespondi == true){
		mensajeBot = "Bueh, relajate. Tengo muy mala memoria";
		setTimeout(imprimirRespuesta, 3000);
	} else if (resultVegan == true){
		mensajeBot = 'Los animales existen en el mundo por sus propias razones. No fueron hechos para el ser humano, del mismo modo que los negros no fueron hechos para los blancos, ni la mujer para el hombre...';
		setTimeout(imprimirRespuesta, 3000);
	} else if

	
	(resultMusica == true){
		mensajeBot = "q escuchás?";
		setTimeout(imprimirRespuesta, 3000);
	} else if (resultCuarentena == true){
		mensajeBot = "Paja la cuarentena, igual a mí me gusta estar todo el día encerrado eh";
		setTimeout(imprimirRespuesta, 3000);
	} else if  ( resultPuto == true ){
		mensajeBot = "Muy puto";
		setTimeout(imprimirRespuesta, 3000);
	} else if  ( resultMorbo == true ){
		mensajeBot = "Mucho morbo";
		setTimeout(imprimirRespuesta, 3000);
	}	else if  ( resultInstagram == true ){
		mensajeBot = "Me fastidia instagram";
		setTimeout(imprimirRespuesta, 3000);
	}	else if  ( resultJaja == true ){
		mensajeBot = "jajajjajsjsjaj";
		setTimeout(imprimirRespuesta, 2000);
	} else if (resultFotos == true){
		mensajeBot = "Fotos? Proximamente. En q andas? q hacías?";
		setTimeout(imprimirRespuesta, 3000);1
	} else if (resultPaloma == true){
		mensajeBot = 'Amo la paloma, amolap al oma';
		setTimeout(imprimirRespuesta, 5000);
	} else if (resultIpa == true){
		mensajeBot = "Siempre Ipa!";
		setTimeout(imprimirRespuesta, 3000);
	} else if (resultChino == true){
		mensajeBot = "Mi chino de cabecera siempre tiene papitas sabor ketchup y la cerveza bien bien fria. Lo amo.";
		setTimeout(imprimirRespuesta, 3000);
	} 
	
	
	else if  ( resultMerca == true ){
		mensajeBot = "No sé para qué toman, flashean que van a coger como conejos duracell y terminan anillándose los huevos, y ni así se les para.";
		setTimeout(imprimirRespuesta, 3000);
	} else if (resultPopper == true){
		mensajeBot = "No me hace falta aspirar vasodilatadores para abrir el culo, en todo caso si tuviese q meterme algo además de pija sería psilocibina";
		setTimeout(imprimirRespuesta, 3000);
	} else if(resultCaca == true){
		mensajeBot = "Caca no";
		setTimeout(imprimirRespuesta, 3000);
	} else if (resultEmbole == true){
		mensajeBot = "Igual. Que embole";
		setTimeout(imprimirRespuesta, 3000);
	} else if(resultTrio == true){
		mensajeBot = "2 o 4, no me gustan los impares";
		setTimeout(imprimirRespuesta, 3000);
	} else if(resultVerga == true){
		mensajeBot = "Pija, ñam ñam";
		setTimeout(imprimirRespuesta, 3000);
	} else if(resultFaso == true){
		mensajeBot = "Prefiero las drogas duras";
		setTimeout(imprimirRespuesta, 3000);
	} else if(resultDedo == true){
		mensajeBot = "Los dedos no porque lo chiquito pincha";
		setTimeout(imprimirRespuesta, 3000);
	} else if(resultSkydive == true){
		mensajeBot = "En el paracaidismo no existen los descuentos. Y no tengo la más puta idea de cuanto está el bautismo!!!";
		setTimeout(imprimirRespuesta, 3000);
	} else if(resultLifeguard == true){
		mensajeBot = "Por qué siempre chamuyan a un guardavidas con lo de respiración boca a boca y hacerse los ahogados? Yo no le ando diciendo a los Marcelos agachate y conocelo, toda la vida escuchando lo mismo pobre Marcelo...";
		setTimeout(imprimirRespuesta, 3000);
	} else if(resultLaburo == true){
		mensajeBot = "soy guardavidas";
		setTimeout(imprimirRespuesta, 3000);
	} else if(resultHetero == true){
		mensajeBot = "Leé la palabra  H E T E R O S al revés...";
		setTimeout(imprimirRespuesta, 3000);
	} else if(resultPete == true){
		mensajeBot = "Lo que mejor sé hacer es chupar la pija. Vos tmb me la podes chupar eh. Hay un palíndromo muy bonito que dice: LAME, SABE BIEN, BÉSAMELA";
		setTimeout(imprimirRespuesta, 3000);
	} else if(resultEstudi == true){
		mensajeBot = "Qué estudias?";
		setTimeout(imprimirRespuesta, 3000);
	}  else if(resultTaxi == true){
		mensajeBot = "Parásitos oportunistas, yo no sé cómo les da la cara para pretender cobrar con esas caripelas. Ni un mango valen.";
		setTimeout(imprimirRespuesta, 5000);
	} else if (resultCristina == true){
		mensajeBot = "Yo no quería, pero el macrismo me obligo a ser peronista";
		setTimeout(imprimirRespuesta, 3000);
	} else if (resultSugar == true){
		mensajeBot = "SugarDaddy?!' Pero vayan a laburar, parásitas. Terminen el secundario q ya estan por cumplir 25!";
		setTimeout(imprimirRespuesta, 3000);
	} else if (resultQuebuscas == true){
		mensajeBot = "Coger, comer pizza, coger, tomar cerveza y coger";
		setTimeout(imprimirRespuesta, 3000);
	} else if (resultIncompatibles == true){
		mensajeBot = "Ups, somos incompatibles.";
		setTimeout(imprimirRespuesta, 3000);
	} else if (resultLindo == true){
		mensajeBot = "Vos también sos lindo";
		setTimeout(imprimirRespuesta, 3000);
	} else if (resultMegusta == true){
		mensajeBot = "Me encanta!";
		setTimeout(imprimirRespuesta, 3000);
	} else if  ( resultNombre == true ){
		mensajeBot = "Me llamo Lucas, pero me dicen Barrilete";
		setTimeout(imprimirRespuesta, 4000);
    } else if  ( resultRol == true ){
		mensajeBot = "Si tengo q elegir prefiero ser pas. Igual no siempre, si tas muy muy bueno o sos muy pendejo me adapto sin drama";
		setTimeout(imprimirRespuesta, 5000);
    } else if (resultEdad == true){
		mensajeBot = "Tengo 34, y vos?";
		setTimeout(imprimirRespuesta, 3000);
	}  else if(resultGarche == true){
		mensajeBot = "Me encanta que me garchen";
		setTimeout(imprimirRespuesta, 4000);
	} else if (resultHot == true){
		mensajeBot = "Ah, yo eso siempre. Toy caliente todo el día";
		setTimeout(imprimirRespuesta, 3000);
	} else if (resultLugar == true){
		mensajeBot = "Tengo lugar, sep. Vivo solo, en Recoleta.";
		setTimeout(imprimirRespuesta, 4000);
	} else if (resultbarriosLejos == true){
		mensajeBot = "Vivimos medio lejos y yo soy re pajero, si t pinta venir todo bien, pero yo hasta ahí dificil";
		setTimeout(imprimirRespuesta, 5000);
	} else if (resultLubri == true){
		mensajeBot = "Con saliva y con cariño tu conquistas a este niño";
		setTimeout(imprimirRespuesta, 5000);
	} else if (resultbarriosCerca == true){
		mensajeBot = "Ah, cerca. Yo Recoleta";
		setTimeout(imprimirRespuesta, 3000);
	} else {
		chatBox.scrollTop = chatBox.scrollHeight;
		var aleatorias = [
			"Bancá un segundo que toy por comer. Che, qué rol sos?",
			"de qué barrio sos?",
			"Y vos qué haces de tu vida?",
			"En qué trabajas?",
			"culo",
			"Muy grandotas naa, prefiero q entre entera en la boca.",
			"Q onda vos? Act? Proactivo? Sos puntual? Cuales son tus mayores virtudes?",
			"Pija sin cara no se come",
			"Que hermoso sería q no se depilen más las bolas, no? Nada más triste en la vida q dos huevos afeitado",
			":D",
			"Siempre mejor primero coger y después la cerveza",
			"Antes q nada quería q sepas q a macristas, providas y discretos NI UN PETE",
			"pija",
			"Qué hacías?",
			":p",
			"Al culo hay q cuidarlo, hay q hacerlo durar.",
			"vos q onda? en qué andabas?",
			"Tengo una fiaca, hoy ando que el culo me bosteza",
			"me re aburrro",
			"qué buscas?",
			"Dame un seg q voy al chino, contate algo mientras",
			"Hoy ando que el culo me bosteza",
	
			//"Un palíndromo hermoso dice así: Sometamos o matemos",
			//"Yo dono rosas, oro no doy",
			//"Existen semipalíndromos o bifrontes, por ej, ratón-notar.",
			
		];
		
		var numAle = Math.floor(Math.random()*aleatorias.length);
		setTimeout(randomFun, 5000);
		
		function randomFun(){
			chatBox.scrollTop = chatBox.scrollHeight;
			mensajeBot = aleatorias[numAle];
			nuevaRespuesta2 = document.createElement("li"),
			contenidoBot = document.createTextNode(mensajeBot);
			nuevaRespuesta2.appendChild(contenidoBot);
			lista.appendChild(nuevaRespuesta2);
			nuevaRespuesta2.classList.add("msjLuc");
			chatBox.scrollTop = chatBox.scrollHeight;
		}
		//setTimeout(probando, 5000);
	}
} 

function imprimirRespuesta(){
	chatBox.scrollTop = chatBox.scrollHeight;
	nuevaRespuesta2 = document.createElement("li"),
	contenidoBot = document.createTextNode(mensajeBot);
	nuevaRespuesta2.appendChild(contenidoBot);
	lista.appendChild(nuevaRespuesta2);
	nuevaRespuesta2.classList.add("msjLuc");
	chatBox.scrollTop = chatBox.scrollHeight;
}
