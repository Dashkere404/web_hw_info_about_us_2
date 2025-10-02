document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('track-btn');
  const display = document.getElementById('track-display');
  const player = document.getElementById('player');

  const tracks = [
    { title: "Nasledstvo", file: "audio/track1.mp3" },
    { title: "The Weeknd – Blinding Lights", file: "audio/track2.mp3" },
    { title: "Billie Eilish – Birds of a Feather", file: "audio/track3.mp3" },
    { title: "Tame Impala – The Less I Know The Better", file: "audio/track4.mp3" },
    { title: "Arctic Monkeys – Do I Wanna Know?", file: "audio/track5.mp3" },
    { title: "Lorde – Royals", file: "audio/track6.mp3" },
    { title: "Imagine Dragons – Believer", file: "audio/track7.mp3" },
    { title: "Florence + The Machine – Dog Days Are Over", file: "audio/track8.mp3" },
    { title: "Måneskin – Beggin’", file: "audio/track9.mp3" },
    { title: "Stromae – Alors on danse", file: "audio/track10.mp3" }
  ];

  btn.addEventListener('click', function () {
    player.pause();
    player.src = '';
    const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];

    display.textContent = `Сегодня играет: ${randomTrack.title}`;

    player.src = randomTrack.file;
    player.play().catch(e => {
      console.warn("Автовоспроизведение заблокировано:", e);
      display.textContent += " (нажми на страницу, чтобы разблокировать звук)";
    });

    display.style.opacity = '0';
    setTimeout(() => {
      display.style.transition = 'opacity 0.5s';
      display.style.opacity = '1';
    }, 10);
  });
});
