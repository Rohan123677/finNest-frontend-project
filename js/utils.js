
const Utils = {
    /**
     * Formats a raw number into Indian National Rupee (INR) currency style.
     * Example: 1245000 -> ₹12,45,000
     * @param {number} amount - The numerical asset value
     * @returns {string} Formatted currency string
     */
    formatINR: (amount) => {
        if (isNaN(amount)) return '₹0';
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount);
    },

    /**
     * Calculates the percentage weights of total allocations
     * @param {number} inputVal - The individual asset value
     * @param {number} totalSum - The aggregated balance metric
     * @returns {string} Formatted percentage
     */
    getPercentage: (inputVal, totalSum) => {
        if (!totalSum || isNaN(inputVal)) return '0%';
        const ratio = (inputVal / totalSum) * 100;
        return `${ratio.toFixed(0)}%`;
    }
};


window.Utils = Utils;