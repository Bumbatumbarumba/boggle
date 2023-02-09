import { useDispatch } from "react-redux";
import { Block } from ".";
import { clearWord, mouseDown, mouseUp } from "../features/slices/game.slice";

// interface GridProps {
// }

export const Grid = () => {
    const dispatch = useDispatch();

    const generateGrid = () => {
        const grid = [...Array(5).keys()].map(_ => {
            return [...Array(5).keys()];
        });
        return (grid.map((row, rowIdx) => {
            return row.map((_, colIdx) => {
                return <Block key={(rowIdx + colIdx).toString()} rowIdx={rowIdx} colIdx={colIdx} />;
            });
        }));
    };

    return (
        <div
            onMouseDown={() => dispatch(mouseDown())}
            onMouseUp={() => { dispatch(mouseUp()); dispatch(clearWord()); }}
            style={{
                display: "grid",
                gap: "4px 4px",
                gridTemplateColumns: "repeat(5, 5.5em)",
                gridTemplateRows: "repeat(5, 5.5em)",
                justifyContent: "center"
            }}>
            {generateGrid()}
        </div>
    );
};