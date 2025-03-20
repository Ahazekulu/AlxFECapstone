document.addEventListener('DOMContentLoaded', function homePage(){
//Global variables started
    let logInPage = document.getElementById('login-page-container');
    let page = document.getElementById('all-container');
    let signUpPage = document.getElementById('signup-page-container');
    let headerContainer = document.getElementById('header-container');
    let bottomContainer = document.getElementById('bottom-container');
    let belowHeaderContent= document.getElementById('otherthan-header');
    let mainPageHeader = document.getElementById('main-page-header');
    let navPageContent = document.getElementById('nav-page-content');
    let loginHeader = document.getElementById('login-header')
    let placeHolderHeading = document.getElementById('head-header')
    let profileIcon = document.getElementById('profile-icon');
//To display login page
    signUpPage.style.display = 'none';
    mainPageHeader.style.display = 'none';
    navPageContent.style.display = 'none';
    loginHeader.style.display = 'none';
    placeHolderHeading.textContent = loginHeader.textContent; 
//To simulate Login button and move to main page
    const loginButton= document.getElementById('login-button')
    loginButton.addEventListener('click', function simulator(event){
      event.preventDefault();
       logInPage.style.display = 'none';
        navPageContent.style.display = 'flex';
        placeHolderHeading.textContent= mainPageHeader.textContent;
        placeHolderHeading.style.fontSize = '15px'
        placeHolderHeading.style.marginLeft = '150px'
        mainPageHeader.style.display = 'none';
        alert('Dear user, this is a simulation. No login information is saved! Kindly press Ok and proceed. Thank You')
      });
//To simulate signup button and move to main page
    const signupButton= document.getElementById('signup-button');
    signupButton.addEventListener('click', function(event){
      event.preventDefault();
       signUpPage.style.display = 'none';
        navPageContent.style.display = 'flex';
        placeHolderHeading.textContent= mainPageHeader.textContent;
        placeHolderHeading.style.fontSize = '15px'
        placeHolderHeading.style.marginLeft = '150px'
        mainPageHeader.style.display = 'none';
        alert('Dear user, this is a simulation. No signup information is saved! Kindly press Ok and proceed. Thank You')
    });
//To simulate signup link from login page and diplay signup form instead of login
      let loginToSignup = document.getElementById('login-to-signup');
      loginToSignup.addEventListener('click', function(event){
         event.preventDefault();
         let signUpTitle = document.getElementById('signup-title')
         logInPage.style.display = 'none';
         signUpPage.style.cssText = 'display: flex; flex-direction: column; backgroundColor: red ';
         placeHolderHeading.textContent = signUpTitle.textContent;
         signUpTitle.style.display = 'none';
      });
//To simulate login link from login page and diplay signup form instead of signup
      let signupToLogin = document.getElementById('signup-to-login');
      signupToLogin.addEventListener('click', function(event){
         event.preventDefault();
         signUpPage.style.display = 'none';
         logInPage.style.display = 'block';
         placeHolderHeading.textContent= loginHeader.textContent;
      });
//Main Page Content Setup 
// Variables for navigations
         let addContactNav = document.getElementById('add-contact-nav');
         let contactListNav= document.getElementById('contact-list-nav');
         let scheduleNav= document.getElementById('schedule-nav');
         let dashboardNav= document.getElementById('dashboard-nav');
         let profileIconNav = document.getElementById('profile-icon');
//Variables for navigation contents
         let addContactContent = document.getElementById('add-contact-nav-content');
         let contactListContent = document.getElementById('contact-list-nav-content');
         let scheduleContent = document.getElementById('schedule-nav-content');
         let dashboardContent = document.getElementById('dashboard-nav-content');
         let profileIconContent = document.getElementById('profile-icon-content');
// 1. When Add Contacts clicked

         
 // 2. When Contacts List clicked
         function contactListPage(){
            
         }
 // 3. When Schedules clicked
         function schedulePage(){
            
         }
 // 4. When Dashboard clicked
         function dashboardPage(){
            
         }
 // 5. When Profile icon clicked
         function profilePage(){
            
         }


})