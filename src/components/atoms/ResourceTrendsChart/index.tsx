import { Bar } from "react-chartjs-2";
import dayjs from "dayjs";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import type { Plugin } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// 그림자 플러그인 정의
const barShadowPlugin: Plugin<'bar'> = {
  id: "barShadow",
  beforeDatasetsDraw(chart, _args, _opts) {
    const { ctx } = chart;
    chart.data.datasets.forEach((_ds, i) => {
      const meta = chart.getDatasetMeta(i);
      meta.data.forEach((rect: any) => {
        ctx.save();

        // 바깥쪽 그림자
        ctx.shadowColor = "rgba(0, 0, 0, 0.15)";
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 2;

        rect.draw(ctx); // 원래 막대 그리기

        ctx.restore();

        // 내부 음영
        const { x, y, base, width } = rect.getProps(["x", "y", "base", "width"], true);
        const top = Math.min(y, base);
        const left = x - width / 2;

        const grad = ctx.createLinearGradient(0, top, 0, base);
        grad.addColorStop(0, "rgba(0,0,0,0.10)");
        grad.addColorStop(0.25, "rgba(0,0,0,0.04)");
        grad.addColorStop(1, "rgba(0,0,0,0)");

        ctx.save();
        ctx.fillStyle = grad;
        ctx.beginPath();

        const r = Math.min(20, width / 2);
        const w = width;
        const h = Math.abs(base - top);

        ctx.moveTo(left + r, top);
        ctx.arcTo(left + w, top, left + w, top + r, r);
        ctx.arcTo(left + w, top + h, left + w - r, top + h, r);
        ctx.arcTo(left, top + h, left, top + h - r, r);
        ctx.arcTo(left, top, left + r, top, r);
        ctx.closePath();

        ctx.fill();
        ctx.restore();
      });
    });
  },
};

// 플러그인 등록
ChartJS.register(barShadowPlugin);

interface Props {
  nodeSessions: any[];
  dbSessions: any[];
  appSessions: any[];
}

export const ResourceTrendsChart = ({ nodeSessions, dbSessions, appSessions }: Props) => {
  const all = [
    ...nodeSessions.map((s) => ({ ...s, type: "서버" })),
    ...dbSessions.map((s) => ({ ...s, type: "데이터베이스" })),
    ...appSessions.map((s) => ({ ...s, type: "애플리케이션" })),
  ];

  const grouped: Record<string, Record<string, number>> = {};

  all.forEach((s) => {
    const hour = dayjs(s.session_start).format("YYYY-MM-DD HH:00");
    if (!grouped[hour]) grouped[hour] = { 서버: 0, 데이터베이스: 0, 애플리케이션: 0 };
    grouped[hour][s.type]++;
  });

  const labels = Object.keys(grouped).sort();
  const servers = labels.map((t) => grouped[t]?.서버 ?? 0);
  const dbs = labels.map((t) => grouped[t]?.데이터베이스 ?? 0);
  const apps = labels.map((t) => grouped[t]?.애플리케이션 ?? 0);

  const data = {
    labels,
    datasets: [
      { label: "서버", backgroundColor: "#C5F4D2", data: servers },
      { label: "데이터베이스", backgroundColor: "#C8F3FF", data: dbs },
      { label: "애플리케이션", backgroundColor: "#85BCFF", data: apps },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: false },
    },
    elements: {
      bar: {
        borderRadius: 20,       
        borderSkipped: "bottom" as const, 
      },
    },
  };

  return (
    <div
  style={{
    border: "1px solid #ddd",
    borderRadius: "15px",
    padding: "16px",
    marginBottom: "20px",
  }}
>
      <h3 style={{ fontWeight: "bold", marginBottom: "16px" }}>System Status Overview</h3>
      <Bar data={data} options={options} />
    </div>
  );
};