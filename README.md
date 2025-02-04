# Image Gallery Project

## 🖼️ Overview

This **Image Gallery** allows users to view a collection of images, with features for image navigation through modals. The project is designed using **HTML**, **CSS** (with media queries and animations), and **JavaScript**. It provides a responsive, mobile-friendly design with smooth interactions.

## 📦 Features

- **4-Column Layout** for desktop and adjusts automatically on smaller screens.
- **Image Modal**: Clicking on an image opens a modal displaying the image in full size.
- **Previous/Next Navigation**: Browse images using left and right buttons inside the modal.
- **Responsive Design**: The gallery adjusts to 1, 2, or 3 columns based on screen size (mobile, tablet, and desktop).
- **Smooth Animations**: Uses **CSS Keyframes** for smooth fade-in and zoom-in effects.

## 💻 Technologies Used

- **HTML5**: Markup for building the structure of the page.
- **CSS3**: Styling, including **flexbox**, **grid layout**, **media queries**, and **keyframes** animations.
- **JavaScript**: Adds functionality for opening the modal, navigating between images, and dynamically controlling the image gallery.
- **Responsive Design**: Ensures a seamless experience on all screen sizes (mobile, tablet, and desktop).

## ⚙️ How to Run Locally

To run this project on your local machine, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/image-gallery.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd image-gallery
    ```

3. **Open the `index.html` file** in your browser:
    ```bash
    open index.html  # Or double-click on the file to open it in any browser
    ```

4. **Enjoy the gallery!**

## 📱 Screenshot
![image](https://github.com/user-attachments/assets/64c0de3b-443b-4864-8e6d-e02c31113733)
![image](https://github.com/user-attachments/assets/6f388da9-87c5-4a3d-80f0-987fbb34fa30)



https://github.com/user-attachments/assets/2a962aa7-b320-4ed6-b8fe-5d8dae0fcf80



## 📝 Explanation of Code

### HTML

- **index.html**: Contains the structure for the gallery and modals. Each image has a unique ID and is wrapped in a `<div>` for easier styling and manipulation.
- **Modal Structure**: Each image opens a modal on click. Inside the modal, we also have previous/next buttons to navigate between images.

### CSS

- **styles.css**: 
  - **Grid Layout** for displaying images in a 4-column setup on larger screens.
  - **Media Queries** ensure the gallery adjusts from 4 columns to 1 column depending on screen size.
  - **Animations** for smooth transitions when images are hovered or loaded.
  - **Responsive Design**: The layout changes based on the screen width to ensure the gallery looks great on mobile, tablet, and desktop.

### JavaScript

- **script.js**: Handles the logic for opening the modal, closing the modal, and navigating between images using next and previous buttons.

## 🤝 Contributing

Feel free to fork the repository and submit pull requests with improvements or bug fixes. Contributions are welcome!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

