
# Altrad Hofmaninger ![Logo](assets/img/altrad.png)

## Welcome to Altrad Hofmaninger

Altrad Hofmaninger is the Austrian branch of Altrad Group. This is the website of the leading producer of wheelbarrows in Europe. I want to create a basic website, that provides visitors with information about the company and the products.

You can find the live website [here](https://mufasa1611.github.io/cody/)

The objective is to inform existing and potential future customers about the company, the services and the products they offer. The website should be easy to navigate, informative, basic and simple. Later on, the website could be completed with the product groups offered, products and prices.

![Mockup](/assets/img/Mockup.png)

## Index - Table of Contents

1. [User Experience (UX)](#user-exp-ux)
2. [Features](#features)
3. [Design](#design)
4. [Technologies Used](#technologies-used)
5. [Testing](#testing)
6. [Deployment](#deployment)
7. [Credits](#credits)

## User Experience (UX)

### User Stories

- #### A. First Time Visitor Goals

  - As a first time visitor, I want to easily understand the purpose of the site and learn about the company
  - I want to able to easily and intuitively navigate throughout the site to find the content I am looking for
  - I want to able to find out the location, address and contact details of the company quickly

- #### B. Returning or Frequent Visitor Goals

  - As a returing or frequent Visitor I want to able to access and view the menu quickly and easily
  - I want to be able to leave a comment or feedback or inquiry

## Features

The website consists of 3 sections: "Home", "About" and "Contact", a fixed navigation bar in the header and a fixed footer containing the copyright information and social media links.

- ### Navigation bar

     ![Navbar](/assets/img/nav.png)

  - The Navigation bar is fixed on the top of the page and responsive. Thus the look and placement on all three sections of the website is consistent. It helps the user to easily move from one section to another. It includes the company logo on the left side and the navigation menu on the right side. For better visibiliy, the menu items change their color when the mouse hovers over one of them and when they get clicked.

- ### Landing page Background Image

 ![Landing Page background](/assets/img/main.png)
  
  - The landing area includes a background photo and a text overlay that together clearly identify the purpose of the business and the type of products it sells. The background color is gradient to ensure visibiliy of the text. The button below links to the "about" section. It changes the color when the mouse hovers over it.

- ### 404 Error page

  - In the event of a 404 "page not found" error, the user will be directed to an error page.

    ![404 page](<https://github.com/my> github address/404.PNG?raw=true)

## The About section

This section can either be viewed by scrolling down the page to the next section below the main section or by clicking the "About" link on the navigation bar or by clicking the button on the main landing index page. This section features a symbol team photo and gives the user a short summary of the companys history, roots and information of the range of products and services offered. When the screen size gets smaller, the photo is shrinking and displayed under the text.

![About](/assets/img/about.png)

## Contact section

- The Contact page provides the user with an interactive google map showing the location of the company along with details on full address, phone number and email address. By clicking the 'View larger map', google maps opens in a new tab to allow ease of navigation. The map is fully responsive when resizing the screen.

- The contact form allows the user to make an inquiry or leave a message. The input of the name, e-mail address and subject are mandatory. If left empty, a message pops up to ask for the input. The send button changes the color when the mouse hovers over it and when the form is sent, it is directed to the CI form dump page.

![How to find us](/assets/img/contact.png)

## Footer section

The footer section contains clickable links to the social media accounts facebook, twitter and instagram. These links open in a separate tab. Also the copyright information is placed there. The footer is fixed and responsive.

![footer](/assets/img/footer.png)

## Design

### Color Contrast

- I chose colors that do contrast very well to ensure that also vision impaired users can clearly view the content, buttons, links and other elements.

### Images

- The company logo was used with kind permission of the Altrad Hofmaninger company and edited by myself.

- The background landing page image is a stock image was taken from [adobe Stock](https://stock.adobe.com/at/images/alpine-lake-vorderer-gosausee-salzkammergut-is-a-famous-resort-area-located-in-the-gosau-valley-in-upper-austria-dachstein-glacier/172209739S)

- The team symbol photo was taken from [pexels](https://www.pexels.com/)

### Typography

- Google fonts were used to import "Sans Serif fonts" into styles.css.
- The fonts  'RobotoSerif_UltraC' and 'RobotoSerif_Thin' were downloaded from???? and are placed in the local folder "fonts".

### Wireframes

- Balsamiq was used to sketch the first ideas and outlines of the project

   ![Wireframe](/assets/img/Wireframe.png)

## Technologies Used

- [Balsamiq](https://balsamiq.com/) was used to pre-design the layout
- [Visual Studio Code](https://code.visualstudio.com/) was used to write and edit the code and host the site on my local computer
- [GitHub](https://github.com/) was used to host the deployed website
- Image resize/edit/compress was done using [Adobe Photoshop](https://www.adobe.com/at/products/photoshop.html)
- [Font Awesome:](https://fontawesome.com/) was used to add icons to the address.
- Screenshots were taken with [FireShot](https://chrome.google.com/webstore/detail/take-webpage-screenshots/mcbpblocgmgfnpjjppndjkmgjaogfceg)

### Languages Used

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

## Testing

### Validator Testing

#### W3C HTML validator

 The [W3C Html validator](https://validator.w3.org/) found the following errors:

- Trailing slashes on void elements that had no effect and interacted badly with unquoted attribute values. This could be corrected by simply deleting the slashes.

- google maps did not open correctly because of a mistake in the API key, which was corrected.

#### W3C CSS validator

- The [jigsaw W3C validator](https://jigsaw.w3.org/css-validator/) found an open div without closing tag, which was corrected.

### Browser Compatibility

- I used [Google Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) to test the responsiveness and accesability.

- Manual Testing:
I tested the page on desktop, Laptop 17" and the following mobiles: Huawei P30 Lite, Asus Rog 5, and Samsung S7.

- Browser Testing:
I tested the page with Chrome, Firefox and Brave

- Google PageSpeed Insights: 

### Known bugs

- I encountered problems with the section overflowing to the next section above or under it when resizing the screen. I fixed this error by applying the wrap property in the flex-value in css.

## Deployment

 The repository was created on Github and then cloned on Vscode. After creating the site on Vscode, it was pushed onto Github. The site was deployed via Github pages.

 Thus the site became live at (https://mufasa1611.github.io/cody/)

### Local Deployment


## Credits

 - to use flexbox I applied the info from the Love running project as part of the Code Institut Full Stack Developer Program.

Am I Responsive" was used to display how the site looks on different screen sizes.

## Acknowledgements:

- My Mentor Jack helped and guided me through this project and did his best to answer my curious questions. My facilitator Kay did everything in her power to motivate and support me and provided me with detailed links to the information I needed.
