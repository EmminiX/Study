# 🐧 Linux Learning Platform with AI Chatbot 🤖

A free, interactive web-based learning platform for Linux system administration with an integrated AI chatbot assistant. Designed with accessibility in mind! ✨

## 📚 Overview

This platform provides comprehensive Linux learning resources with an intelligent AI chatbot (LinuxSage) that helps users master Linux concepts, troubleshoot issues, and develop command-line expertise. The platform is designed to be accessible to all skill levels, from beginners to advanced users. ✨

> 💡 **Designed for neurodivergent learners** with visual cues, clear structure, and intuitive navigation!

## 🔑 Key Features

- 📘 **Comprehensive Learning Content**:
  - 🔰 Introduction to Linux
  - 📜 Shell Scripting
  - 👥 User & System Administration
  - 📁 File Systems
  - 🌐 Networking
  - ⏱️ Scheduling Jobs
  - 🔒 Linux Security & Hardening
  - 🛠️ Administrative Tasks

- 🤖 **AI-Powered Chatbot Assistant (LinuxSage)**:
  - 💬 Provides contextual help and explanations
  - ❓ Answers Linux-related questions
  - 🔧 Troubleshoots common issues
  - 💡 Suggests relevant commands and best practices
  - 📊 Adapts explanations to user skill level
  - 🔄 Integrates with platform content

- 🧩 **Interactive Learning Tools**:
  - 🌈 Syntax-highlighted code examples
  - 🧠 Interactive quizzes to test knowledge
  - 🏋️ Practical exercises
  - 📋 Command reference

- 🖥️ **User-Friendly Interface**:
  - 🌓 Dark/light mode toggle
  - 📱 Responsive design for all devices
  - 🔍 Search functionality across all topics
  - 📶 Progressive Web App (PWA) with offline functionality

## 🚀 Deployment Options

### 🐳 Docker Deployment (Recommended)

The preferred way to deploy this application is using Docker Compose:

1. Ensure Docker and Docker Compose are installed on your system
2. Clone this repository
3. Deploy using the included script:
   ```bash
   chmod +x deploy.sh
   ./deploy.sh build
   ./deploy.sh start
   ```
4. Access the platform at `http://localhost`

For detailed Docker deployment instructions, see [DOCKER.md](/DOCKER.md) 📄

### 💻 Local Development

1. Clone this repository
2. Ensure you have Node.js installed
3. Install dependencies:
   ```bash
   npm install -g http-server
   ```
4. Start the server:
   ```bash
   http-server -p 8080
   ```
5. Open your browser and navigate to `http://localhost:8080`

### 📱 Using the App Offline (PWA)

This platform is a Progressive Web App that can be installed and used offline:

1. **Desktop Installation** 🖥️:
   - Visit the site while online
   - Look for the install button in the address bar
   - After installation, the app will be available from your desktop/start menu

2. **Mobile Installation** 📱:
   - Visit the site in Chrome or Safari
   - For Android: Tap menu → "Add to Home Screen"
   - For iOS: Tap share → "Add to Home Screen"

3. **Offline Capabilities** 🔌:
   - Content you've visited will be available offline
   - Learning progress is saved locally
   - Notifications when offline/online status changes

## 🏗️ Technical Architecture

- **Frontend** 🎨: HTML5, CSS3, JavaScript
- **AI Chatbot** 🤖: Powered by advanced language models
- **Deployment** 🐳: Docker/Nginx containerization
- **Offline Support** 📶: Service workers for PWA functionality
- **Data Storage** 💾: Local storage for user preferences and progress

## 📂 Project Structure

- 📄 `index.html` - Main application page
- 🧠 `app.js` - Application logic and chatbot integration
- 🎨 `styles.css` - Styling
- 📚 `content/` - HTML content files for each learning section
- 📶 `service-worker.js` - Handles offline caching
- 🤖 `Fixed_Linux_Study_Final.json` - Chatbot configuration
- 🐳 `Dockerfile` & `docker-compose.yml` - Docker deployment configuration

## 🔍 Troubleshooting

If you encounter issues:

1. 🔎 Check the browser console for error messages
2. ✅ Verify all content files exist in the correct directories
3. 🐳 For Docker deployment issues, see troubleshooting section in [DOCKER.md](/DOCKER.md)
4. 🤖 For chatbot issues, refer to [CHATBOT_FIX_SUMMARY.md](/CHATBOT_FIX_SUMMARY.md)

## 👥 Contributing

Contributions to improve the platform are welcome! 🌟 Please feel free to submit pull requests or open issues for any bugs or feature requests.

## 📜 License

This project is available as a free learning resource. 🎓 No cost, no barriers to education!

## ✨ Credits

Created with ❤️ by [Emmi C.](https://emmi.zone) 