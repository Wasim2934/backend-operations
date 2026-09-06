# Instagram API Project

A backend project built to practice creating Instagram-style APIs, handling image uploads, and storing image URLs in a database.

## 🚀 Project Overview

In this project, I created two Instagram APIs: 

* **POST API** — To create a new post.
* **GET API** — To fetch posts.

I also integrated **ImageKit** to upload images and store their URLs in the database.

## ✨ Features

* Create a new Instagram post.
* Fetch Instagram posts.
* Handle image uploads using `multer`.
* Upload images to ImageKit.
* Convert uploaded images into buffers.
* Store image URLs in the database.
* Practice backend API integration.

## 🛠️ Technologies Used

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **Multer**
* **ImageKit**
* **JavaScript**

## 🔄 How It Works

### 1. Create a Post

The frontend sends post data and an image to the backend using `multipart/form-data`.

### 2. Handle the Image

Multer receives the uploaded image and provides its buffer.

### 3. Upload to ImageKit

The image buffer is uploaded to ImageKit, which returns a URL.

### 4. Save to Database

The post data and ImageKit URL are stored in the database.

### 5. Fetch Posts

The GET API retrieves the saved posts, including their image URLs.

## 📌 API Endpoints

| Method | Endpoint | Description       |
| ------ | -------- | ----------------- |
| POST   | `/posts` | Create a new post |
| GET    | `/posts` | Fetch all posts   |

> Replace the endpoints with your actual routes if they are different.

```

## ⚙️ Environment Variables

Create a `.env` file and add your configuration:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string

IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

## 📚 What I Learned

* How to create POST and GET APIs.
* How to handle image uploads using Multer.
* How to work with image buffers.
* How to upload images to ImageKit.
* How to save uploaded image URLs in MongoDB.
* How different backend services work together in a real-world application.

## 🔮 Future Improvements

* Add user authentication.
* Add update and delete post APIs.
* Add likes and comments.
* Add pagination.
* Add image validation and error handling.

## 👨‍💻 Author

**Wasim**

This project is part of my backend development learning journey.
