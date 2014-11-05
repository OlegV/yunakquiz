#encoding: utf-8 

Category.create(title: "Спорт" ,category_id: 0)
Category.create(category_id: 1, title: "Футбол")
Category.create(category_id: 1, title: "Хокей")
Category.create(category_id: 0, title: "Історія")
Category.create(category_id: 4, title: "Історія України")
Category.create(category_id: 4, title: "Історія світу")

quiz1 = Quiz.create(category_id: 2, title: "Тест на знання правил футболу", description: "Детальний опис тесту")
question1 = quiz1.questions.create(title: "Скільки гравців в команді?", description: "Згідно правил на полі знаходиться 11 гравців однієї команди")
question1.answers.create(title: "11", correct: true)
question1.answers.create( title: "12", correct: false)
question1.answers.create( title: "5", correct: false)
question2 = quiz1.questions.create(quiz_id: 1, title: "Скільки триває один тайм?", description: "Один тайм матчу триває 45 хв. не враховуючи додаткового часу")
question2.answers.create( title: "20хв", correct: false)
question2.answers.create( title: "45хв", correct: true)
question2.answers.create( title: "до останнього гравця", correct: false)
question3 = quiz1.questions.create(quiz_id: 1, title: "Що відбудеться, коли гравець торкнеться м’яча рукою?", description: "Це є порушенням правил, після того як гравець торкнувся мяча рукою гра зупиняється, та назначається штрафний")
question3.answers.create( title: "Порушенння правил", correct: true)
question3.answers.create( title: "Штрафний удар", correct: true)
question3.answers.create( title: "Дадуть пиріжок", correct: false)
question3.answers.create(title: "Дадуть в голову", correct: false)
quiz1.comments.create(text: "Дуже гарний тест")
quiz1.comments.create(text: "Потрібно додати питання із декількома правильними відповідями")



Quiz.create(category_id: 2,status:"draft", title: "Тест на знання правил футболу", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in fringilla quam. Donec arcu ex, egestas ut lobortis ac, tempus et nisl. Ut vulputate efficitur.")
Quiz.create(category_id: 5,status:"draft", title: "Тест на знання історії України", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in fringilla quam. Donec arcu ex, egestas ut lobortis ac, tempus et nisl. Ut vulputate efficitur.")
Quiz.create(category_id: 6,status:"draft", title: "Тест на знання історії світу", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in fringilla quam. Donec arcu ex, egestas ut lobortis ac, tempus et nisl. Ut vulputate efficitur.")
Quiz.create(category_id: 6,status:"draft", title: "Тест на знання другої світової війни", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in fringilla quam. Donec arcu ex, egestas ut lobortis ac, tempus et nisl. Ut vulputate efficitur.")
Quiz.create(category_id: 6,status:"draft", title: "Тест на знання першої світової війни", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in fringilla quam. Donec arcu ex, egestas ut lobortis ac, tempus et nisl. Ut vulputate efficitur.")
Quiz.create(category_id: 3,status:"draft", title: "Тест на знання правил хокею", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in fringilla quam. Donec arcu ex, egestas ut lobortis ac, tempus et nisl. Ut vulputate efficitur.")
Quiz.create(category_id: 2,status:"draft", title: "Тест на знання видатних футболістів", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in fringilla quam. Donec arcu ex, egestas ut lobortis ac, tempus et nisl. Ut vulputate efficitur.")
Quiz.create(category_id: 6,status:"draft", title: "Тест на знання війни в Вєтнамі", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in fringilla quam. Donec arcu ex, egestas ut lobortis ac, tempus et nisl. Ut vulputate efficitur.")
Quiz.create(category_id: 5,status:"draft", title: "Тест на знання Украйни в часи незалежності", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in fringilla quam. Donec arcu ex, egestas ut lobortis ac, tempus et nisl. Ut vulputate efficitur.")
Quiz.create(category_id: 5,status:"draft", title: "Тест на знання революції гідності 2014 року", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in fringilla quam. Donec arcu ex, egestas ut lobortis ac, tempus et nisl. Ut vulputate efficitur.")
Tag.create(tag: "футбол")
Tag.create(tag: "спорт")
Tag.create(tag: "м'яч")
Tag.create(tag: "Україна")
Tag.create(tag: "історія")
Tag.create(tag: "батьківщина")
Tag.create(tag: "світ")
Tag.create(tag: "історія")
Tag.create(tag: "всьо")
Tag.create(tag: "Гітлер")
Tag.create(tag: "Сталін")
Tag.create(tag: "голодомор")
Tag.create(tag: "друга_світова")
Tag.create(tag: "перша_світова")
Tag.create(tag: "війна")
Tag.create(tag: "Німеччина")
Tag.create(tag: "хокей")
Tag.create(tag: "лід")
Tag.create(tag: "клюшка")
Tag.create(tag: "Рональдо")
Tag.create(tag: "Блохін")
Tag.create(tag: "Шевченко")
Tag.create(tag: "Вєтнам")
Tag.create(tag: "гвинтокрил")
Tag.create(tag: "напалм")
Tag.create(tag: "1991")
Tag.create(tag: "Україна")
Tag.create(tag: "незалежність")
Tag.create(tag: "Революція")
Tag.create(tag: "Україна")
Tag.create(tag: "Яник")



Quiz.create(category_id: 2,status:"draft", title: "4Тест на знання правил футболу", description: "Детальний опис тесту")
Quiz.create(category_id: 2,status:"review", title: "5Тест на знання правил футболу", description: "Детальний опис тесту")
Quiz.create(category_id: 2,status:"published", title: "6Тест на знання правил футболу", description: "Детальний опис тесту")
Quiz.create(category_id: 2,status:"review", title: "7Тест на знання правил футболу", description: "Детальний опис тесту")
Quiz.create(category_id: 2,status:"enhance", title: "8Тест на знання правил футболу", description: "Детальний опис тесту")
Quiz.create(category_id: 2,status:"published", title: "9Тест на знання правил футболу", description: "Детальний опис тесту")
Quiz.create(category_id: 2,status:"draft", title: "10Тест на знання правил футболу", description: "Детальний опис тесту")
Quiz.create(category_id: 2,status:"enhance", title: "11Тест на знання правил футболу", description: "Детальний опис тесту")
Quiz.create(category_id: 2,status:"draft", title: "12Тест на знання правил футболу", description: "Детальний опис тесту")
Quiz.create(category_id: 2,status:"published", title: "13Тест на знання правил футболу", description: "Детальний опис тесту")
Quiz.create(category_id: 2,status:"draft", title: "14Тест на знання правил футболу", description: "Детальний опис тесту")
Quiz.create(category_id: 2,status:"review", title: "15Тест на знання правил футболу", description: "Детальний опис тесту")
Quiz.create(category_id: 2,status:"draft", title: "16Тест на знання правил футболу", description: "Детальний опис тесту")
Quiz.create(category_id: 2,status:"enhance", title: "17Тест на знання правил футболу", description: "Детальний опис тесту")
Quiz.create(category_id: 2,status:"draft", title: "18Тест на знання правил футболу", description: "Детальний опис тесту")
Quiz.create(category_id: 2,status:"published", title: "19Тест на знання правил футболу", description: "Детальний опис тесту")
Quiz.create(category_id: 2,status:"draft", title: "20Тест на знання правил футболу", description: "Детальний опис тесту")

Quiz.create(category_id: 2,status:"draft", title: "21Тест на знання правил футболу", description: "Детальний опис тесту")
Quiz.create(category_id: 2,status:"draft", title: "22Тест на знання правил футболу", description: "Детальний опис тесту")
Quiz.create(category_id: 2,status:"draft", title: "23Тест на знання правил футболу", description: "Детальний опис тесту")
Quiz.create(category_id: 2,status:"draft", title: "24Тест на знання правил футболу", description: "Детальний опис тесту")
Quiz.create(category_id: 2,status:"draft", title: "25Тест на знання правил футболу", description: "Детальний опис тесту")
Quiz.create(category_id: 2,status:"draft", title: "26Тест на знання правил футболу", description: "Детальний опис тесту")
Quiz.create(category_id: 2,status:"draft", title: "27Тест на знання правил футболу", description: "Детальний опис тесту")
Quiz.create(category_id: 2,status:"draft", title: "28Тест на знання правил футболу", description: "Детальний опис тесту")
Quiz.create(category_id: 2,status:"draft", title: "29Тест на знання правил футболу", description: "Детальний опис тесту")
Quiz.create(category_id: 2,status:"draft", title: "30Тест на знання правил футболу", description: "Детальний опис тесту")


