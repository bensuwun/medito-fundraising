import CURRENCY from "@/helpers/currencies";

/**
 * The type for a specific donation.
 */
export type DonationType = {
    name: string | null,
    amount: number,
    currency: string
};

/**
 *  The type for asking new questions.
 */
export type EmailQuestionType = {
    email: string,
    question: string
};

/**
 * The type for an incentive.
 */
export type IncentiveType = {
    id: string,
    description: string
}

/**
 * The type for a tier reward.
 */
export type TierRewardType = {
    id: string,
    tier: string,
    requiredAmt: number,
    incentives: IncentiveType[]
}

/**
 * The type for a FAQ.
 */
export type FAQType = {
    id: string,
    question: string,
    answer: string
}