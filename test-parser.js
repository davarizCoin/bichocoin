const fetch = require('node-fetch');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

async function test() {
    const url = 'https://api.allorigins.win/get?url=https%3A%2F%2Fdclottery.com%2Fwinning-numbers%2Fpast-draw-numbers%3Fgame%3D11';
    const r = await fetch(url);
    const json = await r.json();
    const html = json.contents;

    const dom = new JSDOM(html);
    const doc = dom.window.document;

    const rows = doc.querySelectorAll("table.large-only tbody tr");
    console.log("Found rows:", rows.length);

    rows.forEach((row, i) => {
        if (i < 3) {
            const timeTd = row.querySelector("time.datetime");
            const drawTd = row.querySelector(".views-field-nothing");
            const balls = row.querySelectorAll(".ball");

            console.log(`Row ${i}:`);
            console.log(`  timeTd: ${timeTd ? timeTd.textContent.trim() : 'null'}`);
            console.log(`  drawTd: ${drawTd ? drawTd.textContent.trim() : 'null'}`);
            console.log(`  balls: ${balls.length}`);

            if (balls.length > 0) {
                let milhar = Array.from(balls).map(b => b.textContent.trim()).join("");
                console.log(`  milhar: ${milhar}`);
            }
        }
    });
}

test();
