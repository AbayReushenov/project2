<html>
<head><title>PHP says hello</title></head> 
<body>
    <b>
        <?php
        print "Hello, World!";
        ?>
    </b>
    <form method="POST" action="sayhello.php"> Your Name: 
        <input     type="text"    name="user"     />
        <br/>
        <button type="submit"">Say Hello</button> 
    </form>

</body>
</html>