<script setup lang="ts">
import AxiosImg from '../../shared/assets/images/axios.png'
import TsImg from '../../shared/assets/images/TypeScript.jpeg'
import VueImg from '../../shared/assets/images/Vue.jpeg'
import FsdImg from '../../shared/assets/images/FSD-arhitektura.png'
</script>

<template>
    <div class="relative flex w-full bg-blue-300 rounded-md p-5">
        <div class="flex flex-col py-5 px-10 gap-10 w-1/2 bg-blue-200 rounded-lg">
            <ul>
                <label class="text-xl" for="">Основные возможности</label>
                <li class="text-gray-500 list-disc list-inside">
                    Просмотр и фильтрация продаж, заказов, остатков и доходов
                </li>
                <li class="text-gray-500 list-disc list-inside">
                    Выбор диапазона дат
                </li>
                <li class="text-gray-500 list-disc list-inside">
                    Гибкая пагинация и управление количеством записей на странице
                </li>
                <li class="text-gray-500 list-disc list-inside">
                    Графическое представление данных (в разработке)
                </li>
                <li class="text-gray-500 list-disc list-inside">
                    Адаптивная таблица с возможностью масштабирования интерфейса
                </li>
                <li class="text-gray-500 list-disc list-inside">
                    Кастомная навигация и вкладки
                </li>
                <li class="text-gray-500 list-disc list-inside">
                    Оптимизация запросов с помощью Vue Query
                </li>
            </ul>
            <ul>
                <label class="text-xl" for="">Технологии</label>
                <li class="text-gray-500 list-disc list-inside">
                    Vue 3 + Composition API — современный подход к построению интерфейсов
                </li>
                <li class="text-gray-500 list-disc list-inside">
                    TypeScript — современный подход к построению интерфейсов
                </li>
                <li class="text-gray-500 list-disc list-inside">
                    Pinia — эффективное управление состоянием
                </li>
                <li class="text-gray-500 list-disc list-inside">
                    Vue Router — маршрутизация по страницам
                </li>
                <li class="text-gray-500 list-disc list-inside">
                    Axios — для работы с API
                </li>
                <li class="text-gray-500 list-disc list-inside">
                    @tanstack/vue-query — кеширование и управление асинхронными данными
                </li>
                <li class="text-gray-500 list-disc list-inside">
                    TailwindCSS — быстрая и удобная стилизация
                </li>
            </ul>


            <ul>
                <label class="text-xl" for="">Архитектура и организация кода</label>
                <li class="text-gray-500 list-disc list-inside">
                    Feature-Sliced Design (FSD) — разделение на домены (entities/, widgets/, features/, shared/, pages/)
                </li>
                <li class="text-gray-500 list-disc list-inside">
                    Повторно используемые таблицы, фильтры, селекты, табы
                </li>
                <li class="text-gray-500 list-disc list-inside">
                    Управление датами через отдельные Pinia-хранилища
                </li>
            </ul>

            <ul>
                <label class="text-xl" for="">Сборка и Dev-инфраструктура</label>
                <li class="text-gray-500 list-disc list-inside">
Vite — сверхбыстрый сборщик и dev-сервер
                </li>
                <li class="text-gray-500 list-disc list-inside">
TypeScript — строгая типизация, vue-tsc для проверки типов
                </li>
                <li class="text-gray-500 list-disc list-inside">
ESLint + Prettier — линтинг и автоформатирование кода
                </li>
                <li class="text-gray-500 list-disc list-inside">
.env конфигурация — через VITE_ префиксы
                </li>
            </ul>
        </div>

        <div class="w-1/2 grid grid-cols-12 grid-row-12 gap-10">
            <div class="rounded-md overflow-hidden col-start-6 col-end-13 row-start-1 row-end-3 -rotate-12">
                <img :src="TsImg" alt="TypeScript" class="w-full h-full object-cover">
            </div>
            <div class="rounded-md overflow-hidden col-start-3 col-end-7 row-start-3 row-end-4 ">
                <img :src="VueImg" alt="vue" class="w-full h-full object-cover">
            </div>
            <div class="rounded-md overflow-hidden col-start-2 col-end-9 row-start-4 row-end-8 rotate-12">
                <img :src="AxiosImg" alt="axios" class="w-full h-full object-cover">
            </div>
            <div class="rounded-md overflow-hidden col-start-8 col-end-12 row-start-8 row-end-8">
                <img :src="FsdImg" alt="futer slice designe" class="w-full h-full object-cover">
            </div>

        </div>







    </div>
</template>

<style scoped></style>