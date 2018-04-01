$(document).ready(function () {
//1 задание
    $('#array').children('.variant0').on('click', function () {
        var array1 = ['a', 'b', 'c'];
        var array2 = [1, 2, 3];
        var result = array1 + ',' + array2;
        alert(result);
    });

    $('#array').children('.variant1').on('click', function () {
        var array1 = ['a', 'b', 'c'];
        var array2 = [1, 2, 3];
        alert($.merge(array1, array2));
    });
//2 задание
    $('#arrayAddElement').children('.variant0').on('click', function () {
        var arrayElement = ['a', 'b', 'c'];

        alert($.merge(arrayElement, [1, 2, 3]))
    });

//3 задание 1 вариант
    $('#ruNglish').children('#result0').on('click', function () {
        var monthRu = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
        var monthEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var lang = $('#ruNglish').children('#form').children('p').children('input[name="switchBtn"]:checked').val();
        var numMonth = $('#ruNglish').children('#switchMonth').val();
        if (lang === 'ru'){
            switch (numMonth){
                case '0':
                    alert(monthRu[0]);
                    break;
                case '1':
                    alert(monthRu[1]);
                    break;
                case '2':
                    alert(monthRu[2]);
                    break;
                case '3':
                    alert(monthRu[3]);
                    break;
                case '4':
                    alert(monthRu[4]);
                    break;
                case '5':
                    alert(monthRu[5]);
                    break;
                case '6':
                    alert(monthRu[6]);
                    break;
                case '7':
                    alert(monthRu[7]);
                    break;
                case '8':
                    alert(monthRu[8]);
                    break;
                case '9':
                    alert(monthRu[9]);
                    break;
                case '10':
                    alert(monthRu[10]);
                    break;
                case '11':
                    alert(monthRu[11]);
                    break;
            }
        }
        else {
            switch (numMonth) {
                case '0':
                    alert(monthEn[0]);
                    break;
                case '1':
                    alert(monthEn[1]);
                    break;
                case '2':
                    alert(monthEn[2]);
                    break;
                case '3':
                    alert(monthEn[3]);
                    break;
                case '4':
                    alert(monthEn[4]);
                    break;
                case '5':
                    alert(monthEn[5]);
                    break;
                case '6':
                    alert(monthEn[6]);
                    break;
                case '7':
                    alert(monthEn[7]);
                    break;
                case '8':
                    alert(monthEn[8]);
                    break;
                case '9':
                    alert(monthEn[9]);
                    break;
                case '10':
                    alert(monthEn[10]);
                    break;
                case '11':
                    alert(monthEn[11]);
                    break;
            }
        }

    });
        
//3 задание 2 вариант
   /* $('#ruNglish').children('#result1').on('click', function () {
        var monthRu = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
        var monthEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var lang = $('#ruNglish').children('#form').children('p').children('input[name="switchBtn"]:checked').val();
        var numMonth = $('#ruNglish').children('#switchMonth').val();
        //var i = 4;
        for(var i = numMonth; i < 11; i--){
            alert(numMonth[i]);
        }

    }) */   //разобраться, как работает такое в цикле
// Задание 4
    $('#concat').children('.result0').on('click', function () {
        var array0 = [1, 2, 3];
        var array1 = [4, 5, 6];
        var allArray = array0.concat(array1)
        alert(allArray);
    })

    // Задание 5

    $('#reverse').children('.result0').on('click', function () {
        var array = [1, 2, 3];
        alert(array.reverse());
    })

    // Задание 6

    $('#pushUnsh').children('.push').on('click', function () {
        var array = [1, 2, 3];
        array.push(4, 5, 6);
        alert(array);
    });

    $('#pushUnsh').children('.unshift').on('click', function () {
        var array = [1, 2, 3];
        array.unshift(4, 5 ,6)
        alert(array);
    });

//Задание 7
    $('#shiftPop').children('.shift').on('click', function () {
        var array = ['js', 'css', 'jq'];
        alert(array.shift());
    });
    $('#shiftPop').children('.pop').on('click', function () {
        var array = ['js', 'css', 'jq'];
        alert(array.pop());
    });

//Задание 8
    $('#slice').children('.slice0').on('click', function () {
        var array = [1, 2, 3, 4, 5];
        alert(array.slice(0, 3))
    });

    $('#slice').children('.slice1').on('click', function () {
        var array = [1, 2, 3, 4, 5];
        alert(array.slice(3));
    });

// Задание 9
    $('#splice').children('.splice0').on('click', function () {
        var array = [1, 2, 3, 4, 5];
        array.splice(1,2)
        alert(array)
    });

    $('#splice').children('.splice1').on('click', function () {
        var array = [1, 2, 3, 4, 5];
        array.splice(0, 5, 2, 3, 4);
        alert(array);
    });
    $('#splice').children('.splice2').on('click', function () {
        var array = [1, 2, 3, 4, 5];
        array.splice(3, 0, 'a', 'b', 'c');
        alert(array);
    });
    $('#splice').children('.splice3').on('click', function () {
        var array = [1, 2, 3, 4, 5];
        array.splice(1,4,'a', 'b',2,3,4,'c',5,'e');
        alert(array);
    });

//Задание 10

    $('#sort').children('.sort').on('click', function () {
        var array = [3, 4, 1, 2, 7];
        alert(array.sort());
    });

//Задание 11

    $('#keys').children('.object').on('click', function () {
        var objectKey = {js:'test', jq: 'hello', css: 'world'};
        alert(Object.keys(objectKey));
    });
    });