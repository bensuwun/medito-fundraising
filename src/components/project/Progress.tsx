import { Button } from "@mantine/core";

/**
 * Props:
 *  - Amount Raised
 *  - Target Amount
 */
export default function ProgressBar() {
    return (
        <div className="flex flex-col items-center gap-2">
            <p>
                <span className="font-bold">US$ 7,000</span> raised
            </p>
            {/* Progress Bar Container */}
            <div className="flex w-full rounded-md relative h-3 bg-gray-200">
                <div className="rounded-md border bg-gray-400 relative w-1/2">
                </div>
            </div>
            <p>
                of goal <span className="font-bold">US$ 10,000 </span>
            </p>
        </div>
    )
};