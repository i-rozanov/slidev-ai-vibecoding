---
layout: center
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
title: Вайбкодинг здорового человека
info: |
  ## Презентация о вайбкодинге и языковых моделях

  Исследование современных подходов к кодированию с ИИ
preload: false
clicks: 0
glowSeed: 50
mdc: true
export:
  timeout: 60000 # Increase from default 30000ms to 60000ms
addons:
  - fancy-arrow
  - slidev-addon-excalidraw
---

# Инструменты ИИ в разработке: <br>Ожидание vs Реальность

Вайбкодинг здорового человека

<!--
Всем привет, кто меня не знает -- зовут меня Ваня Розанов -- бэкенд разработчик на Ашане, 
и есть у меня хобби -- автоматизация всего, что можно автоматизировать. И, естественно, тема использования ИИ в разработке не могла меня обойти стороной. 
Постоянно читаю новости и попробую сделать сегодня обзор, что есть миф, а что уже работает, что за новомодное слово "вайбкодинг" и как его применять.
-->

---
src: ./pages/01-intro.md
---

---
src: ./pages/02-about-llm.md
---

---
src: ./pages/03-history-and-evolution.md
---

---
src: ./pages/04-problems.md
---

---
src: ./pages/05-solutions.md
---

---
src: ./pages/06-vibecoding-recomendations.md
---

---
src: ./pages/07-wanna-try.md
---

---
layout: center
---

<div class="flex flex-col items-center">
  <h1 class="text-4xl font-bold mb-8">Спасибо за внимание!</h1>
  
  <div class="grid grid-cols-2 gap-8 mt-4">
    <div class="flex flex-col items-center p-4">
      <img src="/pages/include/qr_present.png" class="w-48">
    </div>
    <div class="flex flex-col items-center p-4">
      <img src="/pages/include/qr_rozanov.png" class="w-48">
    </div>
  </div>
</div>

<!--
На этом у меня всё.
Хочется, чтобы после этого доклада вы держали в голове, что нейросети умеют качественно статистически предсказывать следующее слово. То, что модель знает React или умеет писать миграции - лишь иллюзия. Теперь вы об этом знаете, а значит, можете эффективнее применять ИИ в разработке и понимать, как влияют на контекст старые, новые и перспективные фичи.
В целом критически воспринимайте информацию, связанную с ИИ, в том числе эту презентацию, 
И помните, что без естественного интеллекта нам искусственный не освоить.
-->
