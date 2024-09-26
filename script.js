// const ctx = document.getElementById('pieChart').getContext('2d');

// const pieChart = new Chart(ctx, {
//     type: 'pie',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow'],
//         datasets: [{
//             label: 'My First Dataset',
//             data: [300, 50, 100],
//             backgroundColor: [
//                 'rgb(255, 99, 132)',
//                 'rgb(54, 162, 235)',
//                 'rgb(255, 205, 86)'
//             ],
//             hoverOffset: 4
//         }]
//     },
//     options: {
//         responsive: true,
//         maintainAspectRatio: false,
//         plugins: {
//             legend: {
//                 position: 'bottom'
//             }
//         }
//     }
// });




document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('pieChart').getContext('2d');
    
    const pieChart = new Chart(ctx, {
        type: 'pie', 
        data: {
            labels: ['Red', 'Blue', 'Green'],
            datasets: [{
                data: [300, 50, 100], 
                backgroundColor: ['red', 'blue', 'green'], 
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: 'white',
                        font: {
                            size: 12, 
                            weight: 'bold', 
                            family: 'Poppins'
            
                        }
                         
                    },
                    position: 'top' 
                }
            }
        }
    });
});
