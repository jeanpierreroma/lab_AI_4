const model = [
    [20, 10, 10, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 30],
    [20, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 30, 0],
    [20, 0, 20, 0, 0, 30, 0, 0, 0, 0, 0, 0, 15, 15, 0],
    [20, 0, 0, 20, 30, 0, 0, 0, 0, 0, 0, 0, 15, 15, 0],
    [15, 0, 0, 15, 10, 0, 30, 30, 0, 0, 0, 0, 0, 0, 0],
    [30, 0, 0, 0, 30, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0],
    [20, 0, 0, 0, 0, 0, 0, 0, 0, 40, 40, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 0, 60, 0, 0, 0,]
]
const disease = [
    "Кір",
    "Грип", 
    "Пневмонія", 
    "Ангіна", 
    "Скарлатина", 
    "Епідемічний паротит",
    "Дизентерія",
    "Гепатит"
]
const symptoms = [
    "Температура",
    "Нежить",
    "Кашель",
    "Біль горла",
    "Збільшення підщелепних залоз",
    "Віддих",
    "Різна висипка",
    "Тошнота/рвота",
    "Опухлість завушних залоз",
    "Болі в животі",
    "Розлади кишківника",
    "Пожовтіння шкіри",
    "Головний біль",
    "Озноб",
    "Світлобоязнь"
]
const aboutDisease = [
    "(лат. morbilli, англ. measles / rubeola) — антропонозна інфекційна хвороба, яку спричинює вірус з роду Morbillivirus. Характеризується вираженою автоінтоксикацією, гарячкою, запальними явищами з боку дихальних шляхів, кон'юнктивітом, появою своєрідних плям на слизовій оболонці ротової порожнини (плями Копліка) і папульозно-плямистим висипом на шкірі. Це одне з найзаразніших вірусних захворювань, його індекс контагіозності наближався до 100% у довакцинальний період, найсприятливішими до кору були діти, тому кір відносять до так званих дитячих інфекційних хвороб.",
    "(англ. influenza, фр. grippe) — гостра вірусна інфекційна хвороба з періодичним епідемічним чи навіть пандемічним поширенням. Хвороба характеризується появою гострого респіраторного синдрому з переважанням трахеобронхіту та вираженою інтоксикацією з гарячкою.",
    "— запалення легень, яке відбувається перш за все у повітряних міхурцях, які називаються альвеолами. Зазвичай виникає при інфікуванні бактеріями, значно рідше — вірусами та іншими мікроорганізмами, ураженні деякими медичними препаратами, при автоімунних захворюваннях, дії деяких токсичних факторів тощо",
    "(англ. acute tonsillitis; лат. tonsillitis acuta) — запалення піднебінних мигдаликів, слизової оболонки горла, лімфаденоїдного глоткового кільця, яке спричинюють різні мікроорганізми, здебільшого стрептокок, тоді такий гострий тонзиліт називають бактеріальним. Оскільки, крім ураження достатньо видимих при звичайному огляді ротоглотки піднебінних мигдаликів, відбувається й запалення інших мигдаликів і численних лімфоїдних вкраплень слизової оболонки глотки, таку хворобу називають бактеріальним фарингітом.",
    "(від лат. scarlatium — яскраво-червоний) — гостре антропонозне інфекційне захворювання, яке проявляється інтоксикацією, гнійним ураженням мигдаликів ротоглотки, що нагадує зміни при стрептококковому фарингіті, найбільше з них уражені піднебінні, та характерною дрібнокрапчастою екзантемою (висипом). Схильна до гнійно-септичних та алергічних ускладнень.",
    "(англ. mumps, epidemic parotitis; лат. parotitis epidemica; народне — свинка, завушниця) — гостре висококонтагіозне інфекційне захворювання, яке характеризується гарячкою, загальною інтоксикацією, ураженням слинних залоз, а іноді й інших залоз, які мають вивідні протоки (статеві, молочні, підшлункова), центральної нервової системи (ЦНС).",
    "(грец. δυσεντερία, від грец. δυσ/диз — приставка, що означає скруту, порушення, та грец. εντερία/ентерон або ентерія — кишка, травлення; застаріле діал. черві́нка) — синдром гострого ураження людини з переважним запальним ушкодженням дистального відділу товстої кишки з типовими проявами коліту з обов'язковою появою крові у випорожненнях. Інші клінічні прояви при дизентерії — гарячка, біль у животі, тенезми, однак вони не є обов'язковими.",
    "(грец. ἡπατῖτις від грец. ἥπαρ, «печінка») — загальна назва гострих та хронічних дифузних запальних захворювань печінки різної етіології. Деякі люди і тварини з гепатитом не мають симптомів, тоді як у інших з'являється жовте забарвлення шкіри та білків очей (жовтяниця), поганий апетит, блювота, втома, біль у животі та діарея. Гепатит є гострим, якщо він зникає протягом шести місяців, і хронічним, якщо хвороба триває більше шести місяців."
]

class Disease {
    constructor(name, about, arr) {
        this.name = name;
        this.about = about;
        this.symptoms = arr
    }

    getName() {
        return this.name;
    }
    getAbout() {
        return this.about;
    }
    getSymptos() {
        return this.symptoms;
    }

    setName(name) {
        this.name = name;
    }
    setAbout(about) {
        this.about = about;
    }
}
class Symptom {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }

    getName() {
        return this.name;
    }
    getValue() {
        return this.value;
    }

    setName(name) {
        this.name = name;
    }
    setAbout(about) {
        this.about = about;
    }
}
class Patient {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    setDisease(disease) {
        this.disease = disease;
    }

    getName() {
        return this.name;
    }
    getSurname() {
        return this.surname;
    }
    getAge() {
        return this.age;
    }
    getDisease() {
        return this.disease;
    }
}

let dataDisease = [];
function createAllDiseases() {
    for(let i = 0; i < model.length; i++) {
        let tmp = []
        for(let j = 0; j < model[i].length; j++) {
            if(model[i][j] !== 0) {
                tmp.push(new Symptom(symptoms[j], model[i][j]));
            }
        }
        dataDisease.push(new Disease(disease[i], aboutDisease[i], tmp))
    }
}
createAllDiseases()

function createDataBaseDiseases() {
    var table = document.getElementById('database_diseases');

    var row = table.insertRow();
    for (let i = symptoms.length - 1; i >= -1; i--) {
        if(i === -1) {
            var cell = row.insertCell(0);
            cell.innerHTML = "";
            continue
        }
        var cell = row.insertCell(0);
        cell.innerHTML = symptoms[i];
    }

    for (let i = 0; i < model.length; i++) {
        var row = table.insertRow();
        for(let j = model[i].length - 1; j >= -1; j--) {
            var cell = row.insertCell(0);
            if(j === -1) {
                cell.innerHTML = disease[i];
                continue
            }
            cell.innerHTML = model[i][j];
        }
    }
}
createDataBaseDiseases()

function printInfoAboutDiseases() {
    const element = document.querySelector('#about_diseases');
    for (let i = 0; i < aboutDisease.length; i++) {
        const newParagraph = document.createElement('p');
        
        const highlightedWord = document.createElement('span');
        highlightedWord.textContent = disease[i];
        highlightedWord.style.fontSize = '22px'; // Збільшення розміру виділеного слова
        highlightedWord.style.fontWeight = 'bold'; // Жирний шрифт для виділеного слова
        
        // Додавання елементу span до параграфу
        newParagraph.appendChild(highlightedWord);
        newParagraph.innerHTML += ' ' + aboutDisease[i];
        newParagraph.style.paddingBottom = '10px'
        newParagraph.style.borderBottom = '3.5px solid #fff';
        
        // Додавання нового елементу параграфу до body сторінки
        element.appendChild(newParagraph);
    }
}

printInfoAboutDiseases()


let personQuestions = [];
let symptomsQuestions = [];
function createForm() {
    const formContainer = document.querySelector('#div_for_form');
    const form = document.createElement('form');

    // Створення заголовка форми
    const heading = document.createElement('h2');
    heading.textContent = 'Анкета для пацієнта';
    form.appendChild(heading);

    personQuestions = [
        "Ім'я: ",
        "Прізвище: ",
        "Вік: "
    ]
    symptomsQuestions = [];
    for (let i = 0; i < symptoms.length; i++) {
        symptomsQuestions.push(`Є ${symptoms[i].toLowerCase()}? `)
    }

    // Створення полів для заповнення
    for (let i = 0; i < personQuestions.length; i++) {
        var wrapDiv = document.createElement('div')
        wrapDiv.className = 'question';

        var question = document.createElement("p");
        question.innerHTML = personQuestions[i];
        question.className = 'quest'
        wrapDiv.appendChild(question);

        const input = document.createElement('input');
        input.type = 'text';
        input.id = personQuestions[i].toLowerCase().substring(0, personQuestions[i].indexOf(':'));
        input.required = true;
        input.className = 'answer'
        wrapDiv.appendChild(input);

        form.appendChild(wrapDiv)
    }

    // Створення полів для заповнення
    for (let i = 0; i < symptomsQuestions.length; i++) {
        var wrapDiv = document.createElement('div')
        wrapDiv.className = 'question_2';

        var question = document.createElement("label");
        question.innerHTML = symptomsQuestions[i];
        wrapDiv.appendChild(question);

        var wrapDivForAnswer = document.createElement('div')
        wrapDivForAnswer.className = 'answers';

        var label1a = document.createElement("label");
        label1a.innerHTML = "Так";

        var radio1a = document.createElement("input");
        radio1a.type = "radio";
        radio1a.name = `q${i}`
        radio1a.value = "1";
        radio1a.required = true;
        label1a.appendChild(radio1a)

        wrapDivForAnswer.appendChild(label1a);

        var label2a = document.createElement("label");
        label2a.innerHTML = "Ні";

        var radio2a = document.createElement("input");
        radio2a.type = "radio";
        radio2a.name = `q${i}`
        radio2a.value = "0";
        radio2a.required = true;
        label2a.appendChild(radio2a);

        wrapDivForAnswer.appendChild(label2a);

        wrapDiv.appendChild(wrapDivForAnswer)
        form.appendChild(wrapDiv)
    }

    // Створення кнопки для відправки форми
    var wrapDiv = document.createElement('div')
    wrapDiv.className = 'question_2';
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Визначити хворобу';
    submitButton.addEventListener('click', function(e) {
        e.preventDefault(); // запобігає переходу на іншу сторінку
        // додатковий код можна написати тут
    });
    submitButton.id = 'firstButton';
    wrapDiv.appendChild(submitButton);

    form.appendChild(wrapDiv)
    formContainer.appendChild(form)
}

createForm()

function getPersonalDataFromForm() {
    let getNameToAnswers = [];
    for(let i = 0; i < personQuestions.length; i++) {
        getNameToAnswers.push(personQuestions[i].toLowerCase().substring(0, personQuestions[i].indexOf(':')))
    }
    let personalData = [];
    for (let i = 0; i < getNameToAnswers.length; i++) {
        personalData.push(document.getElementById(getNameToAnswers[i]).value)
    }

    let p = new Patient(personalData[0], personalData[1], personalData[2]);

    //Створює пацієнта
    return p;
}
function getDiagnosDataFromForm() { 
    let diagnosAnswers = [];
    for(let i = 0; i < symptoms.length; i++) {
        diagnosAnswers.push(parseInt(document.querySelector(`input[name="q${i}"]:checked`).value))
    }

    //Завершує заповнення пацієнта
    return findDiagnos(diagnosAnswers);
}

let allPatients = [];
if(localStorage.getItem("myKey_for_lab_4") != null) {
    allPatients = JSON.parse(localStorage.getItem("myKey_for_lab_4"))
}


let myButton = document.getElementById('firstButton');

myButton.addEventListener('click', function() {
    var resultBlock = document.createElement('div')
    resultBlock.className = 'resultBlock'

    let myPatient = getDiagnosDataFromForm();

    allPatients.push(myPatient)
    localStorage.setItem("myKey_for_lab_4", JSON.stringify(allPatients))
    
    var caption = document.createElement('h2');
    caption.textContent = `${myPatient.getSurname()} ${myPatient.getName()}`
    resultBlock.appendChild(caption);

    var caption_2 = document.createElement('h3');
    caption_2.textContent = `${myPatient.getAge()}`
    resultBlock.appendChild(caption_2);

    var info = document.createElement('p')
    for(let i = 0; i < myPatient.getDisease().length; i++) {
        var highlightedWord = document.createElement('span');
        let tmp = myPatient.getDisease()[i];
        highlightedWord.textContent = tmp.substring(0, tmp.indexOf(' '));

        if(tmp.substring(tmp.length - 3) === '100') {
            highlightedWord.style.fontSize = '22px';
            highlightedWord.style.fontWeight = 'bold';
        }

        info.appendChild(highlightedWord);
        info.innerHTML += tmp.substring(tmp.indexOf(' '));
        info.appendChild(document.createElement('br'))
        info.appendChild(document.createElement('br'))
    }
    resultBlock.appendChild(info);

    var extra = document.createElement('p')
    extra.innerHTML += `Перегляньте нижче опис кожної хвороби!`
    extra.appendChild(document.createElement('br'))
    extra.appendChild(document.createElement('br'))
    resultBlock.appendChild(extra)

    // Створення кнопки для відправки форми
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Переглянути базу пацієнтів';
    submitButton.addEventListener('click', function(e) {
        e.preventDefault(); // запобігає переходу на іншу сторінку
        var table = document.getElementById('database_patients');

        var row = table.insertRow();
        for (let i = personQuestions.length; i >= 0; i--) {
            var cell = row.insertCell(0);
            if(i === personQuestions.length) {
                cell.innerHTML = 'Історія хвороб пацієнта'
                continue
            }
            cell.innerHTML = personQuestions[i].substring(0, personQuestions[i].indexOf(':'));
        }

        for (let i = 0; i < allPatients.length; i++) {
            var row = table.insertRow();
            for(let j = 4; j > 0; j--) {
                var cell = row.insertCell(0);
                if(j === 4) {
                    let tmp = allPatients[i].disease
                    let str = '';
                    for(let i = 0; i < tmp.length; i++) {
                        str += `${tmp[i]}\n`;
                    }
                    cell.innerHTML = str;
                } else if(j === 3) {
                    cell.innerHTML = allPatients[i].age;
                } else if(j === 2) {
                    cell.innerHTML = allPatients[i].surname;
                } else {
                    cell.innerHTML = allPatients[i].name;
                }
            }
        }
    });
    submitButton.id = 'secondButton';
    resultBlock.appendChild(submitButton);

    document.getElementById('results').appendChild(resultBlock);
});

let myButton_2 = document.getElementById('secondButton');

function findDiagnos(arr = []) {
    let patient = getPersonalDataFromForm();
    let str = []
    
    // var paragraph = document.createElement('p')

    for(let i = 0; i < dataDisease.length; i++) {
        let tmp_disease = helperMakeFullArrayAboutDisease(dataDisease[i].getSymptos());
        let probability = calculateScaleOfDisease(arr, tmp_disease, dataDisease[i].getSymptos())
        
        // var highlightedWord = document.createElement('span');
        // highlightedWord.textContent = dataDisease[i].getName();
        
        str.push(`${dataDisease[i].getName()} шанс хвороби - ${probability}`);
        // if(isArrEqual(tmp_disease, arr)) {
        //     highlightedWord.style.fontSize = '22px';
        //     highlightedWord.style.fontWeight = 'bold';
        // }

        // paragraph.appendChild(highlightedWord);
        // paragraph.innerHTML += ` шанс хвороби - ${probability}`;
    }

    patient.setDisease(str)
    return patient;
}

// findDiagnos([1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1]);

function helperMakeFullArrayAboutDisease(symptomss) {
    let tmp = []
    for (let i = 0, j = 0; i < symptoms.length && j < symptomss.length; i++) {
        if(symptomss[j].getName() === symptoms[i]) {
            tmp.push(1);
            j++;
        } else {
            tmp.push(0)
        }
    }

    if(tmp.length < symptoms.length) {
        while(tmp.length != symptoms.length) {
            tmp.push(0)
        }
    }
    
    return tmp;
}

function isArrEqual(arr_1 = [], arr_2 = []) {
    if(arr_1.length !== arr_2.length) {
        return false;
    } 
    else {
        for (let i = 0; i < arr_1.length; i++) {
            if(arr_1[i] !== arr_2[i]) {
                return false;
            }
        }
    }

    return true;
}

function calculateScaleOfDisease(arr_1 = [], arr_2 = [], arrDiseaseSymp = []) {
    if(arr_1.length !== arr_2.length) {
        console.log('Помилка в програмі!')
        return 0;
    } else {
        let sum = 0;
        for (let i = 0; i < arr_1.length; i++) {
            if(arr_1[i] === arr_2[i]) {
                for (let k = 0; k < arrDiseaseSymp.length; k++) {
                    if(symptoms[i] === arrDiseaseSymp[k].getName()) {
                        sum += arrDiseaseSymp[k].getValue();
                        break;
                    }
                }
            }
        }
        return sum;
    }
}

function createResultBlock() {
    var resultBlock = document.createElement('div')
    resultBlock.className = 'resultBlock'

    let myPatient = getDiagnosDataFromForm();
}

function createDataBasePatients() {
    var table = document.getElementById('database_patients');

    var row = table.insertRow();
    for (let i = personQuestions.length; i >= 0; i--) {
        var cell = row.insertCell(0);
        if(i === personQuestions.length) {
            cell.innerHTML = 'Історія хвороб пацієнта'
            continue
        }
        cell.innerHTML = personQuestions[i].substring(0, personQuestions[i].indexOf(':'));
    }

    for (let i = 0; i < allPatients.length; i++) {
        var row = table.insertRow();
        for(let j = 4; j > 0; j--) {
            var cell = row.insertCell(0);
            if(j === 4) {
                cell.innerHTML = allPatients[i].getDisease();
            } else if(j === 3) {
                cell.innerHTML = allPatients[i].getAge();
            } else if(j === 2) {
                cell.innerHTML = allPatients[i].surname;
            } else {
                cell.innerHTML = allPatients[i].name;
            }
        }
    }
}