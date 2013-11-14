SidePlashkaSPbU  = function()
{
	var fileref=document.createElement("link");
	fileref.setAttribute("rel", "stylesheet");
	fileref.setAttribute("type", "text/css");
	fileref.setAttribute("href", "http://spbu.ru/panel/side.css");
	document.getElementsByTagName("head")[0].appendChild(fileref);

	html = "<div id=\"spbuPanelSlideoutHolder\"></div>";

	document.write(html);

	function gosearch() {
		//http://spbu.ru/gsearch?cx=partner-pub-0495266823894514%3A0141548498&cof=FORID%3A10&ie=UTF-8&q=qweqwqweqweqweqw&sa=%D0%9F%D0%BE%D0%B8%D1%81%D0%BA&siteurl=spbu.ru%2Fgsearch%2F%3Fq%3D%25D1%258B%25D0%25B2%26ie%3D%25E2%2598%25A0
		var formsValue = "http://spbu.ru/gsearch?cx=partner-pub-0495266823894514%3A0141548498&cof=FORID%3A10&ie=UTF-8&q="+ document.googleSearchForm.q.value+"&sa=%D0%9F%D0%BE%D0%B8%D1%81%D0%BA&siteurl=spbu.ru%2Fgsearch%2F%3Fq%3D%25D1%258B%25D0%25B2%26ie%3D%25E2%2598%25A0";
		window.parent.location.href = formsValue;
		location=formsValue;
		document.location.href=formsValue;
		window.location.reload(formsValue);
		document.location.replace(formsValue);
	}

	function yasearch() {
		//http://spbu.ru/gsearch?searchid=1928682&web=0&text=погода
		var formsValue = "http://spbu.ru/gsearch?searchid=1928682&web=0&text="+ document.yandexSearchBox.text.value.replace(" ","%20");
		window.parent.location.href = formsValue;
		location.href=formsValue;
		window.location.reload(formsValue);
		document.location.replace(formsValue);
	}

	function replaseSpases() {
		 document.yandexSearchBox.text.value = document.yandexSearchBox.text.value.replace(" ","%20");
		 //document.forms["yandex-search-box"].submit();
		 //return true;
		 yasearch();
	}

	function goSpbuRu() {
		var urlValue = 'http://spbu.ru/';
		window.parent.location.href = urlValue ;
		//window.top.location = urlValue;
	}

	function createSidePlashka(params) {
			if (typeof(params)==='undefined') params = {textcolor: "#fff", brcolor: "#b22217", bgcolor: "#777", toppadding: "140"};
		   	if (typeof(params.textcolor)==='undefined') params.textcolor = "#fff";
		   	if (typeof(params.brcolor)==='undefined') params.brcolor = "#b22217";
		   	if (typeof(params.bgcolor)==='undefined') params.bgcolor = "#777";
		   	if (typeof(params.toppadding)==='undefined') params.toppadding = 140;
		   	if (typeof(params.pos)==='undefined') params.pos = "right";
		   	if (typeof(params.radius)==='undefined') params.radius = "10px 0 0 10px";

document.getElementsByTagName('head').item(0).innerHTML+='<style>#spbuPanelSlideout:hover{'+params.pos+':252px!important;} #spbuPanelSlideout:hover #slideout_inner{'+params.pos+':0px!important;}</style>';
		html="<div id=\"spbuPanelSlideout\" style=\" border-radius: "+params.radius+"; "+params.pos+":0; background-color: "+params.brcolor+"; border: 2px solid "+params.brcolor+"; top: "+params.toppadding+"px;\">	\
<p></p>	\
  <div id=\"slideout_inner\"  style=\" border-"+params.pos+":0; "+params.pos+":-252px; border: 2px solid "+params.brcolor+" background: "+params.bgcolor+"; background-color: "+params.bgcolor+"; top: "+params.toppadding+"px;\";  >	\
        <a href=\"http://spbu.ru\" style=\"color:"+params.textcolor+"\">	\
           Санкт-Петербургский государственный университет	\
        </a><br/><br/>	\
            <select onchange=\"window.top.location=value;\">	\
                <option selected=\"\" value=\"#\">Основные разделы</option>	\
                <option value=\"http://spbu.ru/structure/\">Администрация</option>	\
                <option value=\"http://www.library.spbu.ru/\">Библиотека</option>	\
                <option value=\"http://guestbook.spbu.ru/\">Виртуальная приемная</option>	\
                <option value=\"http://www.students.spbu.ru/\">Внеучебная деятельность</option>	\
                <option value=\"http://spbu.ru/structure/dekanskie/\">Деканские совещания</option>	\
                <option value=\"http://journal.spbu.ru/\">Журнал «Санкт-Петербургский университет</option>	\
                <option value=\"http://spbu.ru/contacts/\">Контакты</option>	\
                <option value=\"http://ifea.spbu.ru/\">Международная деятельность</option>	\
                <option value=\"http://spbu.ru/about/\">Наш университет</option>	\
                <option value=\"http://www.spbu.ru/obrashcheniya-k-rektoru\">Обращения к ректору</option>	\
                <option value=\"http://forum.spbu.ru/\">Общественное обсуждение</option>	\
                <option value=\"http://abiturient.spbu.ru/\">Приемная комиссия</option>	\
                <option value=\"http://spbu.ru/smi/\">СМИ о нас</option>	\
                <option value=\"http://www.spbu.ru/contacts/telsp/\">Телефонный справочник</option>	\
                <option value=\"http://campus.spbu.ru/\">Студгородок</option>	\
                <option value=\"http://it.spbu.ru/\">Управление-Служба информационных технологий</option>	\
                <option value=\"http://www.edu.spbu.ru/\">Учебная деятельность</option>	\
                <option value=\"http://timetable.spbu.ru/\">Электронное расписание</option>	\
            </select>	\
            <select onchange=\"window.top.location=value;\">	\
                <option selected=\"\" value=\"#\">Выберите факультет</option>	\
                <option value=\"http://www.bio.spbu.ru/\">Биолого-почвенный</option>	\
                <option value=\"http://www.orient.spbu.ru/\">Восточный</option>	\
                <option value=\"http://www.gsom.spbu.ru/\">Высшая школа менеджмента</option>	\
                <option value=\"http://www.geo.spbu.ru/\">Географии и геоэкологии</option>	\
                <option value=\"http://www.geology.spbu.ru/\">Геологический</option>	\
                <option value=\"http://www.jf.spbu.ru/\">Журналистики</option>	\
                <option value=\"http://www.arts.spbu.ru/\">Искусств</option>	\
                <option value=\"http://www.history.spbu.ru/\">Исторический</option>	\
                <option value=\"http://www.math.spbu.ru/\">Математико-механический</option>	\
                <option value=\"http://www.med.spbu.ru/\">Медицинский</option>	\
                <option value=\"http://www.sir.spbu.ru/\">Международных отношений</option>	\
                <option value=\"http://www.politology.spbu.ru/\">Политологии</option>	\
                <option value=\"http://www.apmath.spbu.ru/\">Прикладной математики - процессов управления</option>	\
                ё<option value=\"http://rus.jf.spbu.ru/\">Прикладных коммуникаций</option>	\
                <option value=\"http://www.psy.spbu.ru/\">Психологии</option>	\
                <option value=\"http://artesliberales.spbu.ru/\">Свободных искусств и наук</option>	\
                <option value=\"http://www.soc.spbu.ru/\">Социологии</option>	\
                <option value=\"http://www.dent.spbu.ru/\">Стоматологии и медицинских технологий</option>	\
                <option value=\"http://www.phys.spbu.ru/\">Физический</option>	\
                <option value=\"http://phil.spbu.ru/\">Филологический</option>	\
                <option value=\"http://philosophy.spbu.ru/\">Философский</option>	\
                <option value=\"http://www.chem.spbu.ru/\">Химический</option>	\
                <option value=\"http://www.econ.spbu.ru/\">Экономический</option>	\
                <option value=\"http://law.spbu.ru/\">Юридический</option>	\
                <option value=\"http://www.agym.spbu.ru/\">Академическая гимназия</option>	\
                <option value=\"http://fvo.spbu.ru/\">Факультет Военного обучения</option>	\
                <option value=\"http://www.sport.spbu.ru/main.php\">Общеуниверситетская кафедpа физической культуpы и споpта</option>	\
                <option value=\"http://www.medkol.spbu.ru/\">Медицинский колледж</option>	\
                <option value=\"http://www.sc.spbu.ru/\">Колледж физической культуры и спорта, экономики и технологии</option>	\
            </select>	\
			<ul style=\"display: block; padding:0; list-style-type:none; margin:5px 0;\">	\
            <li><a href=\"http://www.spbu.ru/news-spsu/\"  style=\"color:"+params.textcolor+"\"> Новости СПбГУ </a></li>	\
            <li><a href=\"http://spbu.ru/testanons/list/2\"  style=\"color:"+params.textcolor+"\"> Анонсы СПбГУ </a></li>	\
            <li><a href=\"http://guestbook.spbu.ru/\"  style=\"color:"+params.textcolor+"\"> Виртуальная приемная </a></li>	\
            <li><u><a href=\"http://guestbook.spbu.ru/ru/tsentr-zashchity-prav-abiturienta.html\" style=\"color:"+params.textcolor+"\"> Центр защиты прав абитуриента </a></u></li> \
            <li><a href=\"http://spbu.ru/smi/\"  style=\"color:"+params.textcolor+"\"> СМИ о нас </a></li>	\
            <li><a href=\"http://spbu.ru/structure/dekanskie/\"  style=\"color:"+params.textcolor+"\"> Деканские  совещания </a></li>	\
            </ul>	\
	\
            <form id=\"yandexSearchBox\" name=\"yandexSearchBox\" accept-charset=\"UTF-8\" onsubmit=\"SidePlashkaSPbU.yasearch();\" action=\"JavaScript:SidePlashkaSPbU.yasearch();\">	\
                    <input type=\"hidden\" name=\"searchid\" value=\"1928682\">	\
                    <input type=\"hidden\" name=\"web\" value=\"0\">	\
                    <input type=\"hidden\" name=\"ie\" value=\"UTF-8\">	\
                    <input name=\"text\" type=\"text\" style=\"width: 100px; margin:0;\" placeholder=\"Поиск ...\" id=\"googleSeachTextFild\">	\
                    <input type=\"button\" value=\"Искать!\" style=\"color:"+params.textcolor+"; background: "+params.brcolor+";\" id=\"SidePlashkaSPbUSeachButton\" onclick=\"SidePlashkaSPbU.yasearch();\">	\
            </form>	\
	\
            <a href=\"http://mail.spbu.ru/\" target=\"_blank\"><img src=\"http://spbu.ru/panel/mail.png\" title=\"Mail\" /></a>	\
            <a href=\"http://twitter.com/#!/Spb_university\" target=\"_blank\"><img src=\"http://spbu.ru/panel/twitter.png\" title=\"Twitter\" /></a>	\
            <a href=\"http://spbu.ru/rss/anons.php\" target=\"_blank\"><img src=\"http://spbu.ru/panel/rss.png\" title=\"RSS\" /></a>	\
            <a href=\"http://youtube.com/wwwspburu\" target=\"_blank\"><img src=\"http://spbu.ru/panel/youtube.png\" title=\"Youtube\" /></a>	\
        </div>	\
  </div>	\
</div>";
	 document.getElementById("spbuPanelSlideoutHolder").innerHTML=html;	
	};

	//createSidePlashka();

	return {
      		//gosearch: gosearch
      		yasearch: yasearch,
      		createSidePlashka: createSidePlashka
      		//replaseSpases: replaseSpases

   	}
}();
