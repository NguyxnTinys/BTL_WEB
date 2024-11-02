document.addEventListener("DOMContentLoaded", function() {
    //Button dropdown
    const dropdownButton = document.querySelector(".button");
    const dropdownContainer = document.querySelector(".dropdown-container");

    dropdownContainer.style.visibility = "hidden";
    
    dropdownButton.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent the click from bubbling up to the document
        const isVisible = dropdownContainer.style.visibility === "visible";
        dropdownContainer.style.visibility = isVisible ? "hidden" : "visible";
        dropdownButton.classList.toggle("button-no-border", !isVisible);
    });

    document.addEventListener("click", (event) => {
        if (!dropdownButton.contains(event.target) && !dropdownContainer.contains(event.target)) {
            dropdownContainer.style.visibility = "hidden";
            dropdownButton.classList.remove("button-no-border");
        }
    });


    // Initialize Chart.js
    const theChart = document.getElementById("chart-canvas").getContext("2d");
    const dataSets = {
        weekly: {
            labels: ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"],
            data: [10000, 12000, 9000, 15000, 13000, 11000, 16000],
            label: "Doanh thu trong tuần"
        },
        monthly: {
            labels: ["Tuần #1", "Tuần #2", "Tuần #3", "Tuần #4"],
            data: [10000, 342243, 213123, 1231],
            label: "Doanh thu trong tháng"
        },
        yearly: {
            labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
            data: [123123, 213123, 45354, 53452, 534535, 35143, 634624, 645646, 36547, 43622, 262457, 167654],
            label: "Doanh thu trong năm"
        }
    };

    let myChart = new Chart(theChart, {
        type: "bar",
        data: {
            labels: dataSets.weekly.labels,
            datasets: [{
                label: dataSets.weekly.label,  
                data: dataSets.weekly.data,
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Function to update chart based on selected timeframe
    function updateChart(timeframe) {
        myChart.data.labels = dataSets[timeframe].labels;
        myChart.data.datasets[0].data = dataSets[timeframe].data;
        myChart.data.datasets[0].label = dataSets[timeframe].label;
        myChart.update();
    }

    function updateChartAndButton(timeframe, activeButtonId) {
        updateChart(timeframe);
        setActiveButton(activeButtonId);
    }

    // Event listeners for pagination buttons
    document.getElementById("weeklyBtn").addEventListener("click", () => updateChartAndButton("weekly", "weeklyBtn"));
    document.getElementById("monthlyBtn").addEventListener("click", () => updateChartAndButton("monthly", "monthlyBtn"));
    document.getElementById("yearlyBtn").addEventListener("click", () => updateChartAndButton("yearly", "yearlyBtn"));

    document.getElementById("weeklyBtn").classList.add("active");

    function setActiveButton(activeId) {
        document.querySelectorAll(".pagination-bar > button").forEach(button => {
            button.classList.remove("active");
        });
        document.getElementById(activeId).classList.add("active");
    }

    document.getElementById("weeklyBtn").addEventListener("click", () => {
        setActiveButton("weeklyBtn");
    })

    document.getElementById("monthlyBtn").addEventListener("click", () => {
        setActiveButton("monthlyBtn");
    })

    document.getElementById("yearlyBtn").addEventListener("click", () => {
        setActiveButton("yearlyBtn");
    })
}); 