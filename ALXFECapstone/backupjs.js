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
        let navUl = document.getElementById('nav-list');
        let imgAfterLogin = document.getElementById('after-signlogin-button-img-container');
        let contentAfterLogin = document.getElementById('after-signlogin-button');
        let signUpTitle = document.getElementById('signup-title')
    
    //Variables for navigation contents
        let addContactContent = document.getElementById('add-contact-nav-content');
        let contactListContent = document.getElementById('contact-list-nav-content');
        let scheduleContent = document.getElementById('schedule-nav-content');
        let dashboardContent = document.getElementById('dashboard-nav-content');
        let profileIconContent = document.getElementById('profile-icon-content');
    //Quote array to be displayed if qute fetch failed
    const fallbackQuotes = [
        {"content": "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", "author": "Helen Keller"},
        {"content": "A real friend is one who walks in when the rest of the world walks out.", "author": "Walter Winchell"},
        {"content": "The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed.", "author": "Carl Jung"},
        {"content": "Love is not about possession. Love is about appreciation.", "author": "Osho"},
        {"content": "We are afraid to care too much, for fear that the other person does not care at all.", "author": "Eleanor Roosevelt"},
        {"content": "The ultimate test of a relationship is to disagree but to hold hands.", "author": "Alexandra Penney"},
        {"content": "A strong relationship requires choosing to love each other even in those moments when you struggle to like each other.", "author": "Dave Willis"},
        {"content": "The most important ingredient we put into any relationship is not what we say or what we do, but what we are.", "author": "Brené Brown"},
        {"content": "To love is to receive a glimpse of heaven.", "author": "Karen Sunde"},
        {"content": "In the end, it's not the years in your life that count. It's the life in your years.", "author": "Abraham Lincoln"},
        {"content": "The language of friendship is not words but meanings.", "author": "Henry David Thoreau"},
        {"content": "Let us be grateful to the people who make us happy; they are the charming gardeners who make our souls blossom.", "author": "Marcel Proust"},
        {"content": "The best relationships are the ones you never saw coming.", "author": "Unknown"},
        {"content": "It's not about finding someone who will solve all your problems. It's about finding someone who won't let you face them alone.", "author": "Unknown"},
        {"content": "A good relationship is when someone accepts your past, supports your present, and encourages your future.", "author": "Unknown"},
        {"content": "The greatest happiness of life is the conviction that we are loved; loved for ourselves, or rather, loved in spite of ourselves.", "author": "Victor Hugo"},
        {"content": "The only way to have a friend is to be one.", "author": "Ralph Waldo Emerson"},
        {"content": "Don't walk in front of me… I may not follow. Don't walk behind me… I may not lead. Walk beside me… just be my friend.", "author": "Albert Camus"},
        {"content": "Some people arrive and make such a beautiful impact on your life, you can barely remember what life was like without them.", "author": "Anna Taylor"},
        {"content": "The heart wants what it wants. There's no logic to these things. You meet someone and you fall in love and that's that.", "author": "Woody Allen"}
    ];
    //Function to fetch quote from quotable
        function displayRandomQuote() {
            fetch('https://api.quotable.io/random')
                .then(response => response.json())
                .then(data => {
                    document.getElementById("random-quote").textContent = data.content;
                    document.getElementById("quote-author").textContent = `- ${data.author}`;
                })
                .catch(error => {
                    console.error('Error fetching quote:', error);
                    const randomIndex = Math.floor(Math.random() * fallbackQuotes.length);
                    const randomQuote = fallbackQuotes[randomIndex];
                    document.getElementById("random-quote").textContent = randomQuote.content;
                    document.getElementById("quote-author").textContent = `Said by: ${randomQuote.author}`;
                });
        }
    //To display login page
        signUpPage.style.display = 'none';
        mainPageHeader.style.display = 'none';
        navPageContent.style.display = 'none';
        loginHeader.style.display = 'none';
        placeHolderHeading.textContent = loginHeader.textContent; 
    //To simulate Login and sign up buttons and move to main page
        const loginButton= document.getElementById('login-button')
        const signupButton= document.getElementById('signup-button');
            function simulator(event){
                event.preventDefault();
              logInPage.style.display = 'none';
              navPageContent.style.display = 'flex';
              placeHolderHeading.innerHTML= mainPageHeader.innerHTML;
              navUl.style.cssText = 'font-size: 15px; display: flex; flexwrap: wrap; gap: 5px; width:100%; align-items:center; gap:5px; justify-content: space-between'
              mainPageHeader.style.display = 'none';
              alert('Dear user, this is a simulation. No login information is saved! Kindly press Ok and proceed. Thank You')
              contentAfterLogin.style.display = 'flex';
              addContactContent.style.display = 'none';
              contactListContent.style.display = 'none';
              scheduleContent .style.display = 'none';
              dashboardContent.style.display = 'none';
              profileIconContent .style.display = 'none';
              profileIconContent.style.display = 'none';
              signUpPage.style.display= 'none';
           //Main Page Content Setup 
      // Variables for navigations
                    let addContactNav = document.getElementById('add-contact-nav');
                    let contactListNav= document.getElementById('contact-list-nav');
                    let scheduleNav= document.getElementById('schedule-nav');
                    let dashboardNav= document.getElementById('dashboard-nav');
                    let profileIconNav = document.getElementById('profile-icon-nav');
                    let homeNav = document.getElementById('home-nav');
       
      // 1. When Add Contacts clicked
      function addContactPage(){
      addContactNav.style.color = '#098677';
      contactListContent.style.display = 'none';
      scheduleContent.style.display = 'none';
      dashboardContent.style.display = 'none';
      profileIconContent.style.display = 'none';
      addContactContent.style.display = 'flex';
      contentAfterLogin.style.display = 'none';
      }
      addContactNav.addEventListener('click', addContactPage); 
      // 2. When Contacts List clicked
      function contactListPage(){
             contactListNav.style.color = '#098677';
             scheduleContent.style.display = 'none';
             dashboardContent.style.display = 'none';
             profileIconContent.style.display = 'none';
             addContactContent.style.display = 'none';
             contentAfterLogin.style.display = 'none';
             contactListContent.style.display = 'flex';
              }
             contactListNav.addEventListener('click', contactListPage);
      // 3. When Schedules clicked
      function schedulePage(){
         scheduleNav.style.color = '#098677';
         scheduleContent.style.display = 'flex'
         contactListContent.style.display = 'none';
         dashboardContent.style.display = 'none';
         profileIconContent.style.display = 'none';
         addContactContent.style.display = 'none';
         contentAfterLogin.style.display = 'none';
          }
         scheduleNav.addEventListener('click', schedulePage);     
      // 4. When Dashboard clicked
      function dashboardPage(){
         dashboardNav.style.color = '#098677';
         contactListContent.style.display = 'none';
         profileIconContent.style.display = 'none';
         scheduleContent.style.display = 'none';
         addContactContent.style.display = 'none';
         dashboardContent.style.display = 'flex';
         contentAfterLogin.style.display = 'none';
      }
         dashboardNav.addEventListener('click',dashboardPage);
      // 5. When Profile icon clicked
      function profilePage(){
         profileIconNav.style.color = '#098677';
         contactListContent.style.display = 'none';
         scheduleContent.style.display = 'none';
         addContactContent.style.display = 'none';
         dashboardContent.style.display = 'none';
         profileIconContent.style.display = 'flex';
         contentAfterLogin.style.display = 'none';
      }
         profileIconNav.addEventListener('click', profilePage);
          // 6. When home clicked
      function homeNavDisplay(){
          homeNav.style.color = '#098677';
          contactListContent.style.display = 'none';
          scheduleContent.style.display = 'none';
          addContactContent.style.display = 'none';
          dashboardContent.style.display = 'none';
          profileIconContent.style.display = 'none';
          contentAfterLogin.style.display = 'flex';
       }
          homeNav.addEventListener('click', homeNavDisplay);
          //Return from main page to login
    let mainToLogin = document.getElementById('go-to-login');
    mainToLogin.addEventListener('click', function mainPageToLogin(){
        signUpPage.style.display = 'none';
        mainPageHeader.style.display = 'none';
        navPageContent.style.display = 'none';
        loginHeader.style.display = 'none';
        placeHolderHeading.textContent = loginHeader.textContent; 
        logInPage.style.display = 'flex';
    })
    //Return from main page to signup
    let mainToSignup = document.getElementById('go-to-signup');
    mainToSignup.addEventListener('click', function mainPageToSignup(){
        signUpPage.style.display = 'flex';
        mainPageHeader.style.display = 'none';
        navPageContent.style.display = 'none';
        loginHeader.style.display = 'none';
        placeHolderHeading.textContent = signUpTitle.textContent; 
        logInPage.style.display = 'none';
        signUpTitle.style.display = 'none';
    })
      
              };
    //To simulate Login button and move to main page
                        loginButton.addEventListener('click', simulator);
    //To simulate signup button and move to main page
                        signupButton.addEventListener('click', simulator);
    //To simulate signup link from login page and diplay signup form instead of login
                        let loginToSignup = document.getElementById('login-to-signup');
                        loginToSignup.addEventListener('click', function(event){
             event.preventDefault();
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
    //Images after signin or login button
                    imgAfterLogin.addEventListener('click', function(event){        
            event.preventDefault();
                if(event.target.tagName === 'IMG'){
                    alert('Click on the navigations at the top');
                    addContactPage();
                    console.log('addContactPage function called');
                }
               
                    })
          function toSaveAddedContact(){
            let contactName =document.getElementById('contact-name-input');
            let contactNumber =document.getElementById('contact-mobile-number-input');
            let contactEmail =document.getElementById('contact-email-input');
            let contactHome =document.getElementById('contact-home-address-input');
            let contactWorkPlace =document.getElementById('contact-work-address-input');
            let contactType =document.getElementById('contact-type-input');
            let contactGroupList = document.getElementById('contact-type-nav');
            let contactTypeValue = Array.from(contactType.children);
            let contactGroup = Array.from(contactGroupList.children);
            let contactSaveButton = document.getElementById('contact-save-button');
    //to save the text input by user
    //To simulate contact save buttonInput
           function saveButtonWorking(event){
                event.preventDefault()
                contactType;
                  for(let i=0; i<contactGroup.length; i++){
                        if(contactType.value.trim().toLowerCase() === contactGroup[i].textContent.trim().toLowerCase()){
                            console.log('successfully the same')
                          console.log('Contact appended successfully to:', contactGroup[i].textContent);
                         break;   
                        }
                    }
                    let contactCardContainer = document.getElementById('contact-card-container');
                    let newContactCard = document.createElement('div');
                    newContactCard.innerHTML = `
                   <h3>Contact Name: ${contactName.value.trim()}</h3> 
                   <p>Mobile Number: ${contactNumber.value.trim()}</p>
                   <p>Email Address: ${contactEmail.value.trim()}</p>
                   <p>Home Address: ${contactHome.value.trim()}</p>
                   <p>Work Place Address: ${contactWorkPlace.value.trim()}</p>
                   <p>Contact Type: ${contactType.value.trim()}</p>
                   <div id="button-container>
                   <button id="contact-edit-button">Edit</button>
                    <button id="contact-schedule-button">Schedule</button>
                    <button id="contact-delete-button">Delete</button>
                    </div>
                   `;
                   contactCardContainer.appendChild(newContactCard);
                   contactCardContainer.style.cssText = `
                   border: 30px groove  #098677;;
                   flex-wrap: wrap;
                   transition: ease-in 0.5s;
                   max-width: max-content;
                   box-sizing: border-box;
                   display: flex;
                   flex-direction: column;
                   gap: 0;
                   background-color: #098677;
                   color: #DAEEFA`;
                alert(`Contact Saved Successfully.(Simulated). You Saved ${contactName.value}. Go to Contact List nav to see the saved`);          
                //To display contact list based on clicked contact group
                for(let i=0; i<contactGroup.length; i++){
                    contactGroup[i].addEventListener('click', function(){
                        let similarityCheck = contactGroup[i].textContent.trim().toLowerCase() === contactType.value.trim().toLowerCase();
                        if(similarityCheck){
                            contactCardContainer.innerHTML = newContactCard.innerHTML;    
                        }else{
                            contactCardContainer.textContent = `No contact is added currently for ${contactGroup[i].textContent} `;    
                        }
                    });
                };
                let searchContact = document.getElementById('search-contact');
                searchContact.addEventListener('input', function(){
            let searchInput = searchContact.value.trim().toLowerCase();
            let searchableContact = contactCardContainer.textContent.trim().toLowerCase();
            let searchFound = searchableContact.includes(searchInput);
            if(searchFound){
                contactCardContainer.innerHTML = newContactCard.innerHTML
                contactCardContainer.style.display = 'flex'
            } else{
                contactCardContainer.textContent = `⚠️"${searchInput}" do not match any of your contact list.Check your input. Thank you!!`;
                contactCardContainer.style.cssText = `
                transition: ease-in 0.5s;
                background-color: red;`
            }
                searchContact.addEventListener('keydown', function(event){
                if(event.key === 'Backspace'){
                    console.log('backspace worked');
                if(searchFound){
                    contactCardContainer.innerHTML = newContactCard.innerHTML
                    contactCardContainer.style.cssText = `border: 30px groove  #098677;;
                   flex-wrap: wrap;
                   transition: ease-in 0.5s;
                   max-width: max-content;
                   box-sizing: border-box;
                   display: flex;
                   flex-direction: column;
                   gap: 0;
                   background-color: #098677;
                   color: #DAEEFA`
            } else{
                contactCardContainer.textContent = `⚠️"${searchInput}" do not match any of your contact list.Check your input. Thank you!!`;
                contactCardContainer.style.cssText = `
                transition: ease-in 0.5s;
                background-color: red;`
            }
        }
                })
            
            //Contact buttons
           let buttonContainer = newContactCard.querySelector('#button-container');
           let  contactEdit = newContactCard.querySelector('#contact-edit-button');
           let  contactSchedule = newContactCard.querySelector('#contact-schedule-button');
           let  contactDelete = newContactCard.querySelector('#contact-delete-button');
    
    
    
    
    
       
        })
             };
            contactSaveButton.addEventListener('click', saveButtonWorking);
        };
        toSaveAddedContact()
    //Quote function
         displayRandomQuote();
         window.addEventListener('click', function() {
            displayRandomQuote();
        });
          })