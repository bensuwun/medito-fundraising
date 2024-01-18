import CURRENCY from "@/helpers/currencies";

type DonationType = {
    name: string | null,
    amount: number,
    currency: CURRENCY
};

export default DonationType;