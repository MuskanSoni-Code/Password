  <script>
      const check = () => {
        const pass = document.getElementById("password");
        if (pass.type === "password") {
          pass.type = "text";
        } else {
          pass.type = "password";
        }
      };
    </script>
