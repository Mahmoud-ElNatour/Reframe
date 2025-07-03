import { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

interface Employee {
  name: string;
  title: string;
  photo?: string;
}

export default function Team() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("employees");
    if (stored) setEmployees(JSON.parse(stored));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-neutral mb-8">Our Team</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {employees.map((emp, i) => (
              <div key={i} className="bg-white rounded-lg shadow p-4 text-center">
                {emp.photo && (
                  <img
                    src={emp.photo}
                    alt={emp.name}
                    className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                  />
                )}
                <h3 className="font-semibold text-lg">{emp.name}</h3>
                <p className="text-sm text-gray-600">{emp.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
