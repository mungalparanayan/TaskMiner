async function takeTime() {
    await new Promise((resolve) => {
        setTimeout(resolve, 3000)
    });
}

export default async function About() {
    await takeTime();
    // throw new Error("Error has occured");
    return (
        <div>This is about class</div>
    )
}