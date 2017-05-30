$(document).ready(function() {

        
        $(document).on("submit", "#registerForm", registerSubmit);

        function registerSubmit(event){

            var usernameInput = $("#username");
            var passwordInput = $("#password");
            var emailInput = $("#email");

             event.preventDefault();
                // Don't do anything if the name fields hasn't been filled out
                if (!nameInput.val().trim().trim()) {
                return;
            }
            // Calling the upsertUser function and passing in the values from the form inputs
            upsertUser({
              name: usernameInput.val().trim(),
              email: emailInput.val().trim(),
              password: passwordInput.val().trim()
            });

            console.log("Username: " + usernameInput);
            console.log("Email: " + emailInput);
            console.log("Password: " + passwordInput);

            // db.Author.create({
            //      name: req.body.title,
            //      password: req.body.summary
            //  })
            // .then(function() {
            //      res.redirect('/category');

            // });

            function upsertUser(userData) {
            $.post("/api/authors", userData)
              .then(getAuthors);
            }

    }

    

});