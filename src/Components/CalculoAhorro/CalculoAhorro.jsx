import React, { useState, useEffect } from 'react';
import './CalculoAhorro.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import { Chart } from 'primereact/chart';

export default function CalculoAhorro() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currency, setCurrency] = useState('Pesos');
    const [amount, setAmount] = useState('100000'); // Monto por defecto en 100000
    const [frequency, setFrequency] = useState('Mes');
    const [years, setYears] = useState('1');
    const [result, setResult] = useState(null);
    const [chartData, setChartData] = useState({
        labels: ['año 1', 'año 2', 'año 3', 'año 4'],
        datasets: [
            {
                label: 'Valor futuro',
                data: [0, 700, 1400, 2100, 2800],
                fill: true,
                tension: 0.4,
                backgroundColor: '#11edcc70'
            }
        ]
    });

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const handleCurrencyChange = (e) => setCurrency(e.target.value);
    const handleAmountChange = (e) => setAmount(e.target.value);
    const handleFrequencyChange = (e) => setFrequency(e.target.value);
    const handleYearsChange = (e) => setYears(e.target.value);

    const calculate = () => {
        const periodsPerYear = frequency === 'Mes' ? 12 : 52;
        const totalPeriods = parseInt(years) * periodsPerYear;
        const periodicAmount = parseFloat(amount);
        const estimatedAnnualReturn = 0.1; // Supongamos un 10% de retorno anual

        // Fórmula simple de interés compuesto
        const futureValue = periodicAmount * ((Math.pow(1 + estimatedAnnualReturn / periodsPerYear, totalPeriods) - 1) / (estimatedAnnualReturn / periodsPerYear));
        const values = [];

        if (parseInt(years) === 1) {
            for (let i = 1; i <= totalPeriods; i++) {
                const periodFutureValue = periodicAmount * ((Math.pow(1 + estimatedAnnualReturn / periodsPerYear, i) - 1) / (estimatedAnnualReturn / periodsPerYear));
                values.push(periodFutureValue.toFixed(2));
            }
            setChartData({
                labels: Array.from({ length: totalPeriods }, (_, i) => `Mes ${i + 1}`),
                datasets: [
                    {
                        label: 'Valor futuro',
                        data: values,
                        fill: true,
                        tension: 0.4,
                        backgroundColor: '#11edcc70'
                    }
                ]
            });
        } else {
            for (let i = 1; i <= parseInt(years); i++) {
                const yearlyFutureValue = periodicAmount * ((Math.pow(1 + estimatedAnnualReturn / periodsPerYear, i * periodsPerYear) - 1) / (estimatedAnnualReturn / periodsPerYear));
                values.push(yearlyFutureValue.toFixed(2));
            }
            setChartData({
                labels: Array.from({ length: years }, (_, i) => `Año ${i + 1}`),
                datasets: [
                    {
                        label: 'Valor futuro',
                        data: values,
                        fill: true,
                        tension: 0.4,
                        backgroundColor: '#11edcc70'
                    }
                ]
            });
        }

        setResult({
            totalAmount: futureValue.toFixed(2),
            totalPeriods,
            values
        });

        closeModal(); // Cerrar el modal después de calcular
    };

    useEffect(() => {
        calculate();
    }, []);

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

    const formatNumber = (num) => {
        return parseFloat(num).toLocaleString('es-ES', { maximumFractionDigits: 0 });
    };

    return (
        <div className='CalculoContain'>
            <div className='CalculoContainText'>
                <h2>Calculá tu <span>ahorro</span></h2>
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
                <div className='bgParrafo'>
                    <FontAwesomeIcon icon={faChartLine} size="2x" />
                    <p>Tus ahorros van a rendir al % anual en dólares. Tus ganancias las cobrás mensualmente, y tu capital lo podés retirar a partir de los 180 días.</p>
                </div>
            </div>
            <div className='Calculo2ContainText'>
                <h3>Si invertís <strong>{currency} {amount ? formatNumber(amount) : '0'}</strong> por {frequency.toLowerCase()}, en <strong>{years} años</strong> recibirás: <strong> {currency} {result ? formatNumber(result.totalAmount) : '0.00'}</strong></h3>

                <div className="card">
                    <Chart type="line" data={chartData} options={chartOptions} />
                </div>
                <button className='btnCal' onClick={openModal}>Crear Inversión</button>
            </div>

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className='Modal' overlayClassName='Overlay'>
                <h2>Calcula tu Inversión</h2>
                <form>
                    <div>
                        <label>Moneda:</label>
                        <select value={currency} onChange={handleCurrencyChange} required>
                            <option value="Pesos">Pesos</option>
                            <option value="USD">USD</option>
                        </select>
                    </div>
                    <div>
                        <label>Monto a invertir:</label>
                        <input type="number" placeholder='Ingrese un monto' value={amount} onChange={handleAmountChange} required />
                    </div>
                    <div>
                        <label>Frecuencia de inversión:</label>
                        <select value={frequency} onChange={handleFrequencyChange} required>
                            <option value="Mes">Mensual</option>
                            <option value="Semana">Semanal</option>
                        </select>
                    </div>
                    <div>
                        <label>Duración en años:</label>
                        <select value={years} onChange={handleYearsChange} required>
                            <option value="1">1 año</option>
                            <option value="2">2 años</option>
                            <option value="3">3 años</option>
                            <option value="4">4 años</option>
                            <option value="5">5 años</option>
                        </select>
                    </div>
                    <button className='btnCal' type="button" onClick={calculate} required>Calcular</button>
                </form>
            </Modal>
        </div>
    );
}
