document.addEventListener("DOMContentLoaded", () => {
	// Function to calculate responsive font size
	function getResponsiveFontSize() {
		const screenWidth = window.innerWidth;

		if (screenWidth < 576) {
			return 10; // Mobile devices
		} else if (screenWidth < 768) {
			return 12; // Small tablets
		} else if (screenWidth < 992) {
			return 14; // Medium devices
		} else {
			return 16; // Larger devices
		}
	}

	const ctx = document.getElementById("pieChart").getContext("2d");

	const pieChart = new Chart(ctx, {
		type: "pie",
		data: {
			labels: ["Red", "Blue", "Green"],
			datasets: [
				{
					data: [300, 50, 100],
					backgroundColor: ["red", "blue", "green"],
				},
			],
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			plugins: {
				legend: {
					labels: {
						color: "white",
						font: {
							size: getResponsiveFontSize(), // Call the function to get responsive font size
							weight: "bold",
							family: "Poppins",
						},
					},
					position: "top",
				},
			},
		},
	});

	// Update chart on window resize for responsive font size
	window.addEventListener("resize", () => {
		pieChart.options.plugins.legend.labels.font.size = getResponsiveFontSize(); // Update font size on resize
		pieChart.update(); // Redraw the chart with the new font size
	});
});
