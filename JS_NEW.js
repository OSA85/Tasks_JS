// HW JS_functions

// 1) Сделать функцию которая при вызове напишет в консоль сумму 2-х переданных в неё чисел
function Sum(a,b){
    console.log (a+b)
}

Sum(45,45)

// 2) Сделать функцию которая вернёт в консоль квадрат переданного числа

function SQR(a){
    console.log (a**2)
}

SQR(4)

// 3) Сделать функцию. На вход принимет 3 параметра (Ф,И,О). Вернёт JSON
// {"name":И,
//  "surname":Ф,
//  "middlename":О}

function NSM(surname, name, middlename){
    person=JSON.parse(JSON.stringify({name, surname,middlename}))
    console.log (person)
}

NSM('Иванов','Иван','Иванович')

// 4) вывести в консоль переменную-массив в которой будут все чётные числа. Переменную возвращяет функция которая на вход принимает массив чисел.
// Если чётных чисел не нашлось, то функция вернёт текст "No even numbers"


let arr = [1, 3, 5, 7]
let arr1 = [1, 2, 3, 4, 5, 6, 7, 365, 892]

function evenNumbers (arr){
    let new_arr= [];
    count = 0;
    arr.forEach(el => {
       if (el%2==0){
        new_arr.push(el);
        count++;
    } 
    });

    if(count!=0){
        console.log("Колличество чётных чисел = "+ count)
        console.log(new_arr)
    } else {
        console.log("No even numbers")
    }
}

evenNumbers(arr)

// 5) Сделать функцию которая вернёт количество букв 'a' в переданном в неё слове.
// Алфавит Eng. Если нету букв 'а', то вернтуть текст "No a characters".

function countA(string){
    let arr = string.toLowerCase().split('');
    let charA = 'a';
    count = 0;
    arr.forEach(el=>{
        if(charA==el) count++;
    });
    if(count!=0){
        console.log ("Колличество букв 'a' = " + count)
    } else {
        console.log ("No a characters")
    }
    
}

countA("sdffj")

// 6) Написать функцию которая выдаст список тестов для переданного в неё web-ui элемента
// Элементы: Phone number field, CheckBox, SignIn Button.
let tel = "Выяснить как должно правильно работать поле!\n"+
"Ввести валидное значения (Пример: 81234567890)\n"+
"Ввести валидное значение в другом формате (Пример: +71234567890)\n"+
"Ввести валидное значение без первого числа (Пример: 1234567890)\n"+
"Ввести валидное значение в другом формате со скобками (Пример: +7(123)4567890)\n"+
"Оставить поле пустым\n"+
"Ввести валидное значение и в конце поставить пробел(Пример: '81234567890 ')\n"+
"Ввести валидное значение и в начале поставить пробел(Пример: ' 81234567890')\n"+
"Ввести на один символ меньше чем необходимо (Пример: 8123456789)\n"+
"Ввести больше на один символ чем необходимо (Пример: 812345678901)\n"+
"Ввести ноль\n"+
"Ввести пробел\n"+
"Ввести дробное число (Пример : 10,0)\n"+
"Ввести булеваое значение (Пример: ture или fales)\n"+
"Ввести число буквами (Пример: 81234561пятьсотсорокпять)\n"+
"Ввести буквы в разном регистре(Пример: ФыВыаДЛжото)\n"+
"Ввести спецсимволы `~!@#$%^*()_-[]{}:;'/›‹\n"+
"Ввести SQL запрос (Пример: SELECT * FROM table)\n"+
"Ввести тэги (Пример:  html <div>81234567890</div>)\n"+
"Ввести CSS-инъекцию (Пример: <script>alert(“text”);</scriprt>)\n";
let checkBox = "Выяснить как должно правильно работать!\n"+
"Выбрать один чек бокс\n"+
"Выбрать два чек бокса\n"+
"Выбрать все чек боксы\n"+
"Снять выделение с одного чек бокса\n"+
"Снять выделение со всех чек боксов\n"+
"Не выбирать ни одного чек бокса\n";
let signIn = "Выяснить как должно правильно работать!\n"+
"Заполнить все поля валидными данными\n"+
"Не заполнять ни одного поля\n"+
"Все поля кроме одного заполнить валидными данными (Поочередно проверить все поля этой проверкой)\n";

function testsFor (str){
    if ( str == "Phone number field"){
        console.log(tel)
    }
    if ( str == "CheckBox"){
        console.log(checkBox)
    }
    if ( str == "SignIn Button"){
        console.log(signIn)
    } 
}

testsFor("Phone number field")

// вариант не зависящий от регистра и пробелов до и после

function hardTestsFor (str){
    let new_str = str.toLowerCase().trim();
    if ( new_str == "phone number field"){
        console.log(tel)
    }
    if ( new_str == "checkbox"){
        console.log(checkBox)
    }
    if ( new_str == "signin button"){
        console.log(signIn)
    } 
}

hardTestsFor("  SiGnIn ButtON   ")

// 7) Написать функцию которая на вход получает JSON а возвращяет XML

let js ={
    as : {a:1,
        b:2,
        c:3},
    names:{n1 :"fd",
     n2 : "df"},
     sur: "df",
     md: "asdf"

}
function JSONtoXML(obj) {
    let xml = '';
    for (let prop in obj) {
      xml += obj[prop] instanceof Array ? '' : '\n<' + prop + '>';
      if (obj[prop] instanceof Array) {
        for (let array in obj[prop]) {
          xml += '<' + prop + '>';
          xml += JSONtoXML(new Object(obj[prop][array]));
          xml += '</' + prop + '>\n';
        }
      } else if (typeof obj[prop] == 'object') {
        xml += JSONtoXML(new Object(obj[prop]));
      } else {
        xml += obj[prop];
      }
      xml += obj[prop] instanceof Array ? '' : '</' + prop + '>\n';
    }
    xml = xml.replace('/<\/?[0-9]{1,}>/g', '');
    return xml;
  }
function jsonInXML (json){
let xml = JSONtoXML(json);
console.log(xml);
}

jsonInXML (js)
