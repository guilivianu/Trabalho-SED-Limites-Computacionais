// Tab Navigation Logic
function setupTabNavigation() {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");

      tabBtns.forEach((b) => b.classList.remove("active"));
      tabContents.forEach((c) => c.classList.add("hidden"));

      btn.classList.add("active");
      document.getElementById(targetId).classList.remove("hidden");

      if (targetId === "aplicacao") initCharts();
      if (targetId === "verificacao") initRadarChart();
    });
  });
}

// Binary Background Effect
function setupBinaryBackground() {
  const binBg = document.getElementById("binary-bg");
  let binStr = "";
  for (let i = 0; i < 1000; i++) binStr += Math.round(Math.random()) + " ";
  binBg.innerHTML = `<div style="font-family: monospace; font-size: 1.5rem; line-height: 1.2; word-wrap: break-word;">${binStr}</div>`;
}

// Turing Machine DOM Simulation
function setupTuringMachine() {
  const tapeCells = document.querySelectorAll(".tape-cell");
  const turingBtn = document.getElementById("btn-turing");
  const turingStatus = document.getElementById("turing-status");
  let turingInterval;
  let turingIndex = 2;
  let turingRunning = false;

  turingBtn.addEventListener("click", () => {
    if (turingRunning) return;
    turingRunning = true;
    turingBtn.disabled = true;
    turingBtn.classList.add("opacity-50", "cursor-not-allowed");

    let steps = 0;
    turingInterval = setInterval(() => {
      tapeCells.forEach((c) =>
        c.classList.remove("active-cell", "border-red-600", "bg-red-50"),
      );

      turingIndex += Math.random() > 0.5 ? 1 : -1;
      if (turingIndex < 0) turingIndex = tapeCells.length - 1;
      if (turingIndex >= tapeCells.length) turingIndex = 0;

      tapeCells[turingIndex].classList.add("active-cell");
      tapeCells[turingIndex].innerText = Math.round(Math.random());

      steps++;
      turingStatus.innerText = `Processando estado ${steps}... Avaliando parada.`;

      if (steps > 25) {
        clearInterval(turingInterval);
        tapeCells[turingIndex].classList.add("border-red-600", "bg-red-50");
        turingStatus.innerHTML = `<span class="text-red-600 font-bold">Loop Infinito Detectado (Indecidível).</span> O algoritmo não pôde determinar a parada.`;
        turingBtn.disabled = false;
        turingBtn.classList.remove("opacity-50", "cursor-not-allowed");
        turingBtn.innerText = "Reiniciar Simulação";
        turingRunning = false;
        steps = 0;
        turingIndex = 2;
      }
    }, 300);
  });
}

// State Management for Charts to prevent re-instantiation
const chartState = {
  complexityChart: null,
  radarChart: null,
};

// Chart.js Implementations
function initCharts() {
  if (chartState.complexityChart) return;
  const ctx = document.getElementById("complexityChart").getContext("2d");

  chartState.complexityChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "Sistemas a Relés",
        "CLPs Clássicos",
        "Controle Descentralizado",
        "IAs e Redes Neurais Profundas",
      ],
      datasets: [
        {
          label: "Complexidade do Ambiente",
          data: [10, 30, 70, 95],
          borderColor: "#1e293b",
          backgroundColor: "rgba(30, 41, 59, 0.1)",
          borderWidth: 3,
          fill: true,
          tension: 0.4,
        },
        {
          label: "Previsibilidade Garantida (Prova Matemática)",
          data: [99, 90, 50, 15],
          borderColor: "#0f766e",
          backgroundColor: "transparent",
          borderWidth: 3,
          borderDash: [5, 5],
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: "index",
        intersect: false,
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || "";
              if (label) {
                label += ": ";
              }
              if (context.parsed.y !== null) {
                label += context.parsed.y + "%";
              }
              return label;
            },
          },
        },
        legend: {
          position: "top",
          labels: { usePointStyle: true, boxWidth: 8 },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          title: { display: true, text: "Nível (%)" },
        },
      },
    },
  });
}

function initRadarChart() {
  if (chartState.radarChart) return;
  const ctx = document.getElementById("radarChart").getContext("2d");

  chartState.radarChart = new Chart(ctx, {
    type: "radar",
    data: {
      labels: [
        "Determinismo Lógico",
        "Entradas Conhecidas",
        "Latência Controlada",
        "Fricção / Física Ideal",
        "Conhecimento Global",
      ],
      datasets: [
        {
          label: "Modelo Formal Verificado",
          data: [100, 95, 90, 100, 90],
          backgroundColor: "rgba(15, 118, 110, 0.2)",
          borderColor: "#0f766e",
          pointBackgroundColor: "#0f766e",
          borderWidth: 2,
        },
        {
          label: "Realidade Física (Marte)",
          data: [40, 30, 10, 50, 20],
          backgroundColor: "rgba(185, 28, 28, 0.2)",
          borderColor: "#b91c1c",
          pointBackgroundColor: "#b91c1c",
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          angleLines: { display: true, color: "rgba(0,0,0,0.1)" },
          suggestedMin: 0,
          suggestedMax: 100,
          ticks: { display: false },
        },
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context) {
              return (
                context.dataset.label + ": " + context.parsed.r + " pts"
              );
            },
          },
        },
      },
    },
  });
}

// AGV HTML5 Canvas Simulation Logic
function setupAGVSimulation() {
  const canvas = document.getElementById("agv-canvas");
  const ctx = canvas.getContext("2d");
  const simBtn = document.getElementById("btn-simulate");
  const alertBox = document.getElementById("livelock-alert");
  const watchdogPanel = document.getElementById("watchdog-panel");
  const watchdogBar = document.getElementById("watchdog-bar");
  const watchdogStatus = document.getElementById("watchdog-status");

  let simState = {
    running: false,
    livelock: false,
    watchdogTimer: 0,
    agvA: { x: 50, y: 180, width: 40, height: 40, color: "#1e293b" },
    agvB: { x: 700, y: 180, width: 40, height: 40, color: "#334155" },
    human: { x: 400, y: 150, radius: 15, color: "#eab308" },
    humanDir: 1,
  };
  let animFrameId;

  function drawGrid() {
    ctx.strokeStyle = "#e2e8f0";
    ctx.lineWidth = 1;
    for (let i = 0; i < canvas.width; i += 40) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, canvas.height);
      ctx.stroke();
    }
    for (let j = 0; j < canvas.height; j += 40) {
      ctx.beginPath();
      ctx.moveTo(0, j);
      ctx.lineTo(canvas.width, j);
      ctx.stroke();
    }
    // Draw corridor boundaries
    ctx.fillStyle = "#cbd5e1";
    ctx.fillRect(0, 0, canvas.width, 140);
    ctx.fillRect(0, 260, canvas.width, 140);
  }

  function drawEntity(entity, type) {
    ctx.fillStyle = entity.color;
    if (type === "rect") {
      ctx.fillRect(entity.x, entity.y, entity.width, entity.height);
      // Draw sensor cone
      if (!simState.livelock && simState.running) {
        ctx.fillStyle = "rgba(15, 118, 110, 0.2)";
        ctx.beginPath();
        if (entity.x < 400) {
          // AGV A facing right
          ctx.moveTo(entity.x + entity.width, entity.y + entity.height / 2);
          ctx.lineTo(entity.x + entity.width + 150, entity.y - 50);
          ctx.lineTo(entity.x + entity.width + 150, entity.y + 90);
        } else {
          // AGV B facing left
          ctx.moveTo(entity.x, entity.y + entity.height / 2);
          ctx.lineTo(entity.x - 150, entity.y - 50);
          ctx.lineTo(entity.x - 150, entity.y + 90);
        }
        ctx.fill();
      }
    } else if (type === "circle") {
      ctx.beginPath();
      ctx.arc(entity.x, entity.y, entity.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function drawScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid();
    drawEntity(simState.human, "circle");
    drawEntity(simState.agvA, "rect");
    drawEntity(simState.agvB, "rect");

    if (simState.livelock && simState.watchdogTimer < 100) {
      ctx.fillStyle = "#b91c1c";
      ctx.font = "bold 16px Inter, sans-serif";
      ctx.fillText(
        "! RECALCULANDO ROTAS !",
        simState.agvA.x - 20,
        simState.agvA.y - 10,
      );
      ctx.fillText(
        "! RECALCULANDO ROTAS !",
        simState.agvB.x - 20,
        simState.agvB.y - 10,
      );
    }
  }

  function resetSim() {
    simState = {
      running: false,
      livelock: false,
      watchdogTimer: 0,
      agvA: { x: 50, y: 180, width: 40, height: 40, color: "#1e293b" },
      agvB: { x: 700, y: 180, width: 40, height: 40, color: "#334155" },
      human: { x: 400, y: 150, radius: 15, color: "#eab308" },
      humanDir: 1,
    };
    alertBox.classList.add("hidden");
    watchdogPanel.classList.add("hidden");
    watchdogBar.style.width = "0%";
    simBtn.innerText = "Executar Cenário Crítico";
    simBtn.disabled = false;
    simBtn.classList.remove("opacity-50", "cursor-not-allowed");
    drawScene();
  }

  function simLoop() {
    if (!simState.running) return;

    // Simple movement logic
    if (!simState.livelock) {
      simState.agvA.x += 2;
      simState.agvB.x -= 2;
      simState.human.y += 1.5 * simState.humanDir;
      if (simState.human.y > 230 || simState.human.y < 150)
        simState.humanDir *= -1;

      // Collision/Livelock trigger detection (distance)
      if (
        Math.abs(simState.agvA.x + simState.agvA.width - simState.agvB.x) <
        200
      ) {
        simState.livelock = true;
        watchdogPanel.classList.remove("hidden");
      }
    } else {
      // In Livelock: Entities jiggle slightly representing recalculations without progressing
      simState.agvA.y += (Math.random() - 0.5) * 2;
      simState.agvB.y += (Math.random() - 0.5) * 2;
      simState.human.y += (Math.random() - 0.5) * 4;

      simState.watchdogTimer += 1.5;
      watchdogBar.style.width = `${simState.watchdogTimer}%`;

      if (simState.watchdogTimer >= 100) {
        // Watchdog triggers Fail-safe
        simState.running = false;
        watchdogStatus.innerText =
          "SINAL CORTE: FAIL-SAFE MECÂNICO ACIONADO";
        watchdogStatus.classList.replace("text-slate-700", "text-red-700");
        alertBox.classList.remove("hidden");
        setTimeout(() => {
          simBtn.innerText = "Reiniciar Sistema";
          simBtn.disabled = false;
          simBtn.classList.remove("opacity-50", "cursor-not-allowed");
        }, 1000);
      }
    }

    drawScene();
    if (simState.running) animFrameId = requestAnimationFrame(simLoop);
  }

  simBtn.addEventListener("click", () => {
    if (simBtn.innerText === "Reiniciar Sistema") {
      resetSim();
    } else {
      simState.running = true;
      simBtn.disabled = true;
      simBtn.classList.add("opacity-50", "cursor-not-allowed");
      simLoop();
    }
  });

  // Initial draw
  drawScene();
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  setupTabNavigation();
  setupBinaryBackground();
  setupTuringMachine();
  setupAGVSimulation();
});
