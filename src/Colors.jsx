import { useState } from "react";

const Colors = () => {
    const [color, setColor] = useState();
    const [size, setSize] = useState();
    const [period, setPeriod] = useState("");

    const getColor = () => {
        const colors = ["RED", "GREEN"];
        const sizes = ["Big", "Small"];
        const randomIndex = Math.floor(Math.random() * colors.length);
        const randomSize = Math.floor(Math.random() * sizes.length);
        setColor(colors[randomIndex]);
        setSize(sizes[randomSize]);
    }

    const handlePeriodChange = (e) => {
        const value = e.target.value;
        // Check if the value is exactly 4 digits
        if (/^\d{4}$/.test(value)) {
            setPeriod(value);
        } else {
            // Reset the period state if the input value is invalid
            setPeriod("");
        }
    }

    return (
        <div className="border-2 gap-12 shadow-xl min-h-[90vh] md:min-h-[300px] m-3 p-8 md:m-4 rounded bg-[#3f3f3f] text-[#d9ac4f] flex flex-col items-center">
            <div className="flex gap-3 flex-col md:flex-row">
                <label htmlFor="period" className="font-medium text-xl">Enter Last 4 Period Number:</label>
                <input
                    type="number"
                    id="period"
                    placeholder="9421"
                    min="1000"
                    max="9999"
                    onChange={handlePeriodChange}
                    className="border-2 rounded-xl px-2"
                />
            </div>
            <button onClick={getColor} className="bg-[#d9ac4f] hover:bg-[#f8c359] text-[#97590e] border-2 mx-auto px-6 py-1 rounded-full font-bold">Enter</button>

            {color && size && period &&
                <div className="flex flex-col gap-8 items-center">
                    <h3 className="font-bold text-2xl underline">Result</h3>
                    <p className={`text-${color.toLowerCase()}-600 text-xl font-bold`}>{color}</p>
                    <p className="text-xl font-bold">{size}</p>
                </div>
            }
        </div>
    )
}

export default Colors;
