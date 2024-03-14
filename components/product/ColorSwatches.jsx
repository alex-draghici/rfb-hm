import ToolTip from "../ToolTip";

const ColorSwatches = ({ colors, onSwatchClick, selectedColor, isSwatchClicked }) => {
    return (
        <div className="swatches flex mt-4 space-x-1">
            {colors.map((color, index) => (
                color.hex && (
                    <ToolTip key={index} message={color.color}>
                        <button
                            className={`size-4 relative rounded-full transition duration-700 ease-in-out hover:scale-[1.125] ${isSwatchClicked && color.hex === selectedColor ? 'active' : ''}`}
                            style={{backgroundColor: color.hex}}
                            onClick={(e) => onSwatchClick(e, color)}
                            aria-label={`Color ${color.color}`}
                        ></button>
                    </ToolTip>
                )
            ))}
        </div>
    );
};

export default ColorSwatches;
