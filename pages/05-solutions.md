# Память в LLM: от контекста до долгосрочной памяти

<div class="mt-4 p-4 bg-purple-900/30 rounded-lg border border-purple-700/50 text-white">
  Проблема: LLM «помнит» только то, что помещается в <span class="text-rose-400 font-medium">контекстное окно</span> — всё остальное теряется после сессии.
</div>

<div class="mt-4 p-4 bg-indigo-900/30 rounded-lg border border-indigo-700/50 text-white">
  <strong class="text-indigo-200">Решение:</strong> внешняя память, сохраняемая на уровне агента, использование RAG, векторные базы данных и кэши диалогов.
</div>

<div class="mt-4 p-4 bg-violet-900/20 rounded-lg border border-violet-700/50 text-white">
  Системы вроде ChatGPT используют <span class="text-violet-300 font-medium">краткосрочную память</span> (историю чата) и <span class="text-violet-300 font-medium">долгосрочную</span> (опционально, через пользовательские настройки).
</div>

<div class="mt-4 p-4 bg-emerald-900/20 rounded-lg border border-emerald-500/50 text-white">
  Результат: Ассистент помнит ваш стиль,<br>ваши цели и даже прошлые ошибки благодаря: <span class="text-emerald-300 font-medium">Memory + RAG + (Fine-tuning)</span>
</div>

---

# AGENTS.md: документация, которую читают агенты

<div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">

  <div class="p-5 rounded-xl border border-blue-700/40 bg-blue-900/20 text-white">
    <div class="text-blue-300 font-bold mb-3 flex items-center gap-2">
      <span>📄</span> <span>README.md</span>
    </div>
    <div class="text-sm leading-relaxed">
      Пишут для <span class="text-blue-200">людей</span>:<br>
      — как установить,<br>
      — как запустить,<br>
      — зачем это вообще нужно.<br>
      <span class="text-gray-400 mt-2 inline-block">Эмоции, метафоры, примеры.</span>
    </div>
  </div>

  <div class="p-5 rounded-xl border border-amber-600/50 bg-amber-900/15 text-white">
    <div class="text-amber-300 font-bold mb-3 flex items-center gap-2">
      <span>🤖</span> <span>AGENTS.md</span>
    </div>
    <div class="text-sm leading-relaxed">
      Пишут для <span class="text-amber-200">агентов</span>:<br>
      — какие инструменты доступны,<br>
      — как вызывать API,<br>
      — какие форматы использовать.<br>
      <span class="text-gray-400 mt-2 inline-block">Чёткость, структура, машинная логика.</span>
    </div>
  </div>

</div>

<div class="mt-8 text-center text-gray-300 max-w-3xl px-4">
  <p>
    <span class="text-cyan-300">AGENTS.md</span> — техническое описание интерфейса, по которому агент взаимодействует с системой.
    Чем точнее он написан — тем умнее будет агент.
  </p>
</div>

<br>

[https://agents.md/](https://agents.md/)

---

# Qoder: агентная платформа для разработки

<div class="mt-4 p-4 bg-purple-900/30 rounded-lg border border-purple-700/50 text-white">
  <strong class="text-purple-200">Wiki Mode</strong>: агенты «читают» вашу кодовую базу и создают живую документацию, разбирая код и отвечая на вопрос "как работает проект". 
</div>

<div class="mt-4 p-4 bg-indigo-900/30 rounded-lg border border-indigo-700/50 text-white">
  <strong class="text-indigo-200">Quest Mode</strong>:  spec-first подход <br>
  <span>— описываете задачу на естественном языке;</span><br>
  <span>— агент генерирует спецификацию задачи на базе RAG от Wiki;</span><br>
  <span>— вносит правки по требованию в спецификацию, просит ревью;</span><br>
  <span>— после выполнения показывает отчёт по выполненной работе, предлагает повторное ревью.</span>
</div>

<div class="mt-4 p-4 bg-emerald-900/20 rounded-lg border border-emerald-500/50 text-white">
  <strong class="text-emerald-200">Результат:</strong> 
  <br>
  — разработчик фокусируется на стратегии, а рутину выполняют агенты;
  <br>
  — благодаря RAG Wiki по проекту проще работать с legacy.
</div>