
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("toggle-bg");
    let toggled = false;
  
    btn.addEventListener("click", () => {
      if (!toggled) {
        document.body.style.backgroundColor = "#e0f7fa"; 
        btn.textContent = "Вернуть фон";
      } else {
        document.body.style.backgroundColor = "#f9f9f9"; 
        btn.textContent = "Изменить фон";
      }
      toggled = !toggled;
    });
  });
  