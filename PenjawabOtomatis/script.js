document.getElementById('questionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const question = document.getElementById('question').value;
    const answerContainer = document.getElementById('answerContainer');
    const answerElement = document.getElementById('answer');

    const answers = {
        "berapa pembayaran?": "pembayaran anda adalah 100000",
        "berapa sisa bulan pembayaran?": "1 bulan",
        "bagaimana jika terjadi kebocoran?": "jika terjadi kebocoran....",
        "Siapa yang menciptakan JavaScript?": "JavaScript diciptakan oleh Brendan Eich pada tahun 1995.",
        "bagaimana prosedur mengganti keran?": "prosedur mengganti keran adalah dengan mengganti bagian atas dari keran ...."
    };

    const defaultAnswer = "Maaf, saya tidak tahu jawaban untuk pertanyaan itu.";

    answerElement.textContent = answers[question] || defaultAnswer;
    answerContainer.style.display = 'block';
});
