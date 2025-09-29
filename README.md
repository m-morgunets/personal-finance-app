# Финансовый трекер на Next.js

**Финансовый трекер** — это веб-приложение для личного учета финансов, позволяющее пользователю отслеживать свои доходы, расходы и бюджет в удобном интерфейсе. Проект создан с использованием Next.js, Prisma и NextAuth для аутентификации.

🔗 Ссылки

- Деплой на Vercel: https://personal-finance-app-vert.vercel.app/
- Репозиторий GitHub: https://github.com/m-morgunets/personal-finance-app

## 📌 Особенности проекта

- Регистрация и авторизация пользователей через NextAuth.
- Добавление и управление транзакциями (доходы и расходы).
- Категоризация и фильтрация транзакций.
- Ведение бюджета и накоплений.
- Современный интерфейс на React/Next.js.
- График создан с помощью Recharts.
- Backend на Next.js с Prisma для работы с базой данных (PostgreSQL).
- Развернут на Vercel.

## 🛠 Технологии

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Prisma](https://www.prisma.io/)
- [NextAuth.js](https://next-auth.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/) (деплой)

## 🚀 Функционал

1. **Главная страница** — обзорная статичная страница.
2. **Обзорная страница** — обзор финансов пользователя.
3. **Операции** — добавление, редактирование и удаление транзакций.
4. **Бюджеты** — настройка и отслеживание бюджета по категориям.
5. **Авторизация** — регистрация и вход через email/github/google.

## 💾 Установка и запуск локально

1. Установить зависимости:

```bash
  npm install
```

2. Настроить переменные окружения в .env

```bash
  DATABASE_URL=""
  NEXTAUTH_SECRET=""
  GOOGLE_CLIENT_ID=""
  GOOGLE_CLIENT_SECRET=""
  GITHUB_ID=""
  GITHUB_SECRET=""
```

3. Применить миграции Prisma:

```bash
  npx prisma migrate dev --name init
```

4. Запустить проект:

```bash
  npm run dev
```

📄 Лицензия
MIT License © 2025
