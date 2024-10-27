      let UserNum = Number(prompt("Впиши число от 1 до 100"));
      let calc = "";

      if (UserNum >= 1 && UserNum <= 100) {
        for (let num = 1; num <= 100; num++) {
          if (num <= UserNum) {
            calc += `${num * num}\n`;
          }
        }
        alert(calc);
      } else {
        alert("Неверное число");
      }