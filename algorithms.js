//Алгоритмы сортировок:

//1 Сортировка вставками
//читаем определение и описание и смотрим справа гифку
//https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0_%D0%B2%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0%D0%BC%D0%B8

//Сортировка вставками (Insertion sort) — один из простейших алгоритмов сортировки. 
//Как всегда мы будем рассматривать сортировку по возрастанию.
//Суть его заключается в том, что в цикле один за другим выбираются элементы массива и сравниваются с элементами, 
//стоящими перед ними, до тех пор пока не будет найдет элемент, меньший текущего, или мы не дойдем до начала массива. 
//Перед ним мы и вставляем текущий, для этого предварительно сдвинув все элементы, которые оказались больше текущего, 
//в сторону увеличения на один индекс.

//https://miro.medium.com/max/560/1*YqKl98xcn2-5VTz_I9kddg.gif - гифка, как работать должен алгоритм

//Задание: есть массив [5, 12, 2, 7, 6, 9, 19, 25, 4, 1, 3]
//отсортировать по возрастанию написав алгоритм сортировки вставками.

let arr = [5, 12, 2, 7, 6, 9];

for (let i = 1; i < arr.length; i++) {
  const a = arr[i];
  let j = i;
  while (j > 0 && a < arr[j - 1]) {
    arr[j] = arr[j - 1];
    j--;
  }
  arr[j] = a;
}
//console.log(arr);


//2 Сортировка пузырьком

//Сортировку пузырьком (Bubble Sort) также иногда называют сортировкой простыми обменами.

////В общем-то единственным преимуществом этого алгоритма и является то, что он предельно прост в реализации. 
//Сам по себе он не является эффективным, имеет сложность O(n²) и на практике не используется. 
//Но знать его не помешает, ведь на его основе созданы другие более сложные и оптимизированные алгоритмы — 
//сортировка перемешиванием (Cocktail sort), сортировка кучей (Heapsort), быстрая сортировка (Quicksort).

//Суть алгоритма в сравнении пары соседних элементов — если они стоят в неправильном порядке, 
//то их меняют местами. Чтобы отсортировать таким образом весь массив длиной N, 
//придется пройтись по нему N-1 раз (последний элемент уже будет отсортирован на предыдущей итерации, 
//поэтому для него проход не требуется). 
//Также за каждый проход в конец массива “всплывает” при сортировке по возрастанию — наибольшее число, 
//по убыванию — наименьшее. А значит на следующей итерации его можно уже не проверять.

//https://miro.medium.com/max/440/1*cipVJ3UdLVfkiWMsohig9w.gif - гифка, как работать должен алгоритм

//Задание: есть массив [5, 12, 2, 7, 6, 9, 19, 25, 4, 1, 3]
//отсортировать по возрастанию(1) и по убыванию(2) написав алгоритм сортировки пузырьком.


//доп задание:
//оптимизировать алгоритм добавив флаг, отслеживающий перестановку элементов — 
//если за очередной проход по массиву не произошло ни одной, значит массив уже отсортирован. 
//(дабы избежать лишних проходов по массиву)

//Больше ничего не гуглить, вся нужная инфа выше. (подсказка, опять будет два цикла, один в другом)

arr = [9, 7, 8, 4, 1];
let repetition;

while (repetition !== 0) {
  repetition = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    const a = arr[i];
    if (arr[i + 1] < a) {
      arr[i] = arr[i + 1];
      arr[i + 1] = a;
      repetition++;
    }
  }
}
//console.log(arr);

//3 Бинарный поиск

//Бинарный поиск позволяет выполнять поиск в отсортированном массиве путем многократного разбиения массива пополам.

//Бинарный поиск - это алгоритм «разделяй и властвуй», который делит массив примерно пополам каждый раз, 
//когда проверяет, является ли элемент массива тем, который мы ищем.

//Другими словами, мы разделяем проблему на более простые задачи, пока она не станет достаточно простой, 
//чтобы решать их напрямую. 
//Предположим, у нас есть отсортированный массив (в порядке возрастания), и посмотрим на этапы бинарного поиска:

//Найдите средний элемент данного массива.
//Сравните средний элемент со значением, которое мы ищем (называемым ключом).
//Если ключ меньше среднего элемента, ищите в левой половине.
//Если ключ больше среднего элемента, ищите в правой половине.
//Если ключ равен среднему элементу, вернуть индекс среднего элемента.

//Если ключ меньше среднего элемента, ищите в левой половине.
//Если ключ больше среднего элемента, ищите в правой половине.
//Если ключ равен среднему элементу, вернуть индекс среднего элемента.
//Продолжайте шаги 1, 2, пока не останется один элемент.
//Если ключ все еще не найден, верните -1.


//объяснение алгоритма словами на английском (обязательно прочитать)

//https://dev-gang.ru/static/storage/192496732421990067288447068997549676989.png
//https://dev-gang.ru/static/storage/6653732174725723927333292599654322346.png


////описание алгоритма по шагам еще раз

//мы используем две переменные start и end для отслеживания текущего подмассива, который мы ищем. 
//Мы находим средний элемент, а затем проверяем, равен ли он, меньше или больше, чем key.
//учитывая, что у нас есть отсортированный массив, мы можем отбросить половину элементов в массиве. 
//Мы достигаем этого в коде, изменяя переменную start или end, в зависимости от того, где мы продолжаем поиск. 
//Если текущий элемент, на который мы смотрим, меньше ключа, мы меняем start на middle + 1 и эффективно 
//отбрасываем текущий элемент и все элементы меньше этого.

//Задание: реализовать алгоритм бинарного поиска

//Больше ничего не гуглить, вся нужная инфа выше. (можно использовать while)

arr = [1, 4, 7, 8, 9, 11, 12];

let start = 0;
let result;
let end = arr.length - 1;
let middleIndex = Math.round(end / 2);

console.log(arr[middleIndex]);

let key = 6;

while (result !== key) {
  if (arr[middleIndex] === key) {
    result = arr[middleIndex];
    console.log(result);
  }

  if (key > arr[middleIndex]) {
    arr = arr.splice(middleIndex + 1, end - middleIndex + 1);
    end = arr.length - 1;
    middleIndex = Math.round(end / 2);
    console.log(arr);
  }

  if (key < arr[middleIndex]) {
    arr = arr.splice(start, middleIndex);
    end = arr.length - 1;
    middleIndex = Math.round(end / 2);
    console.log(arr);
  }
}


