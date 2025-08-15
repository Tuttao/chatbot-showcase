export async function askBot(botName: string, question: string) {
  const res = await fetch('http://localhost:5000/api/ask', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ botName, question })
  });

  const data = await res.json();
  return data.answer;
}
