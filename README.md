# 📇 Contacts Manager – Node.js + MySQL + Docker

A backend service to manage contacts using **Node.js**, **Express**, **MySQL**, and **Docker**.  
Includes CRUD operations, Docker-based DB setup, and future features like photo upload, pagination, and more.

---

## 📁 Features

- RESTful API for contact management
- Dockerized MySQL database
- Custom alphanumeric ID generation
- `.env` environment configuration
- Modular Express structure

---

## 🔧 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Elbara12/contacts-manager-nodejs.git
cd contacts-manager-nodejs
```

### 2. Run MySQL with Docker

```bash
cd docker
docker-compose up -d
```

This will:

- Start a MySQL container (port `3306`)
- Auto-create the `dev` database
- Execute `init.sql` to create the `contacts` table with sample data

### 3. Install Dependencies and Start the Server

```bash
cd ../src
yarn install
yarn start
```

The backend will be available at:  
🔗 `http://localhost:3000`

---

## 📬 API Endpoints

| Method | Endpoint       | Description            |
|--------|----------------|------------------------|
| GET    | /contacts      | Retrieve all contacts  |
| POST   | /contacts      | Add a new contact      |
| PUT    | /contacts/:id  | Update a contact       |
| DELETE | /contacts/:id  | Delete a contact       |

---

## ⚠️ Troubleshooting

### Git: Push Rejected

```bash
git pull origin main --rebase
git push origin main
```

### Yarn: Issues Installing Packages

```bash
yarn cache clean
yarn install
```

If Yarn is not installed:

```bash
npm install -g yarn
```

### Docker: MySQL fails to init

```bash
docker-compose down -v
docker-compose up --build
```

Also verify that `init.sql` is in the same directory as `docker-compose.yml`.

---

## 🔮 Challenges To Implement

1. **Validate e-mail addresses and phone numbers**
2. **Implement a search feature to filter contacts by name**
3. **Implement pagination to limit the number of contacts returned**
4. **Implement a feature to upload a contact photo**

---

## 🪪 License

This project is distributed under the [MIT License](./LICENSE).
