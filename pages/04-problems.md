---
layout: image
image: "/pages/include/edge.png"
preload: false
---

# Галлюцинации

<v-click>
<div class="absolute top-12 right-12 w-84">
  <div class="p-5 bg-purple-900/30 rounded-xl border border-purple-700/50 shadow-2xl backdrop-blur-sm">
    <h3 class="text-2xl font-bold mb-4 text-purple-200 flex justify-end items-center gap-2">
      <span>Недостаточный контекст</span>
    </h3>
    <ul class="space-y-3 text-lg">
      <li class="flex items-center justify-end gap-3 hover:text-purple-200 transition-colors">
        <span class="text-purple-100">Неточный результат</span>
        <div class="w-2 h-2 bg-purple-500/50 rounded-full"></div>
      </li>
      <li class="flex items-center justify-end gap-3 hover:text-purple-200 transition-colors">
        <span class="text-purple-100">Домыслы</span>
        <div class="w-2 h-2 bg-purple-500/50 rounded-full"></div>
      </li>
      <li class="flex items-center justify-end gap-3 hover:text-purple-200 transition-colors">
        <span class="text-purple-100">Игнорирование нюансов</span>
        <div class="w-2 h-2 bg-purple-500/50 rounded-full"></div>
      </li>
    </ul>
  </div>
</div>
</v-click>

<v-click>
<div class="absolute bottom-12 left-12 w-84">
  <div class="mt-4 p-6 bg-blue-900/30 rounded-xl border border-blue-700/50 shadow-2xl backdrop-blur-sm">
    <h3 class="text-2xl font-bold mb-4 text-blue-100 flex items-center gap-2">
      Избыточный контекст
    </h3>
    <ul class="space-y-3 text-lg">
      <li class="flex items-center gap-3 hover:text-blue-200 transition-colors">
        <div class="w-2 h-2 bg-blue-500/50 rounded-full"></div>
        <span class="text-blue-100">Снижение релевантности</span>
      </li>
      <li class="flex items-center gap-3 hover:text-blue-200 transition-colors">
        <div class="w-2 h-2 bg-blue-500/50 rounded-full"></div>
        <span class="text-blue-100">Потеря фокуса</span>
      </li>
      <li class="flex items-center gap-3 hover:text-blue-200 transition-colors">
        <div class="w-2 h-2 bg-blue-500/50 rounded-full"></div>
        <span class="text-blue-100">Конфликт инструкций</span>
      </li>
    </ul>
  </div>
</div>
</v-click>

<style>
.slide-variant {
  background-size: cover;
  background-position: center;
}

.slide-variant ul {
  list-style: none;
  padding: 0;
}
</style>

<!--
Почему модели страдают галлюцинациями? Если кратко, то в этом виноват неверный выбор объёма контекста.
Если подать на вход модели слишком много информации, даже логично связанной и непротиворечивой, она заблудится в собственных чертогах разума. А если модель просят нарисовать семь перпендикулярных красных линий прозрачным цветом в форме котёнка, на выходе вы получите только разочарование от AI. Ограничьте задачу, которую хотите решить, определите, какие вводные необходимы для работы, и не грузите модели мозг разговорами о погоде.
<br>

Если, наоборот, предоставить модели мало контекста и много свободы творчества, она обязательно додумает всё недостающее - и, будьте уверены, вам не понравится, в какую сторону она разовьёт вашу недомысль. Хотите именно красную линию и именно в форме котёнка - скажите модели об этом. Боитесь упустить важное - попросите модель спросить у вас, чего ей не хватает для решения задачи.
Впрочем, всё как у людей.
-->

---
layout: image
# image: "/pages/include/language.jpg"
preload: false
---

<div absolute top-10 class="text-center">
  <h1 class="text-4xl font-bold">Ловушки естественного языка</h1>
</div>

<div class="text-container">
  <div absolute top-30 v-click.at="1" v-click.hide="2" text-blue-20>
    <span>DO NOT DROP THE DATABASE</span>
  </div>

  <div absolute top-30 v-click.at="2" text-red-6 @click="toggleText">
    <span text-gray-8>DO NOT </span><span>DROP THE DATABASE</span>
  </div>
  <img v-click.at="2" v-click.hide="3" src="/pages/include/bear.png" class="corner-image">
  <div absolute top-50 v-click.at="3">
    <span class="blue-text">Pudota</span> <span class="white-text">tietokanta. </span> <br/>
    <span class="blue-text">Älä poista</span> <span class="white-text">tietokantaa.</span>
  </div>

  <div absolute top-90 v-click.at="4">
    <span class="white-text">データベースを削除し</span><span class="blue-text">ます</span> <br/>
    <span class="white-text">データベースを削除し</span><span class="blue-text">ないで</span>
  </div>
</div>

<style>
.text-container {
  margin-top: 2rem;
  font-size: 2.5rem;
  line-height: 2;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.text-row {
  margin-top: 1.5rem;
}

.blue-text {
  color: #4FC3F7;
  font-weight: bold;
}

.red-text {
  color: #F44336;
  font-weight: bold;
}

.white-text {
  color: white;
  font-weight: bold;
}
.gray-text {
  color: #404040;
  font-weight: bold;
}

.corner-image {
    position: fixed;
    bottom: 0px;
    right: 400px;
    width: 300px;
    height: auto;
    z-index: 1000; 
}

</style>

<!--
Любой язык для общения кожаных мешков полон неочевидных опасностей.
Возьмём, к примеру, вот это предупреждение, написанное из лучших чувств: Do not drop the database [click]. Что может быть плохого в том, чтобы попросить ИИ не уронить базу?
А вот что [click]. Если начало фразы куда-то пропадёт, смысл изменится на прямо противоположный.
Здесь начинает играть роль то, как LLM обрабатывает последовательности токенов. Модель обладает “вниманием” - способом восприятия текста как сети взаимосвязей разной степени силы. Это нужно, чтобы она понимала сложные и неочевидные зависимости в естественном языке. Внимание работает со статистическими вероятностями, а не с логикой высказываний, поэтому в нашем примере модель увидит смысловой центр команды - слова drop и database, а важную частицу not может проигнорировать как статистический шум.
Что же делать?
Способ первый: в промпт можно добавить метки, которые привлекут внимание модели к конкретному узлу фразы и заставят её учитывать его независимо от статистики. Напишите IMPORTANT и отбросьте страх за вашу базу.
Способ второй, требующий лингвистической сноровки: стройте фразы так, чтобы модель попросту не могла проигнорировать ваш посыл. Скажите ей: “Оставь базу данных невредимой”. Знаете, люди, которые посылают разнообразные магические сигналы во Вселенную, тоже советуют не использовать отрицаний, и в кои-то веки к ним стоит прислушаться.
Есть такие естественные языки, которые сами по себе исключают такие скользкие конструкции. Вот, к примеру, финский [click]: позитивная и негативные формы глагола отличаются так, что ни за что не перепутаешь. Или японский [click]: без очень важного конечного хвостика слово не существует вообще, его значение не определено. (Читается: Dētabēsu o sakujo shi**masu**, Dētabēsu o sakujo shi**naide**).
-->
