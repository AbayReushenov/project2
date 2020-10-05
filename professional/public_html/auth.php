<!doctype html>
<html lang="ru">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

    <title>Авторизация на сайте</title>
  </head>
  <body>
    <div class="container pt-5">
      <h1 class="text-center">Авторизация на сайте</h1>
      <div class="col-sm-6 mx-auto my-5">
        <form onsubmit="sendForm(this);return false;">
          <div class="form-group">
            <input name="email" type="email" class="form-control" placeholder="Email">
          </div>
          <div class="form-group">
            <input name="pass" type="password" class="form-control" placeholder="Пароль">
            <p id="info" style="color:red"></p>
          </div>
          <div class="form-group">
            <input type="submit" class="form-control btn btn-primary" value="Войти">
          </div>
        </form>
      </div>
    </div>
    <script>
      async function sendForm(form){
        info.innerHTML = '';
        let response = await fetch("php/auth_obr.php",{
          method: "POST",
          body: new FormData(form)
        });
        let result = await response.text();
        if(result=="success")
          location.href = "lk.php";
        else
          info.innerHTML = `Логин или пароль ввдён неверно!`;
      }
    </script>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </body>
</html>