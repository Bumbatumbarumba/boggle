import { Block } from ".";

interface GridProps {
    updateCurrentWord: (letter: string) => void;
}

export const Grid = (props: GridProps) => {
    const { updateCurrentWord } = props;

    const generateGrid = () => {
        const grid = [...Array(5).keys()].map(_ => {
            return [...Array(5).keys()];
        });
        return (grid.map((row, rowIdx) => {
            return row.map((_, colIdx) => {
                return <Block key={(rowIdx + colIdx).toString()} rowIdx={rowIdx} colIdx={colIdx} updateCurrentWord={updateCurrentWord} />;
            });
        }));
    };

    return (
        <div style={{
            display: "grid",
            gap: "1em 1em",
            gridTemplateColumns: "repeat(5, 5em)",
            gridTemplateRows: "repeat(5, 5em)",
            justifyContent: "center"
        }}>
            {generateGrid()}
        </div>
    );
};