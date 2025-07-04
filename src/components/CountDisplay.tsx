import React, {useState} from "react";

const CountDisplay: React.FC = () => {
    const [likeCount, setLikeCount] = useState(0);

    const handleLikeClick = () => {
        setLikeCount(likeCount => likeCount + 1)
    };

    return (
        <div>
            <p>いいねの数: {likeCount}</p>
            <button onClick={handleLikeClick}>いいね！</button>
        </div>
    );
};

export default CountDisplay;
