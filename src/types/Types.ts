import CURRENCY from "@/helpers/currencies";

/**
 * The type for a specific donation.
 */
export type DonationType = {
    name: string | null,
    amount: number,
    currency: CURRENCY
};

/**
 *  The type for asking new questions.
 */
export type EmailQuestionType = {
    email: string,
    question: string
};