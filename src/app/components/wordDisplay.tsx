import { Colour } from "../definitions";

interface WordDisplayProps {
    currentWord: string;
}

export const WordDisplay = (props: WordDisplayProps) => {
    const { currentWord } = props;
    return (
        <div className="subText" style={{
            fontWeight: "bold",
            border: "solid",
            borderStyle: "solid",
            borderWidth: "4px",
            borderRadius: "1em",
            borderColor: Colour.borderColour,
            width: "75%",
            height: "3em",
            backgroundColor: Colour.altBackgroundColour,
            color: Colour.fontColour,
            display: "flex",
            justifyContent: "center",
            margin: "1em",
        }}>
            <h2 style={{ alignSelf: "center" }}>{currentWord}</h2>
        </div>
    );
};