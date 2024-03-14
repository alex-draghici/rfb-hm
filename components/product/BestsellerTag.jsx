const BestsellerTag = ({ isBestseller }) => {
    if (!isBestseller) return null;

    return (
        <span aria-label="Bestseller" className="tag-bestseller absolute top-0 left-0 bg-[#036256] text-white text-xs py-0.5 px-1 rounded-tl z-10">
            Bestseller
        </span>
    );
};

export default BestsellerTag