$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});

(function() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBSJOM5DL0p-ZQnn3BVU03NN_Z9PORn7kc",
        authDomain: "testangularfire2-4f7dc.firebaseapp.com",
        databaseURL: "https://testangularfire2-4f7dc.firebaseio.com",
        storageBucket: "testangularfire2-4f7dc.appspot.com",
        messagingSenderId: "294536395450"
    };
    firebase.initializeApp(config);

    //Get Elements
    const txtEmail = document.getElementById('txtEmail');
    const txtpassword = document.getElementById('txtPassword');

    const txtEmail_login = document.getElementById('txtEmail_login');
    const txtpassword_login = document.getElementById('txtPassword_login');

    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');

    //Add login event
    btnLogin.addEventListener('click', e=> {
        // Get email and password
        const email = txtEmail_login.value;
        const pass = txtpassword_login.value;
        const auth = firebase.auth();
        //Sign in
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
        e.preventDefault();
    });

    //Add signup event
    btnSignUp.addEventListener('click', e => {
        // Get email and password
        const email = txtEmail.value;
        const pass = txtpassword.value;
        const auth = firebase.auth();
        //Sign in
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
        e.preventDefault();
    });

    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
        e.preventDefault();
    });

    // Add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
            btnLogout.classList.remove('hide');
        }
        else{
            console.log('not logged in');
            btnLogout.classList.add('hide');
        }
    });
}());