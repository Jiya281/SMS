// import React, { useRef, useEffect, useState } from "react";
// import { Pie } from "react-chartjs-2";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import { styled } from "@mui/material/styles";

// const data = {
//   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         "pink",
//         "#17a2b8",
//         "#ffc107",
//         "rgb(87, 185, 96)",
//         "rgba(153, 102, 255, 0.2)",
//         "rgba(255, 159, 64, 0.2)",
//       ],
//       borderColor: [
//         "rgba(255, 99, 132, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//         "rgba(255, 159, 64, 1)",
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

// // Styled component for chart container
// const ChartContainer = styled(Box)(({ theme }) => ({
//   marginTop: theme.spacing(2),
//   padding: theme.spacing(2),
//   backgroundColor: theme.palette.background.paper,
//   borderRadius: theme.shape.borderRadius,
//   boxShadow: theme.shadows[2],
// }));

// const PieChart = () => {
//   const [chartInstance, setChartInstance] = useState(null);
//   const chartRef = useRef(null);

//   useEffect(() => {
//     if (chartInstance) {
//       chartInstance.destroy();
//     }

//     const newChartInstance = new Chart(chartRef.current, {
//       type: "pie",
//       data: data,
//       options: {
//         responsive: true,
//         plugins: {
//           legend: {
//             position: "top",
//           },
//         },
//       },
//     });

//     setChartInstance(newChartInstance);

//     return () => {
//       if (chartInstance) {
//         chartInstance.destroy();
//       }
//     };
//   }, [data]);

//   return (
//     <ChartContainer>
//       <Typography variant="h6" gutterBottom>
//         Pie Chart
//       </Typography>
//       <canvas ref={chartRef} />
//     </ChartContainer>
//   );
// };

// export default PieChart;
