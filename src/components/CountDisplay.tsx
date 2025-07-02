type CountDisplayProps = {
    likeCount: number;
    onHandleLikeCount: () => void;
};

const CountDisplay = ({likeCount, onHandleLikeCount}: CountDisplayProps) => {
    return (
        <div>
            <p>いいねの数: {likeCount}</p>
            <button onClick={onHandleLikeCount}>いいね!</button>
        </div>
    );
};

export default CountDisplay;
