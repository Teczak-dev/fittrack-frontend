# API — dokumentacja endpointów z `src/api/`

[← Powrót do README](../README.md)

---

```http
POST /api/users/login
```

| Parameter  | Type     | Description                        |
| :--------- | :------- | :--------------------------------- |
| `email`    | `string` | **Required**. User email           |
| `password` | `string` | **Required**. User password        |

Response (200)

```json
{ "token": "<jwt>", "user": { "id": "1", "email": "..." } }
```

---

```http
POST /api/users/register
```

| Parameter  | Type     | Description                        |
| :--------- | :------- | :--------------------------------- |
| `name`     | `string` | **Required**. Display name         |
| `email`    | `string` | **Required**. User email           |
| `password` | `string` | **Required**. User password        |

Response (201)

```json
{ "status": "ok", "message": "Użytkownik zarejestrowany" }
```

---

```http
POST /api/users/forgot-password
```

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `email`   | `string` | **Required**. Email to send reset link |

Response (200)

```json
{ "status": "ok", "message": "Reset link został wysłany" }
```

---

```http
POST /api/users/reset-password/{token}
```

| Parameter   | Type     | Description                             |
| :---------- | :------- | :-------------------------------------- |
| `token`     | `string` | **Required**. Reset token from email     |
| `newPassword`| `string`| **Required (body)**. New password        |

Response (200)

```json
{ "status": "ok", "message": "Hasło zaaktualizowane" }
```

---

```http
POST /api/users/change-password
```

Headers: `Authorization: Bearer <token>`

| Parameter    | Type     | Description                             |
| :----------- | :------- | :-------------------------------------- |
| `oldPassword`| `string` | **Required**. Current password          |
| `newPassword`| `string` | **Required**. New password              |

Response (200)

```json
{ "status": "ok" }
```

---

```http
GET /api/users/me
```

Headers: `Authorization: Bearer <token>`

Response (200)

```json
{ "id": "1", "email": "user@example.com", "name": "Jan" }
```

---

```http
POST /api/users/resend-verification
```

Headers: `Authorization: Bearer <token>`

Response (200)

```json
{ "status": "ok" }
```

---

```http
DELETE /api/users/me
```

Headers: `Authorization: Bearer <token>`

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `password`| `string` | **Required**. Current password to confirm deletion |

Response (200)

```json
{ "status": "deleted" }
```

---

```http
GET /api/workouts
```

Headers: `Authorization: Bearer <token>`

Query params: `limit` (optional)

Response (200)

```json
{ "data": [ { "id": "1", "title": "Leg day" } ] }
```

---

```http
POST /api/workouts
```

Headers: `Authorization: Bearer <token>`

Body: `Workout` object (JSON)

Response (201)

```json
{ "id": "2", "title": "New workout" }
```

---

```http
DELETE /api/workouts/{id}
```

Headers: `Authorization: Bearer <token>`

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `id`      | `number` | **Required**. Workout id to delete |

Response (200)

```json
{ "status": "deleted" }
```

---

```http
GET /api/workout-types
```

Response (200)

```json
[ { "id": "1", "name": "Strength"} ]
```

---

```http
GET /api/workout-types/categories
```

Response (200)

```json
[ "strength", "cardio" ]
```

---

```http
POST /api/streak/check-me
```

Headers: `Authorization: Bearer <token>`

Response (200)

```json
{ "streak": 5 }
```

---

```http
GET /api/streak/me
```

Headers: `Authorization: Bearer <token>`

Response (200)

```json
{ "stored_streak": 5 }
```
