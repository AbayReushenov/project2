<!doctype html>
<html lang="ru">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

    <title>Регитрация на сайте</title>
  </head>
  <body>
    <div class="container pt-5">
      <h1 class="text-center">Регистрация на сайте</h1>
      <div class="col-sm-6 mx-auto my-5">
        <form onsubmit="sendForm(this); return false;">
          <div class="form-group">
            <input name="name" type="text" class="form-control" placeholder="Имя">
          </div>
          <div class="form-group">
            <input name="lastname" type="text" class="form-control" placeholder="Фамилия">
          </div>
          <div class="form-group">
            <input name="email" type="email" class="form-control" placeholder="Email">
            <p id="info" style="color:red;"></p>
          </div>
          <div class="form-group">
            <input name="pass" type="password" class="form-control" placeholder="Пароль">
          </div>
          <div class="form-group">
            <input type="submit" class="form-control btn btn-primary" value="Зарегистрироваться">
          </div>
        </form>
      </div>
    </div>
    <script>
      async function sendForm(form){
        let formData = new FormData(form);
        let response = await fetch("php/reg_obr.php",{
          method: "POST",
          body: formData
        });
        let result = await response.text();
        if(result == "success"){
          location.href="auth.php";
        }else if(result=="exist"){
          info.innerText = `Такой пользователь уже есть!`;
        }else{
          console.log("Неизвестная ошибка");
        }
      }
    </script>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </body>
</html>