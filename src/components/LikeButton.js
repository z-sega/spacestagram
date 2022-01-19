import React, { useState } from "react";

export default function LikeButton() {

    const [like, setLike] = useState(false);

    return (
        <div className='likebutton' onClick={() => setLike((!like))}>
            {like ? '😍':'🙂' }
        </div>
    );
}