# React Notes
 *Это заметки которые я сделал для себя и буду их дополнять по мере изучения react* 

## JSX

### Корневой элемент

JSX всегда требует, чтобы в `return` был **один корневой элемент**.

Примеры:

``` jsx
<div></div>
```

или

``` jsx
<>
</>
```

------------------------------------------------------------------------

### Фигурные скобки `{}`

Фигурные скобки позволяют вставлять **JavaScript выражения в JSX**.

Примеры:

``` jsx
{username}
{1 + 1}
{username.toUpperCase()}
```

Можно вставлять **выражения**, но нельзя использовать конструкции вроде:

-   `if`
-   `else`
-   `for`
-   `let`

------------------------------------------------------------------------

### Комментарии

Комментарии внутри JSX пишутся так:

``` jsx
{/* Это комментарий внутри JSX */}
```

------------------------------------------------------------------------

### Самозакрывающиеся теги

Одиночные теги пишутся так:

``` jsx
<hr />
<input />
```

------------------------------------------------------------------------

### Атрибуты

Атрибуты могут называться:

-   атрибутами
-   параметрами
-   пропсами

В JSX они пишутся **в стиле camelCase**, а значение передается в
фигурных скобках.

Пример:

``` jsx
required={true}
```

------------------------------------------------------------------------

### Особенности атрибутов

HTML => JSX

    for => htmlFor
    class => className

------------------------------------------------------------------------

### Style

Для `style` используются **двойные фигурные скобки**:

``` jsx
style={{}}
```

Почему двойные:

-   первая `{}` --- указывает, что внутри **JavaScript выражение**
-   вторая `{}` --- это **JavaScript объект**

Пример:

``` jsx
<h1 style={{ textAlign: "center", color: "red" }}>
```

Особенности:

-   свойства пишутся **camelCase**
-   значения могут быть **строкой или числом**

------------------------------------------------------------------------

## Условный рендеринг

`Условный рендеринг` --- это способ **показывать или скрывать элементы
интерфейса в зависимости от условий**.

React рендерит компонент **только если условие выполняется**.

### Логическое `&&`

Если условие **true**, выражение после `&&` будет отрендерено.\
Если **false**, React его проигнорирует.

``` jsx
{true && <p>Hi, {username}!</p>}
```
------------------------------------------------------------------------

### Тернарный оператор `? :`

Тернарный оператор рендерит **один из двух элементов**.

``` jsx
{isLoggedIn ? <p>Hi, {username}!</p> : <button>Log in</button>}
```

------------------------------------------------------------------------

### if

`if` нельзя использовать внутри JSX, но можно:

-   использовать **до return**
-   сохранить JSX в **переменную**

Пример:

``` jsx
function App() {
  const isLogin = true
  let content

  if (isLogin) {
    content = <p>Welcome</p>
  } else {
    content = <p>Please login</p>
  }

  return <div>{content}</div>
}
```

------------------------------------------------------------------------

## Списки и метод `map`

Метод `map()` используется для **рендеринга списков**.

``` jsx
const tasks = ["дело1", "дело2", "дело3"]

<ul>
  {tasks.map(e => <li>{e}</li>)}
</ul>
```

------------------------------------------------------------------------

# Export

`export` позволяет сделать переменную, функцию или компонент **доступным
в других файлах**.

Существует два типа экспорта.

------------------------------------------------------------------------

## Named export

Позволяет экспортировать **несколько элементов из файла**.

``` jsx
export const Button = () => {
  return <button>Click</button>
}
```

Импорт:

``` jsx
import { Button, Title } from "./components"
```

------------------------------------------------------------------------

## Default export

В файле может быть **только один `default export`**.

``` jsx
export default function App() {
  return <h1>Hello React</h1>
}
```

Импорт:

``` jsx
import App from "./App"
```

### Особенности default export

-   импорт **без фигурных скобок**
-   имя можно **назвать как угодно**

------------------------------------------------------------------------

# Компоненты

`Компонент` --- это **переиспользуемая часть интерфейса**, написанная как
функция, которая возвращает JSX.

------------------------------------------------------------------------
# Props

**`Props`** - это данные, которые передаются в компонент от родительского компонента.  
Внутри компонента они приходят как объект.

- Props передаются только сверху вниз: от родителя к ребёнку.
- Компонент не должен изменять переданный prop.
- Компонент prop только читает.

---

# Children

**`Children`** - это всё, что находится между открывающим и закрывающим тегом компонента.

# Spread (...) в React

 **`Spread`** -  это оператор, который раскрывает объект и передаёт все его свойства как props компоненту.

## События в React

`Events` - это действия пользователя, на которые React может
реагировать.

Например:

-   клик мышью
-   ввод текста
-   наведение курсора
-   отправка формы

Самые частые события в React:

-   `onClick` --- клик по элементу
-   `onChange` --- изменение значения input
-   `onSubmit` --- отправка формы
-   `onMouseEnter` --- наведение мыши
-   `onMouseLeave` --- уход курсора

# useState

`useState` - это React хук, который позволяет компоненту хранить и изменять состояние (state).

Состояние - это данные, от которых зависит интерфейс.  
Когда состояние меняется, React автоматически перерисовывает компонент.
Хуки можно вызывать в теле функции компонента или внутри собственных хуков.Также нельзя вызывать внутри условий(if,for,while,switch...) и внутри разметки.

### Нельзя изменять state напрямую

В React состояние нельзя изменять напрямую.  
Если изменить значение переменной вручную, React **не узнает об изменении** и компонент **не перерисуется**.

# useEffect

**`useEffect`** - это хук в React, который позволяет выполнять побочные эффекты в компоненте.  
Другими словами, позволяет выполнить код после того, как компонент отрисовался или обновился.

---

## Где используют

- Загрузка или сохранение данных с сервера  
- Работа с localStorage  
- Подписки  
- Таймеры  
- Интеграция с внешними библиотеками  

---

## Использование

Используется в теле функции.

### Пример

    const Example = () => {
      useEffect(() => {
        // ваш побочный эффект
      }, [/* зависимости */])
    }

---

## Аргументы

- **1 аргумент** - это функция, которая выполняет нужное действие  
- **2 аргумент** - это массив зависимостей  

Если массив пустой → эффект выполнится один раз при первом рендере  
Если в нем есть данные → эффект будет срабатывать каждый раз, когда они меняются  

---

## Очистка (cleanup)

Также useEffect умеет очищать за собой.  
Если в теле callback вернуть функцию, она выполнится при удалении компонента.

### Пример

    const Example = () => {
      useEffect(() => {
        return ()=>{
        // выполнится при удалении
        }
      }, [])
      return <div>Привет, мир!<div/>
    }
---
Примечание:  каждый useEffect Запускается минимум 1 раз даже если второй аргумент не менялся.Также порядок useEffect очень важен.


# useRef

**`useRef`** - это хранилище значений которое не вызывает перерисовку компонента.

---

## Где используют

- Работа с DOM (самое популярное)  
- Хранение значения между рендерами
- фокус на input
- Сколл 
- Таймеры  
- Debounce
- Работа с видео / аудио
- Интеграция с библиотеками


### Фокус input
``` jsx
const inputRef = useRef(null)

useEffect(() => {
  inputRef.current.focus()
}, [])

```

### Scroll
``` jsx
const itemRef = useRef(null)

itemRef.current.scrollIntoView()
```

### Хранение предыдущего значения
``` jsx

const prevValue = useRef()

useEffect(() => {
  prevValue.current = value
}, [value])

```
### Таймеры
``` jsx
const timerRef = useRef(null)

useEffect(() => {
  timerRef.current = setInterval(() => {
    console.log('tick')
  }, 1000)

  return () => clearInterval(timerRef.current)
}, [])
```

### Debounce
``` jsx
const timeoutRef = useRef(null)

const handleChange = (e) => {
  clearTimeout(timeoutRef.current)

  timeoutRef.current = setTimeout(() => {
    console.log(e.target.value)
  }, 500)
}
```
### Интеграция с библиотеками
``` jsx
const chartRef = useRef(null)

useEffect(() => {
  const chart = new Chart(chartRef.current)
}, [])
```

### Простымим словами когда его выбирать
 * нужно "запомнить", но не обновлять UI
 * нужнен доступ к DOM
 * работа с таймерами или API

 ---
 # memo (мемоизация)
 **`memo`** - Запоминает компонент и не перерисовывает его, если props не изменились
 Пример:
 ``` jsx
 const Child = React.memo(({ value }) => {
  console.log("render child")
  return <p>{value}</p>
})
```
* Если value не меняется, компонент не ререндерится. 

### Вариант с export

``` jsx
export default memo(Counter)

or

export default React.memo(Counter)
```
### Когда использовать:
* Когда есть тяжелые компоненты 
* списки 
* оптимизация (не ререндерит все компоненты)

# useCallback

**`useCallback`** - кеширует функцию 

Было:
``` jsx
const handleClick = () => {
  console.log("click")
}
```
Стало:
``` jsx
const handleClick = useCallback(() => {
  console.log("click")
}, [])
```
### Какую проблемму решает useCallack
 * функции и обьекты в js - это новые ссылки каждый раз. При ререндеринге js не смотрит на содержимое  функцци или обекта а смотрит на ссылку и даже если обект не поменялся то ссылка будет новая и он перерисуется.   

### Обычно используют в комбинации с memo 
---
# useMemo
  **`useMemo`** - это способ запомнить результат вычисления, чтобы не считать заново каждый раз.

  Пример:
``` jsx
const result = useMemo(() => {
  return data.sort((a, b) => a - b)
}, [data])
```
- Пересчет только если data изменился 
- иначе берётся старое(запомненное) значение

Его надо использовывать на тяжелые операции, а не на все подряд (будет хуже).Например:
- тяжелые вычисления
- сортировки
- фильтрация
- больщие массивы

**Часто используют в комбинации с друг другом  (useCallback, useMemo, memo).**
---
**memo**  - не ререндерить компонент

**useMemo** - кэширование значение

**useCallback** - кэшировать функцию

---

# useContext

**`useCOntext`** - это способ передавать данные в глубину компонентов без props 


### Например без него:
```js
<App>
  <Parent>
    <Child>
      <DeepChild />  // нужен доступ к данным
```
## Как работатет

- Создать Context
```jsx
import { createContext } from 'react'

export const ThemeContext = createContext()
```
---
- Обернуть компоненты в Provider
```jsx
<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>
```
---
- Получить значение через useContext
```jsx
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Component = () => {
  const theme = useContext(ThemeContext)

  return <p>{theme}</p>
}
```

 *Простыми словами createContext() создает хранилище, Provider - ложит их туда, useContext() - достает данные* 


 # Routing

 **`Rounting`** (маршрутизация)- это когда у тебя в React-приложении меняется контент без перезагрузки страницы.

 Пример:
 - `/` => Главная старница 
 - `/about` => страница "О нас" 
 - `*` => Любой путь который не совпал с другим (ставится в конце поскольку будет ловить все path. Если в конце просто все что не совпало с заданными)

 ### Установка 
  ```jsx
  npm install react-router
  ```

## Этапы Работы с Routing

### 1.Оборачиваем приложение
```jsx
import { BrowserRouter } from "react-router-dom";

<BrowserRouter>
  <App />
</BrowserRouter>
```

### 2.Создаем маршруты
```jsx
import { Routes, Route } from "react-router-dom";

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
```
### 3. Переходы (вместо \<a>)
```jsx
import { Link } from "react-router-dom";

<Link to="/">Home</Link>
<Link to="/about">About</Link>
```
 - использовать \<Link> (именно \<Link> а не \<link>)
```
<a> - перезагружает страницу
<Link> - НЕ перезагружает страницу
```

## Outlet

**`Outlet`** - это место для отображения вложенных (дочерних) маршрутов
(Или автоматический отображает компоненты для влоденных маршрутов, он используется в компоненте родителя для указания места где должны рендерится вложенные маршруты. Делается роут в роуте)

Пример:
```jsx
<Routes>
  <Route  path='/auth' element={<AuthPage />} />
  <Route  path='/auth/login' element={<AuthLoginPage />} />
  <Route  path='/auth/register' element={<AuthRegPage />} />
</Routes>
```

*Это не является вложенностью хоть и указыватся в начале `/auth`. React-router воспринимает этот путь как другой путь просто тут больше букв в пути.*

---
```jsx
  <Routes>
    <Route  path='/auth' element={<AuthPage />}>
      <Route  path='login' element={<AuthLoginPage />}/>
      // Можно вместо path сделать index чтобы в родителе сразу начинал рендерится дочерний компонент
      <Route  path='register' element={<AuthRegPage />}/>
    <Route>
  </Routes>
  
  {/* А в родительском  роут вставялем outlet*/}
  
  const AuthPage =()=>{
    return(
      <>
        <div>
          <Link to='login'>Login</Link>
        </div>
        <Outlet/>
      </>
    )
  }
```
*👆🏻Здесь показан пример вложенности где уже не надо указывать через `/` полный путь. Также показано что Outlet должен нахолится внутри родитсельской страницы  чтобы дочерний элементы рендерились. Без него ( Outlet ) будет рендерится только  родитсельская страница без дочерних.*

## Layout
**`Layout`** - Это просто "Общая обертка" для нескольких страниц.
* Позволяет один раз создать шапку, меню, футер и другие общие элементы.
* Избавляет от дублирования кода.

**Простыми словами**
`Layout` - это "рамка", внутри который меняется только содержимое странцы.


### Как создать Layout
```jsx
// Layout.tsx
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
      <header>Шапка сайта</header>
      <nav>Меню навигации</nav>
      
      <main>
        <Outlet />     {/* ← Сюда подставляется страница */}
      </main>
      
      <footer>Футер</footer>
    </div>
  );
}

export default Layout;
```
### Подключение

```jsx
<Routes>
  <Route path="/" element={<Layout />}>       {/* Главный Layout*/} 
    
    <Route index element={<Home />} />           {/* Главная страница */}
    <Route path="about" element={<About />} />   {/* /about */}
    <Route path="contact" element={<Contact />} /> {/* /contact */}

  </Route>
</Routes>
```
# useNavigate
**`useNavigate`** - это хук из `React Router`, который перенаправляет пользователся программно а не через Link.

### Сценарии использования. 
* Когда переход не по клику а по логике
* после отправки формы
* после авторизации
* после удаления / добавления
* по условию (if)
* по setTimeOut

Пример: 
```jsx
const Home = () => {
  const navigate = useNavigate()

  return (
    <button onClick={() => navigate('/about')}>
      Go to About
    </button>
  )
}
```
*При клике переход на /about*

---


### Навигация назад/вперед

  ```jsx
  navigate(-1)// назад
  navigate(1)// вперед
  ```
---

### Replace (Важно)

**`replace`**- заменяет старницу истории чтобы пользовыватель не смог попасть назад(например после авторизации либо полсе прохождения капчи)
```js
navigate('/home', { replace: true })
```
# useParams

**`useParams`** - Это хук из `React Router` который позволяет получить параметры из URL 


* **Создание параметра:**

```jsx
<Route path="/user/:id" element={<User />} />
```
*`:id` - переменная (параметр)*

---

* **Получение:**

```jsx
  import { useParams } from "react-router-dom";
  const User = () => {
    const { id } = useParams();
  
    return <h1>User: {id}</h1>;
  };
```
*Если URL `/user/5` => получим `id= "5"`*

---


**Логика**
1. Создаем путь с :id
2. `React Router` смотри URL
3. Значение подставляется в `useParams()`.

*Всегда возвращается объект ({id: '5'} )*

### Важно 
* Работает только внутри `<Route>` 
* Параметры должен совпадать по имени (:id <=>id)
* Все значения сторки


# Кастомные хуки

**`Кастомный хук`** - это обычная функция которая:
* Начинается с use
* внутри использует другие хуки
* Возвращает логику

### Зачем Нужны:
* Логика повторяется 
* Компонент становится большим 
* нужно разделить ответственность чтобы не нагружать комопонент

Пример:
```js
import { useState } from "react"

const useCounter = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(prev => prev + 1)

  return {
    count,
    increment
  }
}

export default useCounter
```
Использование
```js
const { count, increment } = useCounter()
```

# Redux

**`Redux`** -  это способ хранить и управлять данными приложения в одном общем месте.

**Какую проблему он решает?**

*Он создает одно общее хранилище данных, откуда любой компонент может взять нужные данные и куда можно отправить запрос на изменение данных.*

### Зачем нужен Redux?(Когда уже есть useContext, useState).

* useState хорош для локального состояния 
* useContext хорош для передачи данных без props drilling
* но когда приложение становится большим, данных много, логики, много обновлений много - начинается путаница. И все это становится трудно поддерживать

 **Он нужен тогда когда надо:**

 - хранить состояние центализованно 
 - сделать поведение предсказуемым
 - удобно отлаживать код
 - не таскать props через кучу компонентов


 #### Важное правило
 *Нельзя менять state как попало. Изменеие идет по строгой цепочке:*
```
component => dispatch(action) => reducer => store обновился => UI перерисовался.
```

## Основыне части Redux

### Store

**`Store`** - это общее хранилище всего состояния приложения.

Пример:
```jsx
{
  user: { name: 'Arsen', isAuth: true },
  tasks: ['ReduxStore', 'PracticeReact'],
  theme: 'gray'
}
```
*Хранит весь ощбий state.*

---
### State
**`State`** - это сами данные 

* store - место, где лежат данные
* state - сами данные внктри store

```js
{
  count: 0
}
```

---
### Action 
**`Action`** - это обычный обеъкт, который описывает, что нужно сделать.
*Он не меняет state сам*

Он просто говорит:
- увеличить счетчик
- удалить задачу
- добавить товар
- переключить тему

Пример: 
```js
{type: 'addTask', payload:'Buy milk'}
```
#### Важные части в action:

**type**
 Показывает, что за действие 

 **payload**
 Дополнительные данные 

---

### Dispatch
**`Dispatch`** - это функция, которая отправляет action Redux.

То есть: 
* Сначала создается action 
* потом Отправляется через dispatch

```js
dispatch({ type: 'addTask', payload: 'Learn Redux' })
```
*Он не меняет state напрямую. Он говорит вот действие, обработай его*

---

### Reducer
**`Reducer`** - это функия, которая получает:
* текущий State
* action
 и возвращает новый state

```jsx
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    default:
      return state
  }
}
```
* *если action.type === 'increment' -> увеличить на 1*
* *если action.type === 'decrement' -> уменьшить на 1*
* *если action  неизвестен -> вернуть state как есть*

**Reducer нельзя менять напрямую**

**Плохо:**
```js
state.count = state.count + 1
return state
```
Это плохо потому что: 
* Мутация 
* Старый обект изменился 
* логика становится непредсказуемой 

**Правильно:** 
```js
return {
  ...state,
  count: state.count + 1
}
```

### Полная цепочка работы Redux 

1. Пользователь нажал кнопку
2. Компонент вызывает dispatch
```js
dispatch({ type: 'increment' })
```
3. Redux передает action в reducer
4. Reducer смотрит action.type и решает, как обновить state
5. Redux сохраняет новый state в store
6. Компоненты, которые используют эти данные, получают обновление
7. React перерисовывает интерфейс


---

### Slice

**`Slice`** - это состояние + логика для него.

Например:
- userSlice
- tasksSlcie
- cartSlice
*То есть большое состояние приложения делим на части* 
```
{
  user: {...},
  tasks: [...],
  cart: [...]
}
```
*Каждая часть может иметь свой slice.* 

---

#### Простой пример счетчика через Redux Toolkit: 
```jsx
import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer
```

**Место где можно запутатся**
```js
state.value += 1
```
Вообще state менять напрямую нельзя.Однако в этом сдучае можно поскольку в Redux Toolkit используется библиотека Immer. 

Она повзволяет писать код будто state мутируется, но на самом деле под капотом он создает новы йбезопасный state.
```js
state.value +=1
```
То есть в RTK это нормально 

*Но только внутри createSlice и reducer'ов RTK.*

---

#### CreateSlice
**`createSlice`**  сразу делает несколько вещей:

- Создает reducers
- Создает actions автоматический
*Вручную не надо писать*
```
{type : 'counter/increment'}
```
- Возвращает reducer

---

### useSelector 
**`useSelector`** способо получить данные из Redux В компоненте(Берет дааные из store).

```jsx
import { useSelector } from 'react-redux'

const Counter = () => {
  const count = useSelector((state) => state.counter.value)

  return <h1>{count}</h1>
}
```
* state - Это весь store
* state.counter - slice counter
* state.counter.value - Значение счетчика

---

### useDispatch 
**`useDispatch`** способ поменять данные из компонента

Пример:
```jsx
import { useDispatch } from 'react-redux'
import { increment } from './counterSlice'

const CounterButtons = () => {
  const dispatch = useDispatch()

  return (
    <button onClick={() => dispatch(increment())}>
      +
    </button>
  )
}
```
* useDispatch() Дает функцию dispatch
* increment() - action creator (это функция которая возвращает action)
* dispatch(increment()) отправляет action в reducer

---

## Асинхронность в Redux

Redcuer должен быть чистой функцией.

Значит в reducer нельзя :
* fetch
* setTimeOut
* Запросы на сервер

### createAsynchThunk

---

**`createAsynchThunk`** - помогает делать запросы к серверу.

#### Зачем он нужен? 
 *Потому что reducer не должен заниматся запросами. Для этого нужна отдлеьная логика.*

  * Началась загрузка
  * Загрузка успешна
  * загрузка завершилоась ошибкой
Это обычно хранится так 
```js
{
  data:[],
  loading:false,
  error:null
}
```
**Пример состояния загрузки**

Когда запрос начался:
* loading = true

Когда успех:
* loading = false
* users = данные 

Когда ошибка:
* loading = false
* error = текст ошибки

Простыми словами
*Redux - это общий менеджер состояния приложения, который заставляет изменять данные по четким правилам.*

# Rest API

**`REST API`** - это когда сервер предоставляет данные через URL-адреса, а клиент работает с ними через HTTP-методы.

**`API`** - это способ, по которому одна программа общается с другой.

Пример: 
```
GET /users
POST /users
GET /users/5
DELETE /users/5
```
- */users - ресурс*  
- *GET,POST,DELETE - действия над этим ресурсом*

### Ресурс

---

Ресурс - это сущность, с которой  мы работаем.

Примемы ресурсов:

- users 
- posts
- products
- comments
- orders

Пример:
- `/users` - список пользователей
- `/users/1` - один пользователь с id = 1 


## HTTP-методы
*Когда React или любой другой клиент отправляет запрос на сервер, он должен не только указать куда идет запрос, но и что он хочет сделать.*

Основыне HTTP-методы 
* GET
* POST
* PUT/PATCH
* DELETE

### GET - Получить данные 

---

Метод GET используется когда нужно получить данные с сервера.

Примеры:

**Открыть список пользвоателей** 
```
GET /users
```
**Открыть одного пользвователя**
```
GET /users/5
```
**Получить все посты**
```
GET /posts
```
**Получить комментарии к посту**
```
GET /posts/10/comments
```

Пример использования:
```jsx
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
```
1. Компонент загрузился 
2. Отправился GET запрос
3. Сервер вернул список пользвателей
4. Мы сохранили их в state
5. Вывели на экран

### POST - создать новые данные 

---

Метод **`POST`** используется, когда нужно создать новую запись на сервере.

Когда используется:
- создает аккаунт
- отправляет форму 
- добавляет новый пост
- создает комментарий
- добавляет новый товар
- отправляет сообщение


Пример использования:
```jsx
const addUser = () => {
  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: "Arsen",
      age: 21
    })
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
};
```
Что происходит:
- Нажали кнопку
- Отправили POST
- В body положили новые данные
- Сервер создал запись
- Вернул созданный объект


### PUT - полностью оюновить объект

---
Метод **`PUT`** используется, когда нужно полностью заменить объект новыми данными.

Когда используется:
- полностью переписать профиль
- заменить всю карточку товара
- заменить всю информацию о пользователе


**Где используется в React**

*Например, когда есть форма редактирования профиля, и после нажатия Save  отправляешь весь объект целиком.*

Пример:
```jsx
fetch("https://jsonplaceholder.typicode.com/users/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Arsen Kazaryan",
    age: 22,
    city: "Gyumri"
  })
});
```

### PATCH - Ччастично обновить объект

Метод **`PATCH`** используется, когда нужно изменить только часть объекта, а не весь объект.

Когда используется:
- только имя
- только возраст
- только статус задачи
- только аватар
- только поле completed

Например: 
```jsx
const toggleTodo = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/5", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      completed: true
    })
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
};
``` 

### DELETE — удалить данные
 Метод **`DELETE`** используется, когда нужно удалить запись с сервера.

 Когда используется:
- удаляет задачу
- удаляет пост
- удаляет комментарий
- удаляет аккаунт
- удаляет товар

Пример:
```jsx
const deleteUser = () => {
  fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "DELETE"
  })
    .then((response) => {
      if (response.ok) {
        console.log("Пользователь удален");
      }
    });
};
```
Пример кнопки:
```jsx
<button onClick={deleteUser}>Delete user</button>
```
