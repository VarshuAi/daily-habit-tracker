
            const list = document.getElementById('habits-list');
            window.addHabit = function() {
                const name = prompt("Enter habit name:");
                if(!name) return;
                const row = document.createElement('div');
                row.className = 'habit-row';
                row.innerHTML = `<span>${name}</span><button class="btn" onclick="this.innerText='✓ Done'">Check</button>`;
                list.appendChild(row);
            }
        