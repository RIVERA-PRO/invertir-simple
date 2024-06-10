import React, { useState } from 'react';
import './CalculoAhorro.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';

export default function CalculoAhorro() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currency, setCurrency] = useState('Pesos');
    const [amount, setAmount] = useState('');
    const [frequency, setFrequency] = useState('Mes');
    const [years, setYears] = useState('');
    const [result, setResult] = useState(null);

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

        setResult({
            totalAmount: futureValue.toFixed(2),
            totalPeriods,
        });

        closeModal();
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
                        <input type="radio" value="Dolares" checked={currency === 'Dolares'} onChange={handleCurrencyChange} />
                        <label>Dolares</label>
                    </div>
                </div>
                <div className='bgParrafo'>
                    <FontAwesomeIcon icon={faChartLine} size="2x" />
                    <p>Tus ahorros van a rendir al % anual en dólares. Tus ganancias las cobrás mensualmente, y tu capital lo podés retirar a partir de los 180 días.</p>
                </div>
            </div>
            <div className='Calculo2ContainText'>
                <h2>Si invertís <strong>{currency} {amount || '0'}</strong> por {frequency.toLowerCase()}, en <strong>{years} años</strong> recibirás</h2>
                <h3>{currency} {result ? result.totalAmount : '0.00'}</h3>
                <div className='dashboardCalculo'>
                    {result && <div>
                        <p>Total invertido: {currency} {result.totalAmount}</p>
                        <p>Total de períodos: {result.totalPeriods}</p>
                    </div>}
                </div>
                <button className='btnCal' onClick={openModal}>Crear Inversión</button>
            </div>

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className='Modal' overlayClassName='Overlay'>
                <h2>Calcula tu Inversión</h2>
                <form>
                    <div>
                        <label>Moneda:</label>
                        <select value={currency} onChange={handleCurrencyChange}>
                            <option value="Pesos">Pesos</option>
                            <option value="Dolares">Dolares</option>
                        </select>
                    </div>
                    <div>
                        <label>Monto a invertir:</label>
                        <input type="number" value={amount} onChange={handleAmountChange} />
                    </div>
                    <div>
                        <label>Frecuencia de inversión:</label>
                        <select value={frequency} onChange={handleFrequencyChange}>
                            <option value="Mes">Mensual</option>
                            <option value="Semana">Semanal</option>
                        </select>
                    </div>
                    <div>
                        <label>Duración en años:</label>
                        <input type="number" value={years} onChange={handleYearsChange} />
                    </div>
                    <button className='btnCal' type="button" onClick={calculate}>Calcular</button>
                </form>
            </Modal>
        </div>
    );
}
