# Пути решения проблем

<div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">

  <div class="p-6 rounded-xl border border-purple-700/50 bg-purple-900/30 text-white">
    <div class="text-purple-300 font-bold text-xl mb-4 flex items-center gap-3">
      <span>🎯</span> <span>Модерация контекста</span>
    </div>
    <div class="text-base leading-relaxed space-y-3">
      <p>— <span class="text-rose-300 font-medium">Уменьшать</span> объём передаваемой информации</p>
      <p>— <span class="text-rose-300 font-medium">Оптимизировать</span> структуру контекста</p>
      <p>— <span class="text-rose-300 font-medium">Обогащать</span> только релевантными данными</p>
      <div class="mt-3 p-3 bg-purple-800/40 rounded-lg border border-purple-600/50">
        <span class="text-cyan-300 font-bold">⚡ Один запрос-ответ:</span><br>
        <span class="text-gray-300">Улучшение качества решения одного запроса к LLM</span>
      </div>
      <p class="mt-2 text-gray-300 italic">Фокус на качестве информации в рамках одного запроса</p>
    </div>
  </div>

  <div class="p-6 rounded-xl border border-amber-600/50 bg-amber-900/15 text-white">
    <div class="text-amber-300 font-bold text-xl mb-4 flex items-center gap-3">
      <span>🧩</span> <span>Модерация промпта/задачи</span>
    </div>
    <div class="text-base leading-relaxed space-y-3">
      <p>— <span class="text-amber-200 font-medium">Разбивать</span> сложные задачи на подзадачи</p>
      <p>— <span class="text-amber-200 font-medium">Декомпозировать</span> запросы по шагам</p>
      <p>— <span class="text-amber-200 font-medium">Последовательно</span> выполнять части задачи</p>
      <div class="mt-3 p-3 bg-amber-800/30 rounded-lg border border-amber-500/50">
        <span class="text-cyan-300 font-bold">🔄 Множественные запросы:</span><br>
        <span class="text-gray-300">Задача решается через серию запросов или древовидную структуру вызовов</span>
      </div>
      <p class="mt-2 text-gray-300 italic">Фокус на управлении процессом выполнения</p>
    </div>
  </div>

</div>

---

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

---

# Декомпозиция декомпозиции

<div class="flex flex-col items-center">
  <img src="/pages/include/langchain.excalidraw.png" class="corner-image">
</div>

---

# Langchain

<span>Подключаем локальный провайдер</span>

```python {*|1|4}
llm = OllamaLLM(model='qwen3:latest', format="json")

parser = JsonOutputParser(pydantic_object=Decomposition)

chain = prompt | llm | parser

result = chain.invoke({
  "task_description": task_description,
  "format_instructions": parser.get_format_instructions()
})
```

---

# Langchain: структура ответа

```python {*|23-25|8-12}
class Task(BaseModel):
    content: str = Field(
      description="""
        Include all task content and all the needed context
        that can be useful for to next ai agent to understand the task
      """
    )
    type: Literal[
      "model",
      "endpoint",
      "migration",
      "specification"
    ] = Field(
        description="""
          type of the task:
          'model' for data models,
          'endpoint' for API,
          'migration' for database changes,
          'specification' for endpoint specification
        """
    )

class Decomposition(BaseModel):
    tasks: List[Task]

```

---

# Задание

```
📋 Original Task: # Проработать структуру БД
Создать систему рейтингов для постов в Laravel приложении с возможностью:
- голосования за посты (лайк/дизлайк)
- отображения рейтинга на странице списка постов
- фильтрации постов по рейтингу
Рейтинг реализовать как отдельную сущность "Голос пользователя" и денормализовать таблицу posts для удобства выборки.

```

# Пример декомпозиции

````md magic-move
```{*}{maxHeight:'250px'}
📦 Task 1:
   Type: model
   Content: Создать модель Post с полями id, title, content, user_id,
   created_at, updated_at. Добавить связь с пользователем и голосами.

📦 Task 2:
   Type: model
   Content: Создать модель Vote с полями id, post_id, user_id, vote_type (1 - лайк, -1 - дизлайк),
   created_at, updated_at. Добавить связь с постом и пользователем.

📦 Task 3:
   Type: model
   Content: Добавить в модель Post поле rating, которое будет хранить итоговый
   рейтинг поста (все голоса за минус все голоса против).
```

```md
📦 Task 4:
Type: migration
Content: Создать миграцию для таблицы posts с полями id, title,
content, user_id, created_at, updated_at.

📦 Task 5:
Type: migration
Content: Создать миграцию для таблицы votes с полями id, post_id,
user_id, vote_type, created_at, updated, updated_at.

📦 Task 6:
Type: migration
Content: Добавить поле rating в таблицу posts.
```
````

---

# Langchain

<span>Агент со своими правилами</span>

```python {*|7}
class MigrationAgent(SpecialistAgent):
    """Specialist for database migration tasks"""

    def __init__(self, model, project_folder=None):
        super().__init__(model, "migration")
        # Load migration rules
        self.migration_rules = load_rules_file("rules/01-migrations.md")
```

#### Пример правил агента

```md {*|10}
#### Data Types & Laravel Examples

- **Primary key**:
  `bigserial` → `$table->id();`
- **Foreign keys**:
  `unsigned bigint` → `$table->unsignedBigInteger('client_id')->index();`
- **Prices**:
  `bigint` (smallest currency unit) → `$table->bigInteger('price');`
- **Default timestamps**:
  `timestamp` (UTC, microsecond precision) → `$table->timestamps(6);`
- **Enums**:
  `varchar(255)` → `$table->string('type');`
```

---

# Результат

```php {*|14}
class CreateRatingsTable extends Migration
{
    public function up(): void
    {
        Schema::create('ratings', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->unsignedBigInteger('post_id');
            $table->foreign('post_id')->references('id')->on('posts');
            $table->string('vote_type');

            $table->timestamps(6);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('ratings');
    }
}
```

```

```
