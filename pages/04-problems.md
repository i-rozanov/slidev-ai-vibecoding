---
layout: section
---

# Проблемы вайбкодинга

---
layout: center
background: /backgrounds/dark-code.jpg
class: "text-white"
---

# Размер контекста

<div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">

  <div class="p-5 rounded-xl border border-blue-700/40 bg-blue-900/20 text-white">
    <div class="text-blue-300 font-bold mb-3 flex items-center gap-2">
      <span>📊</span> <span>Современные LLM</span>
    </div>
    <div class="text-sm leading-relaxed">
      Топовые модели имеют контекстное окно <span class="text-blue-200">256k-1024k токенов</span>.<br>
      <span class="text-gray-400 mt-2 inline-block">Даже такие размеры — компромисс между возможностями и стоимостью.</span>
    </div>
  </div>

  <div class="p-5 rounded-xl border border-amber-600/50 bg-amber-900/15 text-white">
    <div class="text-amber-300 font-bold mb-3 flex items-center gap-2">
      <span>⚠️</span> <span>Цена масштаба</span>
    </div>
    <div class="text-sm leading-relaxed">
      Увеличение контекста ведет к:<br>
      — <span class="text-amber-200">Экспоненциальному росту</span> времени генерации токена;<br>
      — <span class="text-amber-200">Удорожанию</span> обучения и инференса;<br>
      — <span class="text-amber-200">Падению точности</span> при очень больших размерах.
    </div>
  </div>

</div>

<div class="mt-6 p-5 rounded-xl border border-red-700/40 bg-red-900/20 text-white max-w-4xl mx-auto">
  <div class="text-red-300 font-bold mb-2 flex items-center gap-2">
    <span>🎯</span> <span>Фундаментальная проблема</span>
  </div>
  <div class="text-sm leading-relaxed">
    <span class="text-rose-400 font-medium">Мы не можем отправить весь проект в один запрос</span> — подсовываем лишь <span class="text-amber-300">часть проекта</span>, но не всегда очевидно — <span class="text-amber-300">какую именно?</span>
  </div>
</div>

<div class="mt-6 rounded-xl border border-purple-700/50 bg-purple-900/30 overflow-hidden">
  <div class="grid grid-cols-1 md:grid-cols-2 items-center">
    <div class="p-6 text-left border-r border-purple-700/30">
      <div class="text-purple-300 font-bold mb-2 flex items-center gap-2">
        <span>📦</span> <span>vendor/marketing-client</span>
      </div>
      <div class="text-sm text-gray-300 leading-relaxed">
        Реальный размер пакета
      </div>
    </div>
    <div class="p-6 flex items-center justify-center">
      <div class="text-purple-200 font-bold text-6xl tracking-tight">
        442k
      </div>
    </div>
  </div>
</div>

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
    <ul class="space-y-3 text-lg mr-4">
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
preload: true
glowSeed: 55
---

<div absolute top-10 class="text-center">
  <h1 class="text-4xl font-bold">Ловушки естественного языка</h1>
</div>

<div class="text-container">
  <div absolute top-30 v-click.at="[1]" text-blue-20>
    <span>DO NOT DROP THE DATABASE</span>
  </div>

  <div absolute top-30 v-click.at="2" text-red-6>
    <span text-gray-8>DO NOT </span><span>DROP THE DATABASE</span>
  </div>
  
  <img v-click.at="[2]" src="/pages/include/bear.png" class="corner-image">
  
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

---
layout: center
---

# ИИ-агент Replit удалил продовую базу на 1200 клиентов и попытался скрыть это

21 июля 2025

<div class="h-[60%] flex items-center justify-center">
  <img src="https://media.tproger.ru/user-uploads/111041/2025-07-21/b87f1d5d-dd7d-42bd-9ff1-1e9cd80e3a62.jpeg" class="rounded-lg max-h-[380px]">
</div>

---

# Декомпозиция и фокусировка

<div class="mt-6 grid grid-cols-[2fr_1fr] gap-6 max-w-6xl mx-auto" style="min-height: 380px">
  <div class="flex flex-col justify-between">
    <!-- Бабблы -->
    <div class="grid grid-cols-[2fr_2fr] gap-3" style="height: calc(380px - 4rem);">
      <!-- Баббл "Сложная задача" — растянут по высоте -->
      <div
        class="p-4 rounded-xl border border-amber-600/40 bg-amber-900/20 text-white flex flex-col items-center justify-center text-center"
        style="height: 100%;"
      >
        <div class="text-amber-300 font-bold text-base mb-2">Сложная задача</div>
        <img
          src="/pages/include/cant_understand.png"
          class="mt-1 max-w-full max-h-[160px] object-contain"
        >
      </div>
      <!-- Три баббла справа — растянуты по высоте и с отступами -->
      <div class="flex flex-col justify-between space-y-3" style="height: 100%;">
        <div class="p-4 rounded-xl border border-cyan-600/40 bg-cyan-900/20 text-white flex items-center h-full">
          <div class="text-cyan-300 font-bold text-base">🧠 Галлюцинации</div>
        </div>
        <div class="p-4 rounded-xl border border-purple-600/40 bg-purple-900/20 text-white flex items-center h-full">
          <div class="text-purple-300 font-bold text-base">👁 Механизм внимания</div>
        </div>
        <div class="p-4 rounded-xl border border-indigo-600/40 bg-indigo-900/20 text-white flex items-center h-full">
          <div class="text-indigo-300 font-bold text-base">📏 Размер контекста</div>
        </div>
      </div>
    </div>
    <!-- Цитата прижата к низу -->
    <div class="p-4 bg-violet-900/20 rounded-lg border border-violet-700/50 text-white text-center text-sm mt-5">
      <span class="text-violet-300 font-medium">Говорите с ИИ так, как говорили бы со стажёром:</span><br>
      чётко, последовательно, с постановкой подзадач.
    </div>
  </div>

  <!-- Правая колонка: изображение -->
  <div class="flex items-start justify-center pt-2">
    <img
      src="/pages/include/jun.png"
      class="rounded-lg border border-gray-700/50 shadow object-contain max-h-[380px]"
      style="width: auto; height: auto;"
    >
  </div>

</div>

<!--
Любая сложно и туманно поставленная задача активирует разом все ловушки. Возникает ощущение, что пытаешься взвалить неподъёмный проект на зелёного джуна, старательного, но бестолкового. И знаете что? Это ощущение правильное. Так и надо относиться к вашему ИИ-помощнику. Ставьте ему чёткие, понятные, ограниченные задачи. Когда-нибудь он научится сходу рисовать большую зелёную кнопку “Сделать хорошо”, но не сегодня.
-->

---
preload: false
---

# Почему vibe-coding выстрелил и попал?

<div class="grid grid-cols-[3fr_2fr] gap-6 p-6 max-w-6xl mx-auto">
  <!-- Столбик бабблов -->
  <div class="flex flex-col gap-3">
    <v-clicks>
      <template v-for="(item, i) in items" :key="i">
        <div
          :class="[
            // Base classes
            'p-2 rounded-lg border text-m font-medium text-center transition-all duration-500 ease-out',
            // Animation classes based on click
            $clicks < (i + 1)
              ? 'opacity-0 -translate-x-10'
              : 'opacity-100 translate-x-0',
            // Color classes per index
            i === 0 ? 'border-cyan-600/40 bg-cyan-900/20 text-cyan-200' :
            i === 1 ? 'border-purple-600/40 bg-purple-900/20 text-purple-200' :
            i === 2 ? 'border-indigo-600/40 bg-indigo-900/20 text-indigo-200' :
            i === 3 ? 'border-pink-600/40 bg-pink-900/20 text-pink-200' :
            i === 4 ? 'border-amber-600/40 bg-amber-900/20 text-amber-200' :
            i === 5 ? 'border-violet-600/40 bg-violet-900/20 text-violet-200' :
            i === 6 ? 'border-blue-600/40 bg-blue-900/20 text-blue-200' :
            ''
          ]"
        >
          {{ item }}
        </div>
      </template>
    </v-clicks>
  </div>

  <!-- Изображение справа: appears on the 8th click -->
  <div class="flex items-center justify-center">
    <div
      :class="[
        'w-full aspect-video bg-gray-800/30 border border-gray-700/50 rounded-lg flex items-center justify-center text-gray-500 text-xs transition-all duration-500 ease-out',
        $clicks < 8 ? 'opacity-0 translate-x-10' : 'opacity-100 translate-x-0'
      ]"
    >
    <img
      src="/pages/include/robot.png"
      class="bg-gray-800/30 border border-gray-700/50 rounded-lg flex items-center justify-center text-gray-500 text-xs"
    >
    </div>
  </div>
</div>

<!-- Hidden triggers to ensure 8 click steps -->
<v-clicks>
  <span v-for="n in 8" :key="n" class="hidden" />
</v-clicks>

<script setup>
const items = [
  'MVP',
  'Прототипирование',
  'Простые скрипты',
  'Низкий порог вхождения',
  'Небольшие задачи',
  'Объяснение кода',
  'Автодополнение'
]
</script>

---
preload: false
---

# Волшебство исчезает

<div class="mt-10" />

<div class="flex flex-col md:flex-row items-stretch gap-6">

  <!-- Image on the left – unchanged -->
  <div class="w-full md:w-1/3 max-w-xs bg-gray-800/40 border border-gray-700/50 rounded-lg overflow-hidden flex-shrink-0">
    <img
      src="https://i.ibb.co/XZqZNh67/image-2025-11-22-14-56-26.png"
      class="w-full h-auto block"
      alt="Industrial code complexity"
    >
  </div>

  <!-- Animated points on the right -->
  <div class="w-full md:w-2/3 flex-1">
    <div class="bg-rose-900/30 rounded-xl border border-rose-600/50 p-5 h-full">
      <div class="text-rose-300 font-semibold mb-4">В промышленной разработке:</div>
      <v-clicks>
        <div
          v-for="(_, i) in 6"
          :key="i"
          :class="$clicks < (i + 1) ? 'opacity-0 translate-x--10' : 'opacity-100 translate-x-0'"
          class="flex items-start gap-3 mb-4 transition-all duration-500 ease-out"
        >
          <div class="mt-0.5 text-rose-400 flex-shrink-0">
            <div v-if="i === 0" i-carbon:code h-5 w-5 />
            <div v-else-if="i === 1" i-carbon:document-subtract h-5 w-5 />
            <div v-else-if="i === 2" i-carbon:rule h-5 w-5 />
            <div v-else-if="i === 3" i-carbon:document-tasks h-5 w-5 />
            <div v-else-if="i === 4" i-carbon:time h-5 w-5 />
            <div v-else-if="i === 5" i-carbon:chat-off h-5 w-5 />
          </div>
          <div class="text-white text-m leading-relaxed">
            <span v-if="i === 0">Большой объём кода</span>
            <span v-else-if="i === 1">Большая доля legacy в этом коде</span>
            <span v-else-if="i === 2">Сложившиеся строгие правила и паттерны</span>
            <span v-else-if="i === 3">Много регламентов и гайдов нагружает контекст</span>
            <span v-else-if="i === 4">Много времени на ревью</span>
            <span v-else-if="i === 5">Часто никто не может нормально сформулировать требования</span>
          </div>
        </div>
      </v-clicks>
    </div>

  </div>

</div>
