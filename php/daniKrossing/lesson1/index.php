<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <title>Contact form tutorial</title>

</head>

<body class="text-center">
    <h1>SEND MAIL</h1>
    <div class="container">
        <form action="sendMeEmail.php" method="post" class="container-fluid">
            <div class="form-group">
                <label for="name">Name</label>
                <input name="name" type="text" class="form-control" id="name"
                    placeholder="Input your name" required>
            </div>
            <div class="form-group">
                <label for="lastname">Lastname</label>
                <input name="lastname" type="text" class="form-control" id="lastname"
                    placeholder="Input your lastname" required>
            </div>
            <div class="form-group">
                <label for="email">E-mail</label>
                <input name="mail" type="email" id="email" class="form-control" id="email"
                    placeholder="Input your e-mail" required>
            </div>
            <div class="form-group">
                <label for="subject">Subject</label>
                <input name="subject" type="text" class="form-control" id="subject" placeholder="Subject"
                    required>
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea name="message" id="message" class="form-control" placeholder="Message" required
                    cols="80" rows="10"></textarea>
            </div>
            <input class="btn btn-primary" type="submit" value="Send mail">

        </form>
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
        integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous">
    </script>
</body>

</html>