import { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useAuth } from "@/lib/auth";

interface Employee {
  name: string;
  title: string;
  photo?: string;
}

export default function Admin() {
  const { isAdmin } = useAuth();
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("employees");
    if (stored) setEmployees(JSON.parse(stored));
  }, []);

  const addEmployee = () => {
    const updated = [...employees, { name, title, photo }];
    setEmployees(updated);
    localStorage.setItem("employees", JSON.stringify(updated));
    setName("");
    setTitle("");
    setPhoto("");
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-lg">Access denied</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <section className="py-16">
        <div className="max-w-md mx-auto px-4 space-y-4">
          <h1 className="text-2xl font-bold text-neutral">Add Employee</h1>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full border rounded px-3 py-2"
          />
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="w-full border rounded px-3 py-2"
          />
          <input
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            placeholder="Photo URL"
            className="w-full border rounded px-3 py-2"
          />
          <button onClick={addEmployee} className="bg-secondary text-white px-4 py-2 rounded">
            Add Employee
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
