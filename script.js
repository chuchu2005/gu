const num1 = Math.floor(Math.random() * 6);
const num2 = Math.floor(Math.random() * 6);
const num3 = Math.floor(Math.random() * 6);
const numbers = [num1, num2, num3];
console.log('Generated numbers:', numbers);

let trialsLeft = 3;
let balance = 10.00;

document.getElementById('guessForm').addEventListener('submit', function(event) {
    event.preventDefault();

    if (trialsLeft <= 0) {
        document.getElementById('result').innerText = "No trials left. You've lost the game.";
        return;
    }

    const guess1 = parseInt(document.getElementById('guess1').value);
    const guess2 = parseInt(document.getElementById('guess2').value);
    const guess3 = parseInt(document.getElementById('guess3').value);
    const guesses = [guess1, guess2, guess3];
    
    let correctCount = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === guesses[i]) {
            document.getElementById(`hidden${i + 1}`).innerText = guesses[i];
            document.getElementById(`hidden${i + 1}`).classList.remove('hidden');
            document.getElementById(`hidden${i + 1}`).classList.add('revealed');
            correctCount++;
        }
    }

    if (correctCount < 3) {
        trialsLeft--;
        balance -= 4.00;
    }

    document.getElementById('chances').innerText = trialsLeft;
    document.getElementById('balance').innerText = balance.toFixed(2);

    if (correctCount === 0) {
        document.getElementById('result').innerText = "All three numbers are wrong!";
    } else if (correctCount < 3) {
        document.getElementById('result').innerText = `${correctCount} out of 3 numbers are correct.`;
    } else {
        document.getElementById('result').innerText = "All numbers are"
        document.getElementById('result').innerText = "All numbers are correct. You've won!";
        document.getElementById('guessForm').querySelector('button').disabled = true;
    }

    if (trialsLeft <= 0 && correctCount < 3) {
        document.getElementById('result').innerText += " No trials left. You've lost the game.";
        document.getElementById('guessForm').querySelector('button').disabled = true;
    }
});
