export default function ContactForm() {
  return (
    <form className="space-y-4">
      <input className="w-full p-3 border rounded" placeholder="Name" required />
      <input className="w-full p-3 border rounded" placeholder="Email" required />
      <input className="w-full p-3 border rounded" placeholder="Phone" required />
      <textarea
        className="w-full p-3 border rounded"
        placeholder="Message"
        rows="4"
        required
      />
      <button className="bg-primary text-white px-6 py-3 rounded">
        Submit
      </button>
    </form>
  );
}
