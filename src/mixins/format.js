export default {
    methods: {
        formatUSD(number) {
            const formatter = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            });

            return formatter.format(number);
        },
        compactFormatUSD(number) {
            const formatter = new Intl.NumberFormat("en-US", {
                notation: "compact",
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 0,
                maximumFractionDigits: 2,
            });

            return formatter.format(number);
        },
        formatPercentage(number) {
            const formatter = new Intl.NumberFormat("en-US", {
                style: "percent",
                minimumFractionDigits: 0,
                maximumFractionDigits: 3,
            });

            return formatter.format(number);
        },
    },
}