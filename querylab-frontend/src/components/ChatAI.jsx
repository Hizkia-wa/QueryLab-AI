// Di dalam fungsi handleSend di React
const handleSend = async () => {
  const userText = input;
  setInput("");
  setMessages(prev => [...prev, { role: "user", text: userText }]);
  setLoading(true);

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: userText }),
    });

    const data = await response.json();
    setMessages(prev => [...prev, { role: "bot", text: data.reply }]);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    setLoading(false);
  }
};