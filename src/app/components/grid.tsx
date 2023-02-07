import { useState } from "react";
import { Block } from ".";

interface GridProps {
    updateCurrentWord: (letter: string) => void;
}

enum MouseState {
    up = "up",
    down = "down"
}

export const Grid = (props: GridProps) => {
    const [mouseState, setMouseState] = useState(MouseState.up);
    const { updateCurrentWord } = props;

    const generateGrid = () => {
        const grid = [...Array(5).keys()].map(_ => {
            return [...Array(5).keys()];
        });
        return (grid.map((row, rowIdx) => {
            return row.map((_, colIdx) => {
                return <Block
                    key={(rowIdx + colIdx).toString()}
                    rowIdx={rowIdx}
                    colIdx={colIdx}
                    updateCurrentWord={updateCurrentWord}
                    mouseState={mouseState} />;
            });
        }));
    };

    return (
        <div
            onMouseDown={() => setMouseState(MouseState.down)}
            onMouseUp={() => setMouseState(MouseState.up)}
            style={{
                display: "grid",
                gap: "4px 4px",
                gridTemplateColumns: "repeat(5, 5em)",
                gridTemplateRows: "repeat(5, 5em)",
                justifyContent: "center"
            }}>
            {generateGrid()}
        </div>
    );
};