const DiscountTag = ({ discount }) => {
    if (!discount || discount === "0") return null;

    return (
        <div aria-label="Discount" className="tag-discount absolute top-[-15px] right-[-15px] flex items-center justify-center size-10 rounded-full z-10 bg-[#593BCE]">
            <span className="text-white text-xs rotate-[30deg]">-{discount}%</span>
        </div>
    );
};

export default DiscountTag;