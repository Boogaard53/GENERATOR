function generatePost() {
    const canvas = document.getElementById("outputCanvas");
    const ctx = canvas.getContext("2d");
    const bg = new Image();
    bg.src = "winst.png"; // Zorg dat deze afbeelding in dezelfde map staat

    bg.onload = function() {
        // Wis de canvas voordat we iets opnieuw tekenen
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

        // Tekstinstellingen
        ctx.fillStyle = "white";
        ctx.font = "bold 100px Arial";
        ctx.textAlign = "center";

        // Haal inputwaarden op
        const day = document.getElementById("day").value;
        const profit = document.getElementById("profit").value;
        const startBalance = document.getElementById("startBalance").value;
        const endBalance = document.getElementById("endBalance").value;

        // Debug: Controleer de waarden van de start- en eindbalans
        console.log(`Start Saldo: €${startBalance}`);
        console.log(`Eind Saldo: €${endBalance}`);

        // Tekst toevoegen
        ctx.fillText(`DAG ${day}`, canvas.width / 2, 150);
        ctx.font = "bold 150px Arial";
        ctx.fillText(`€${profit}`, canvas.width / 2, canvas.height / 2 + 100);

        // Startsaldokleur aanpassen naar #dbc188
        ctx.fillStyle = "#dbc188";
        ctx.font = "bold 80px Arial";
        ctx.textAlign = "left";  // Zorg ervoor dat de startsaldo aan de linkerkant begint
        console.log(`Tekstkleur voor startSaldo: ${ctx.fillStyle}`); // Debug: Laat zien welke kleur wordt gebruikt voor startSaldo
        ctx.fillText(`€${startBalance}`, canvas.width * 0.25, canvas.height - 100); // De startbalans aan de linkerkant

        // Eindbalans kleur aanpassen naar #a3791d
        ctx.fillStyle = "#a3791d";
        console.log(`Tekstkleur voor endSaldo: ${ctx.fillStyle}`); // Debug: Laat zien welke kleur wordt gebruikt voor endSaldo
        ctx.textAlign = "right"; // Zorg ervoor dat de eindbalans aan de rechterkant begint
        ctx.fillText(`€${endBalance}`, canvas.width * 0.75, canvas.height - 100); // De eindbalans aan de rechterkant
    };
}
