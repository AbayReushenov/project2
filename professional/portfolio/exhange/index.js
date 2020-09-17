const panel = document.querySelector('body');

panel.insertAdjacentHTML('afterbegin', `
    <div class='wrapper'>
        <h1>Curency exchange</h1>
        <input type="number" id="rubNumber" value="1000">
        <p>Нажмите на кнопку чтобы получиь результат</p>
        <button onclick="exchangeFunction()">Результат</button>
        <dl>
            <dt> В рублях:</dt>
                <dd id="demoRub"></dd>
            <dt> В долларах США:</dt>
                <dd id="demoUsd"></dd>
            <dt> В евро:</dt>
            <dd id="demoEur"></dd>
        </dl>
    </div>
    `);


function exchangeFunction() {
    let usd = 78,
    eur = 88,
    rubSum = document.getElementById("rubNumber").value,
    sumUsd = rubSum / usd,
    sumEur = rubSum / eur;
    document.getElementById('demoRub').innerHTML = Number(rubSum).toLocaleString(undefined, {maximumFractionDigits:2});
    document.getElementById('demoUsd').innerHTML = sumUsd.toLocaleString(undefined, {maximumFractionDigits:2});
    document.getElementById('demoEur').innerHTML = sumEur.toLocaleString(undefined, {maximumFractionDigits:2});
}
