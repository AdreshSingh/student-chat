import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const App = () => {
  // Example JSON data (Name and Score)
  const data = [
    {
      "name": "Yadav",
      "score": 24
    },
    {
      "name": "Nikhil kumar pal",
      "score": 35
    },
    {
      "name": "Harshit sharma",
      "score": 38
    },
    {
      "name": "Murtza Ali",
      "score": 35
    },
    {
      "name": "Avnish rajput",
      "score": 38
    },
    {
      "name": "Sarvendr Yadav",
      "score": 28
    },
    {
      "name": "Hariom sharma",
      "score": 26
    },
    {
      "name": "Anshu kashyap",
      "score": 38
    },
    {
      "name": "Alimohammad",
      "score": 37
    },
    {
      "name": "Vikash yadav",
      "score": 23
    },
    {
      "name": "Aahad",
      "score": 39
    },
    {
      "name": "Prashanti kumari",
      "score": 39
    },
    {
      "name": "Ritu goswami",
      "score": 39
    },
    {
      "name": "Neha sharma",
      "score": 36
    },
    {
      "name": "Prens singh",
      "score": 14
    },
    {
      "name": "Dileep kumar",
      "score": 34
    },
    {
      "name": "Laki",
      "score": 18
    },
    {
      "name": "Khushi",
      "score": 29
    },
    {
      "name": "Mohit kumar",
      "score": 34
    },
    {
      "name": "Sweta yadav",
      "score": 37
    },
    {
      "name": "Rohit",
      "score": 20
    },
    {
      "name": "Anushka yadav",
      "score": 36
    },
    {
      "name": "Sameer Yadav Ji brand",
      "score": 28
    },
    {
      "name": "Shakuntala Rajput",
      "score": 36
    },
    {
      "name": "Apurva yadav",
      "score": 37
    }
  ]

  // Find the highest and lowest scores to adjust gradient range
  const maxScore = Math.max(...data.map(student => student.score));
  const minScore = Math.min(...data.map(student => student.score));

  // Helper function to calculate gradient strength based on score
  const calculateGradient = (score) => {
    // Normalize score between 0 and 1
    const normalizedScore = (score - minScore) / (maxScore - minScore);

    // Generate a dynamic hue based on score (e.g., from blue to red)
    const hue = 240 - normalizedScore * 240; // 240 is blue, 0 is red

    // Lightness varies based on the score (lighter for lower scores)
    const lightness = 50 + normalizedScore * 20; // Lightness between 50% and 70%

    // Return an HSL color value (hue, saturation, lightness)
    return `hsl(${hue}, 70%, ${lightness}%)`;
  };

  // Chart data and configuration
  const chartData = {
    labels: data.map(student => student.name), // Student names for X-axis
    datasets: [
      {
        label: 'Scores',
        data: data.map(student => student.score), // Student scores for Y-axis
        backgroundColor: data.map(student => calculateGradient(student.score)), // Dynamic gradient color
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  };


  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Student Scores Bar Chart' }
    },
    scales: {
      y: { beginAtZero: true } // Y-axis starts at 0
    }
  };

  return (
    <div>
      <h2>Student Scores</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default App;
