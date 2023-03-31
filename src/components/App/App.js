import React, { useState } from 'react';
import Header from '../Header/Header';
import IncomeForm from '../IncomeForm/IncomeForm';
import TaxSummary from '../TaxSummary/TaxSummary';
import ITRFormRecommendation from '../ITRFormRecommendation/ITRFormRecommendation';
import { calculateTax, recommendITRForm } from '../../utils/taxCalculations';

function App() {
    const [taxDetails, setTaxDetails] = useState(null);
    const [itrForm, setItrForm] = useState(null);

    const handleSubmit = (incomeData) => {
        const taxInfo = calculateTax(incomeData);
        setTaxDetails(taxInfo);

        const recommendedForm = recommendITRForm(incomeData);
        setItrForm(recommendedForm);
    };

    return (
        <div className="App">
            <Header />
            <IncomeForm onSubmit={handleSubmit} />
            {taxDetails && <TaxSummary taxDetails={taxDetails} />}
            {itrForm && <ITRFormRecommendation formName={itrForm} />}
        </div>
    );
}

export default App;
