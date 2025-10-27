
# 📊 Sales Dashboard (Vue 3 + TypeScript + FSD)

Современная админ-панель для анализа продаж, заказов и доходов.
Интерфейс построен на Vue 3 с использованием TypeScript, Pinia и TailwindCSS по архитектуре **Feature-Sliced Design (FSD)**.

---

## 🚀 Основные возможности

📅 Просмотр и фильтрация продаж, заказов, остатков и доходов
🗓️ Выбор диапазона дат и синхронизация фильтров
📈 Графическое представление данных (в разработке)
🧮 Гибкая пагинация и настройка количества записей
🧱 Адаптивная таблица с возможностью масштабирования интерфейса
🧭 Кастомная навигация и вкладки
⚡ Оптимизация запросов с помощью Vue Query

---

## 🚀 Технологии

![Vue 3](https://img.shields.io/badge/Vue-3-42b883?logo=vue.js&logoColor=white)
![Composition API](https://img.shields.io/badge/Composition_API-Vue_3-35495e?logo=vue.js&logoColor=white)
![Pinia](https://img.shields.io/badge/Pinia-Store-fcd34d?logo=vue.js&logoColor=white)
![Vue Router](https://img.shields.io/badge/Vue_Router-5-4fc08d?logo=vue.js&logoColor=white)
![TanStack Vue Query](https://img.shields.io/badge/TanStack_Query-Vue-f97316?logo=tanstack&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-HTTP-5a29e4?logo=axios&logoColor=white)
![Vite 7](https://img.shields.io/badge/Vite-7-646cff?logo=vite&logoColor=white)
![TypeScript 5.8](https://img.shields.io/badge/TypeScript-5.8-3178c6?logo=typescript&logoColor=white)
![Tailwind CSS 4](https://img.shields.io/badge/TailwindCSS-4-38bdf8?logo=tailwindcss&logoColor=white)
![FSD](https://img.shields.io/badge/FSD-Feature--Sliced--Design-0ea5e9?logo=archlinux&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-Yes-success)
![Status](https://img.shields.io/badge/Status-Ready_to_use-brightgreen)

---

## 📁 Структура проекта

src/
 ├─ app/           # Инициализация приложения
 ├─ pages/         # Страницы (Sales, Orders, Dashboard)
 ├─ widgets/       # Крупные блоки интерфейса (таблицы, фильтры, статистика)
 ├─ features/      # Фичи (фильтрация, пагинация, выбор даты)
 ├─ entities/      # Доменные модели (продажи, заказы, товары)
 ├─ shared/        # Общие компоненты, хуки, стили и утилиты

---

## 🧰 Команды

| Команда | Назначение |
|----------|------------|
| `npm run dev` | Запуск проекта в режиме разработки |
| `npm run build` | Сборка проекта |
| `npm run preview` | Предпросмотр собранного проекта |
| `npm run lint` | Проверка кода линтером |

---

## 🧠 Архитектура: Feature-Sliced Design

Проект структурирован по принципам **FSD**:
- 🧱 **App Layer** — инициализация приложения, провайдеры и маршруты  
- 📄 **Pages Layer** — композиции из виджетов и фич  
- 🧩 **Widgets Layer** — крупные блоки интерфейса (Sidebar, Header)  
- ⚙️ **Features Layer** — независимые фичи с бизнес-логикой  
- 🔖 **Entities Layer** — основные доменные сущности  
- ♻️ **Shared Layer** — переиспользуемый UI, утилиты, хуки  

---

## 🧩 Превью интерфейса

![Preview UI](./public/preview.png)

---

## ✨ Автор

**Лугинов Дьулустаан**  
Frontend Developer | React / TypeScript / Node.js  
📫 Telegram: [@JulustaanL](https://t.me/JulustaanL)

---