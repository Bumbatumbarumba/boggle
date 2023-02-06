import { useState } from "react";
import { Colour } from "../definitions";

interface BlockProps {
    rowIdx: number;
    colIdx: number;
    updateCurrentWord: (letter: string) => void;
}

export const Block = (props: BlockProps) => {
    const { colIdx, rowIdx, updateCurrentWord } = props;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const pickLetter = (): string => {
        return letters.at(Math.floor(Math.random() * 25)) || 'a';
    };
    const [backgroundColour, setBackgroundColour] = useState(Colour.defaultBackgroundColour);
    const [letter, _] = useState(pickLetter());
    const [isSelected, setIsSelected] = useState(false);

    return (
        <div
            className={"subText block" + (isSelected ? " selected-letter " : "")}
            id="draggable"
            style={{
                borderStyle: "solid",
                borderWidth: "4px",
                borderRadius: "1em",
                borderColor: Colour.borderColour,
                width: "5em",
                height: "5em",
                verticalAlign: "center",
                backgroundColor: backgroundColour,
                color: Colour.fontColour,
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
            }}
            onMouseEnter={() => setBackgroundColour(Colour.altBackgroundColour)}
            onMouseLeave={() => setBackgroundColour(isSelected ? Colour.altBackgroundColour : Colour.defaultBackgroundColour)}
            onClick={() => { setIsSelected(!isSelected); updateCurrentWord(!isSelected ? letter : ""); }}>
            <h3 style={{
                alignSelf: "center"
            }}>{letter}</h3>
        </div>
    );
};