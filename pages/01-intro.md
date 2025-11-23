---
transition: fade-out
layout: quote
---

# "ИИ -- это новое электричество"

[Andrew Ng, 2017](https://www.gsb.stanford.edu/insights/andrew-ng-why-ai-new-electricity)

# 85% разработчиков регулярно используют ИИ для разработки

[Jetbrains, 2025](https://blog.jetbrains.com/research/2025/10/state-of-developer-ecosystem-2025/)

# Медианное дневное время на использование ИИ -- 2 часа

[Google, 2025](https://blog.google/technology/developers/dora-report-2025/)

# В Google 25% нового кода генерируется при помощи ИИ

[Google, 2024](https://blog.google/inside-google/message-ceo/alphabet-earnings-q3-2024/#full-stack-approach)

<!--
Пойдем с самого начала, с огромного хайпа, ажиотажа вокруг использования ИИ в разработке. 
Например, называют ИИ новым электричеством, исследования этого года показывают, что 25% нового кода генерируется с помощью ИИ, 
и тратится на это два часа в день
-->

---
layout: default
glowSeed: 3
---

# Доверяете ли вы сгенерированному коду?

[Stackoverflow, 2025](https://survey.stackoverflow.co/2025/ai#developer-tools-ai-acc-prof-exp)

```mermaid
pie
    "Полностью доверяю" : 2.5
    "Частично доверяю" : 28.6
    "Частично не доверяю" : 26.7
    "Совсем не доверяю" : 20.7
```

<!--
И тут я предлагаю сразу навернуть бочку дёгтя: если взглянуть на диаграмму опроса StackOverflow, окажется, что только 2.5% доверяют целиком сгенерированному коду, видно, что разработчики с крайней опаской смотрят на эти новые ворота.
-->

---
layout: two-cols
---

<img 
    src="/pages/include/goolge-25-percent.png"
    height = 80%
    width = 80%
/>

::right::

# Google считает автодополнение как сгенерированный текст[^*]

[^*]: [LinkedIn](https://www.linkedin.com/posts/andriyburkov_more-context-on-how-25-of-all-the-code-is-activity-7258621398401585153-20dZ)

<!--
А вот если копнуть ещё глубже, то окажется, что те самые 25% "сгенерированного" кода в гугле это автодополнение в большинстве случаев
-->

---
layout: default
---

# Исследование по ускорению времени работы[^*]

## Исходные данные

- Начало 2025 года
- AI инструменты (Cursor Pro, Claude Sonnet)
- 16 разработчиков
- 246 задач

<v-click>

## Ощущения

- стали продуктивнее на 20%

</v-click>

<v-click>

## Реальность

- Время выполнения задач увеличилось на 19%

<img
src="/pages/include/30min.jpg"
height = 30%
width = 30%
absolute top-40 right-20
rounded-lg
/>

</v-click>

[^*]: [Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity](https://arxiv.org/abs/2507.09089)

<!--
Ещё интереснее, провели первые эксперименты по замеру времени работы с AI-помощником. По ощущениям [click] +20%. Круто! По секундомеру [click] замедлились на 19%.
Да, тут выборка очень маленькая и много вопросов к качеству обучения сотрудников перед использованием такого инструмента, но заставляет задуматься.
-->

---
preload: false
---

# Промежуточные выводы об ИИ в разработке

<div mt-10 />

<div flex items-center gap-4>

<v-clicks>
  <div
    :class="$clicks < 1 ? 'translate-x--20' : 'translate-x-0'"
    rounded-lg
    border="2 solid green-800" bg="green-800/20"
    backdrop-blur
    flex-1 h-full
    transition duration-500 ease-in-out
  >
    <div px-5 py-16 flex items-center justify-center>
      <div i-carbon:rocket h-20 w-20 />
    </div>
    <div bg="green-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center text-base>
      <span>Потенциально ускоряет разработку</span>
    </div>
  </div>
  <div
    :class="$clicks < 2 ? 'translate-x--20' : 'translate-x-0'"
    rounded-lg
    border="2 solid green-800" bg="green-800/20"
    backdrop-blur
    flex-1 h-full
    transition duration-500 ease-in-out
  >
    <div px-5 py-16 flex items-center justify-center>
      <div i-carbon:cognitive h-20 w-20 />
    </div>
    <div bg="green-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center text-base>
      <span>Уменьшает когнитивную нагрузку</span>
    </div>
  </div>
  <div
    :class="$clicks < 3 ? 'translate-x--20' : 'translate-x-0'"
    rounded-lg
    border="2 solid green-800" bg="green-800/20"
    backdrop-blur
    flex-1 h-full
    transition duration-500 ease-in-out
  >
    <div px-5 py-16 flex items-center justify-center>
      <div i-carbon:accessibility-alt h-20 w-20 />
    </div>
    <div bg="green-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center>
      <span>Упрощает доступность технологий</span>
    </div>
  </div>
  <div
    :class="$clicks < 4 ? 'translate-x--20' : 'translate-x-0'"
    rounded-lg
    border="2 solid red-800" bg="red-800/20"
    backdrop-blur
    flex-1 h-full
    transition duration-500 ease-in-out
  >
    <div px-5 py-16 flex items-center justify-center>
      <div i-carbon:search h-20 w-20 />
    </div>
    <div bg="red-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center text-base>
      <span>Код требует проверки</span>
    </div>
  </div>
  <div
    :class="$clicks < 5 ? 'translate-x--20' : 'translate-x-0'"
    rounded-lg
    border="2 solid red-800" bg="red-800/20"
    backdrop-blur
    flex-1 h-full
    transition duration-500 ease-in-out
  >
    <div px-5 py-16 flex items-center justify-center>
      <div i-carbon:warning-filled h-20 w-20 />
    </div>
    <div bg="red-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center>
      <span>Юридические опасения</span>
    </div>
  </div>
</v-clicks>

</div>

<!--
Что можно зафиксировать к этому моменту: ИИ ускоряет разработку, но это неточно [click], 
очевидно разгружает мозг [click], 
упрощает не жизнь, но доступ к технологиям [click], 
но этому сгенерированному коду не доверяют [click],
и очень многие боятся юридических последствий [click] вдруг сгенерированный код основан на чьём-то закрытом коде,
-->
