function deleteLines(numberOfLines = 1) {
    process.stdout.moveCursor(0, -numberOfLines);
    process.stdout.clearLine(numberOfLines);
}

export default deleteLines;