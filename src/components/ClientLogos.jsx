const clients = [
  "TATA Power",
  "IOCL",
  "AIIMS",
  "IDCO",
  "Kalinga Stadium",
];

export default function ClientLogos() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {clients.map((client) => (
        <div
          key={client}
          className="bg-gray-100 p-6 text-center font-semibold rounded"
        >
          {client}
        </div>
      ))}
    </div>
  );
}
