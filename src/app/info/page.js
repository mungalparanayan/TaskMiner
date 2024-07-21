"use client"
export default function Info() {
    console.log("This is client");
    return (
        <div>
            <div>This is info component</div>
            <p>write down anything you want</p>
            <button className="px-3 py-2 rounded bg-blue-600">click me</button>
        </div>
    );
}