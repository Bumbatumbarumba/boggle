import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Colour } from "../definitions";
import { addLetters, removeLetters } from "../features/slices/game.slice";
import { RootState } from "../store";

interface BlockProps {
    rowIdx: number;
    colIdx: number;
}

export const Block = (props: BlockProps) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const { colIdx, rowIdx } = props;

    const isMouseDown = useSelector((state: RootState) => state.game.isMouseDown);
    const dispatch = useDispatch();

    const [backgroundColour, setBackgroundColour] = useState(Colour.defaultBackgroundColour);
    const [letter, _] = useState(letters.at(Math.floor(Math.random() * 25)) || 'a');
    const [isSelected, setIsSelected] = useState(false);


    useEffect(() => {
        if (!isMouseDown) {
            setIsSelected(false);
            setBackgroundColour(Colour.defaultBackgroundColour);
        }
    }, [isMouseDown]);

    const processAction = (isHover: boolean) => {
        if (isHover) {
            setBackgroundColour(Colour.altBackgroundColour);
            if (isMouseDown) {
                setIsSelected(true);
                dispatch(addLetters(letter));
            }
        }
        else if (!isHover && !isMouseDown) {
            setBackgroundColour(Colour.defaultBackgroundColour);
        }
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
                userSelect: "none", //removes highlighting text
            }}
            onMouseEnter={() => processAction(true)}
            onMouseLeave={() => processAction(false)}
            onMouseDown={() => { setIsSelected(true); dispatch(addLetters(letter)); processAction(true); }}
        >
            <h3 style={{
                alignSelf: "center"
            }}>{letter}</h3>
        </div>
    );
};