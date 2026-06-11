# Notification System Design

## Introduction

This project is a Notification System built using React and Vite. It fetches notifications from an API and displays them on the screen. The project also includes a logging middleware for sending logs to a logging service.

## Features

* View all notifications
* View priority notifications
* API integration using Axios
* React Router navigation
* Reusable components

## Components

### Navbar

Used for navigation between pages.

### Notification Card

Used to display notification information such as:

* Type
* Message
* Timestamp

## Pages

### All Notifications

This page shows all notifications received from the API.

### Priority Notifications

This page shows important notifications after applying sorting logic.

## Working

1. User opens the application.
2. API is called to fetch notifications.
3. Notifications are stored in state.
4. Notifications are displayed using NotificationCard component.
5. Priority notifications are filtered and displayed separately.

## Technologies Used

* React
* Vite
* Axios
* JavaScript
* React Router DOM
* GitHub

## Folder Structure

notification_app_fe

* src

  * api
  * components
  * pages
  * utils

logging_middleware

* logger.js
* test.js

## Conclusion

This project demonstrates API integration, component-based development, routing, and notification management using React. The application is simple, modular, and easy to understand.
