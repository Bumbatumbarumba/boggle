import { useState } from "react";
import { Colour } from "../definitions";

interface BlockProps {
    rowIdx: number;
    colIdx: number;
    updateCurrentWord: (letter: string) => void;
    mouseState: string;
}

export const Block = (props: BlockProps) => {
    const { colIdx, rowIdx, updateCurrentWord, mouseState } = props;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const pickLetter = (): string => {
        return letters.at(Math.floor(Math.random() * 25)) || 'a';
    };
    const [backgroundColour, setBackgroundColour] = useState(Colour.defaultBackgroundColour);
    const [letter, _] = useState(pickLetter());
    const [isSelected, setIsSelected] = useState(false);

    const setBlockStates = (state: string) => {
        if (state === "enter" || state === "down") {
            if (mouseState === "down") {
                // mouseState is whether the mouse is down as it is being dragged into the block
                // state === down is whether it is clicked
                setIsSelected(true);
                updateCurrentWord(!isSelected ? letter : "");
            }
            setBackgroundColour(Colour.altBackgroundColour);
        }
        else if (mouseState === "up") {
            // on up, reset the whole thang
            setIsSelected(false);
            updateCurrentWord("");
            setBackgroundColour(Colour.defaultBackgroundColour);
        }
        else {
            // leave
            // do we really need to do anything on leave? actually yes, unhighlight the letter
            setBackgroundColour(isSelected ? Colour.altBackgroundColour : Colour.defaultBackgroundColour);

            // probably want to also track mouse up on grid-level
        }


        // // enter
        // // () => { setBackgroundColour(Colour.altBackgroundColour); setIsSelected(mouseState === "down"); }
        // setBackgroundColour(Colour.altBackgroundColour); 
        // setIsSelected(mouseState === "down");

        // // leave
        // // () => setBackgroundColour(isSelected ? Colour.altBackgroundColour : Colour.defaultBackgroundColour)
        // setBackgroundColour(isSelected ? Colour.altBackgroundColour : Colour.defaultBackgroundColour);

        // // onmousedown
        // // () => { setIsSelected(!isSelected); updateCurrentWord(!isSelected ? letter : ""); }
        // setIsSelected(!isSelected); 
        // updateCurrentWord(!isSelected ? letter : "");
    };

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
                userSelect: "none"
            }}
            onMouseEnter={() => setBlockStates("enter")}
            onMouseLeave={() => setBlockStates("leave")}
            onMouseDown={() => setBlockStates("down")}
        >
            <h3 style={{
                alignSelf: "center"
            }}>{letter}</h3>
        </div>
    );
};