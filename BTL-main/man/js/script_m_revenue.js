document.addEventListener("DOMContentLoaded", () => {
    fetch('/man/data/db_revenue.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById("revenue-amount").textContent = data.totalRevenue.toLocaleString() + " VND";
        })
        .catch(error => console.error("Error loading revenue data:", error));
});
