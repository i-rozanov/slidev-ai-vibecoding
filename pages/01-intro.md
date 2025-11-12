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

---
layout: default
---

# Исследование по времени ускорения работы[^*]

## Исходные данные

- Начало 2025 года
- AI инструменты (Cursor Pro, Claude Sonnet)
- 16 разработчиков
- 246 задач

## Ощущения

- стали продуктивнее на 20%

## Реальность

- Время выполнения задач увеличилось на 19%

[^*]: [Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity](https://arxiv.org/abs/2507.09089)

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
Потенциально ускоряет разработку ПО за счет автоматизации рутинных задач и автогенерации кода, позволяя разработчикам сосредоточиться на сложных аспектах работыtranslate:.

    Уменьшает когнитивную нагрузку, помогая анализировать большие объемы данных и находить ошибки в коде, что повышает качество и точность программных продуктовtranslate:.

    Упрощает доступность технологий и ускоряет обучение, предоставляя решения, объяснения и обратную связь в реальном времени, особенно полезно для новичковtranslate:.

    Ограниченный контроль и необходимость постоянной проверки: ИИ генерирует код, который требует тщательной проверки, поскольку ошибки и непредсказуемые решения могут создавать проблемы, а также есть риск утраты профессиональных навыков при чрезмерном использованииtranslate:.

    Проблемы с доверием и ответственностью: многие разработчики не доверяют ИИ полностью, а также остаётся неясным вопрос принадлежности AI-сгенерированного кода и возможных юридических рисков использования чужих решенийtranslate:.
-->
