
document.addEventListener('DOMContentLoaded', () => {
   
    const portfolioState = {
        metrics: {
            niftyFifty: 24315.80,
            niftyDayChange: "+0.85%"
        },
        allocations: [
            { name: 'Equity Mutual Funds', value: 747000, type: 'equity' },
            { name: 'Debt & Corporate Bonds', value: 311250, type: 'debt' },
            { name: 'Sovereign Gold Bonds', value: 186750, type: 'gold' }
        ]
    };

    
    const computeTotalNetWorth = () => {
        return portfolioState.allocations.reduce((sum, current) => sum + current.value, 0);
    };

    
    const initializeMetrics = () => {
        const totalNetWorth = computeTotalNetWorth();
        
       
        const netWorthValueEl = document.querySelector('.dashboard-grid article:nth-child(1) .metric-value');
        const allocationListEl = document.querySelector('.allocation-list');

        
        if (netWorthValueEl) {
            netWorthValueEl.textContent = window.Utils.formatINR(totalNetWorth);
        }

        if (allocationListEl) {
            allocationListEl.innerHTML = portfolioState.allocations.map(asset => {
                const percentageStr = window.Utils.getPercentage(asset.value, totalNetWorth);
                return `
                    <li>
                        <span class="dot ${asset.type}"></span> 
                        ${asset.name.split(' ')[0]} (${percentageStr})
                    </li>
                `;
            }).join('');
        }
    };

   
    initializeMetrics();
});