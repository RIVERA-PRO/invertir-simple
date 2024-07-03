import React, { useState, useEffect } from 'react';
import './CalculoAhorro.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { Chart } from 'primereact/chart';

export default function CalculoMeta() {
    const [currency, setCurrency] = useState('Pesos');
    const [goal, setGoal] = useState(1000000);
    const [months, setMonths] = useState(12);
    const [result, setResult] = useState(null);
    const [chartData, setChartData] = useState({
        labels: Array.from({ length: 12 }, (_, i) => `Mes ${i + 1}`),
        datasets: [
            {
                label: 'Valor futuro',
                data: Array(12).fill(0),
                fill: true,
                tension: 0.4,
                backgroundColor: '#11edcc70'
            }
        ]
    });

    const handleCurrencyChange = (e) => setCurrency(e.target.value);
    const handleGoalChange = (e) => setGoal(e.target.value);
    const handleMonthsChange = (e) => setMonths(e.target.value);

    const calculate = () => {
        const periodicAmount = parseFloat(goal) / months;
        const estimatedAnnualReturn = 0.1;
        const monthlyReturn = estimatedAnnualReturn / 12;

        const futureValue = periodicAmount * ((Math.pow(1 + monthlyReturn, months) - 1) / monthlyReturn);
        const monthlyValues = [];

        for (let i = 1; i <= months; i++) {
            const monthlyFutureValue = periodicAmount * ((Math.pow(1 + monthlyReturn, i) - 1) / monthlyReturn);
            monthlyValues.push(monthlyFutureValue.toFixed(2));
        }

        setResult({
            totalAmount: futureValue.toFixed(2),
            monthlyValues
        });

        setChartData({
            labels: Array.from({ length: months }, (_, i) => `Mes ${i + 1}`),
            datasets: [
                {
                    label: 'Valor futuro',
                    data: monthlyValues,
                    fill: true,
                    tension: 0.4,
                    backgroundColor: '#de11edb6'
                }
            ]
        });
    };

    const [chartOptions, setChartOptions] = useState({});
    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartOptions(options);
    }, []);

    useEffect(() => {
        calculate();
    }, [goal, months]);

    return (
        <div className='CalculoContain' id='CalculoContain'>
            <div className='CalculoContainText' id='CalculoContainText'>
                <h2>Calculá tu <span>meta</span></h2>
                <h3>Moneda</h3>
                <div className='deFlexInputsCalculo'>
                    <div className='deFlexInputsCalculo'>
                        <input type="radio" value="Pesos" checked={currency === 'Pesos'} onChange={handleCurrencyChange} />
                        <label>Pesos</label>
                    </div>
                    <div className='deFlexInputsCalculo'>
                        <input type="radio" value="USD" checked={currency === 'USD'} onChange={handleCurrencyChange} />
                        <label>Dolares</label>
                    </div>
                </div>
                <div className='deFlexInputsCalculo'>
                    <label>Objetivo a cumplir:</label>
                    <input type="range" min="500000" max="5000000" value={goal} step="100000" onChange={handleGoalChange} />
                    <span>{currency} {goal}</span>
                </div>
                <div className='deFlexInputsCalculo'>
                    <label>Plazo para llegar a tu meta (meses):</label>
                    <input type="range" min="12" max="60" value={months} step="12" onChange={handleMonthsChange} />
                    <span>{months} meses</span>
                </div>
                <div className='bgParrafo' id='bgParrafo'>
                    <FontAwesomeIcon icon={faChartLine} size="2x" />
                    <p>Tus ahorros van a rendir al 10% anual en dólares. Podrás retirar tu inversión a partir de los 24 meses de realizada la inversión.</p>
                </div>
            </div>
            <div className='Calculo2ContainText'>
                <h3>Para llegar a <strong>{currency} {goal}</strong> en <strong>{months} meses</strong>, deberás invertir: <strong>{currency} {result ? result.totalAmount : '0.00'}</strong></h3>

                <div className="card">
                    <Chart type="line" data={chartData} options={chartOptions} />
                </div>
            </div>
        </div>
    );
}
