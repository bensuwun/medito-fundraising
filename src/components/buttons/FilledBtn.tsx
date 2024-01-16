/**
 * Returns a filled button.
 * @param text: string - The text to show in the button. 
 */
export default function FilledBtn(
    {
        text,
        onClick
    }: {
        text: string,
        onClick?: (() => void)
    }) 
{
    return (
        <button className="px-4 py-2 bg-gray-600 text-white rounded-md" onClick={onClick}>
            {text}
        </button>
    )
};