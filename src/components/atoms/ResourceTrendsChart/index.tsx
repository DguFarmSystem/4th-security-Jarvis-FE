import { Bar } from "react-chartjs-2";
import dayjs from "dayjs";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

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
        borderRadius: 6,       // 막대 꼭짓점 둥글게
        borderSkipped: false,  // 위쪽 생략 없이 둥글게
      },
    },
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "20px 20px 0 0",
        background: "#BBFFE4",
        boxShadow: "0 0 10px 2px rgba(0, 0, 0, 0.15) inset",
        padding: "16px",
        marginBottom: "20px",
      }}
    >
      <h3 style={{ fontWeight: "bold", marginBottom: "16px" }}>System Status Overview</h3>
      <Bar data={data} options={options} />
    </div>
  );
};