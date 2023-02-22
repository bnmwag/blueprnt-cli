function deleteLines(numberOfLines = 1) {
    for (let i = 0; i < numberOfLines; i++) {
        process.stdout.moveCursor(0, -1);
        process.stdout.clearLine(1);
    }
}

export default deleteLines;