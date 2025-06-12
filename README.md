# 📝 Node.js Task Management App

A simple web app built with **Node.js**, **Express**, **Objection.js**, **MySQL**, and **Handlebars**.

---

## 🚀 Features

- Add new users with validation (Name, Email, Mobile)
- Assign tasks to users (status: Pending / Done)
- Export Users and Tasks into an Excel file (with 2 sheets)
- View all tasks of a particular user via API

---

## 🔧 Technologies Used

- **Node.js**
- **Express.js**
- **MySQL** with **Objection.js ORM**
- **Handlebars** (Template Engine)
- **JavaScript** for validation
- **xlsx** package for Excel export

---

### 🧍 Add User Page
![Screenshot 2025-06-12 181300](https://github.com/user-attachments/assets/317b33d9-54fe-489e-9241-869134a3bb7d)


### ✅ Add Task Page
![Screenshot 2025-06-12 181315](https://github.com/user-attachments/assets/d3e2db96-2fe8-4e52-b73e-9ea8761a4608)

### 📤 Export to Excel
![Screenshot 2025-06-12 181349](https://github.com/user-attachments/assets/a43c31f2-c797-4419-bc6e-6a4080843021)
![Screenshot 2025-06-12 184833](https://github.com/user-attachments/assets/404bb27d-cd3e-45f9-b7cd-b00e9ddac625)

![Screenshot 2025-06-12 181400](https://github.com/user-attachments/assets/b80cc2ab-51e5-4f99-8ab0-b1ff27404ebd)
![Screenshot 2025-06-12 181523](https://github.com/user-attachments/assets/0496350c-669d-4a41-a4d2-35019021e4e3)
![Screenshot 2025-06-12 181540](https://github.com/user-attachments/assets/daebca4c-9629-4ccd-8593-ac736589f610)

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/node-task-app.git
cd node-task-app

###2. Install Dependencies
bash
Copy
Edit
npm install
###3. Configure Database
Create a MySQL database named node_task and run the following SQL:

sql
Copy
Edit
CREATE DATABASE node_task;

USE node_task;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  mobile VARCHAR(15)
);

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  task_name VARCHAR(255),
  status VARCHAR(20),
  FOREIGN KEY (user_id) REFERENCES users(id)
);
Update knexfile.js with your MySQL credentials.

###4. Run the App
bash
Copy
Edit
node app.js
Visit: http://localhost:3000/users

🌐 Routes
URL	Function
/users	Add user
/tasks	Assign task
/export	Export users & tasks to Excel
/tasks/:id	View all tasks by user ID (JSON)

🙋‍♂️ Author
Vinay Kumar Sahu

📄 License
This project is created for educational purposes.
